import * as cdk from '@aws-cdk/core';
import { QSCommonProps } from './datasource';
import { LogicalTableMap, PhysicalTableMap } from './sdk/quicksight';
/**
 * @stability stable
 */
export interface DataSetProps extends QSCommonProps {
    /**
     * @stability stable
     */
    readonly physicalTableMap: PhysicalTableMap;
    /**
     * @stability stable
     */
    readonly logicalTableMap: LogicalTableMap;
}
export declare function castUppercase(o: any): any;
/**
 * @stability stable
 */
export declare class DataSetConstruct extends cdk.Construct {
    /**
     * @stability stable
     */
    constructor(scope: cdk.Construct, id: string, props: DataSetProps);
}
