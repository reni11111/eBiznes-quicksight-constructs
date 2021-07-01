const { AwsCdkConstructLibrary } = require('projen');

const cdkDeps = [
  '@aws-cdk/aws-iam',
  '@aws-cdk/core',
  '@aws-cdk/custom-resources',
];

// const deps = ['aws-sdk'];

const project = new AwsCdkConstructLibrary({
  author: 'Martin Mueller',
  authorAddress: 'damadden88@googlemail.com',
  cdkVersion: '1.100.0',
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  name: 'cdk-quicksight-constructs',
  repositoryUrl: 'https://github.com/mmuller88/cdk-quicksight-constructs',
  cdkDependencies: cdkDeps,
  cdkDependenciesAsDeps: cdkDeps,
  // bundledDeps: deps,
  // peerDeps: deps,
  // deps,
  keywords: [
    'cdk',
    'aws',
    'projen',
    'quicksight',
    'dataset',
    'datasource',
    'custom-resource',
    'sdk',
  ],
  python: {
    distName: 'cdk-quicksight-constructs',
    module: 'cdk_quicksight_constructs',
  },
});

project.setScript('deploy', 'cdk deploy');
project.setScript('destroy', 'cdk destroy');

project.synth();
