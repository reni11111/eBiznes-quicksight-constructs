import * as cdk from '@aws-cdk/core';
import { DataSourceParameters, DataSourceType } from './sdk/quicksight';
/**
 * @stability stable
 */
export interface DataSourceProps extends QSCommonProps {
    /**
     * @stability stable
     */
    readonly dataSourceParameters: DataSourceParameters;
    /**
     * @stability stable
     */
    readonly type: DataSourceType | string;
}
/**
 * @stability stable
 */
export interface QSCommonProps {
    /**
     * @stability stable
     */
    readonly name: string;
    /**
     * QuickSight Users you want to give access to. In the end the permission arn are looking like arn:aws:quicksight:us-east-1:1234:user/default/martin.mueller@take2.co.
     *
     * If you want to see available users, use aws cli described here https://github.com/Reliantid/cypresspoint-infrastructure/tree/cdk#list-datasets
     *
     * @stability stable
     */
    readonly users: string[];
}
/**
 * @stability stable
 */
export declare class DataSourceConstruct extends cdk.Construct {
    /**
     * @stability stable
     */
    dataSourceArn: string;
    /**
     * @stability stable
     */
    constructor(scope: cdk.Construct, id: string, props: DataSourceProps);
}
