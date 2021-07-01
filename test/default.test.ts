import * as core from '@aws-cdk/core';
import { DataSetConstruct, DataSourceConstruct } from '../src';
import '@aws-cdk/assert/jest';

describe('Create', () => {

  const env = {
    account: '981237193288',
    region: 'eu-central-1',
  };

  const app = new core.App();
  const stack = new core.Stack(app, 'testing-stack', { env });

  describe('DataSource', () => {

    describe('success', () => {

      new DataSourceConstruct(stack, 'DataSource', {
        name: 'cdkdatasource2',
        type: 'ATEHNA',
        dataSourceParameters: {
          athenaParameters: {
            workGroup: 'ddbworkgroup',
          },
        },
        users: ['martin'],
      });

      test('is custom', () => {
        expect(stack).toHaveResourceLike('Custom::AWS');
      });
    });

    describe('fails', () => {
      test('no users', () => {
        expect(() => {
          new DataSourceConstruct(stack, 'DataSource', {
            name: 'cdkdatasource2',
            type: 'ATEHNA',
            dataSourceParameters: {
              athenaParameters: {
                workGroup: 'ddbworkgroup',
              },
            },
            users: [],
          });
        }).toThrowError();
      });
      test('empty user', () => {
        expect(() => {
          new DataSourceConstruct(stack, 'DataSource', {
            name: 'cdkdatasource2',
            type: 'ATHENA',
            dataSourceParameters: {
              athenaParameters: {
                workGroup: 'ddbworkgroup',
              },
            },
            users: ['alice', ''],
          });
        }).toThrowError();
      });
    });
  });

  describe('DataSet', () => {

    describe('success', () => {

      new DataSetConstruct(stack, 'DataSet', {
        name: 'cdkdataset',
        physicalTableMap: {},
        logicalTableMap: {},
        users: ['martin'],
      });

      test('is custom', () => {
        expect(stack).toHaveResourceLike('Custom::AWS');
      });
    });

    describe('fails', () => {
      test('no users', () => {
        expect(() => {
          new DataSetConstruct(stack, 'DataSet', {
            name: 'cdkdataset',
            physicalTableMap: {},
            logicalTableMap: {},
            users: [],
          });
        }).toThrowError();
      });
      test('empty user', () => {
        expect(() => {
          new DataSetConstruct(stack, 'DataSet', {
            name: 'cdkdataset',
            physicalTableMap: {},
            logicalTableMap: {},
            users: ['alice', ''],
          });
        }).toThrowError();
      });
    });
  });
});