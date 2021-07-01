[![NPM version](https://badge.fury.io/js/cdk-quicksight-constructs.svg)](https://badge.fury.io/js/cdk-quicksight-constructs)
[![PyPI version](https://badge.fury.io/py/cdk-quicksight-constructs.svg)](https://badge.fury.io/py/cdk-quicksight-constructs)
![Release](https://github.com/mmuller88/cdk-quicksight-constructs/workflows/Release/badge.svg)

# cdk-quicksight-constructs

This an AWS CDK Custom Constructs repository for AWS QuickSight resources which are currently not supported by Cloudformation. That are currently:

- DataSource
- DataSet

The Repository is build and managed by Projen. [Projen](https://github.com/projen/projen) is used to manage the Github TypeScript AWS CDK setup. It is developed and maintained from the AWS CDK Community and the favorite framework to manage those AWS CDK project setups.

# Example

```ts
const users = ['martin'];

const datasource = new DataSource(stack, 'DataSource', {
  name: 'cdkdatasource',
  type: 'ATHENA',
  dataSourceParameters: {
    athenaParameters: {
      workGroup: 'ddbworkgroup',
    },
  },
  users,
});

new DataSet(stack, 'DataSet', {
  name: 'cdkdataset',
  users: users,
  physicalTableMap: {
    users: {
      customSql: {
        dataSourceArn: datasource.dataSourceArn,
        name: 'users',
        sqlQuery:
          'SELECT primarypractice, dateofbirth FROM "ddbconnector"."martin1"."martin1" WHERE groupid = \'users\' AND firstname is not null',
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
        sqlQuery:
          'SELECT id, name FROM "ddbconnector"."martin1"."martin1" WHERE groupid = \'medical-practices\' AND name is not null',
        columns: [
          { name: 'id', type: 'STRING' },
          { name: 'name', type: 'STRING' },
        ],
      },
    },
  },
  logicalTableMap: {
    users: {
      alias: 'users',
      source: {
        physicalTableId: 'users',
      },
    },
    practices: {
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
      dataTransforms: [
        {
          createColumnsOperation: {
            columns: [
              {
                columnName: 'age',
                columnId: 'age',
                expression:
                  'dateDiff(parseDate(dateofbirth, "YYYY-MM-dd\'T\'HH:mm:ssZ"),now(), "YYYY")',
              },
            ],
          },
        },
      ],
    },
  },
});
```

Main benefits of that are:

- managing the cdk dependencies and cdk commands like `yarn deploy`
- managing the node and github config files
- a standardized way of how to setup AWS CDK repos

# Types

The types for the DataSource and DataSet constructs are generated from the AWS SDK lib and stored in src/sdk/quicksight.ts . Steps to produce the quicksight.ts file:

- extracting the quicksight.d.ts from node_modules/aws-sdk
- renaming it to quicksight.ts and use VS to auto-fix alle issues in it
- removing the first and last parts which are not needed for the types
- replacing the properties with readonly notation
- replacing the first letter with a small letter to be camel case aligned

# Planed Features / Ideas

- ...

## Helpful Resources

- https://awscli.amazonaws.com/v2/documentation/api/latest/reference/quicksight/index.html
- API https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Operations.html
- SDK https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/QuickSight.html#createDataSource-property

# Troubleshooting

- ...

# Thanks To

- The CDK Community cdk-dev.slack.com
- [Projen](https://github.com/projen/projen) project and the community around it
