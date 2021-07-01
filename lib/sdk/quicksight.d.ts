/**
 * @stability stable
 */
export interface AccountCustomization {
    /**
     * The default theme for this QuickSight subscription.
     *
     * @stability stable
     */
    readonly defaultTheme?: Arn;
}
/**
 * @stability stable
 */
export interface AccountSettings {
    /**
     * The "account name" you provided for the QuickSight subscription in your AWS account.
     *
     * You create this name when you sign up for QuickSight. It is unique in all of AWS and it appears only in the console when users sign in.
     *
     * @stability stable
     */
    readonly accountName?: String;
    /**
     * The edition of QuickSight that you're currently subscribed to: Enterprise edition or Standard edition.
     *
     * @stability stable
     */
    readonly edition?: Edition;
    /**
     * The default QuickSight namespace for your AWS account.
     *
     * @stability stable
     */
    readonly defaultNamespace?: Namespace;
    /**
     * The main notification email for your QuickSight subscription.
     *
     * @stability stable
     */
    readonly notificationEmail?: String;
}
export declare type ActionList = String[];
/**
 * @stability stable
 */
export interface ActiveIAMPolicyAssignment {
    /**
     * A name for the IAM policy assignment.
     *
     * @stability stable
     */
    readonly assignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly policyArn?: Arn;
}
export declare type ActiveIAMPolicyAssignmentList = ActiveIAMPolicyAssignment[];
/**
 * @stability stable
 */
export interface AdHocFilteringOption {
    /**
     * Availability status.
     *
     * @stability stable
     */
    readonly availabilityStatus?: DashboardBehavior;
}
export declare type AdditionalDashboardIdList = RestrictiveResourceId[];
export declare type AliasName = string;
/**
 * @stability stable
 */
export interface AmazonElasticsearchParameters {
    /**
     * The Amazon Elasticsearch Service domain.
     *
     * @stability stable
     */
    readonly domain: Domain;
}
/**
 * @stability stable
 */
export interface Analysis {
    /**
     * The ID of the analysis.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the analysis.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The descriptive name of the analysis.
     *
     * @stability stable
     */
    readonly name?: AnalysisName;
    /**
     * Status associated with the analysis.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * Errors associated with the analysis.
     *
     * @stability stable
     */
    readonly errors?: AnalysisErrorList;
    /**
     * The ARNs of the datasets of the analysis.
     *
     * @stability stable
     */
    readonly dataSetArns?: DataSetArnsList;
    /**
     * The ARN of the theme of the analysis.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
    /**
     * The time that the analysis was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The time that the analysis was last updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * A list of the associated sheets with the unique identifier and name of each sheet.
     *
     * @stability stable
     */
    readonly sheets?: SheetList;
}
/**
 * @stability stable
 */
export interface AnalysisError {
    /**
     * The type of the analysis error.
     *
     * @stability stable
     */
    readonly type?: AnalysisErrorType;
    /**
     * The message associated with the analysis error.
     *
     * @stability stable
     */
    readonly message?: NonEmptyString;
}
export declare type AnalysisErrorList = AnalysisError[];
export declare type AnalysisErrorType = 'ACCESS_DENIED' | 'SOURCE_NOT_FOUND' | 'DATA_SET_NOT_FOUND' | 'INTERNAL_FAILURE' | 'PARAMETER_VALUE_INCOMPATIBLE' | 'PARAMETER_TYPE_INVALID' | 'PARAMETER_NOT_FOUND' | 'COLUMN_TYPE_MISMATCH' | 'COLUMN_GEOGRAPHIC_ROLE_MISMATCH' | 'COLUMN_REPLACEMENT_MISSING' | string;
export declare type AnalysisFilterAttribute = 'QUICKSIGHT_USER' | string;
export declare type AnalysisName = string;
/**
 * @stability stable
 */
export interface AnalysisSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals".
     *
     * @stability stable
     */
    readonly operator?: FilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example "Name": "QUICKSIGHT_USER".
     *
     * @stability stable
     */
    readonly name?: AnalysisFilterAttribute;
    /**
     * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter, for example "Value".
     *
     * An example is "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
     *
     * @stability stable
     */
    readonly value?: String;
}
export declare type AnalysisSearchFilterList = AnalysisSearchFilter[];
/**
 * @stability stable
 */
export interface AnalysisSourceEntity {
    /**
     * The source template for the source entity of the analysis.
     *
     * @stability stable
     */
    readonly sourceTemplate?: AnalysisSourceTemplate;
}
/**
 * @stability stable
 */
export interface AnalysisSourceTemplate {
    /**
     * The dataset references of the source template of an analysis.
     *
     * @stability stable
     */
    readonly dataSetReferences: DataSetReferenceList;
    /**
     * The Amazon Resource Name (ARN) of the source template of an analysis.
     *
     * @stability stable
     */
    readonly arn: Arn;
}
/**
 * @stability stable
 */
export interface AnalysisSummary {
    /**
     * The Amazon Resource Name (ARN) for the analysis.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the analysis.
     *
     * This ID displays in the URL.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The name of the analysis.
     *
     * This name is displayed in the QuickSight console.
     *
     * @stability stable
     */
    readonly name?: AnalysisName;
    /**
     * The last known status for the analysis.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * The time that the analysis was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The time that the analysis was last updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
}
export declare type AnalysisSummaryList = AnalysisSummary[];
export declare type Arn = string;
export declare type AssignmentStatus = 'ENABLED' | 'DRAFT' | 'DISABLED' | string;
/**
 * @stability stable
 */
export interface AthenaParameters {
    /**
     * The workgroup that Amazon Athena uses.
     *
     * @stability stable
     */
    readonly workGroup?: WorkGroup;
}
/**
 * @stability stable
 */
export interface AuroraParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
/**
 * @stability stable
 */
export interface AuroraPostgreSqlParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
export declare type AwsAccountId = string;
export declare type AwsAndAccountId = string;
/**
 * @stability stable
 */
export interface AwsIotAnalyticsParameters {
    /**
     * Dataset name.
     *
     * @stability stable
     */
    readonly dataSetName: DataSetName;
}
export declare type Boolean = boolean;
/**
 * @stability stable
 */
export interface BorderStyle {
    /**
     * The option to enable display of borders for visuals.
     *
     * @stability stable
     */
    readonly show?: boolean;
}
/**
 * @stability stable
 */
export interface CalculatedColumn {
    /**
     * Column name.
     *
     * @stability stable
     */
    readonly columnName: ColumnName;
    /**
     * A unique ID to identify a calculated column.
     *
     * During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
     *
     * @stability stable
     */
    readonly columnId: ColumnId;
    /**
     * An expression that defines the calculated column.
     *
     * @stability stable
     */
    readonly expression: Expression;
}
export declare type CalculatedColumnList = CalculatedColumn[];
/**
 * @stability stable
 */
export interface CancelIngestionRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the dataset used in the ingestion.
     *
     * @stability stable
     */
    readonly dataSetId: string;
    /**
     * An ID for the ingestion.
     *
     * @stability stable
     */
    readonly ingestionId: IngestionId;
}
/**
 * @stability stable
 */
