
/* eslint-disable @typescript-eslint/no-require-imports */
// import * as qs from '@aws-cdk/aws-quicksight';
import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import * as custom from '@aws-cdk/custom-resources';
// import { CreateDataSetRequest } from 'aws-sdk/clients/quicksight';
// import QuickSight = require('aws-sdk/clients/quicksight');
import { QSCommonProps } from './datasource';
import { CreateDataSetRequest, LogicalTableMap, PhysicalTableMap } from './sdk/quicksight';
export interface DataSetProps extends QSCommonProps {
  readonly physicalTableMap: PhysicalTableMap;
  readonly logicalTableMap: LogicalTableMap;
}

export function castUppercase(o: any) {
  let newO: any;
  var origKey, newKey, value;
  if (o instanceof Array) {
    return o.map(function (valueE: any) {
      if (typeof valueE === 'object') {
        valueE = castUppercase(valueE);
      }
      return valueE;
    });
  } else {
    newO = {};
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (origKey.charAt(0).toUpperCase() + origKey.slice(1) || origKey).toString();
        value = o[origKey];
        if (value instanceof Array || (value !== null && value.constructor === Object)) {
          value = castUppercase(value);
        }
        newO[newKey] = value;
      }
    }
  }
  return newO;
}
export class DataSetConstruct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: DataSetProps) {
    super(scope, id);
    if (props.users.length < 1) {
      throw Error('No users defined!');
    }

    if (props.users.find(u => u === '')) {
      throw Error('Empty user not allowed!');
    }

    var parameters: CreateDataSetRequest = {
      awsAccountId: cdk.Stack.of(this).account,
      importMode: 'SPICE',
      dataSetId: props.name,
      name: props.name,
      permissions: props.users.map(user => ({
        actions: [
          'quicksight:UpdateDataSetPermissions',
          'quicksight:DescribeDataSet',
          'quicksight:DescribeDataSetPermissions',
          'quicksight:PassDataSet',
          'quicksight:DescribeIngestion',
          'quicksight:ListIngestions',
          'quicksight:UpdateDataSet',
          'quicksight:DeleteDataSet',
          'quicksight:CreateIngestion',
          'quicksight:CancelIngestion',
        ],
        principal: `arn:aws:quicksight:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:user/default/${user}`,
      })),
      physicalTableMap: props.physicalTableMap,
      // logicalTableMap: props.logicalTableMap,
    };

    parameters = castUppercase(parameters);

    new custom.AwsCustomResource(this, 'createDataSet', {
      onCreate: {
        service: 'QuickSight',
        action: 'createDataSet',
        parameters: parameters,
        physicalResourceId: custom.PhysicalResourceId.of(Date.now().toString()),
      },
      onDelete: {
        service: 'QuickSight',
        action: 'deleteDataSet',
        parameters: {
          AwsAccountId: cdk.Stack.of(this).account,
          DataSetId: props.name,
        },
        physicalResourceId: custom.PhysicalResourceId.of(Date.now().toString()),
      },
      role: new iam.Role(this, 'datasetRole', {
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
        ],
      }),
      policy: custom.AwsCustomResourcePolicy.fromSdkCalls({ resources: custom.AwsCustomResourcePolicy.ANY_RESOURCE }),
    });
  }
}