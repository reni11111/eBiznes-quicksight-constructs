import * as cdk from '@aws-cdk/core';
import { DataSourceConstruct, DataSetConstruct } from '../src/index';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const env = {
      account: '981237193288',
      region: 'eu-central-1',
    };

    const stack = new cdk.Stack(app, 'my-demo-stack', { env });

    const users = ['981237193288'];

    const datasource = new DataSourceConstruct(stack, 'DataSourceConstruct', {
      name: 'cdkdatasource2',
      type: 'ATHENA',
      dataSourceParameters: {
        athenaParameters: {
          workGroup: 'ddbworkgroup',
        },
      },
      users,
    });

    new DataSetConstruct(stack, 'DataSetConstruct', {
      name: 'cdkdataset3',
      users: users,
      physicalTableMap: {
        users: {
          customSql: {
            dataSourceArn: datasource.dataSourceArn,
            name: 'users',
            sqlQuery: 'SELECT primarypractice, dateofbirth FROM "ddbconnector"."martin1"."martin1" WHERE groupid = \'users\' AND firstname is not null',
            columns: [
              { name: 'primarypractice', type: 'STRING' },
              { name: 'dateofbirth', type: 'STRING' },
            ],
          },
        },
        practices: {
          customSql: {
            dataSourceArn: datasource.dataSourceArn,
            name: 'practices',
            sqlQuery: 'SELECT id, name FROM "ddbconnector"."martin1"."martin1" WHERE groupid = \'medical-practices\' AND name is not null',
            columns: [
              { name: 'id', type: 'STRING' },
              { name: 'name', type: 'STRING' },
            ],
          },
        },
      },
      logicalTableMap: {
        'users': {
          alias: 'users',
          source: {
            physicalTableId: 'users',
          },
        },
        'practices': {
          alias: 'practices',
          source: {
            physicalTableId: 'practices',
          },
        },
        'users-practices': {
          alias: 'users-practices',
          source: {
            joinInstruction: {
              leftOperand: 'users',
              rightOperand: 'practices',
              type: 'INNER',
              onClause: 'primarypractice = id',
            },
          },
          dataTransforms: [{
            createColumnsOperation: {
              columns: [{
                columnName: 'age',
                columnId: 'age',
                expression: 'dateDiff(parseDate(dateofbirth, "YYYY-MM-dd\'T\'HH:mm:ssZ"),now(), "YYYY")',
              }],
            },
          }],
        },
      },
    });

    this.stack = [stack];
  }
}

new IntegTesting();
