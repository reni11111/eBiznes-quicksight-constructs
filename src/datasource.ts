/* eslint-disable @typescript-eslint/no-require-imports */
// import * as qs from '@aws-cdk/aws-quicksight';
import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import * as custom from '@aws-cdk/custom-resources';
import { castUppercase } from './dataset';
// import { Number } from 'aws-sdk/clients/iot';
// import QuickSight = require('aws-sdk/clients/quicksight');
import { CreateDataSourceRequest, DataSourceParameters, DataSourceType } from './sdk/quicksight';

export interface DataSourceProps extends QSCommonProps {
  readonly dataSourceParameters: DataSourceParameters;
  readonly type: DataSourceType | string;
}

export interface QSCommonProps {
  // readonly account: string;
  readonly name: string;
  /**
   * QuickSight Users you want to give access to. In the end the permission arn are looking like arn:aws:quicksight:us-east-1:1234:user/default/martin.mueller@take2.co
   *
   * If you want to see available users, use aws cli described here https://github.com/Reliantid/cypresspoint-infrastructure/tree/cdk#list-datasets
   */
  readonly users: string[];
}
export class DataSourceConstruct extends cdk.Construct {
  dataSourceArn: string;
  constructor(scope: cdk.Construct, id: string, props: DataSourceProps) {
    super(scope, id);
    if (props.users.length < 1) {
      throw Error('No users defined!');
    }

    if (props.users.find(u => u === '')) {
      throw Error('Empty user not allowed!');
    }

    let parameters: CreateDataSourceRequest = {
      awsAccountId: cdk.Stack.of(this).account,
      type: props.type,
      dataSourceId: props.name,
      name: props.name,
      // dataSourceParameters: props.dataSourceParameters,
      permissions: props.users.map(user => ({
        actions: [
          'quicksight:DescribeDataSource',
          'quicksight:DescribeDataSourcePermissions',
          'quicksight:PassDataSource',
          'quicksight:UpdateDataSource',
          'quicksight:DeleteDataSource',
          'quicksight:UpdateDataSourcePermissions',
        ],
        principal: `arn:aws:quicksight:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:user/default/${user}`,
      })),
    };

    parameters = castUppercase(parameters);

    const createDataSource = new custom.AwsCustomResource(this, 'createDataSource', {
      onCreate: {
        service: 'QuickSight',
        action: 'createDataSource',
        parameters: parameters,
        physicalResourceId: custom.PhysicalResourceId.of(Date.now().toString()),
      },
      onDelete: {
        service: 'QuickSight',
        action: 'deleteDataSource',
        parameters: {
          AwsAccountId: cdk.Stack.of(this).account,
          DataSourceId: props.name,
        },
        physicalResourceId: custom.PhysicalResourceId.of(Date.now().toString()),
      },
      role: new iam.Role(this, 'datasourceRole', {
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
        ],
      }),
      policy: custom.AwsCustomResourcePolicy.fromSdkCalls({ resources: custom.AwsCustomResourcePolicy.ANY_RESOURCE }),
    });

    this.dataSourceArn = createDataSource.getResponseField('Arn');
  }
}