export interface CancelIngestionResponse {
    /**
     * The Amazon Resource Name (ARN) for the data ingestion.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * An ID for the ingestion.
     *
     * @stability stable
     */
    readonly ingestionId?: IngestionId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: string;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CastColumnTypeOperation {
    /**
     * Column name.
     *
     * @stability stable
     */
    readonly columnName: ColumnName;
    /**
     * New column data type.
     *
     * @stability stable
     */
    readonly newColumnType: ColumnDataType;
    /**
     * When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
     *
     * @stability stable
     */
    readonly format?: TypeCastFormat;
}
export declare type Catalog = string;
export declare type ClusterId = string;
export declare type ColorList = HexColor[];
export declare type ColumnDataType = 'STRING' | 'INTEGER' | 'DECIMAL' | 'DATETIME' | string;
/**
 * @stability stable
 */
export interface ColumnDescription {
    /**
     * The text of a description for a column.
     *
     * @stability stable
     */
    readonly text?: ColumnDescriptiveText;
}
export declare type ColumnDescriptiveText = string;
/**
 * @stability stable
 */
export interface ColumnGroup {
    /**
     * Geospatial column group that denotes a hierarchy.
     *
     * @stability stable
     */
    readonly geoSpatialColumnGroup?: GeoSpatialColumnGroup;
}
/**
 * @stability stable
 */
export interface ColumnGroupColumnSchema {
    /**
     * The name of the column group's column schema.
     *
     * @stability stable
     */
    readonly name?: String;
}
export declare type ColumnGroupColumnSchemaList = ColumnGroupColumnSchema[];
export declare type ColumnGroupList = ColumnGroup[];
export declare type ColumnGroupName = string;
/**
 * @stability stable
 */
export interface ColumnGroupSchema {
    /**
     * The name of the column group schema.
     *
     * @stability stable
     */
    readonly name?: String;
    /**
     * A structure containing the list of schemas for column group columns.
     *
     * @stability stable
     */
    readonly columnGroupColumnSchemaList?: ColumnGroupColumnSchemaList;
}
export declare type ColumnGroupSchemaList = ColumnGroupSchema[];
export declare type ColumnId = string;
/**
 * @stability stable
 */
export interface ColumnLevelPermissionRule {
    /**
     * An array of Amazon Resource Names (ARNs) for QuickSight users or groups.
     *
     * @stability stable
     */
    readonly principals?: PrincipalList;
    /**
     * An array of column names.
     *
     * @stability stable
     */
    readonly columnNames?: ColumnNameList;
}
export declare type ColumnLevelPermissionRuleList = ColumnLevelPermissionRule[];
export declare type ColumnList = ColumnName[];
export declare type ColumnName = string;
export declare type ColumnNameList = String[];
/**
 * @stability stable
 */
export interface ColumnSchema {
    /**
     * The name of the column schema.
     *
     * @stability stable
     */
    readonly name?: String;
    /**
     * The data type of the column schema.
     *
     * @stability stable
     */
    readonly dataType?: String;
    /**
     * The geographic role of the column schema.
     *
     * @stability stable
     */
    readonly geographicRole?: String;
}
export declare type ColumnSchemaList = ColumnSchema[];
/**
 * @stability stable
 */
export interface ColumnTag {
    /**
     * A geospatial role for a column.
     *
     * @stability stable
     */
    readonly columnGeographicRole?: GeoSpatialDataRole;
    /**
     * A description for a column.
     *
     * @stability stable
     */
    readonly columnDescription?: ColumnDescription;
}
export declare type ColumnTagList = ColumnTag[];
export declare type CopySourceArn = string;
/**
 * @stability stable
 */
export interface CreateAccountCustomizationRequest {
    /**
     * The ID for the AWS account that you want to customize QuickSight for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The QuickSight namespace that you want to add customizations to.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The QuickSight customizations you're adding in the current AWS Region.
     *
     * You can add these to an AWS account and a QuickSight namespace.  For example, you can add a default theme by setting AccountCustomization to the midnight theme: "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight::aws:theme/MIDNIGHT" }. Or, you can add a custom theme by specifying "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639" }.
     *
     * @stability stable
     */
    readonly accountCustomization: AccountCustomization;
    /**
     * A list of the tags that you want to attach to this resource.
     *
     * @stability stable
     */
    readonly tags?: TagList;
}
/**
 * @stability stable
 */
export interface CreateAccountCustomizationResponse {
    /**
     * The Amazon Resource Name (ARN) for the customization that you created for this AWS account.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID for the AWS account that you want to customize QuickSight for.
     *
     * @stability stable
     */
    readonly awsAccountId?: AwsAccountId;
    /**
     * The namespace associated with the customization you're creating.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The QuickSight customizations you're adding in the current AWS Region.
     *
     * @stability stable
     */
    readonly accountCustomization?: AccountCustomization;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateAnalysisRequest {
    /**
     * The ID of the AWS account where you are creating an analysis.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the analysis that you're creating.
     *
     * This ID displays in the URL of the analysis.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
    /**
     * A descriptive name for the analysis that you're creating.
     *
     * This name displays for the analysis in the QuickSight console.
     *
     * @stability stable
     */
    readonly name: AnalysisName;
    /**
     * The parameter names and override values that you want to use.
     *
     * An analysis can have any parameter type, and some parameters might accept multiple values.
     *
     * @stability stable
     */
    readonly parameters?: Parameters;
    /**
     * A structure that describes the principals and the resource-level permissions on an analysis.
     *
     * You can use the Permissions structure to grant permissions by providing a list of AWS Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).  To specify no permissions, omit Permissions.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * A source entity to use for the analysis that you're creating.
     *
     * This metadata structure contains details that describe a source template and one or more datasets.
     *
     * @stability stable
     */
    readonly sourceEntity: AnalysisSourceEntity;
    /**
     * The ARN for the theme to apply to the analysis that you're creating.
     *
     * To see the theme in the QuickSight console, make sure that you have access to it.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.
     *
     * @stability stable
     */
    readonly tags?: TagList;
}
/**
 * @stability stable
 */
export interface CreateAnalysisResponse {
    /**
     * The ARN for the analysis.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the analysis.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The status of the creation of the analysis.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface CreateColumnsOperation {
    /**
     * Calculated columns to create.
     *
     * @stability stable
     */
    readonly columns: CalculatedColumnList;
}
/**
 * @stability stable
 */
export interface CreateDashboardRequest {
    /**
     * The ID of the AWS account where you want to create the dashboard.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The display name of the dashboard.
     *
     * @stability stable
     */
    readonly name: DashboardName;
    /**
     * The parameters for the creation of the dashboard, which you want to use to override the default settings.
     *
     * A dashboard can have any type of parameters, and some parameters might accept multiple values.
     *
     * @stability stable
     */
    readonly parameters?: Parameters;
    /**
     * A structure that contains the permissions of the dashboard.
     *
     * You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.  To specify no permissions, omit the permissions list.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The entity that you are using as a source when you create the dashboard.
     *
     * In SourceEntity, you specify the type of object you're using as source. You can only create a dashboard from a template, so you use a SourceTemplate entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the CreateTemplate API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplateARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
     *
     * @stability stable
     */
    readonly sourceEntity: DashboardSourceEntity;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
     *
     * @stability stable
     */
    readonly tags?: TagList;
    /**
     * A description for the first version of the dashboard being created.
     *
     * @stability stable
     */
    readonly versionDescription?: VersionDescription;
    /**
     * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED.
     *
     * When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.
     *
     * @stability stable
     */
    readonly dashboardPublishOptions?: DashboardPublishOptions;
    /**
     * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard.
     *
     * If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same AWS account where you create the dashboard.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
}
/**
 * @stability stable
 */
export interface CreateDashboardResponse {
    /**
     * The ARN of the dashboard.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ARN of the dashboard, including the version number of the first version that is created.
     *
     * @stability stable
     */
    readonly versionArn?: Arn;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * The status of the dashboard creation request.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface CreateDataSetRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId: ResourceId;
    /**
     * The display name for the dataset.
     *
     * @stability stable
     */
    readonly name: ResourceName;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     *
     * @stability stable
     */
    readonly physicalTableMap: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     *
     * @stability stable
     */
    readonly logicalTableMap?: LogicalTableMap;
    /**
     * Indicates whether you want to import the data into SPICE.
     *
     * @stability stable
     */
    readonly importMode: DataSetImportMode;
    /**
     * Groupings of columns that work together in certain QuickSight features.
     *
     * Currently, only geospatial hierarchy is supported.
     *
     * @stability stable
     */
    readonly columnGroups?: ColumnGroupList;
    /**
     * The folder that contains fields and nested subfolders for your dataset.
     *
     * @stability stable
     */
    readonly fieldFolders?: FieldFolderMap;
    /**
     * A list of resource permissions on the dataset.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The row-level security configuration for the data that you want to create.
     *
     * @stability stable
     */
    readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * A set of one or more definitions of a  ColumnLevelPermissionRule .
     *
     * @stability stable
     */
    readonly columnLevelPermissionRules?: ColumnLevelPermissionRuleList;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
     *
     * @stability stable
     */
    readonly tags?: TagList;
}
/**
 * @stability stable
 */
export interface CreateDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     *
     * @stability stable
     */
    readonly ingestionArn?: Arn;
    /**
     * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     *
     * @stability stable
     */
    readonly ingestionId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateDataSourceRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId: ResourceId;
    /**
     * A display name for the data source.
     *
     * @stability stable
     */
    readonly name: ResourceName;
    /**
     * The type of the data source.
     *
     * Currently, the supported types for this operation are: ATHENA, AURORA, AURORA_POSTGRESQL, AMAZON_ELASTICSEARCH, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA. Use ListDataSources to return a list of all data sources.  AMAZON_ELASTICSEARCH is for Amazon managed Elasticsearch Service.
     *
     * @stability stable
     */
    readonly type: DataSourceType;
    /**
     * The parameters that QuickSight uses to connect to your underlying source.
     *
     * @stability stable
     */
    readonly dataSourceParameters?: DataSourceParameters;
    /**
     * The credentials QuickSight that uses to connect to your underlying source.
     *
     * Currently, only credentials based on user name and password are supported.
     *
     * @stability stable
     */
    readonly credentials?: DataSourceCredentials;
    /**
     * A list of resource permissions on the data source.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
     *
     * @stability stable
     */
    readonly vpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
     *
     * @stability stable
     */
    readonly sslProperties?: SslProperties;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
     *
     * @stability stable
     */
    readonly tags?: TagList;
}
/**
 * @stability stable
 */
export interface CreateDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId?: ResourceId;
    /**
     * The status of creating the data source.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateGroupMembershipRequest {
    /**
     * The name of the user that you want to add to the group membership.
     *
     * @stability stable
     */
    readonly memberName: GroupMemberName;
    /**
     * The name of the group that you want to add the user to.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface CreateGroupMembershipResponse {
    /**
     * The group member.
     *
     * @stability stable
     */
    readonly groupMember?: GroupMember;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateGroupRequest {
    /**
     * A name for the group that you want to create.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * A description for the group that you want to create.
     *
     * @stability stable
     */
    readonly description?: GroupDescription;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface CreateGroupResponse {
    /**
     * The name of the group.
     *
     * @stability stable
     */
    readonly group?: Group;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateIAMPolicyAssignmentRequest {
    /**
     * The ID of the AWS account where you want to assign an IAM policy to QuickSight users or groups.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The name of the assignment, also called a rule.
     *
     * It must be unique within an AWS account.
     *
     * @stability stable
     */
    readonly assignmentName: IAMPolicyAssignmentName;
    /**
     * The status of the assignment.
     *
     * Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
     *
     * @stability stable
     */
    readonly assignmentStatus: AssignmentStatus;
    /**
     * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
     *
     * @stability stable
     */
    readonly policyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that you want to assign the policy to.
     *
     * @stability stable
     */
    readonly identities?: IdentityMap;
    /**
     * The namespace that contains the assignment.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface CreateIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment.
     *
     * This name must be unique within the AWS account.
     *
     * @stability stable
     */
    readonly assignmentName?: IAMPolicyAssignmentName;
    /**
     * The ID for the assignment.
     *
     * @stability stable
     */
    readonly assignmentId?: String;
    /**
     * The status of the assignment.
     *
     * Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
     *
     * @stability stable
     */
    readonly assignmentStatus?: AssignmentStatus;
    /**
     * The ARN for the IAM policy that is applied to the QuickSight users and groups specified in this assignment.
     *
     * @stability stable
     */
    readonly policyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that the IAM policy is assigned to.
     *
     * @stability stable
     */
    readonly identities?: IdentityMap;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateIngestionRequest {
    /**
     * The ID of the dataset used in the ingestion.
     *
     * @stability stable
     */
    readonly dataSetId: string;
    /**
     * An ID for the ingestion.
     *
     * @stability stable
     */
    readonly ingestionId: IngestionId;
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
}
/**
 * @stability stable
 */
export interface CreateIngestionResponse {
    /**
     * The Amazon Resource Name (ARN) for the data ingestion.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * An ID for the ingestion.
     *
     * @stability stable
     */
    readonly ingestionId?: IngestionId;
    /**
     * The ingestion status.
     *
     * @stability stable
     */
    readonly ingestionStatus?: IngestionStatus;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: string;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateNamespaceRequest {
    /**
     * The ID for the AWS account that you want to create the QuickSight namespace in.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The name that you want to use to describe the new namespace.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
    /**
     * Specifies the type of your user identity directory.
     *
     * Currently, this supports users with an identity type of QUICKSIGHT.
     *
     * @stability stable
     */
    readonly identityStore: IdentityStore;
    /**
     * The tags that you want to associate with the namespace that you're creating.
     *
     * @stability stable
     */
    readonly tags?: TagList;
}
/**
 * @stability stable
 */
export interface CreateNamespaceResponse {
    /**
     * The ARN of the QuickSight namespace you created.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The name of the new namespace that you created.
     *
     * @stability stable
     */
    readonly name?: Namespace;
    /**
     * The AWS Region that you want to use for the free SPICE capacity for the new namespace.
     *
     * This is set to the region that you run CreateNamespace in.
     *
     * @stability stable
     */
    readonly capacityRegion?: String;
    /**
     * The status of the creation of the namespace.
     *
     * This is an asynchronous process. A status of CREATED means that your namespace is ready to use. If an error occurs, it indicates if the process is retryable or non-retryable. In the case of a non-retryable error, refer to the error message for follow-up tasks.
     *
     * @stability stable
     */
    readonly creationStatus?: NamespaceStatus;
    /**
     * Specifies the type of your user identity directory.
     *
     * Currently, this supports users with an identity type of QUICKSIGHT.
     *
     * @stability stable
     */
    readonly identityStore?: IdentityStore;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface CreateTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the template that you creating an alias for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The name that you want to give to the template alias that you're creating.
     *
     * Don't start the alias name with the $ character. Alias names that start with $ are reserved by QuickSight.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
    /**
     * The version number of the template.
     *
     * @stability stable
     */
    readonly templateVersionNumber: VersionNumber;
}
/**
 * @stability stable
 */
export interface CreateTemplateAliasResponse {
    /**
     * Information about the template alias.
     *
     * @stability stable
     */
    readonly templateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface CreateTemplateRequest {
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the template that you want to create.
     *
     * This template is unique per AWS Region in each AWS account.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * A display name for the template.
     *
     * @stability stable
     */
    readonly name?: TemplateName;
    /**
     * A list of resource permissions to be set on the template.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The entity that you are using as a source when you create the template.
     *
     * In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
     *
     * @stability stable
     */
    readonly sourceEntity: TemplateSourceEntity;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     *
     * @stability stable
     */
    readonly tags?: TagList;
    /**
     * A description of the current template version being created.
     *
     * This API operation creates the first version of the template. Every time UpdateTemplate is called, a new version is created. Each version of the template maintains a description of the version in the VersionDescription field.
     *
     * @stability stable
     */
    readonly versionDescription?: VersionDescription;
}
/**
 * @stability stable
 */
export interface CreateTemplateResponse {
    /**
     * The ARN for the template.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ARN for the template, including the version information of the first version.
     *
     * @stability stable
     */
    readonly versionArn?: Arn;
    /**
     * The ID of the template.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * The template creation status.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface CreateThemeAliasRequest {
    /**
     * The ID of the AWS account that contains the theme for the new theme alias.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the theme alias.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The name that you want to give to the theme alias that you are creating.
     *
     * The alias name can't begin with a $. Alias names that start with $ are reserved by Amazon QuickSight.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
    /**
     * The version number of the theme.
     *
     * @stability stable
     */
    readonly themeVersionNumber: VersionNumber;
}
/**
 * @stability stable
 */
export interface CreateThemeAliasResponse {
    /**
     * Information about the theme alias.
     *
     * @stability stable
     */
    readonly themeAlias?: ThemeAlias;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface CreateThemeRequest {
    /**
     * The ID of the AWS account where you want to store the new theme.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the theme that you want to create.
     *
     * The theme ID is unique per AWS Region in each AWS account.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * A display name for the theme.
     *
     * @stability stable
     */
    readonly name: ThemeName;
    /**
     * The ID of the theme that a custom theme will inherit from.
     *
     * All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within a QuickSight analysis.
     *
     * @stability stable
     */
    readonly baseThemeId: RestrictiveResourceId;
    /**
     * A description of the first version of the theme that you're creating.
     *
     * Every time UpdateTheme is called, a new version is created. Each version of the theme has a description of the version in the VersionDescription field.
     *
     * @stability stable
     */
    readonly versionDescription?: VersionDescription;
    /**
     * The theme configuration, which contains the theme display properties.
     *
     * @stability stable
     */
    readonly configuration: ThemeConfiguration;
    /**
     * A valid grouping of resource permissions to apply to the new theme.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
     *
     * @stability stable
     */
    readonly tags?: TagList;
}
/**
 * @stability stable
 */
export interface CreateThemeResponse {
    /**
     * The Amazon Resource Name (ARN) for the theme.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) for the new theme.
     *
     * @stability stable
     */
    readonly versionArn?: Arn;
    /**
     * The ID of the theme.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
    /**
     * The theme creation status.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface CredentialPair {
    /**
     * User name.
     *
     * @stability stable
     */
    readonly username: Username;
    /**
     * Password.
     *
     * @stability stable
     */
    readonly password: Password;
    /**
     * A set of alternate data source parameters that you want to share for these credentials.
     *
     * The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the new data source with the existing credentials. If the AlternateDataSourceParameters list is null, the DataSourceParameters originally used with these Credentials is automatically allowed.
     *
     * @stability stable
     */
    readonly alternateDataSourceParameters?: DataSourceParametersList;
}
/**
 * @stability stable
 */
export interface CustomSql {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     *
     * @stability stable
     */
    readonly dataSourceArn: Arn;
    /**
     * A display name for the SQL query result.
     *
     * @stability stable
     */
    readonly name: CustomSqlName;
    /**
     * The SQL query.
     *
     * @stability stable
     */
    readonly sqlQuery: SqlQuery;
    /**
     * The column schema from the SQL query result set.
     *
     * @stability stable
     */
    readonly columns?: InputColumnList;
}
export declare type CustomSqlName = string;
/**
 * @stability stable
 */
export interface Dashboard {
    /**
     * Dashboard ID.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * A display name for the dashboard.
     *
     * @stability stable
     */
    readonly name?: DashboardName;
    /**
     * Version.
     *
     * @stability stable
     */
    readonly version?: DashboardVersion;
    /**
     * The time that this dataset was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last time that this dataset was published.
     *
     * @stability stable
     */
    readonly lastPublishedTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
}
export declare type DashboardBehavior = 'ENABLED' | 'DISABLED' | string;
/**
 * @stability stable
 */
export interface DashboardError {
    /**
     * Type.
     *
     * @stability stable
     */
    readonly type?: DashboardErrorType;
    /**
     * Message.
     *
     * @stability stable
     */
    readonly message?: NonEmptyString;
}
export declare type DashboardErrorList = DashboardError[];
export declare type DashboardErrorType = 'ACCESS_DENIED' | 'SOURCE_NOT_FOUND' | 'DATA_SET_NOT_FOUND' | 'INTERNAL_FAILURE' | 'PARAMETER_VALUE_INCOMPATIBLE' | 'PARAMETER_TYPE_INVALID' | 'PARAMETER_NOT_FOUND' | 'COLUMN_TYPE_MISMATCH' | 'COLUMN_GEOGRAPHIC_ROLE_MISMATCH' | 'COLUMN_REPLACEMENT_MISSING' | string;
export declare type DashboardFilterAttribute = 'QUICKSIGHT_USER' | string;
export declare type DashboardName = string;
/**
 * @stability stable
 */
export interface DashboardPublishOptions {
    /**
     * Ad hoc (one-time) filtering option.
     *
     * @stability stable
     */
    readonly adHocFilteringOption?: AdHocFilteringOption;
    /**
     * Export to .csv option.
     *
     * @stability stable
     */
    readonly exportToCSVOption?: ExportToCSVOption;
    /**
     * Sheet controls option.
     *
     * @stability stable
     */
    readonly sheetControlsOption?: SheetControlsOption;
}
/**
 * @stability stable
 */
export interface DashboardSearchFilter {
    /**
     * The comparison operator that you want to use as a filter, for example, "Operator": "StringEquals".
     *
     * @stability stable
     */
    readonly operator: FilterOperator;
    /**
     * The name of the value that you want to use as a filter, for example, "Name": "QUICKSIGHT_USER".
     *
     * @stability stable
     */
    readonly name?: DashboardFilterAttribute;
    /**
     * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter, for example, "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
     *
     * @stability stable
     */
    readonly value?: String;
}
export declare type DashboardSearchFilterList = DashboardSearchFilter[];
/**
 * @stability stable
 */
export interface DashboardSourceEntity {
    /**
     * Source template.
     *
     * @stability stable
     */
    readonly sourceTemplate?: DashboardSourceTemplate;
}
/**
 * @stability stable
 */
export interface DashboardSourceTemplate {
    /**
     * Dataset references.
     *
     * @stability stable
     */
    readonly dataSetReferences: DataSetReferenceList;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn: Arn;
}
/**
 * @stability stable
 */
export interface DashboardSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * Dashboard ID.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * A display name for the dashboard.
     *
     * @stability stable
     */
    readonly name?: DashboardName;
    /**
     * The time that this dashboard was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last time that this dashboard was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * Published version number.
     *
     * @stability stable
     */
    readonly publishedVersionNumber?: VersionNumber;
    /**
     * The last time that this dashboard was published.
     *
     * @stability stable
     */
    readonly lastPublishedTime?: Timestamp;
}
export declare type DashboardSummaryList = DashboardSummary[];
export declare type DashboardUIState = 'EXPANDED' | 'COLLAPSED' | string;
/**
 * @stability stable
 */
export interface DashboardVersion {
    /**
     * The time that this dashboard version was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * Errors associated with this dashboard version.
     *
     * @stability stable
     */
    readonly errors?: DashboardErrorList;
    /**
     * Version number for this version of the dashboard.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * Source entity ARN.
     *
     * @stability stable
     */
    readonly sourceEntityArn?: Arn;
    /**
     * The Amazon Resource Numbers (ARNs) for the datasets that are associated with this version of the dashboard.
     *
     * @stability stable
     */
    readonly dataSetArns?: DataSetArnsList;
    /**
     * Description.
     *
     * @stability stable
     */
    readonly description?: VersionDescription;
    /**
     * The ARN of the theme associated with a version of the dashboard.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
    /**
     * A list of the associated sheets with the unique identifier and name of each sheet.
     *
     * @stability stable
     */
    readonly sheets?: SheetList;
}
/**
 * @stability stable
 */
export interface DashboardVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The time that this dashboard version was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * Version number.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * Source entity ARN.
     *
     * @stability stable
     */
    readonly sourceEntityArn?: Arn;
    /**
     * Description.
     *
     * @stability stable
     */
    readonly description?: VersionDescription;
}
export declare type DashboardVersionSummaryList = DashboardVersionSummary[];
/**
 * @stability stable
 */
export interface DataColorPalette {
    /**
     * The hexadecimal codes for the colors.
     *
     * @stability stable
     */
    readonly colors?: ColorList;
    /**
     * The minimum and maximum hexadecimal codes that describe a color gradient.
     *
     * @stability stable
     */
    readonly minMaxGradient?: ColorList;
    /**
     * The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
     *
     * @stability stable
     */
    readonly emptyFillColor?: HexColor;
}
/**
 * @stability stable
 */
export interface DataSet {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the dataset.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * A display name for the dataset.
     *
     * @stability stable
     */
    readonly name?: ResourceName;
    /**
     * The time that this dataset was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     *
     * @stability stable
     */
    readonly physicalTableMap?: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     *
     * @stability stable
     */
    readonly logicalTableMap?: LogicalTableMap;
    /**
     * The list of columns after all transforms.
     *
     * These columns are available in templates, analyses, and dashboards.
     *
     * @stability stable
     */
    readonly outputColumns?: OutputColumnList;
    /**
     * A value that indicates whether you want to import the data into SPICE.
     *
     * @stability stable
     */
    readonly importMode?: DataSetImportMode;
    /**
     * The amount of SPICE capacity used by this dataset.
     *
     * This is 0 if the dataset isn't imported into SPICE.
     *
     * @stability stable
     */
    readonly consumedSpiceCapacityInBytes?: Long;
    /**
     * Groupings of columns that work together in certain Amazon QuickSight features.
     *
     * Currently, only geospatial hierarchy is supported.
     *
     * @stability stable
     */
    readonly columnGroups?: ColumnGroupList;
    /**
     * The folder that contains fields and nested subfolders for your dataset.
     *
     * @stability stable
     */
    readonly fieldFolders?: FieldFolderMap;
    /**
     * The row-level security configuration for the dataset.
     *
     * @stability stable
     */
    readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * A set of one or more definitions of a  ColumnLevelPermissionRule .
     *
     * @stability stable
     */
    readonly columnLevelPermissionRules?: ColumnLevelPermissionRuleList;
}
export declare type DataSetArnsList = Arn[];
/**
 * @stability stable
 */
export interface DataSetConfiguration {
    /**
     * Placeholder.
     *
     * @stability stable
     */
    readonly placeholder?: String;
    /**
     * Dataset schema.
     *
     * @stability stable
     */
    readonly dataSetSchema?: DataSetSchema;
    /**
     * A structure containing the list of column group schemas.
     *
     * @stability stable
     */
    readonly columnGroupSchemaList?: ColumnGroupSchemaList;
}
export declare type DataSetConfigurationList = DataSetConfiguration[];
export declare type DataSetImportMode = 'SPICE' | 'DIRECT_QUERY' | string;
export declare type DataSetName = string;
/**
 * @stability stable
 */
export interface DataSetReference {
    /**
     * Dataset placeholder.
     *
     * @stability stable
     */
    readonly dataSetPlaceholder: NonEmptyString;
    /**
     * Dataset Amazon Resource Name (ARN).
     *
     * @stability stable
     */
    readonly dataSetArn: Arn;
}
export declare type DataSetReferenceList = DataSetReference[];
/**
 * @stability stable
 */
export interface DataSetSchema {
    /**
     * A structure containing the list of column schemas.
     *
     * @stability stable
     */
    readonly columnSchemaList?: ColumnSchemaList;
}
/**
 * @stability stable
 */
export interface DataSetSummary {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the dataset.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * A display name for the dataset.
     *
     * @stability stable
     */
    readonly name?: ResourceName;
    /**
     * The time that this dataset was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * A value that indicates whether you want to import the data into SPICE.
     *
     * @stability stable
     */
    readonly importMode?: DataSetImportMode;
    /**
     * The row-level security configuration for the dataset.
     *
     * @stability stable
     */
    readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * A value that indicates if the dataset has column level permission configured.
     *
     * @stability stable
     */
    readonly columnLevelPermissionRulesApplied?: Boolean;
}
export declare type DataSetSummaryList = DataSetSummary[];
/**
 * @stability stable
 */
export interface DataSource {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId?: ResourceId;
    /**
     * A display name for the data source.
     *
     * @stability stable
     */
    readonly name?: ResourceName;
    /**
     * The type of the data source.
     *
     * This type indicates which database engine the data source connects to.
     *
     * @stability stable
     */
    readonly type?: DataSourceType;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * The time that this data source was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last time that this data source was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * The parameters that Amazon QuickSight uses to connect to your underlying source.
     *
     * This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
     *
     * @stability stable
     */
    readonly dataSourceParameters?: DataSourceParameters;
    /**
     * A set of alternate data source parameters that you want to share for the credentials stored with this data source.
     *
     * The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the AlternateDataSourceParameters list is null, the Credentials originally used with this DataSourceParameters are automatically allowed.
     *
     * @stability stable
     */
    readonly alternateDataSourceParameters?: DataSourceParametersList;
    /**
     * The VPC connection information.
     *
     * You need to use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
     *
     * @stability stable
     */
    readonly vpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
     *
     * @stability stable
     */
    readonly sslProperties?: SslProperties;
    /**
     * Error information from the last update or the creation of the data source.
     *
     * @stability stable
     */
    readonly errorInfo?: DataSourceErrorInfo;
}
/**
 * @stability stable
 */
export interface DataSourceCredentials {
    /**
     * Credential pair.
     *
     * For more information, see CredentialPair.
     *
     * @stability stable
     */
    readonly credentialPair?: CredentialPair;
    /**
     * The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use.
     *
     * When CopySourceArn is not null, the credential pair from the data source in the ARN is used as the credentials for the DataSourceCredentials structure.
     *
     * @stability stable
     */
    readonly copySourceArn?: CopySourceArn;
}
/**
 * @stability stable
 */
export interface DataSourceErrorInfo {
    /**
     * Error type.
     *
     * @stability stable
     */
    readonly type?: DataSourceErrorInfoType;
    /**
     * Error message.
     *
     * @stability stable
     */
    readonly message?: String;
}
export declare type DataSourceErrorInfoType = 'ACCESS_DENIED' | 'COPY_SOURCE_NOT_FOUND' | 'TIMEOUT' | 'ENGINE_VERSION_NOT_SUPPORTED' | 'UNKNOWN_HOST' | 'GENERIC_SQL_FAILURE' | 'CONFLICT' | 'UNKNOWN' | string;
export declare type DataSourceList = DataSource[];
/**
 * @stability stable
 */
export interface DataSourceParameters {
    /**
     * Amazon Elasticsearch Service parameters.
     *
     * @stability stable
     */
    readonly amazonElasticsearchParameters?: AmazonElasticsearchParameters;
    /**
     * Amazon Athena parameters.
     *
     * @stability stable
     */
    readonly athenaParameters?: AthenaParameters;
    /**
     * Amazon Aurora MySQL parameters.
     *
     * @stability stable
     */
    readonly auroraParameters?: AuroraParameters;
    /**
     * Aurora PostgreSQL parameters.
     *
     * @stability stable
     */
    readonly auroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
    /**
     * AWS IoT Analytics parameters.
     *
     * @stability stable
     */
    readonly awsIotAnalyticsParameters?: AwsIotAnalyticsParameters;
    /**
     * Jira parameters.
     *
     * @stability stable
     */
    readonly jiraParameters?: JiraParameters;
    /**
     * MariaDB parameters.
     *
     * @stability stable
     */
    readonly mariaDbParameters?: MariaDbParameters;
    /**
     * MySQL parameters.
     *
     * @stability stable
     */
    readonly mySqlParameters?: MySqlParameters;
    /**
     * Oracle parameters.
     *
     * @stability stable
     */
    readonly oracleParameters?: OracleParameters;
    /**
     * PostgreSQL parameters.
     *
     * @stability stable
     */
    readonly postgreSqlParameters?: PostgreSqlParameters;
    /**
     * Presto parameters.
     *
     * @stability stable
     */
    readonly prestoParameters?: PrestoParameters;
    /**
     * Amazon RDS parameters.
     *
     * @stability stable
     */
    readonly rdsParameters?: RdsParameters;
    /**
     * Amazon Redshift parameters.
     *
     * @stability stable
     */
    readonly redshiftParameters?: RedshiftParameters;
    /**
     * S3 parameters.
     *
     * @stability stable
     */
    readonly s3Parameters?: S3Parameters;
    /**
     * ServiceNow parameters.
     *
     * @stability stable
     */
    readonly serviceNowParameters?: ServiceNowParameters;
    /**
     * Snowflake parameters.
     *
     * @stability stable
     */
    readonly snowflakeParameters?: SnowflakeParameters;
    /**
     * Spark parameters.
     *
     * @stability stable
     */
    readonly sparkParameters?: SparkParameters;
    /**
     * SQL Server parameters.
     *
     * @stability stable
     */
    readonly sqlServerParameters?: SqlServerParameters;
    /**
     * Teradata parameters.
     *
     * @stability stable
     */
    readonly teradataParameters?: TeradataParameters;
    /**
     * Twitter parameters.
     *
     * @stability stable
     */
    readonly twitterParameters?: TwitterParameters;
}
export declare type DataSourceParametersList = DataSourceParameters[];
export declare type DataSourceType = 'ADOBE_ANALYTICS' | 'AMAZON_ELASTICSEARCH' | 'ATHENA' | 'AURORA' | 'AURORA_POSTGRESQL' | 'AWS_IOT_ANALYTICS' | 'GITHUB' | 'JIRA' | 'MARIADB' | 'MYSQL' | 'ORACLE' | 'POSTGRESQL' | 'PRESTO' | 'REDSHIFT' | 'S3' | 'SALESFORCE' | 'SERVICENOW' | 'SNOWFLAKE' | 'SPARK' | 'SQLSERVER' | 'TERADATA' | 'TWITTER' | 'TIMESTREAM' | string;
export declare type Database = string;
/**
 * @stability stable
 */
export interface DateTimeParameter {
    /**
     * A display name for the date-time parameter.
     *
     * @stability stable
     */
    readonly name: NonEmptyString;
    /**
     * The values for the date-time parameter.
     *
     * @stability stable
     */
    readonly values: TimestampList;
}
export declare type DateTimeParameterList = DateTimeParameter[];
/**
 * @stability stable
 */
export interface DecimalParameter {
    /**
     * A display name for the decimal parameter.
     *
     * @stability stable
     */
    readonly name: NonEmptyString;
    /**
     * The values for the decimal parameter.
     *
     * @stability stable
     */
    readonly values: DoubleList;
}
export declare type DecimalParameterList = DecimalParameter[];
/**
 * @stability stable
 */
export interface DeleteAccountCustomizationRequest {
    /**
     * The ID for the AWS account that you want to delete QuickSight customizations from in this AWS Region.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The QuickSight namespace that you're deleting the customizations from.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteAccountCustomizationResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteAnalysisRequest {
    /**
     * The ID of the AWS account where you want to delete an analysis.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're deleting.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
    /**
     * A value that specifies the number of days that QuickSight waits before it deletes the analysis.
     *
     * You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30.
     *
     * @stability stable
     */
    readonly recoveryWindowInDays?: RecoveryWindowInDays;
    /**
     * This option defaults to the value NoForceDeleteWithoutRecovery.
     *
     * To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted.
     *
     * @stability stable
     */
    readonly forceDeleteWithoutRecovery?: boolean;
}
/**
 * @stability stable
 */
export interface DeleteAnalysisResponse {
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) of the deleted analysis.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the deleted analysis.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The date and time that the analysis is scheduled to be deleted.
     *
     * @stability stable
     */
    readonly deletionTime?: Timestamp;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DeleteDashboardRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're deleting.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The version number of the dashboard.
     *
     * If the version number property is provided, only the specified version of the dashboard is deleted.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
}
/**
 * @stability stable
 */
export interface DeleteDashboardResponse {
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The Secure Socket Layer (SSL) properties that apply for the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DeleteDataSetRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId: ResourceId;
}
/**
 * @stability stable
 */
export interface DeleteDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteDataSourceRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId: ResourceId;
}
/**
 * @stability stable
 */
export interface DeleteDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source that you deleted.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteGroupMembershipRequest {
    /**
     * The name of the user that you want to delete from the group membership.
     *
     * @stability stable
     */
    readonly memberName: GroupMemberName;
    /**
     * The name of the group that you want to delete the user from.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteGroupMembershipResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteGroupRequest {
    /**
     * The name of the group that you want to delete.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteGroupResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteIAMPolicyAssignmentRequest {
    /**
     * The AWS account ID where you want to delete the IAM policy assignment.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The name of the assignment.
     *
     * @stability stable
     */
    readonly assignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace that contains the assignment.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment.
     *
     * @stability stable
     */
    readonly assignmentName?: IAMPolicyAssignmentName;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteNamespaceRequest {
    /**
     * The ID for the AWS account that you want to delete the QuickSight namespace from.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace that you want to delete.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteNamespaceResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the item to delete.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template that the specified alias is for.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The name for the template alias.
     *
     * To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
}
/**
 * @stability stable
 */
export interface DeleteTemplateAliasResponse {
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * An ID for the template associated with the deletion.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * The name for the template alias.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the template you want to delete.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DeleteTemplateRequest {
    /**
     * The ID of the AWS account that contains the template that you're deleting.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the template you want to delete.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * Specifies the version of the template that you want to delete.
     *
     * If you don't provide a version number, DeleteTemplate deletes all versions of the template.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
}
/**
 * @stability stable
 */
export interface DeleteTemplateResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * An ID for the template.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteThemeAliasRequest {
    /**
     * The ID of the AWS account that contains the theme alias to delete.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme that the specified alias is for.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The unique name for the theme alias to delete.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
}
/**
 * @stability stable
 */
export interface DeleteThemeAliasResponse {
    /**
     * The name for the theme alias.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the theme resource using the deleted alias.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * An ID for the theme associated with the deletion.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DeleteThemeRequest {
    /**
     * The ID of the AWS account that contains the theme that you're deleting.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * An ID for the theme that you want to delete.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The version of the theme that you want to delete.
     *
     * Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
}
/**
 * @stability stable
 */
export interface DeleteThemeResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * An ID for the theme.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DeleteUserByPrincipalIdRequest {
    /**
     * The principal ID of the user.
     *
     * @stability stable
     */
    readonly principalId: String;
    /**
     * The ID for the AWS account that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteUserByPrincipalIdResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DeleteUserRequest {
    /**
     * The name of the user that you want to delete.
     *
     * @stability stable
     */
    readonly userName: UserName;
    /**
     * The ID for the AWS account that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DeleteUserResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
export declare type Delimiter = string;
/**
 * @stability stable
 */
export interface DescribeAccountCustomizationRequest {
    /**
     * The ID for the AWS account that you want to describe QuickSight customizations for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The QuickSight namespace that you want to describe QuickSight customizations for.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The Resolved flag works with the other parameters to determine which view of QuickSight customizations is returned.
     *
     * You can add this flag to your command to use the same view that QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels.
     *
     * @stability stable
     */
    readonly resolved?: boolean;
}
/**
 * @stability stable
 */
export interface DescribeAccountCustomizationResponse {
    /**
     * The Amazon Resource Name (ARN) of the customization that's associated with this AWS account.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID for the AWS account that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId?: AwsAccountId;
    /**
     * The QuickSight namespace that you're describing.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The QuickSight customizations that exist in the current AWS Region.
     *
     * @stability stable
     */
    readonly accountCustomization?: AccountCustomization;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeAccountSettingsRequest {
    /**
     * The ID for the AWS account that contains the settings that you want to list.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
}
/**
 * @stability stable
 */
export interface DescribeAccountSettingsResponse {
    /**
     * The QuickSight settings for this AWS account.
     *
     * This information includes the edition of Amazon QuickSight that you subscribed to (Standard or Enterprise) and the notification email for the QuickSight subscription. In the QuickSight console, the QuickSight subscription is sometimes referred to as a QuickSight "account" even though it's technically not an account by itself. Instead, it's a subscription to the QuickSight service for your AWS account. The edition that you subscribe to applies to QuickSight in every AWS Region where you use it.
     *
     * @stability stable
     */
    readonly accountSettings?: AccountSettings;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeAnalysisPermissionsRequest {
    /**
     * The ID of the AWS account that contains the analysis whose permissions you're describing.
     *
     * You must be using the AWS account that the analysis is in.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the analysis whose permissions you're describing.
     *
     * The ID is part of the analysis URL.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DescribeAnalysisPermissionsResponse {
    /**
     * The ID of the analysis whose permissions you're describing.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the analysis whose permissions you're describing.
     *
     * @stability stable
     */
    readonly analysisArn?: Arn;
    /**
     * A structure that describes the principals and the resource-level permissions on an analysis.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeAnalysisRequest {
    /**
     * The ID of the AWS account that contains the analysis.
     *
     * You must be using the AWS account that the analysis is in.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're describing.
     *
     * The ID is part of the URL of the analysis.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DescribeAnalysisResponse {
    /**
     * A metadata structure that contains summary information for the analysis that you're describing.
     *
     * @stability stable
     */
    readonly analysis?: Analysis;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeDashboardPermissionsRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're describing permissions for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DescribeDashboardPermissionsResponse {
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     *
     * @stability stable
     */
    readonly dashboardArn?: Arn;
    /**
     * A structure that contains the permissions for the dashboard.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeDashboardRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The version number for the dashboard.
     *
     * If a version number isn't passed, the latest published dashboard version is described.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The alias name.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
}
/**
 * @stability stable
 */
export interface DescribeDashboardResponse {
    /**
     * Information about the dashboard.
     *
     * @stability stable
     */
    readonly dashboard?: Dashboard;
    /**
     * The HTTP status of this request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeDataSetPermissionsRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId: ResourceId;
}
/**
 * @stability stable
 */
export interface DescribeDataSetPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @stability stable
     */
    readonly dataSetArn?: Arn;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * A list of resource permissions on the dataset.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeDataSetRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId: ResourceId;
}
/**
 * @stability stable
 */
export interface DescribeDataSetResponse {
    /**
     * Information on the dataset.
     *
     * @stability stable
     */
    readonly dataSet?: DataSet;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeDataSourcePermissionsRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId: ResourceId;
}
/**
 * @stability stable
 */
export interface DescribeDataSourcePermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     *
     * @stability stable
     */
    readonly dataSourceArn?: Arn;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId?: ResourceId;
    /**
     * A list of resource permissions on the data source.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeDataSourceRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId: ResourceId;
}
/**
 * @stability stable
 */
export interface DescribeDataSourceResponse {
    /**
     * The information on the data source.
     *
     * @stability stable
     */
    readonly dataSource?: DataSource;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeGroupRequest {
    /**
     * The name of the group that you want to describe.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DescribeGroupResponse {
    /**
     * The name of the group.
     *
     * @stability stable
     */
    readonly group?: Group;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeIAMPolicyAssignmentRequest {
    /**
     * The ID of the AWS account that contains the assignment that you want to describe.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The name of the assignment, also called a rule.
     *
     * @stability stable
     */
    readonly assignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace that contains the assignment.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DescribeIAMPolicyAssignmentResponse {
    /**
     * Information describing the IAM policy assignment.
     *
     * @stability stable
     */
    readonly iAMPolicyAssignment?: IAMPolicyAssignment;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeIngestionRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the dataset used in the ingestion.
     *
     * @stability stable
     */
    readonly dataSetId: string;
    /**
     * An ID for the ingestion.
     *
     * @stability stable
     */
    readonly ingestionId: IngestionId;
}
/**
 * @stability stable
 */
export interface DescribeIngestionResponse {
    /**
     * Information about the ingestion.
     *
     * @stability stable
     */
    readonly ingestion?: Ingestion;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: string;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeNamespaceRequest {
    /**
     * The ID for the AWS account that contains the QuickSight namespace that you want to describe.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace that you want to describe.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DescribeNamespaceResponse {
    /**
     * The information about the namespace that you're describing.
     *
     * The response includes the namespace ARN, name, AWS Region, creation status, and identity store. DescribeNamespace also works for namespaces that are in the process of being created. For incomplete namespaces, this API operation lists the namespace error types and messages associated with the creation process.
     *
     * @stability stable
     */
    readonly namespace?: NamespaceInfoV2;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the template alias that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The name of the template alias that you want to describe.
     *
     * If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
}
/**
 * @stability stable
 */
export interface DescribeTemplateAliasResponse {
    /**
     * Information about the template alias.
     *
     * @stability stable
     */
    readonly templateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeTemplatePermissionsRequest {
    /**
     * The ID of the AWS account that contains the template that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DescribeTemplatePermissionsResponse {
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the template.
     *
     * @stability stable
     */
    readonly templateArn?: Arn;
    /**
     * A list of resource permissions to be set on the template.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeTemplateRequest {
    /**
     * The ID of the AWS account that contains the template that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * (Optional) The number for the version to describe.
     *
     * If a VersionNumber parameter value isn't provided, the latest version of the template is described.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The alias of the template that you want to describe.
     *
     * If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
}
/**
 * @stability stable
 */
export interface DescribeTemplateResponse {
    /**
     * The template structure for the object you want to describe.
     *
     * @stability stable
     */
    readonly template?: Template;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeThemeAliasRequest {
    /**
     * The ID of the AWS account that contains the theme alias that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The name of the theme alias that you want to describe.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
}
/**
 * @stability stable
 */
export interface DescribeThemeAliasResponse {
    /**
     * Information about the theme alias.
     *
     * @stability stable
     */
    readonly themeAlias?: ThemeAlias;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeThemePermissionsRequest {
    /**
     * The ID of the AWS account that contains the theme that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme that you want to describe permissions for.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface DescribeThemePermissionsResponse {
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the theme.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
    /**
     * A list of resource permissions set on the theme.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface DescribeThemeRequest {
    /**
     * The ID of the AWS account that contains the theme that you're describing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAndAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The version number for the version to describe.
     *
     * If a VersionNumber parameter value isn't provided, the latest version of the theme is described.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The alias of the theme that you want to describe.
     *
     * If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
}
/**
 * @stability stable
 */
export interface DescribeThemeResponse {
    /**
     * The information about the theme that you are describing.
     *
     * @stability stable
     */
    readonly theme?: Theme;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface DescribeUserRequest {
    /**
     * The name of the user that you want to describe.
     *
     * @stability stable
     */
    readonly userName: UserName;
    /**
     * The ID for the AWS account that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface DescribeUserResponse {
    /**
     * The user name.
     *
     * @stability stable
     */
    readonly user?: User;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
export declare type Domain = string;
export declare type Double = number;
export declare type DoubleList = Double[];
export declare type Edition = 'STANDARD' | 'ENTERPRISE' | string;
export declare type EmbeddingIdentityType = 'IAM' | 'QUICKSIGHT' | 'ANONYMOUS' | string;
export declare type EmbeddingUrl = string;
export declare type EntryPoint = string;
/**
 * @stability stable
 */
export interface ErrorInfo {
    /**
     * Error type.
     *
     * @stability stable
     */
    readonly type?: IngestionErrorType;
    /**
     * Error message.
     *
     * @stability stable
     */
    readonly message?: string;
}
/**
 * @stability stable
 */
export interface ExportToCSVOption {
    /**
     * Availability status.
     *
     * @stability stable
     */
    readonly availabilityStatus?: DashboardBehavior;
}
export declare type Expression = string;
/**
 * @stability stable
 */
export interface FieldFolder {
    /**
     * The description for a field folder.
     *
     * @stability stable
     */
    readonly description?: FieldFolderDescription;
    /**
     * A folder has a list of columns.
     *
     * A column can only be in one folder.
     *
     * @stability stable
     */
    readonly columns?: FolderColumnList;
}
export declare type FieldFolderDescription = string;
export declare type FieldFolderMap = {
    [key: string]: FieldFolder;
};
export declare type FieldFolderPath = string;
export declare type FileFormat = 'CSV' | 'TSV' | 'CLF' | 'ELF' | 'XLSX' | 'JSON' | string;
/**
 * @stability stable
 */
export interface FilterOperation {
    /**
     * An expression that must evaluate to a Boolean value.
     *
     * Rows for which the expression evaluates to true are kept in the dataset.
     *
     * @stability stable
     */
    readonly conditionExpression: Expression;
}
export declare type FilterOperator = 'StringEquals' | string;
export declare type FolderColumnList = String[];
/**
 * @stability stable
 */
export interface GeoSpatialColumnGroup {
    /**
     * A display name for the hierarchy.
     *
     * @stability stable
     */
    readonly name: ColumnGroupName;
    /**
     * Country code.
     *
     * @stability stable
     */
    readonly countryCode: GeoSpatialCountryCode;
    /**
     * Columns in this hierarchy.
     *
     * @stability stable
     */
    readonly columns: ColumnList;
}
export declare type GeoSpatialCountryCode = 'US' | string;
export declare type GeoSpatialDataRole = 'COUNTRY' | 'STATE' | 'COUNTY' | 'CITY' | 'POSTCODE' | 'LONGITUDE' | 'LATITUDE' | string;
/**
 * @stability stable
 */
export interface GetDashboardEmbedUrlRequest {
    /**
     * The ID for the AWS account that contains the dashboard that you're embedding.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the AWS Identity and Access Management (IAM) policy.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The authentication method that the user uses to sign in.
     *
     * @stability stable
     */
    readonly identityType: EmbeddingIdentityType;
    /**
     * How many minutes the session is valid.
     *
     * The session lifetime must be 15-600 minutes.
     *
     * @stability stable
     */
    readonly sessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * Remove the undo/redo button on the embedded dashboard.
     *
     * The default is FALSE, which enables the undo/redo button.
     *
     * @stability stable
     */
    readonly undoRedoDisabled?: Boolean;
    /**
     * Remove the reset button on the embedded dashboard.
     *
     * The default is FALSE, which enables the reset button.
     *
     * @stability stable
     */
    readonly resetDisabled?: Boolean;
    /**
     * Adds persistence of state for the user session in an embedded dashboard.
     *
     * Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE.
     *
     * @stability stable
     */
    readonly statePersistenceEnabled?: Boolean;
    /**
     * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type.
     *
     * You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.   Omit this parameter for users in the third group – IAM users and IAM role-based sessions.
     *
     * @stability stable
     */
    readonly userArn?: Arn;
    /**
     * The QuickSight namespace that contains the dashboard IDs in this request.
     *
     * If you're not using a custom namespace, set this to "default".
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * A list of one or more dashboard IDs that you want to add to a session that includes anonymous users.
     *
     * The IdentityType parameter must be set to ANONYMOUS for this to work, because other identity types authenticate as QuickSight or IAM users. For example, if you set "--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS", the session can access all three dashboards.
     *
     * @stability stable
     */
    readonly additionalDashboardIds?: AdditionalDashboardIdList;
}
/**
 * @stability stable
 */
export interface GetDashboardEmbedUrlResponse {
    /**
     * A single-use URL that you can put into your server-side webpage to embed your dashboard.
     *
     * This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours.
     *
     * @stability stable
     */
    readonly embedUrl?: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface GetSessionEmbedUrlRequest {
    /**
     * The ID for the AWS account associated with your QuickSight subscription.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The URL you use to access the embedded session.
     *
     * The entry point URL is constrained to the following paths:    /start     /start/analyses     /start/dashboards     /start/favorites     /dashboards/DashboardId  - where DashboardId is the actual ID key from the QuickSight console URL of the dashboard    /analyses/AnalysisId  - where AnalysisId is the actual ID key from the QuickSight console URL of the analysis
     *
     * @stability stable
     */
    readonly entryPoint?: EntryPoint;
    /**
     * How many minutes the session is valid.
     *
     * The session lifetime must be 15-600 minutes.
     *
     * @stability stable
     */
    readonly sessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type.
     *
     * You can use this for any type of Amazon QuickSight users in your account (readers, authors, or admins). They need to be authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   AWS Identity and Access Management (IAM) users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation   Omit this parameter for users in the third group, IAM users and IAM role-based sessions.
     *
     * @stability stable
     */
    readonly userArn?: Arn;
}
/**
 * @stability stable
 */
export interface GetSessionEmbedUrlResponse {
    /**
     * A single-use URL that you can put into your server-side web page to embed your QuickSight session.
     *
     * This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours.
     *
     * @stability stable
     */
    readonly embedUrl?: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface Group {
    /**
     * The Amazon Resource Name (ARN) for the group.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The name of the group.
     *
     * @stability stable
     */
    readonly groupName?: GroupName;
    /**
     * The group description.
     *
     * @stability stable
     */
    readonly description?: GroupDescription;
    /**
     * The principal ID of the group.
     *
     * @stability stable
     */
    readonly principalId?: String;
}
export declare type GroupDescription = string;
export declare type GroupList = Group[];
/**
 * @stability stable
 */
export interface GroupMember {
    /**
     * The Amazon Resource Name (ARN) for the group member (user).
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The name of the group member (user).
     *
     * @stability stable
     */
    readonly memberName?: GroupMemberName;
}
export declare type GroupMemberList = GroupMember[];
export declare type GroupMemberName = string;
export declare type GroupName = string;
/**
 * @stability stable
 */
export interface GutterStyle {
    /**
     * This Boolean value controls whether to display a gutter space between sheet tiles.
     *
     * @stability stable
     */
    readonly show?: boolean;
}
export declare type HexColor = string;
export declare type Host = string;
/**
 * @stability stable
 */
export interface IAMPolicyAssignment {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId?: AwsAccountId;
    /**
     * Assignment ID.
     *
     * @stability stable
     */
    readonly assignmentId?: String;
    /**
     * Assignment name.
     *
     * @stability stable
     */
    readonly assignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Resource Name (ARN) for the IAM policy.
     *
     * @stability stable
     */
    readonly policyArn?: Arn;
    /**
     * Identities.
     *
     * @stability stable
     */
    readonly identities?: IdentityMap;
    /**
     * Assignment status.
     *
     * @stability stable
     */
    readonly assignmentStatus?: AssignmentStatus;
}
export declare type IAMPolicyAssignmentName = string;
/**
 * @stability stable
 */
export interface IAMPolicyAssignmentSummary {
    /**
     * Assignment name.
     *
     * @stability stable
     */
    readonly assignmentName?: IAMPolicyAssignmentName;
    /**
     * Assignment status.
     *
     * @stability stable
     */
    readonly assignmentStatus?: AssignmentStatus;
}
export declare type IAMPolicyAssignmentSummaryList = IAMPolicyAssignmentSummary[];
export declare type IdentityMap = {
    [key: string]: IdentityNameList;
};
export declare type IdentityName = string;
export declare type IdentityNameList = IdentityName[];
export declare type IdentityStore = 'QUICKSIGHT' | string;
export declare type IdentityType = 'IAM' | 'QUICKSIGHT' | string;
/**
 * @stability stable
 */
export interface Ingestion {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn: Arn;
    /**
     * Ingestion ID.
     *
     * @stability stable
     */
    readonly ingestionId?: IngestionId;
    /**
     * Ingestion status.
     *
     * @stability stable
     */
    readonly ingestionStatus: IngestionStatus;
    /**
     * Error information for this ingestion.
     *
     * @stability stable
     */
    readonly errorInfo?: ErrorInfo;
    /**
     * @stability stable
     */
    readonly rowInfo?: RowInfo;
    /**
     * @stability stable
     */
    readonly queueInfo?: QueueInfo;
    /**
     * The time that this ingestion started.
     *
     * @stability stable
     */
    readonly createdTime: timestamp;
    /**
     * The time that this ingestion took, measured in seconds.
     *
     * @stability stable
     */
    readonly ingestionTimeInSeconds?: long;
    /**
     * The size of the data ingested, in bytes.
     *
     * @stability stable
     */
    readonly ingestionSizeInBytes?: long;
    /**
     * Event source for this ingestion.
     *
     * @stability stable
     */
    readonly requestSource?: IngestionRequestSource;
    /**
     * Type of this ingestion.
     *
     * @stability stable
     */
    readonly requestType?: IngestionRequestType;
}
export declare type IngestionErrorType = 'FAILURE_TO_ASSUME_ROLE' | 'INGESTION_SUPERSEDED' | 'INGESTION_CANCELED' | 'DATA_SET_DELETED' | 'DATA_SET_NOT_SPICE' | 'S3_UPLOADED_FILE_DELETED' | 'S3_MANIFEST_ERROR' | 'DATA_TOLERANCE_EXCEPTION' | 'SPICE_TABLE_NOT_FOUND' | 'DATA_SET_SIZE_LIMIT_EXCEEDED' | 'ROW_SIZE_LIMIT_EXCEEDED' | 'ACCOUNT_CAPACITY_LIMIT_EXCEEDED' | 'CUSTOMER_ERROR' | 'DATA_SOURCE_NOT_FOUND' | 'IAM_ROLE_NOT_AVAILABLE' | 'CONNECTION_FAILURE' | 'SQL_TABLE_NOT_FOUND' | 'PERMISSION_DENIED' | 'SSL_CERTIFICATE_VALIDATION_FAILURE' | 'OAUTH_TOKEN_FAILURE' | 'SOURCE_API_LIMIT_EXCEEDED_FAILURE' | 'PASSWORD_AUTHENTICATION_FAILURE' | 'SQL_SCHEMA_MISMATCH_ERROR' | 'INVALID_DATE_FORMAT' | 'INVALID_DATAPREP_SYNTAX' | 'SOURCE_RESOURCE_LIMIT_EXCEEDED' | 'SQL_INVALID_PARAMETER_VALUE' | 'QUERY_TIMEOUT' | 'SQL_NUMERIC_OVERFLOW' | 'UNRESOLVABLE_HOST' | 'UNROUTABLE_HOST' | 'SQL_EXCEPTION' | 'S3_FILE_INACCESSIBLE' | 'IOT_FILE_NOT_FOUND' | 'IOT_DATA_SET_FILE_EMPTY' | 'INVALID_DATA_SOURCE_CONFIG' | 'DATA_SOURCE_AUTH_FAILED' | 'DATA_SOURCE_CONNECTION_FAILED' | 'FAILURE_TO_PROCESS_JSON_FILE' | 'INTERNAL_SERVICE_ERROR' | string;
export declare type IngestionId = string;
export declare type IngestionMaxResults = number;
export declare type IngestionRequestSource = 'MANUAL' | 'SCHEDULED' | string;
export declare type IngestionRequestType = 'INITIAL_INGESTION' | 'EDIT' | 'INCREMENTAL_REFRESH' | 'FULL_REFRESH' | string;
export declare type IngestionStatus = 'INITIALIZED' | 'QUEUED' | 'RUNNING' | 'FAILED' | 'COMPLETED' | 'CANCELLED' | string;
export declare type Ingestions = Ingestion[];
/**
 * @stability stable
 */
export interface InputColumn {
    /**
     * The name of this column in the underlying data source.
     *
     * @stability stable
     */
    readonly name: ColumnName;
    /**
     * The data type of the column.
     *
     * @stability stable
     */
    readonly type: InputColumnDataType;
}
export declare type InputColumnDataType = 'STRING' | 'INTEGER' | 'DECIMAL' | 'DATETIME' | 'BIT' | 'BOOLEAN' | 'JSON' | string;
export declare type InputColumnList = InputColumn[];
export declare type InstanceId = string;
/**
 * @stability stable
 */
export interface IntegerParameter {
    /**
     * The name of the integer parameter.
     *
     * @stability stable
     */
    readonly name: NonEmptyString;
    /**
     * The values for the integer parameter.
     *
     * @stability stable
     */
    readonly values: LongList;
}
export declare type IntegerParameterList = IntegerParameter[];
/**
 * @stability stable
 */
export interface JiraParameters {
    /**
     * The base URL of the Jira site.
     *
     * @stability stable
     */
    readonly siteBaseUrl: SiteBaseUrl;
}
/**
 * @stability stable
 */
export interface JoinInstruction {
    /**
     * The operand on the left side of a join.
     *
     * @stability stable
     */
    readonly leftOperand: LogicalTableId;
    /**
     * The operand on the right side of a join.
     *
     * @stability stable
     */
    readonly rightOperand: LogicalTableId;
    /**
     * Join key properties of the left operand.
     *
     * @stability stable
     */
    readonly leftJoinKeyProperties?: JoinKeyProperties;
    /**
     * Join key properties of the right operand.
     *
     * @stability stable
     */
    readonly rightJoinKeyProperties?: JoinKeyProperties;
    /**
     * The type of join that it is.
     *
     * @stability stable
     */
    readonly type: JoinType;
    /**
     * The join instructions provided in the ON clause of a join.
     *
     * @stability stable
     */
    readonly onClause: OnClause;
}
/**
 * @stability stable
 */
export interface JoinKeyProperties {
    /**
     * A value that indicates that a row in a table is uniquely identified by the columns in a join key.
     *
     * This is used by QuickSight to optimize query performance.
     *
     * @stability stable
     */
    readonly uniqueKey?: Boolean;
}
export declare type JoinType = 'INNER' | 'OUTER' | 'LEFT' | 'RIGHT' | string;
/**
 * @stability stable
 */
export interface ListAnalysesRequest {
    /**
     * The ID of the AWS account that contains the analyses.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListAnalysesResponse {
    /**
     * Metadata describing each of the analyses that are listed.
     *
     * @stability stable
     */
    readonly analysisSummaryList?: AnalysisSummaryList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListDashboardVersionsRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're listing versions for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListDashboardVersionsResponse {
    /**
     * A structure that contains information about each version of the dashboard.
     *
     * @stability stable
     */
    readonly dashboardVersionSummaryList?: DashboardVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListDashboardsRequest {
    /**
     * The ID of the AWS account that contains the dashboards that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListDashboardsResponse {
    /**
     * A structure that contains all of the dashboards in your AWS account.
     *
     * This structure provides basic information about the dashboards.
     *
     * @stability stable
     */
    readonly dashboardSummaryList?: DashboardSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListDataSetsRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListDataSetsResponse {
    /**
     * The list of dataset summaries.
     *
     * @stability stable
     */
    readonly dataSetSummaries?: DataSetSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListDataSourcesRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListDataSourcesResponse {
    /**
     * A list of data sources.
     *
     * @stability stable
     */
    readonly dataSources?: DataSourceList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListGroupMembershipsRequest {
    /**
     * The name of the group that you want to see a membership list of.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return from this request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface ListGroupMembershipsResponse {
    /**
     * The list of the members of the group.
     *
     * @stability stable
     */
    readonly groupMemberList?: GroupMemberList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListGroupsRequest {
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface ListGroupsResponse {
    /**
     * The list of the groups.
     *
     * @stability stable
     */
    readonly groupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListIAMPolicyAssignmentsForUserRequest {
    /**
     * The ID of the AWS account that contains the assignments.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The name of the user.
     *
     * @stability stable
     */
    readonly userName: UserName;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
    /**
     * The namespace of the assignment.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface ListIAMPolicyAssignmentsForUserResponse {
    /**
     * The active assignments for this user.
     *
     * @stability stable
     */
    readonly activeAssignments?: ActiveIAMPolicyAssignmentList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListIAMPolicyAssignmentsRequest {
    /**
     * The ID of the AWS account that contains these IAM policy assignments.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The status of the assignments.
     *
     * @stability stable
     */
    readonly assignmentStatus?: AssignmentStatus;
    /**
     * The namespace for the assignments.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListIAMPolicyAssignmentsResponse {
    /**
     * Information describing the IAM policy assignments.
     *
     * @stability stable
     */
    readonly iAMPolicyAssignments?: IAMPolicyAssignmentSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListIngestionsRequest {
    /**
     * The ID of the dataset used in the ingestion.
     *
     * @stability stable
     */
    readonly dataSetId: string;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: string;
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: IngestionMaxResults;
}
/**
 * @stability stable
 */
export interface ListIngestionsResponse {
    /**
     * A list of the ingestions.
     *
     * @stability stable
     */
    readonly ingestions?: Ingestions;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: string;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: string;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListNamespacesRequest {
    /**
     * The ID for the AWS account that contains the QuickSight namespaces that you want to list.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListNamespacesResponse {
    /**
     * The information about the namespaces in this AWS account.
     *
     * The response includes the namespace ARN, name, AWS Region, notification email address, creation status, and identity store.
     *
     * @stability stable
     */
    readonly namespaces?: Namespaces;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want a list of tags for.
     *
     * @stability stable
     */
    readonly resourceArn: Arn;
}
/**
 * @stability stable
 */
export interface ListTagsForResourceResponse {
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     *
     * @stability stable
     */
    readonly tags?: TagList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListTemplateAliasesRequest {
    /**
     * The ID of the AWS account that contains the template aliases that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListTemplateAliasesResponse {
    /**
     * A structure containing the list of the template's aliases.
     *
     * @stability stable
     */
    readonly templateAliasList?: TemplateAliasList;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
}
/**
 * @stability stable
 */
export interface ListTemplateVersionsRequest {
    /**
     * The ID of the AWS account that contains the templates that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListTemplateVersionsResponse {
    /**
     * A structure containing a list of all the versions of the specified template.
     *
     * @stability stable
     */
    readonly templateVersionSummaryList?: TemplateVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListTemplatesRequest {
    /**
     * The ID of the AWS account that contains the templates that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListTemplatesResponse {
    /**
     * A structure containing information about the templates in the list.
     *
     * @stability stable
     */
    readonly templateSummaryList?: TemplateSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListThemeAliasesRequest {
    /**
     * The ID of the AWS account that contains the theme aliases that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListThemeAliasesResponse {
    /**
     * A structure containing the list of the theme's aliases.
     *
     * @stability stable
     */
    readonly themeAliasList?: ThemeAliasList;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
}
/**
 * @stability stable
 */
export interface ListThemeVersionsRequest {
    /**
     * The ID of the AWS account that contains the themes that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListThemeVersionsResponse {
    /**
     * A structure containing a list of all the versions of the specified theme.
     *
     * @stability stable
     */
    readonly themeVersionSummaryList?: ThemeVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListThemesRequest {
    /**
     * The ID of the AWS account that contains the themes that you're listing.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
    /**
     * The type of themes that you want to list.
     *
     * Valid options include the following:    ALL (default)- Display all existing themes.    CUSTOM - Display only the themes created by people using Amazon QuickSight.    QUICKSIGHT - Display only the starting themes defined by QuickSight.
     *
     * @stability stable
     */
    readonly type?: ThemeType;
}
/**
 * @stability stable
 */
export interface ListThemesResponse {
    /**
     * Information about the themes in the list.
     *
     * @stability stable
     */
    readonly themeSummaryList?: ThemeSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ListUserGroupsRequest {
    /**
     * The Amazon QuickSight user name that you want to list group memberships for.
     *
     * @stability stable
     */
    readonly userName: UserName;
    /**
     * The AWS account ID that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return from this request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface ListUserGroupsResponse {
    /**
     * The list of groups the user is a member of.
     *
     * @stability stable
     */
    readonly groupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface ListUsersRequest {
    /**
     * The ID for the AWS account that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return from this request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface ListUsersResponse {
    /**
     * The list of users.
     *
     * @stability stable
     */
    readonly userList?: UserList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface LogicalTable {
    /**
     * A display name for the logical table.
     *
     * @stability stable
     */
    readonly alias: LogicalTableAlias;
    /**
     * Transform operations that act on this logical table.
     *
     * @stability stable
     */
    readonly dataTransforms?: TransformOperationList;
    /**
     * Source of this logical table.
     *
     * @stability stable
     */
    readonly source: LogicalTableSource;
}
export declare type LogicalTableAlias = string;
export declare type LogicalTableId = string;
export declare type LogicalTableMap = {
    [key: string]: LogicalTable;
};
/**
 * @stability stable
 */
export interface LogicalTableSource {
    /**
     * Specifies the result of a join of two logical tables.
     *
     * @stability stable
     */
    readonly joinInstruction?: JoinInstruction;
    /**
     * Physical table ID.
     *
     * @stability stable
     */
    readonly physicalTableId?: PhysicalTableId;
}
export declare type Long = number;
export declare type LongList = Long[];
/**
 * @stability stable
 */
export interface ManifestFileLocation {
    /**
     * Amazon S3 bucket.
     *
     * @stability stable
     */
    readonly bucket: S3Bucket;
    /**
     * Amazon S3 key that identifies an object.
     *
     * @stability stable
     */
    readonly key: S3Key;
}
/**
 * @stability stable
 */
export interface MarginStyle {
    /**
     * This Boolean value controls whether to display sheet margins.
     *
     * @stability stable
     */
    readonly show?: boolean;
}
/**
 * @stability stable
 */
export interface MariaDbParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
export declare type MaxResults = number;
/**
 * @stability stable
 */
export interface MySqlParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
export declare type Namespace = string;
/**
 * @stability stable
 */
export interface NamespaceError {
    /**
     * The error type.
     *
     * @stability stable
     */
    readonly type?: NamespaceErrorType;
    /**
     * The message for the error.
     *
     * @stability stable
     */
    readonly message?: String;
}
export declare type NamespaceErrorType = 'PERMISSION_DENIED' | 'INTERNAL_SERVICE_ERROR' | string;
/**
 * @stability stable
 */
export interface NamespaceInfoV2 {
    /**
     * The name of the error.
     *
     * @stability stable
     */
    readonly name?: Namespace;
    /**
     * The namespace ARN.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The namespace AWS Region.
     *
     * @stability stable
     */
    readonly capacityRegion?: String;
    /**
     * The creation status of a namespace that is not yet completely created.
     *
     * @stability stable
     */
    readonly creationStatus?: NamespaceStatus;
    /**
     * The identity store used for the namespace.
     *
     * @stability stable
     */
    readonly identityStore?: IdentityStore;
    /**
     * An error that occurred when the namespace was created.
     *
     * @stability stable
     */
    readonly namespaceError?: NamespaceError;
}
export declare type NamespaceStatus = 'CREATED' | 'CREATING' | 'DELETING' | 'RETRYABLE_FAILURE' | 'NON_RETRYABLE_FAILURE' | string;
export declare type Namespaces = NamespaceInfoV2[];
export declare type NonEmptyString = string;
export declare type OnClause = string;
export declare type OptionalPort = number;
/**
 * @stability stable
 */
export interface OracleParameters {
    /**
     * An Oracle host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
/**
 * @stability stable
 */
export interface OutputColumn {
    /**
     * A display name for the dataset.
     *
     * @stability stable
     */
    readonly name?: ColumnName;
    /**
     * A description for a column.
     *
     * @stability stable
     */
    readonly description?: ColumnDescriptiveText;
    /**
     * Type.
     *
     * @stability stable
     */
    readonly type?: ColumnDataType;
}
export declare type OutputColumnList = OutputColumn[];
/**
 * @stability stable
 */
export interface Parameters {
    /**
     * String parameters.
     *
     * @stability stable
     */
    readonly stringParameters?: StringParameterList;
    /**
     * Integer parameters.
     *
     * @stability stable
     */
    readonly integerParameters?: IntegerParameterList;
    /**
     * Decimal parameters.
     *
     * @stability stable
     */
    readonly decimalParameters?: DecimalParameterList;
    /**
     * Date-time parameters.
     *
     * @stability stable
     */
    readonly dateTimeParameters?: DateTimeParameterList;
}
export declare type Password = string;
/**
 * @stability stable
 */
export interface PhysicalTable {
    /**
     * A physical table type for relational data sources.
     *
     * @stability stable
     */
    readonly relationalTable?: RelationalTable;
    /**
     * A physical table type built from the results of the custom SQL query.
     *
     * @stability stable
     */
    readonly customSql?: CustomSql;
    /**
     * A physical table type for as S3 data source.
     *
     * @stability stable
     */
    readonly s3Source?: S3Source;
}
export declare type PhysicalTableId = string;
export declare type PhysicalTableMap = {
    [key: string]: PhysicalTable;
};
export declare type Port = number;
export declare type PositiveInteger = number;
/**
 * @stability stable
 */
export interface PostgreSqlParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
/**
 * @stability stable
 */
export interface PrestoParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Catalog.
     *
     * @stability stable
     */
    readonly catalog: Catalog;
}
export declare type Principal = string;
export declare type PrincipalList = String[];
/**
 * @stability stable
 */
export interface ProjectOperation {
    /**
     * Projected columns.
     *
     * @stability stable
     */
    readonly projectedColumns: ProjectedColumnList;
}
export declare type ProjectedColumnList = String[];
export declare type Query = string;
/**
 * @stability stable
 */
export interface QueueInfo {
    /**
     * The ID of the queued ingestion.
     *
     * @stability stable
     */
    readonly waitingOnIngestion: string;
    /**
     * The ID of the ongoing ingestion.
     *
     * The queued ingestion is waiting for the ongoing ingestion to complete.
     *
     * @stability stable
     */
    readonly queuedIngestion: string;
}
/**
 * @stability stable
 */
export interface RdsParameters {
    /**
     * Instance ID.
     *
     * @stability stable
     */
    readonly instanceId: InstanceId;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
export declare type RecoveryWindowInDays = number;
/**
 * @stability stable
 */
export interface RedshiftParameters {
    /**
     * Host.
     *
     * This field can be blank if ClusterId is provided.
     *
     * @stability stable
     */
    readonly host?: Host;
    /**
     * Port.
     *
     * This field can be blank if the ClusterId is provided.
     *
     * @stability stable
     */
    readonly port?: OptionalPort;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
    /**
     * Cluster ID.
     *
     * This field can be blank if the Host and Port are provided.
     *
     * @stability stable
     */
    readonly clusterId?: ClusterId;
}
/**
 * @stability stable
 */
export interface RegisterUserRequest {
    /**
     * Amazon QuickSight supports several ways of managing the identity of users.
     *
     * This parameter accepts two values:    IAM: A user whose identity maps to an existing IAM user or role.     QUICKSIGHT: A user whose identity is owned and managed internally by Amazon QuickSight.
     *
     * @stability stable
     */
    readonly identityType: IdentityType;
    /**
     * The email address of the user that you want to register.
     *
     * @stability stable
     */
    readonly email: String;
    /**
     * The Amazon QuickSight role for the user.
     *
     * The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.
     *
     * @stability stable
     */
    readonly userRole: UserRole;
    /**
     * The ARN of the IAM user or role that you are registering with Amazon QuickSight.
     *
     * @stability stable
     */
    readonly iamArn?: String;
    /**
     * You need to use this parameter only when you register one or more users using an assumed IAM role.
     *
     * You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see  assume-role  in the AWS CLI Reference.
     *
     * @stability stable
     */
    readonly sessionName?: RoleSessionName;
    /**
     * The ID for the AWS account that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
    /**
     * The Amazon QuickSight user name that you want to create for the user you are registering.
     *
     * @stability stable
     */
    readonly userName?: UserName;
    /**
     * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user.
     *
     * Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   To add custom permissions to an existing user, use  UpdateUser  instead. A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a QuickSight user.  QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader). This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).
     *
     * @stability stable
     */
    readonly customPermissionsName?: RoleName;
}
/**
 * @stability stable
 */
export interface RegisterUserResponse {
    /**
     * The user's user name.
     *
     * @stability stable
     */
    readonly user?: User;
    /**
     * The URL the user visits to complete registration and provide a password.
     *
     * This is returned only for users with an identity type of QUICKSIGHT.
     *
     * @stability stable
     */
    readonly userInvitationUrl?: String;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface RelationalTable {
    /**
     * The Amazon Resource Name (ARN) for the data source.
     *
     * @stability stable
     */
    readonly dataSourceArn: Arn;
    /**
     * The catalog associated with a table.
     *
     * @stability stable
     */
    readonly catalog?: RelationalTableCatalog;
    /**
     * The schema name.
     *
     * This name applies to certain relational database engines.
     *
     * @stability stable
     */
    readonly schema?: RelationalTableSchema;
    /**
     * The name of the relational table.
     *
     * @stability stable
     */
    readonly name: RelationalTableName;
    /**
     * The column schema of the table.
     *
     * @stability stable
     */
    readonly inputColumns: InputColumnList;
}
export declare type RelationalTableCatalog = string;
export declare type RelationalTableName = string;
export declare type RelationalTableSchema = string;
/**
 * @stability stable
 */
export interface RenameColumnOperation {
    /**
     * The name of the column to be renamed.
     *
     * @stability stable
     */
    readonly columnName: ColumnName;
    /**
     * The new name for the column.
     *
     * @stability stable
     */
    readonly newColumnName: ColumnName;
}
export declare type ResourceId = string;
export declare type ResourceName = string;
/**
 * @stability stable
 */
export interface ResourcePermission {
    /**
     * The Amazon Resource Name (ARN) of the principal.
     *
     * This can be one of the following:   The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)   The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)   The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight ARN. Use this option only to share resources (templates) across AWS accounts. (This is less common.)
     *
     * @stability stable
     */
    readonly principal: Principal;
    /**
     * The IAM action to grant or revoke permissions on.
     *
     * @stability stable
     */
    readonly actions: ActionList;
}
export declare type ResourcePermissionList = ResourcePermission[];
export declare type ResourceStatus = 'CREATION_IN_PROGRESS' | 'CREATION_SUCCESSFUL' | 'CREATION_FAILED' | 'UPDATE_IN_PROGRESS' | 'UPDATE_SUCCESSFUL' | 'UPDATE_FAILED' | 'DELETED' | string;
/**
 * @stability stable
 */
export interface RestoreAnalysisRequest {
    /**
     * The ID of the AWS account that contains the analysis.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the analysis that you're restoring.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
}
/**
 * @stability stable
 */
export interface RestoreAnalysisResponse {
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The Amazon Resource Name (ARN) of the analysis that you're restoring.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the analysis that you're restoring.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
export declare type RestrictiveResourceId = string;
export declare type RoleName = string;
export declare type RoleSessionName = string;
/**
 * @stability stable
 */
export interface RowInfo {
    /**
     * The number of rows that were ingested.
     *
     * @stability stable
     */
    readonly rowsIngested?: long;
    /**
     * The number of rows that were not ingested.
     *
     * @stability stable
     */
    readonly rowsDropped?: long;
}
/**
 * @stability stable
 */
export interface RowLevelPermissionDataSet {
    /**
     * The namespace associated with the dataset that contains permissions for RLS.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.
     *
     * @stability stable
     */
    readonly arn: Arn;
    /**
     * The type of permissions to use when interpretting the permissions for RLS.
     *
     * DENY_ACCESS is included for backward compatibility only.
     *
     * @stability stable
     */
    readonly permissionPolicy: RowLevelPermissionPolicy;
}
export declare type RowLevelPermissionPolicy = 'GRANT_ACCESS' | 'DENY_ACCESS' | string;
export declare type S3Bucket = string;
export declare type S3Key = string;
/**
 * @stability stable
 */
export interface S3Parameters {
    /**
     * Location of the Amazon S3 manifest file.
     *
     * This is NULL if the manifest file was uploaded in the console.
     *
     * @stability stable
     */
    readonly manifestFileLocation: ManifestFileLocation;
}
/**
 * @stability stable
 */
export interface S3Source {
    /**
     * The Amazon Resource Name (ARN) for the data source.
     *
     * @stability stable
     */
    readonly dataSourceArn: Arn;
    /**
     * Information about the format for the S3 source file or files.
     *
     * @stability stable
     */
    readonly uploadSettings?: UploadSettings;
    /**
     * A physical table type for as S3 data source.
     *
     * @stability stable
     */
    readonly inputColumns: InputColumnList;
}
/**
 * @stability stable
 */
export interface SearchAnalysesRequest {
    /**
     * The ID of the AWS account that contains the analyses that you're searching for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The structure for the search filters that you want to apply to your search.
     *
     * @stability stable
     */
    readonly filters: AnalysisSearchFilterList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to return.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface SearchAnalysesResponse {
    /**
     * Metadata describing the analyses that you searched for.
     *
     * @stability stable
     */
    readonly analysisSummaryList?: AnalysisSummaryList;
    /**
     * A pagination token that can be used in a subsequent request.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface SearchDashboardsRequest {
    /**
     * The ID of the AWS account that contains the user whose dashboards you're searching for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The filters to apply to the search.
     *
     * Currently, you can search only by user name, for example, "Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ]
     *
     * @stability stable
     */
    readonly filters: DashboardSearchFilterList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     *
     * @stability stable
     */
    readonly maxResults?: MaxResults;
}
/**
 * @stability stable
 */
export interface SearchDashboardsResponse {
    /**
     * The list of dashboards owned by the user specified in Filters in your request.
     *
     * @stability stable
     */
    readonly dashboardSummaryList?: DashboardSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     *
     * @stability stable
     */
    readonly nextToken?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface ServiceNowParameters {
    /**
     * URL of the base site.
     *
     * @stability stable
     */
    readonly siteBaseUrl: SiteBaseUrl;
}
export declare type SessionLifetimeInMinutes = number;
/**
 * @stability stable
 */
export interface Sheet {
    /**
     * The unique identifier associated with a sheet.
     *
     * @stability stable
     */
    readonly sheetId?: RestrictiveResourceId;
    /**
     * The name of a sheet.
     *
     * This name is displayed on the sheet's tab in the QuickSight console.
     *
     * @stability stable
     */
    readonly name?: NonEmptyString;
}
/**
 * @stability stable
 */
export interface SheetControlsOption {
    /**
     * Visibility state.
     *
     * @stability stable
     */
    readonly visibilityState?: DashboardUIState;
}
export declare type SheetList = Sheet[];
/**
 * @stability stable
 */
export interface SheetStyle {
    /**
     * The display options for tiles.
     *
     * @stability stable
     */
    readonly tile?: TileStyle;
    /**
     * The layout options for tiles.
     *
     * @stability stable
     */
    readonly tileLayout?: TileLayoutStyle;
}
export declare type SiteBaseUrl = string;
/**
 * @stability stable
 */
export interface SnowflakeParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
    /**
     * Warehouse.
     *
     * @stability stable
     */
    readonly warehouse: Warehouse;
}
/**
 * @stability stable
 */
export interface SparkParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
}
export declare type SqlQuery = string;
/**
 * @stability stable
 */
export interface SqlServerParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
/**
 * @stability stable
 */
export interface SslProperties {
    /**
     * A Boolean option to control whether SSL should be disabled.
     *
     * @stability stable
     */
    readonly disableSsl?: Boolean;
}
export declare type StatusCode = number;
export declare type String = string;
export declare type StringList = String[];
/**
 * @stability stable
 */
export interface StringParameter {
    /**
     * A display name for a string parameter.
     *
     * @stability stable
     */
    readonly name: NonEmptyString;
    /**
     * The values of a string parameter.
     *
     * @stability stable
     */
    readonly values: StringList;
}
export declare type StringParameterList = StringParameter[];
/**
 * @stability stable
 */
export interface Tag {
    /**
     * Tag key.
     *
     * @stability stable
     */
    readonly key: TagKey;
    /**
     * Tag value.
     *
     * @stability stable
     */
    readonly value: TagValue;
}
/**
 * @stability stable
 */
export interface TagColumnOperation {
    /**
     * The column that this operation acts on.
     *
     * @stability stable
     */
    readonly columnName: ColumnName;
    /**
     * The dataset column tag, currently only used for geospatial type tagging.
     *
     * .  This is not tags for the AWS tagging feature. .
     *
     * @stability stable
     */
    readonly tags: ColumnTagList;
}
export declare type TagKey = string;
export declare type TagKeyList = TagKey[];
export declare type TagList = Tag[];
/**
 * @stability stable
 */
export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag.
     *
     * @stability stable
     */
    readonly resourceArn: Arn;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     *
     * @stability stable
     */
    readonly tags: TagList;
}
/**
 * @stability stable
 */
export interface TagResourceResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
export declare type TagValue = string;
/**
 * @stability stable
 */
export interface Template {
    /**
     * The Amazon Resource Name (ARN) of the template.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The display name of the template.
     *
     * @stability stable
     */
    readonly name?: TemplateName;
    /**
     * A structure describing the versions of the template.
     *
     * @stability stable
     */
    readonly version?: TemplateVersion;
    /**
     * The ID for the template.
     *
     * This is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * Time when this was last updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * Time when this was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
}
/**
 * @stability stable
 */
export interface TemplateAlias {
    /**
     * The display name of the template alias.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the template alias.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The version number of the template alias.
     *
     * @stability stable
     */
    readonly templateVersionNumber?: VersionNumber;
}
export declare type TemplateAliasList = TemplateAlias[];
/**
 * @stability stable
 */
export interface TemplateError {
    /**
     * Type of error.
     *
     * @stability stable
     */
    readonly type?: TemplateErrorType;
    /**
     * Description of the error type.
     *
     * @stability stable
     */
    readonly message?: NonEmptyString;
}
export declare type TemplateErrorList = TemplateError[];
export declare type TemplateErrorType = 'SOURCE_NOT_FOUND' | 'DATA_SET_NOT_FOUND' | 'INTERNAL_FAILURE' | 'ACCESS_DENIED' | string;
export declare type TemplateName = string;
/**
 * @stability stable
 */
export interface TemplateSourceAnalysis {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn: Arn;
    /**
     * A structure containing information about the dataset references used as placeholders in the template.
     *
     * @stability stable
     */
    readonly dataSetReferences: DataSetReferenceList;
}
/**
 * @stability stable
 */
export interface TemplateSourceEntity {
    /**
     * The source analysis, if it is based on an analysis.
     *
     * @stability stable
     */
    readonly sourceAnalysis?: TemplateSourceAnalysis;
    /**
     * The source template, if it is based on an template.
     *
     * @stability stable
     */
    readonly sourceTemplate?: TemplateSourceTemplate;
}
/**
 * @stability stable
 */
export interface TemplateSourceTemplate {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn: Arn;
}
/**
 * @stability stable
 */
export interface TemplateSummary {
    /**
     * A summary of a template.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the template.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * A display name for the template.
     *
     * @stability stable
     */
    readonly name?: TemplateName;
    /**
     * A structure containing a list of version numbers for the template summary.
     *
     * @stability stable
     */
    readonly latestVersionNumber?: VersionNumber;
    /**
     * The last time that this template was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last time that this template was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
}
export declare type TemplateSummaryList = TemplateSummary[];
/**
 * @stability stable
 */
export interface TemplateVersion {
    /**
     * The time that this template version was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * Errors associated with this template version.
     *
     * @stability stable
     */
    readonly errors?: TemplateErrorList;
    /**
     * The version number of the template version.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * Schema of the dataset identified by the placeholder.
     *
     * Any dashboard created from this template should be bound to new datasets matching the same schema described through this API operation.
     *
     * @stability stable
     */
    readonly dataSetConfigurations?: DataSetConfigurationList;
    /**
     * The description of the template.
     *
     * @stability stable
     */
    readonly description?: VersionDescription;
    /**
     * The Amazon Resource Name (ARN) of an analysis or template that was used to create this template.
     *
     * @stability stable
     */
    readonly sourceEntityArn?: Arn;
    /**
     * The ARN of the theme associated with this version of the template.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
    /**
     * A list of the associated sheets with the unique identifier and name of each sheet.
     *
     * @stability stable
     */
    readonly sheets?: SheetList;
}
/**
 * @stability stable
 */
export interface TemplateVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the template version.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The version number of the template version.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The time that this template version was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The status of the template version.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
    /**
     * The description of the template version.
     *
     * @stability stable
     */
    readonly description?: VersionDescription;
}
export declare type TemplateVersionSummaryList = TemplateVersionSummary[];
/**
 * @stability stable
 */
export interface TeradataParameters {
    /**
     * Host.
     *
     * @stability stable
     */
    readonly host: Host;
    /**
     * Port.
     *
     * @stability stable
     */
    readonly port: Port;
    /**
     * Database.
     *
     * @stability stable
     */
    readonly database: Database;
}
export declare type TextQualifier = 'DOUBLE_QUOTE' | 'SINGLE_QUOTE' | string;
/**
 * @stability stable
 */
export interface Theme {
    /**
     * The Amazon Resource Name (ARN) of the theme.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The name that the user gives to the theme.
     *
     * @stability stable
     */
    readonly name?: ThemeName;
    /**
     * The identifier that the user gives to the theme.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
    /**
     * @stability stable
     */
    readonly version?: ThemeVersion;
    /**
     * The date and time that the theme was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The date and time that the theme was last updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
    /**
     * The type of theme, based on how it was created.
     *
     * Valid values include: QUICKSIGHT and CUSTOM.
     *
     * @stability stable
     */
    readonly type?: ThemeType;
}
/**
 * @stability stable
 */
export interface ThemeAlias {
    /**
     * The Amazon Resource Name (ARN) of the theme alias.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The display name of the theme alias.
     *
     * @stability stable
     */
    readonly aliasName?: AliasName;
    /**
     * The version number of the theme alias.
     *
     * @stability stable
     */
    readonly themeVersionNumber?: VersionNumber;
}
export declare type ThemeAliasList = ThemeAlias[];
/**
 * @stability stable
 */
export interface ThemeConfiguration {
    /**
     * Color properties that apply to chart data colors.
     *
     * @stability stable
     */
    readonly dataColorPalette?: DataColorPalette;
    /**
     * Color properties that apply to the UI and to charts, excluding the colors that apply to data.
     *
     * @stability stable
     */
    readonly uIColorPalette?: UIColorPalette;
    /**
     * Display options related to sheets.
     *
     * @stability stable
     */
    readonly sheet?: SheetStyle;
}
/**
 * @stability stable
 */
export interface ThemeError {
    /**
     * The type of error.
     *
     * @stability stable
     */
    readonly type?: ThemeErrorType;
    /**
     * The error message.
     *
     * @stability stable
     */
    readonly message?: NonEmptyString;
}
export declare type ThemeErrorList = ThemeError[];
export declare type ThemeErrorType = 'INTERNAL_FAILURE' | string;
export declare type ThemeName = string;
/**
 * @stability stable
 */
export interface ThemeSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * the display name for the theme.
     *
     * @stability stable
     */
    readonly name?: ThemeName;
    /**
     * The ID of the theme.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
    /**
     * The latest version number for the theme.
     *
     * @stability stable
     */
    readonly latestVersionNumber?: VersionNumber;
    /**
     * The date and time that this theme was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The last date and time that this theme was updated.
     *
     * @stability stable
     */
    readonly lastUpdatedTime?: Timestamp;
}
export declare type ThemeSummaryList = ThemeSummary[];
export declare type ThemeType = 'QUICKSIGHT' | 'CUSTOM' | 'ALL' | string;
/**
 * @stability stable
 */
export interface ThemeVersion {
    /**
     * The version number of the theme.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The description of the theme.
     *
     * @stability stable
     */
    readonly description?: VersionDescription;
    /**
     * The Amazon QuickSight-defined ID of the theme that a custom theme inherits from.
     *
     * All themes initially inherit from a default QuickSight theme.
     *
     * @stability stable
     */
    readonly baseThemeId?: RestrictiveResourceId;
    /**
     * The date and time that this theme version was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The theme configuration, which contains all the theme display properties.
     *
     * @stability stable
     */
    readonly configuration?: ThemeConfiguration;
    /**
     * Errors associated with the theme.
     *
     * @stability stable
     */
    readonly errors?: ThemeErrorList;
    /**
     * The status of the theme version.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
}
/**
 * @stability stable
 */
export interface ThemeVersionSummary {
    /**
     * The version number of the theme version.
     *
     * @stability stable
     */
    readonly versionNumber?: VersionNumber;
    /**
     * The Amazon Resource Name (ARN) of the theme version.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The description of the theme version.
     *
     * @stability stable
     */
    readonly description?: VersionDescription;
    /**
     * The date and time that this theme version was created.
     *
     * @stability stable
     */
    readonly createdTime?: Timestamp;
    /**
     * The status of the theme version.
     *
     * @stability stable
     */
    readonly status?: ResourceStatus;
}
export declare type ThemeVersionSummaryList = ThemeVersionSummary[];
/**
 * @stability stable
 */
export interface TileLayoutStyle {
    /**
     * The gutter settings that apply between tiles.
     *
     * @stability stable
     */
    readonly gutter?: GutterStyle;
    /**
     * The margin settings that apply around the outside edge of sheets.
     *
     * @stability stable
     */
    readonly margin?: MarginStyle;
}
/**
 * @stability stable
 */
export interface TileStyle {
    /**
     * The border around a tile.
     *
     * @stability stable
     */
    readonly border?: BorderStyle;
}
export declare type Timestamp = Date;
export declare type TimestampList = Timestamp[];
/**
 * @stability stable
 */
export interface TransformOperation {
    /**
     * An operation that projects columns.
     *
     * Operations that come after a projection can only refer to projected columns.
     *
     * @stability stable
     */
    readonly projectOperation?: ProjectOperation;
    /**
     * An operation that filters rows based on some condition.
     *
     * @stability stable
     */
    readonly filterOperation?: FilterOperation;
    /**
     * An operation that creates calculated columns.
     *
     * Columns created in one such operation form a lexical closure.
     *
     * @stability stable
     */
    readonly createColumnsOperation?: CreateColumnsOperation;
    /**
     * An operation that renames a column.
     *
     * @stability stable
     */
    readonly renameColumnOperation?: RenameColumnOperation;
    /**
     * A transform operation that casts a column to a different type.
     *
     * @stability stable
     */
    readonly castColumnTypeOperation?: CastColumnTypeOperation;
    /**
     * An operation that tags a column with additional information.
     *
     * @stability stable
     */
    readonly tagColumnOperation?: TagColumnOperation;
}
export declare type TransformOperationList = TransformOperation[];
/**
 * @stability stable
 */
export interface TwitterParameters {
    /**
     * Twitter query string.
     *
     * @stability stable
     */
    readonly query: Query;
    /**
     * Maximum number of rows to query Twitter.
     *
     * @stability stable
     */
    readonly maxRows: PositiveInteger;
}
export declare type TypeCastFormat = string;
/**
 * @stability stable
 */
export interface UIColorPalette {
    /**
     * The color of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
     *
     * @stability stable
     */
    readonly primaryForeground?: HexColor;
    /**
     * The background color that applies to visuals and other high emphasis UI.
     *
     * @stability stable
     */
    readonly primaryBackground?: HexColor;
    /**
     * The foreground color that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
     *
     * @stability stable
     */
    readonly secondaryForeground?: HexColor;
    /**
     * The background color that applies to the sheet background and sheet controls.
     *
     * @stability stable
     */
    readonly secondaryBackground?: HexColor;
    /**
     * This color is that applies to selected states and buttons.
     *
     * @stability stable
     */
    readonly accent?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the accent color.
     *
     * @stability stable
     */
    readonly accentForeground?: HexColor;
    /**
     * The color that applies to error messages.
     *
     * @stability stable
     */
    readonly danger?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the error color.
     *
     * @stability stable
     */
    readonly dangerForeground?: HexColor;
    /**
     * This color that applies to warning and informational messages.
     *
     * @stability stable
     */
    readonly warning?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the warning color.
     *
     * @stability stable
     */
    readonly warningForeground?: HexColor;
    /**
     * The color that applies to success messages, for example the check mark for a successful download.
     *
     * @stability stable
     */
    readonly success?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the success color.
     *
     * @stability stable
     */
    readonly successForeground?: HexColor;
    /**
     * The color that applies to the names of fields that are identified as dimensions.
     *
     * @stability stable
     */
    readonly dimension?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the dimension color.
     *
     * @stability stable
     */
    readonly dimensionForeground?: HexColor;
    /**
     * The color that applies to the names of fields that are identified as measures.
     *
     * @stability stable
     */
    readonly measure?: HexColor;
    /**
     * The foreground color that applies to any text or other elements that appear over the measure color.
     *
     * @stability stable
     */
    readonly measureForeground?: HexColor;
}
/**
 * @stability stable
 */
export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to untag.
     *
     * @stability stable
     */
    readonly resourceArn: Arn;
    /**
     * The keys of the key-value pairs for the resource tag or tags assigned to the resource.
     *
     * @stability stable
     */
    readonly tagKeys: TagKeyList;
}
/**
 * @stability stable
 */
export interface UntagResourceResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateAccountCustomizationRequest {
    /**
     * The ID for the AWS account that you want to update QuickSight customizations for.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace that you want to update QuickSight customizations for.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The QuickSight customizations you're updating in the current AWS Region.
     *
     * @stability stable
     */
    readonly accountCustomization: AccountCustomization;
}
/**
 * @stability stable
 */
export interface UpdateAccountCustomizationResponse {
    /**
     * The Amazon Resource Name (ARN) for the updated customization for this AWS account.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID for the AWS account that you want to update QuickSight customizations for.
     *
     * @stability stable
     */
    readonly awsAccountId?: AwsAccountId;
    /**
     * The namespace associated with the customization that you're updating.
     *
     * @stability stable
     */
    readonly namespace?: Namespace;
    /**
     * The QuickSight customizations you're updating in the current AWS Region.
     *
     * @stability stable
     */
    readonly accountCustomization?: AccountCustomization;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateAccountSettingsRequest {
    /**
     * The ID for the AWS account that contains the QuickSight settings that you want to list.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The default namespace for this AWS account.
     *
     * Currently, the default is default. AWS Identity and Access Management (IAM) users that register for the first time with QuickSight provide an email that becomes associated with the default namespace.
     *
     * @stability stable
     */
    readonly defaultNamespace: Namespace;
    /**
     * The email address that you want QuickSight to send notifications to regarding your AWS account or QuickSight subscription.
     *
     * @stability stable
     */
    readonly notificationEmail?: String;
}
/**
 * @stability stable
 */
export interface UpdateAccountSettingsResponse {
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateAnalysisPermissionsRequest {
    /**
     * The ID of the AWS account that contains the analysis whose permissions you're updating.
     *
     * You must be using the AWS account that the analysis is in.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the analysis whose permissions you're updating.
     *
     * The ID is part of the analysis URL.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
    /**
     * A structure that describes the permissions to add and the principal to add them to.
     *
     * @stability stable
     */
    readonly grantPermissions?: UpdateResourcePermissionList;
    /**
     * A structure that describes the permissions to remove and the principal to remove them from.
     *
     * @stability stable
     */
    readonly revokePermissions?: UpdateResourcePermissionList;
}
/**
 * @stability stable
 */
export interface UpdateAnalysisPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the analysis that you updated.
     *
     * @stability stable
     */
    readonly analysisArn?: Arn;
    /**
     * The ID of the analysis that you updated permissions for.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * A structure that describes the principals and the resource-level permissions on an analysis.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateAnalysisRequest {
    /**
     * The ID of the AWS account that contains the analysis that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the analysis that you're updating.
     *
     * This ID displays in the URL of the analysis.
     *
     * @stability stable
     */
    readonly analysisId: RestrictiveResourceId;
    /**
     * A descriptive name for the analysis that you're updating.
     *
     * This name displays for the analysis in the QuickSight console.
     *
     * @stability stable
     */
    readonly name: AnalysisName;
    /**
     * The parameter names and override values that you want to use.
     *
     * An analysis can have any parameter type, and some parameters might accept multiple values.
     *
     * @stability stable
     */
    readonly parameters?: Parameters;
    /**
     * A source entity to use for the analysis that you're updating.
     *
     * This metadata structure contains details that describe a source template and one or more datasets.
     *
     * @stability stable
     */
    readonly sourceEntity: AnalysisSourceEntity;
    /**
     * The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating.
     *
     * To see the theme in the QuickSight console, make sure that you have access to it.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
}
/**
 * @stability stable
 */
export interface UpdateAnalysisResponse {
    /**
     * The ARN of the analysis that you're updating.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the analysis.
     *
     * @stability stable
     */
    readonly analysisId?: RestrictiveResourceId;
    /**
     * The update status of the last update that was made to the analysis.
     *
     * @stability stable
     */
    readonly updateStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateDashboardPermissionsRequest {
    /**
     * The ID of the AWS account that contains the dashboard whose permissions you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The permissions that you want to grant on this resource.
     *
     * @stability stable
     */
    readonly grantPermissions?: UpdateResourcePermissionList;
    /**
     * The permissions that you want to revoke from this resource.
     *
     * @stability stable
     */
    readonly revokePermissions?: UpdateResourcePermissionList;
}
/**
 * @stability stable
 */
export interface UpdateDashboardPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     *
     * @stability stable
     */
    readonly dashboardArn?: Arn;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * Information about the permissions on the dashboard.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateDashboardPublishedVersionRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The version number of the dashboard.
     *
     * @stability stable
     */
    readonly versionNumber: VersionNumber;
}
/**
 * @stability stable
 */
export interface UpdateDashboardPublishedVersionResponse {
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     *
     * @stability stable
     */
    readonly dashboardArn?: Arn;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateDashboardRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId: RestrictiveResourceId;
    /**
     * The display name of the dashboard.
     *
     * @stability stable
     */
    readonly name: DashboardName;
    /**
     * The entity that you are using as a source when you update the dashboard.
     *
     * In SourceEntity, you specify the type of object you're using as source. You can only update a dashboard from a template, so you use a SourceTemplate entity. If you need to update a dashboard from an analysis, first convert the analysis to a template by using the CreateTemplate API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
     *
     * @stability stable
     */
    readonly sourceEntity: DashboardSourceEntity;
    /**
     * A structure that contains the parameters of the dashboard.
     *
     * These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values.
     *
     * @stability stable
     */
    readonly parameters?: Parameters;
    /**
     * A description for the first version of the dashboard being created.
     *
     * @stability stable
     */
    readonly versionDescription?: VersionDescription;
    /**
     * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED.
     *
     * When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.
     *
     * @stability stable
     */
    readonly dashboardPublishOptions?: DashboardPublishOptions;
    /**
     * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard.
     *
     * If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same AWS account where you create the dashboard.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
}
/**
 * @stability stable
 */
export interface UpdateDashboardResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ARN of the dashboard, including the version number.
     *
     * @stability stable
     */
    readonly versionArn?: Arn;
    /**
     * The ID for the dashboard.
     *
     * @stability stable
     */
    readonly dashboardId?: RestrictiveResourceId;
    /**
     * The creation status of the request.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateDataSetPermissionsRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dataset whose permissions you want to update.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId: ResourceId;
    /**
     * The resource permissions that you want to grant to the dataset.
     *
     * @stability stable
     */
    readonly grantPermissions?: ResourcePermissionList;
    /**
     * The resource permissions that you want to revoke from the dataset.
     *
     * @stability stable
     */
    readonly revokePermissions?: ResourcePermissionList;
}
/**
 * @stability stable
 */
export interface UpdateDataSetPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @stability stable
     */
    readonly dataSetArn?: Arn;
    /**
     * The ID for the dataset whose permissions you want to update.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateDataSetRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to update.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId: ResourceId;
    /**
     * The display name for the dataset.
     *
     * @stability stable
     */
    readonly name: ResourceName;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     *
     * @stability stable
     */
    readonly physicalTableMap: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     *
     * @stability stable
     */
    readonly logicalTableMap?: LogicalTableMap;
    /**
     * Indicates whether you want to import the data into SPICE.
     *
     * @stability stable
     */
    readonly importMode: DataSetImportMode;
    /**
     * Groupings of columns that work together in certain QuickSight features.
     *
     * Currently, only geospatial hierarchy is supported.
     *
     * @stability stable
     */
    readonly columnGroups?: ColumnGroupList;
    /**
     * The folder that contains fields and nested subfolders for your dataset.
     *
     * @stability stable
     */
    readonly fieldFolders?: FieldFolderMap;
    /**
     * The row-level security configuration for the data you want to create.
     *
     * @stability stable
     */
    readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * A set of one or more definitions of a  ColumnLevelPermissionRule .
     *
     * @stability stable
     */
    readonly columnLevelPermissionRules?: ColumnLevelPermissionRuleList;
}
/**
 * @stability stable
 */
export interface UpdateDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID for the dataset that you want to create.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSetId?: ResourceId;
    /**
     * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     *
     * @stability stable
     */
    readonly ingestionArn?: Arn;
    /**
     * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     *
     * @stability stable
     */
    readonly ingestionId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateDataSourcePermissionsRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId: ResourceId;
    /**
     * A list of resource permissions that you want to grant on the data source.
     *
     * @stability stable
     */
    readonly grantPermissions?: ResourcePermissionList;
    /**
     * A list of resource permissions that you want to revoke on the data source.
     *
     * @stability stable
     */
    readonly revokePermissions?: ResourcePermissionList;
}
/**
 * @stability stable
 */
export interface UpdateDataSourcePermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     *
     * @stability stable
     */
    readonly dataSourceArn?: Arn;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateDataSourceRequest {
    /**
     * The AWS account ID.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId: ResourceId;
    /**
     * A display name for the data source.
     *
     * @stability stable
     */
    readonly name: ResourceName;
    /**
     * The parameters that QuickSight uses to connect to your underlying source.
     *
     * @stability stable
     */
    readonly dataSourceParameters?: DataSourceParameters;
    /**
     * The credentials that QuickSight that uses to connect to your underlying source.
     *
     * Currently, only credentials based on user name and password are supported.
     *
     * @stability stable
     */
    readonly credentials?: DataSourceCredentials;
    /**
     * Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
     *
     * @stability stable
     */
    readonly vpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
     *
     * @stability stable
     */
    readonly sslProperties?: SslProperties;
}
/**
 * @stability stable
 */
export interface UpdateDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ID of the data source.
     *
     * This ID is unique per AWS Region for each AWS account.
     *
     * @stability stable
     */
    readonly dataSourceId?: ResourceId;
    /**
     * The update status of the data source's last update.
     *
     * @stability stable
     */
    readonly updateStatus?: ResourceStatus;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateGroupRequest {
    /**
     * The name of the group that you want to update.
     *
     * @stability stable
     */
    readonly groupName: GroupName;
    /**
     * The description for the group that you want to update.
     *
     * @stability stable
     */
    readonly description?: GroupDescription;
    /**
     * The ID for the AWS account that the group is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
}
/**
 * @stability stable
 */
export interface UpdateGroupResponse {
    /**
     * The name of the group.
     *
     * @stability stable
     */
    readonly group?: Group;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateIAMPolicyAssignmentRequest {
    /**
     * The ID of the AWS account that contains the IAM policy assignment.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The name of the assignment, also called a rule.
     *
     * This name must be unique within an AWS account.
     *
     * @stability stable
     */
    readonly assignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace of the assignment.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
    /**
     * The status of the assignment.
     *
     * Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
     *
     * @stability stable
     */
    readonly assignmentStatus?: AssignmentStatus;
    /**
     * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
     *
     * @stability stable
     */
    readonly policyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that you want to assign the policy to.
     *
     * @stability stable
     */
    readonly identities?: IdentityMap;
}
/**
 * @stability stable
 */
export interface UpdateIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment or rule.
     *
     * @stability stable
     */
    readonly assignmentName?: IAMPolicyAssignmentName;
    /**
     * The ID of the assignment.
     *
     * @stability stable
     */
    readonly assignmentId?: String;
    /**
     * The ARN for the IAM policy applied to the QuickSight users and groups specified in this assignment.
     *
     * @stability stable
     */
    readonly policyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that the IAM policy is assigned to.
     *
     * @stability stable
     */
    readonly identities?: IdentityMap;
    /**
     * The status of the assignment.
     *
     * Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
     *
     * @stability stable
     */
    readonly assignmentStatus?: AssignmentStatus;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
export declare type UpdateResourcePermissionList = ResourcePermission[];
/**
 * @stability stable
 */
export interface UpdateTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the template alias that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The alias of the template that you want to update.
     *
     * If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
    /**
     * The version number of the template.
     *
     * @stability stable
     */
    readonly templateVersionNumber: VersionNumber;
}
/**
 * @stability stable
 */
export interface UpdateTemplateAliasResponse {
    /**
     * The template alias.
     *
     * @stability stable
     */
    readonly templateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateTemplatePermissionsRequest {
    /**
     * The ID of the AWS account that contains the template.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * A list of resource permissions to be granted on the template.
     *
     * @stability stable
     */
    readonly grantPermissions?: UpdateResourcePermissionList;
    /**
     * A list of resource permissions to be revoked from the template.
     *
     * @stability stable
     */
    readonly revokePermissions?: UpdateResourcePermissionList;
}
/**
 * @stability stable
 */
export interface UpdateTemplatePermissionsResponse {
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the template.
     *
     * @stability stable
     */
    readonly templateArn?: Arn;
    /**
     * A list of resource permissions to be set on the template.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateTemplateRequest {
    /**
     * The ID of the AWS account that contains the template that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId: RestrictiveResourceId;
    /**
     * The entity that you are using as a source when you update the template.
     *
     * In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
     *
     * @stability stable
     */
    readonly sourceEntity: TemplateSourceEntity;
    /**
     * A description of the current template version that is being updated.
     *
     * Every time you call UpdateTemplate, you create a new version of the template. Each version of the template maintains a description of the version in the VersionDescription field.
     *
     * @stability stable
     */
    readonly versionDescription?: VersionDescription;
    /**
     * The name for the template.
     *
     * @stability stable
     */
    readonly name?: TemplateName;
}
/**
 * @stability stable
 */
export interface UpdateTemplateResponse {
    /**
     * The ID for the template.
     *
     * @stability stable
     */
    readonly templateId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the template.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The ARN for the template, including the version information of the first version.
     *
     * @stability stable
     */
    readonly versionArn?: Arn;
    /**
     * The creation status of the template.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateThemeAliasRequest {
    /**
     * The ID of the AWS account that contains the theme alias that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The name of the theme alias that you want to update.
     *
     * @stability stable
     */
    readonly aliasName: AliasName;
    /**
     * The version number of the theme that the alias should reference.
     *
     * @stability stable
     */
    readonly themeVersionNumber: VersionNumber;
}
/**
 * @stability stable
 */
export interface UpdateThemeAliasResponse {
    /**
     * Information about the theme alias.
     *
     * @stability stable
     */
    readonly themeAlias?: ThemeAlias;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateThemePermissionsRequest {
    /**
     * The ID of the AWS account that contains the theme.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * A list of resource permissions to be granted for the theme.
     *
     * @stability stable
     */
    readonly grantPermissions?: UpdateResourcePermissionList;
    /**
     * A list of resource permissions to be revoked from the theme.
     *
     * @stability stable
     */
    readonly revokePermissions?: UpdateResourcePermissionList;
}
/**
 * @stability stable
 */
export interface UpdateThemePermissionsResponse {
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the theme.
     *
     * @stability stable
     */
    readonly themeArn?: Arn;
    /**
     * The resulting list of resource permissions for the theme.
     *
     * @stability stable
     */
    readonly permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UpdateThemeRequest {
    /**
     * The ID of the AWS account that contains the theme that you're updating.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId: RestrictiveResourceId;
    /**
     * The name for the theme.
     *
     * @stability stable
     */
    readonly name?: ThemeName;
    /**
     * The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
     *
     * All themes initially inherit from a default QuickSight theme.
     *
     * @stability stable
     */
    readonly baseThemeId: RestrictiveResourceId;
    /**
     * A description of the theme version that you're updating Every time that you call UpdateTheme, you create a new version of the theme.
     *
     * Each version of the theme maintains a description of the version in VersionDescription.
     *
     * @stability stable
     */
    readonly versionDescription?: VersionDescription;
    /**
     * The theme configuration, which contains the theme display properties.
     *
     * @stability stable
     */
    readonly configuration?: ThemeConfiguration;
}
/**
 * @stability stable
 */
export interface UpdateThemeResponse {
    /**
     * The ID for the theme.
     *
     * @stability stable
     */
    readonly themeId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the theme.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) for the new version of the theme.
     *
     * @stability stable
     */
    readonly versionArn?: Arn;
    /**
     * The creation status of the theme.
     *
     * @stability stable
     */
    readonly creationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
}
/**
 * @stability stable
 */
export interface UpdateUserRequest {
    /**
     * The Amazon QuickSight user name that you want to update.
     *
     * @stability stable
     */
    readonly userName: UserName;
    /**
     * The ID for the AWS account that the user is in.
     *
     * Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     *
     * @stability stable
     */
    readonly awsAccountId: AwsAccountId;
    /**
     * The namespace.
     *
     * Currently, you should set this to default.
     *
     * @stability stable
     */
    readonly namespace: Namespace;
    /**
     * The email address of the user that you want to update.
     *
     * @stability stable
     */
    readonly email: String;
    /**
     * The Amazon QuickSight role of the user.
     *
     * The role can be one of the following default security cohorts:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.   The name of the QuickSight role is invisible to the user except for the console screens dealing with permissions.
     *
     * @stability stable
     */
    readonly role: UserRole;
    /**
     * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user.
     *
     * Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a QuickSight user.  QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader). This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).
     *
     * @stability stable
     */
    readonly customPermissionsName?: RoleName;
    /**
     * A flag that you use to indicate that you want to remove all custom permissions from this user.
     *
     * Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.
     *
     * @stability stable
     */
    readonly unapplyCustomPermissions?: Boolean;
}
/**
 * @stability stable
 */
export interface UpdateUserResponse {
    /**
     * The Amazon QuickSight user.
     *
     * @stability stable
     */
    readonly user?: User;
    /**
     * The AWS request ID for this operation.
     *
     * @stability stable
     */
    readonly requestId?: String;
    /**
     * The HTTP status of the request.
     *
     * @stability stable
     */
    readonly status?: StatusCode;
}
/**
 * @stability stable
 */
export interface UploadSettings {
    /**
     * File format.
     *
     * @stability stable
     */
    readonly format?: FileFormat;
    /**
     * A row number to start reading data from.
     *
     * @stability stable
     */
    readonly startFromRow?: PositiveInteger;
    /**
     * Whether the file has a header row, or the files each have a header row.
     *
     * @stability stable
     */
    readonly containsHeader?: Boolean;
    /**
     * Text qualifier.
     *
     * @stability stable
     */
    readonly textQualifier?: TextQualifier;
    /**
     * The delimiter between values in the file.
     *
     * @stability stable
     */
    readonly delimiter?: Delimiter;
}
/**
 * @stability stable
 */
export interface User {
    /**
     * The Amazon Resource Name (ARN) for the user.
     *
     * @stability stable
     */
    readonly arn?: Arn;
    /**
     * The user's user name.
     *
     * @stability stable
     */
    readonly userName?: UserName;
    /**
     * The user's email address.
     *
     * @stability stable
     */
    readonly email?: String;
    /**
     * The Amazon QuickSight role for the user.
     *
     * The user role can be one of the following:.    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.
     *
     * @stability stable
     */
    readonly role?: UserRole;
    /**
     * The type of identity authentication used by the user.
     *
     * @stability stable
     */
    readonly identityType?: IdentityType;
    /**
     * The active status of user.
     *
     * When you create an Amazon QuickSight user that’s not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a password.
     *
     * @stability stable
     */
    readonly active?: Boolean;
    /**
     * The principal ID of the user.
     *
     * @stability stable
     */
    readonly principalId?: String;
    /**
     * The custom permissions profile associated with this user.
     *
     * @stability stable
     */
    readonly customPermissionsName?: RoleName;
}
export declare type UserList = User[];
export declare type UserName = string;
export declare type UserRole = 'ADMIN' | 'AUTHOR' | 'READER' | 'RESTRICTED_AUTHOR' | 'RESTRICTED_READER' | string;
export declare type Username = string;
export declare type VersionDescription = string;
export declare type VersionNumber = number;
/**
 * @stability stable
 */
export interface VpcConnectionProperties {
    /**
     * The Amazon Resource Name (ARN) for the VPC connection.
     *
     * @stability stable
     */
    readonly vpcConnectionArn: Arn;
}
export declare type Warehouse = string;
export declare type WorkGroup = string;
export declare type long = number;
export declare type timestamp = Date;
/**
 * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
 */
export declare type apiVersion = '2018-04-01' | 'latest' | string;
/**
 * @stability stable
 */
export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service.
     *
     * Specify 'latest' to use the latest possible version.
     *
     * @stability stable
     */
    readonly apiVersion?: apiVersion;
}
/**
 * Contains interfaces for use with the QuickSight client.
 */
