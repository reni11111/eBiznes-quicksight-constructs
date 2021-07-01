// declare namespace QuickSight {
export interface AccountCustomization {
  /**
   * The default theme for this QuickSight subscription.
   */
  readonly defaultTheme?: Arn;
}
export interface AccountSettings {
  /**
   * The "account name" you provided for the QuickSight subscription in your AWS account. You create this name when you sign up for QuickSight. It is unique in all of AWS and it appears only in the console when users sign in.
   */
  readonly accountName?: String;
  /**
   * The edition of QuickSight that you're currently subscribed to: Enterprise edition or Standard edition.
   */
  readonly edition?: Edition;
  /**
   * The default QuickSight namespace for your AWS account.
   */
  readonly defaultNamespace?: Namespace;
  /**
   * The main notification email for your QuickSight subscription.
   */
  readonly notificationEmail?: String;
}
export type ActionList = String[];
export interface ActiveIAMPolicyAssignment {
  /**
   * A name for the IAM policy assignment.
   */
  readonly assignmentName?: IAMPolicyAssignmentName;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly policyArn?: Arn;
}
export type ActiveIAMPolicyAssignmentList = ActiveIAMPolicyAssignment[];
export interface AdHocFilteringOption {
  /**
   * Availability status.
   */
  readonly availabilityStatus?: DashboardBehavior;
}
export type AdditionalDashboardIdList = RestrictiveResourceId[];
export type AliasName = string;
export interface AmazonElasticsearchParameters {
  /**
   * The Amazon Elasticsearch Service domain.
   */
  readonly domain: Domain;
}
export interface Analysis {
  /**
   * The ID of the analysis.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the analysis.
   */
  readonly arn?: Arn;
  /**
   * The descriptive name of the analysis.
   */
  readonly name?: AnalysisName;
  /**
   * Status associated with the analysis.
   */
  readonly status?: ResourceStatus;
  /**
   * Errors associated with the analysis.
   */
  readonly errors?: AnalysisErrorList;
  /**
   * The ARNs of the datasets of the analysis.
   */
  readonly dataSetArns?: DataSetArnsList;
  /**
   * The ARN of the theme of the analysis.
   */
  readonly themeArn?: Arn;
  /**
   * The time that the analysis was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The time that the analysis was last updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   */
  readonly sheets?: SheetList;
}
export interface AnalysisError {
  /**
   * The type of the analysis error.
   */
  readonly type?: AnalysisErrorType;
  /**
   * The message associated with the analysis error.
   */
  readonly message?: NonEmptyString;
}
export type AnalysisErrorList = AnalysisError[];
export type AnalysisErrorType = 'ACCESS_DENIED' | 'SOURCE_NOT_FOUND' | 'DATA_SET_NOT_FOUND' | 'INTERNAL_FAILURE' | 'PARAMETER_VALUE_INCOMPATIBLE' | 'PARAMETER_TYPE_INVALID' | 'PARAMETER_NOT_FOUND' | 'COLUMN_TYPE_MISMATCH' | 'COLUMN_GEOGRAPHIC_ROLE_MISMATCH' | 'COLUMN_REPLACEMENT_MISSING' | string;
export type AnalysisFilterAttribute = 'QUICKSIGHT_USER' | string;
export type AnalysisName = string;
export interface AnalysisSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example "Operator": "StringEquals".
   */
  readonly operator?: FilterOperator;
  /**
   * The name of the value that you want to use as a filter, for example "Name": "QUICKSIGHT_USER".
   */
  readonly name?: AnalysisFilterAttribute;
  /**
   * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter, for example "Value". An example is "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
   */
  readonly value?: String;
}
export type AnalysisSearchFilterList = AnalysisSearchFilter[];
export interface AnalysisSourceEntity {
  /**
   * The source template for the source entity of the analysis.
   */
  readonly sourceTemplate?: AnalysisSourceTemplate;
}
export interface AnalysisSourceTemplate {
  /**
   * The dataset references of the source template of an analysis.
   */
  readonly dataSetReferences: DataSetReferenceList;
  /**
   * The Amazon Resource Name (ARN) of the source template of an analysis.
   */
  readonly arn: Arn;
}
export interface AnalysisSummary {
  /**
   * The Amazon Resource Name (ARN) for the analysis.
   */
  readonly arn?: Arn;
  /**
   * The ID of the analysis. This ID displays in the URL.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The name of the analysis. This name is displayed in the QuickSight console.
   */
  readonly name?: AnalysisName;
  /**
   * The last known status for the analysis.
   */
  readonly status?: ResourceStatus;
  /**
   * The time that the analysis was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The time that the analysis was last updated.
   */
  readonly lastUpdatedTime?: Timestamp;
}
export type AnalysisSummaryList = AnalysisSummary[];
export type Arn = string;
export type AssignmentStatus = 'ENABLED' | 'DRAFT' | 'DISABLED' | string;
export interface AthenaParameters {
  /**
   * The workgroup that Amazon Athena uses.
   */
  readonly workGroup?: WorkGroup;
}
export interface AuroraParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export interface AuroraPostgreSqlParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export type AwsAccountId = string;
export type AwsAndAccountId = string;
export interface AwsIotAnalyticsParameters {
  /**
   * Dataset name.
   */
  readonly dataSetName: DataSetName;
}
export type Boolean = boolean;
export interface BorderStyle {
  /**
   * The option to enable display of borders for visuals.
   */
  readonly show?: boolean;
}
export interface CalculatedColumn {
  /**
   * Column name.
   */
  readonly columnName: ColumnName;
  /**
   * A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
   */
  readonly columnId: ColumnId;
  /**
   * An expression that defines the calculated column.
   */
  readonly expression: Expression;
}
export type CalculatedColumnList = CalculatedColumn[];
export interface CancelIngestionRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the dataset used in the ingestion.
   */
  readonly dataSetId: string;
  /**
   * An ID for the ingestion.
   */
  readonly ingestionId: IngestionId;
}
export interface CancelIngestionResponse {
  /**
   * The Amazon Resource Name (ARN) for the data ingestion.
   */
  readonly arn?: Arn;
  /**
   * An ID for the ingestion.
   */
  readonly ingestionId?: IngestionId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: string;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CastColumnTypeOperation {
  /**
   * Column name.
   */
  readonly columnName: ColumnName;
  /**
   * New column data type.
   */
  readonly newColumnType: ColumnDataType;
  /**
   * When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
   */
  readonly format?: TypeCastFormat;
}
export type Catalog = string;
export type ClusterId = string;
export type ColorList = HexColor[];
export type ColumnDataType = 'STRING' | 'INTEGER' | 'DECIMAL' | 'DATETIME' | string;
export interface ColumnDescription {
  /**
   * The text of a description for a column.
   */
  readonly text?: ColumnDescriptiveText;
}
export type ColumnDescriptiveText = string;
export interface ColumnGroup {
  /**
   * Geospatial column group that denotes a hierarchy.
   */
  readonly geoSpatialColumnGroup?: GeoSpatialColumnGroup;
}
export interface ColumnGroupColumnSchema {
  /**
   * The name of the column group's column schema.
   */
  readonly name?: String;
}
export type ColumnGroupColumnSchemaList = ColumnGroupColumnSchema[];
export type ColumnGroupList = ColumnGroup[];
export type ColumnGroupName = string;
export interface ColumnGroupSchema {
  /**
   * The name of the column group schema.
   */
  readonly name?: String;
  /**
   * A structure containing the list of schemas for column group columns.
   */
  readonly columnGroupColumnSchemaList?: ColumnGroupColumnSchemaList;
}
export type ColumnGroupSchemaList = ColumnGroupSchema[];
export type ColumnId = string;
export interface ColumnLevelPermissionRule {
  /**
   * An array of Amazon Resource Names (ARNs) for QuickSight users or groups.
   */
  readonly principals?: PrincipalList;
  /**
   * An array of column names.
   */
  readonly columnNames?: ColumnNameList;
}
export type ColumnLevelPermissionRuleList = ColumnLevelPermissionRule[];
export type ColumnList = ColumnName[];
export type ColumnName = string;
export type ColumnNameList = String[];
export interface ColumnSchema {
  /**
   * The name of the column schema.
   */
  readonly name?: String;
  /**
   * The data type of the column schema.
   */
  readonly dataType?: String;
  /**
   * The geographic role of the column schema.
   */
  readonly geographicRole?: String;
}
export type ColumnSchemaList = ColumnSchema[];
export interface ColumnTag {
  /**
   * A geospatial role for a column.
   */
  readonly columnGeographicRole?: GeoSpatialDataRole;
  /**
   * A description for a column.
   */
  readonly columnDescription?: ColumnDescription;
}
export type ColumnTagList = ColumnTag[];
export type CopySourceArn = string;
export interface CreateAccountCustomizationRequest {
  /**
   * The ID for the AWS account that you want to customize QuickSight for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The QuickSight namespace that you want to add customizations to.
   */
  readonly namespace?: Namespace;
  /**
   * The QuickSight customizations you're adding in the current AWS Region. You can add these to an AWS account and a QuickSight namespace.  For example, you can add a default theme by setting AccountCustomization to the midnight theme: "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight::aws:theme/MIDNIGHT" }. Or, you can add a custom theme by specifying "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639" }.
   */
  readonly accountCustomization: AccountCustomization;
  /**
   * A list of the tags that you want to attach to this resource.
   */
  readonly tags?: TagList;
}
export interface CreateAccountCustomizationResponse {
  /**
   * The Amazon Resource Name (ARN) for the customization that you created for this AWS account.
   */
  readonly arn?: Arn;
  /**
   * The ID for the AWS account that you want to customize QuickSight for.
   */
  readonly awsAccountId?: AwsAccountId;
  /**
   * The namespace associated with the customization you're creating.
   */
  readonly namespace?: Namespace;
  /**
   * The QuickSight customizations you're adding in the current AWS Region.
   */
  readonly accountCustomization?: AccountCustomization;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateAnalysisRequest {
  /**
   * The ID of the AWS account where you are creating an analysis.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the analysis that you're creating. This ID displays in the URL of the analysis.
   */
  readonly analysisId: RestrictiveResourceId;
  /**
   * A descriptive name for the analysis that you're creating. This name displays for the analysis in the QuickSight console.
   */
  readonly name: AnalysisName;
  /**
   * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.
   */
  readonly parameters?: Parameters;
  /**
   * A structure that describes the principals and the resource-level permissions on an analysis. You can use the Permissions structure to grant permissions by providing a list of AWS Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).  To specify no permissions, omit Permissions.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * A source entity to use for the analysis that you're creating. This metadata structure contains details that describe a source template and one or more datasets.
   */
  readonly sourceEntity: AnalysisSourceEntity;
  /**
   * The ARN for the theme to apply to the analysis that you're creating. To see the theme in the QuickSight console, make sure that you have access to it.
   */
  readonly themeArn?: Arn;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.
   */
  readonly tags?: TagList;
}
export interface CreateAnalysisResponse {
  /**
   * The ARN for the analysis.
   */
  readonly arn?: Arn;
  /**
   * The ID of the analysis.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The status of the creation of the analysis.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface CreateColumnsOperation {
  /**
   * Calculated columns to create.
   */
  readonly columns: CalculatedColumnList;
}
export interface CreateDashboardRequest {
  /**
   * The ID of the AWS account where you want to create the dashboard.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard, also added to the IAM policy.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The display name of the dashboard.
   */
  readonly name: DashboardName;
  /**
   * The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values.
   */
  readonly parameters?: Parameters;
  /**
   * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.  To specify no permissions, omit the permissions list.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The entity that you are using as a source when you create the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only create a dashboard from a template, so you use a SourceTemplate entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the CreateTemplate API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplateARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
   */
  readonly sourceEntity: DashboardSourceEntity;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
   */
  readonly tags?: TagList;
  /**
   * A description for the first version of the dashboard being created.
   */
  readonly versionDescription?: VersionDescription;
  /**
   * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.
   */
  readonly dashboardPublishOptions?: DashboardPublishOptions;
  /**
   * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same AWS account where you create the dashboard.
   */
  readonly themeArn?: Arn;
}
export interface CreateDashboardResponse {
  /**
   * The ARN of the dashboard.
   */
  readonly arn?: Arn;
  /**
   * The ARN of the dashboard, including the version number of the first version that is created.
   */
  readonly versionArn?: Arn;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * The status of the dashboard creation request.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface CreateDataSetRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId: ResourceId;
  /**
   * The display name for the dataset.
   */
  readonly name: ResourceName;
  /**
   * Declares the physical tables that are available in the underlying data sources.
   */
  readonly physicalTableMap: PhysicalTableMap;
  /**
   * Configures the combination and transformation of the data from the physical tables.
   */
  readonly logicalTableMap?: LogicalTableMap;
  /**
   * Indicates whether you want to import the data into SPICE.
   */
  readonly importMode: DataSetImportMode;
  /**
   * Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
   */
  readonly columnGroups?: ColumnGroupList;
  /**
   * The folder that contains fields and nested subfolders for your dataset.
   */
  readonly fieldFolders?: FieldFolderMap;
  /**
   * A list of resource permissions on the dataset.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The row-level security configuration for the data that you want to create.
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * A set of one or more definitions of a  ColumnLevelPermissionRule .
   */
  readonly columnLevelPermissionRules?: ColumnLevelPermissionRuleList;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
   */
  readonly tags?: TagList;
}
export interface CreateDataSetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   */
  readonly arn?: Arn;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId?: ResourceId;
  /**
   * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   */
  readonly ingestionArn?: Arn;
  /**
   * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   */
  readonly ingestionId?: ResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateDataSourceRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId: ResourceId;
  /**
   * A display name for the data source.
   */
  readonly name: ResourceName;
  /**
   * The type of the data source. Currently, the supported types for this operation are: ATHENA, AURORA, AURORA_POSTGRESQL, AMAZON_ELASTICSEARCH, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA. Use ListDataSources to return a list of all data sources.  AMAZON_ELASTICSEARCH is for Amazon managed Elasticsearch Service.
   */
  readonly type: DataSourceType;
  /**
   * The parameters that QuickSight uses to connect to your underlying source.
   */
  readonly dataSourceParameters?: DataSourceParameters;
  /**
   * The credentials QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
   */
  readonly credentials?: DataSourceCredentials;
  /**
   * A list of resource permissions on the data source.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
   */
  readonly vpcConnectionProperties?: VpcConnectionProperties;
  /**
   * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
   */
  readonly sslProperties?: SslProperties;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
   */
  readonly tags?: TagList;
}
export interface CreateDataSourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   */
  readonly arn?: Arn;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId?: ResourceId;
  /**
   * The status of creating the data source.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */

  readonly status?: StatusCode;
}
export interface CreateGroupMembershipRequest {
  /**
   * The name of the user that you want to add to the group membership.
   */
  readonly memberName: GroupMemberName;
  /**
   * The name of the group that you want to add the user to.
   */
  readonly groupName: GroupName;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface CreateGroupMembershipResponse {
  /**
   * The group member.
   */
  readonly groupMember?: GroupMember;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateGroupRequest {
  /**
   * A name for the group that you want to create.
   */
  readonly groupName: GroupName;
  /**
   * A description for the group that you want to create.
   */
  readonly description?: GroupDescription;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface CreateGroupResponse {
  /**
   * The name of the group.
   */
  readonly group?: Group;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateIAMPolicyAssignmentRequest {
  /**
   * The ID of the AWS account where you want to assign an IAM policy to QuickSight users or groups.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The name of the assignment, also called a rule. It must be unique within an AWS account.
   */
  readonly assignmentName: IAMPolicyAssignmentName;
  /**
   * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
   */
  readonly assignmentStatus: AssignmentStatus;
  /**
   * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
   */
  readonly policyArn?: Arn;
  /**
   * The QuickSight users, groups, or both that you want to assign the policy to.
   */
  readonly identities?: IdentityMap;
  /**
   * The namespace that contains the assignment.
   */
  readonly namespace: Namespace;
}
export interface CreateIAMPolicyAssignmentResponse {
  /**
   * The name of the assignment. This name must be unique within the AWS account.
   */
  readonly assignmentName?: IAMPolicyAssignmentName;
  /**
   * The ID for the assignment.
   */
  readonly assignmentId?: String;
  /**
   * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
   */
  readonly assignmentStatus?: AssignmentStatus;
  /**
   * The ARN for the IAM policy that is applied to the QuickSight users and groups specified in this assignment.
   */
  readonly policyArn?: Arn;
  /**
   * The QuickSight users, groups, or both that the IAM policy is assigned to.
   */
  readonly identities?: IdentityMap;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateIngestionRequest {
  /**
   * The ID of the dataset used in the ingestion.
   */
  readonly dataSetId: string;
  /**
   * An ID for the ingestion.
   */
  readonly ingestionId: IngestionId;
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
}
export interface CreateIngestionResponse {
  /**
   * The Amazon Resource Name (ARN) for the data ingestion.
   */
  readonly arn?: Arn;
  /**
   * An ID for the ingestion.
   */
  readonly ingestionId?: IngestionId;
  /**
   * The ingestion status.
   */
  readonly ingestionStatus?: IngestionStatus;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: string;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateNamespaceRequest {
  /**
   * The ID for the AWS account that you want to create the QuickSight namespace in.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The name that you want to use to describe the new namespace.
   */
  readonly namespace: Namespace;
  /**
   * Specifies the type of your user identity directory. Currently, this supports users with an identity type of QUICKSIGHT.
   */
  readonly identityStore: IdentityStore;
  /**
   * The tags that you want to associate with the namespace that you're creating.
   */
  readonly tags?: TagList;
}
export interface CreateNamespaceResponse {
  /**
   * The ARN of the QuickSight namespace you created.
   */
  readonly arn?: Arn;
  /**
   * The name of the new namespace that you created.
   */
  readonly name?: Namespace;
  /**
   * The AWS Region that you want to use for the free SPICE capacity for the new namespace. This is set to the region that you run CreateNamespace in.
   */
  readonly capacityRegion?: String;
  /**
   * The status of the creation of the namespace. This is an asynchronous process. A status of CREATED means that your namespace is ready to use. If an error occurs, it indicates if the process is retryable or non-retryable. In the case of a non-retryable error, refer to the error message for follow-up tasks.
   */
  readonly creationStatus?: NamespaceStatus;
  /**
   * Specifies the type of your user identity directory. Currently, this supports users with an identity type of QUICKSIGHT.
   */
  readonly identityStore?: IdentityStore;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface CreateTemplateAliasRequest {
  /**
   * The ID of the AWS account that contains the template that you creating an alias for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The name that you want to give to the template alias that you're creating. Don't start the alias name with the $ character. Alias names that start with $ are reserved by QuickSight.
   */
  readonly aliasName: AliasName;
  /**
   * The version number of the template.
   */
  readonly templateVersionNumber: VersionNumber;
}
export interface CreateTemplateAliasResponse {
  /**
   * Information about the template alias.
   */
  readonly templateAlias?: TemplateAlias;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface CreateTemplateRequest {
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the template that you want to create. This template is unique per AWS Region in each AWS account.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * A display name for the template.
   */
  readonly name?: TemplateName;
  /**
   * A list of resource permissions to be set on the template.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The entity that you are using as a source when you create the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
   */
  readonly sourceEntity: TemplateSourceEntity;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   */
  readonly tags?: TagList;
  /**
   * A description of the current template version being created. This API operation creates the first version of the template. Every time UpdateTemplate is called, a new version is created. Each version of the template maintains a description of the version in the VersionDescription field.
   */
  readonly versionDescription?: VersionDescription;
}
export interface CreateTemplateResponse {
  /**
   * The ARN for the template.
   */
  readonly arn?: Arn;
  /**
   * The ARN for the template, including the version information of the first version.
   */
  readonly versionArn?: Arn;
  /**
   * The ID of the template.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * The template creation status.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface CreateThemeAliasRequest {
  /**
   * The ID of the AWS account that contains the theme for the new theme alias.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the theme alias.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The name that you want to give to the theme alias that you are creating. The alias name can't begin with a $. Alias names that start with $ are reserved by Amazon QuickSight.
   */
  readonly aliasName: AliasName;
  /**
   * The version number of the theme.
   */
  readonly themeVersionNumber: VersionNumber;
}
export interface CreateThemeAliasResponse {
  /**
   * Information about the theme alias.
   */
  readonly themeAlias?: ThemeAlias;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface CreateThemeRequest {
  /**
   * The ID of the AWS account where you want to store the new theme.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the theme that you want to create. The theme ID is unique per AWS Region in each AWS account.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * A display name for the theme.
   */
  readonly name: ThemeName;
  /**
   * The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within a QuickSight analysis.
   */
  readonly baseThemeId: RestrictiveResourceId;
  /**
   * A description of the first version of the theme that you're creating. Every time UpdateTheme is called, a new version is created. Each version of the theme has a description of the version in the VersionDescription field.
   */
  readonly versionDescription?: VersionDescription;
  /**
   * The theme configuration, which contains the theme display properties.
   */
  readonly configuration: ThemeConfiguration;
  /**
   * A valid grouping of resource permissions to apply to the new theme.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
   */
  readonly tags?: TagList;
}
export interface CreateThemeResponse {
  /**
   * The Amazon Resource Name (ARN) for the theme.
   */
  readonly arn?: Arn;
  /**
   * The Amazon Resource Name (ARN) for the new theme.
   */
  readonly versionArn?: Arn;
  /**
   * The ID of the theme.
   */
  readonly themeId?: RestrictiveResourceId;
  /**
   * The theme creation status.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface CredentialPair {
  /**
   * User name.
   */
  readonly username: Username;
  /**
   * Password.
   */
  readonly password: Password;
  /**
   * A set of alternate data source parameters that you want to share for these credentials. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the new data source with the existing credentials. If the AlternateDataSourceParameters list is null, the DataSourceParameters originally used with these Credentials is automatically allowed.
   */
  readonly alternateDataSourceParameters?: DataSourceParametersList;
}
export interface CustomSql {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   */
  readonly dataSourceArn: Arn;
  /**
   * A display name for the SQL query result.
   */
  readonly name: CustomSqlName;
  /**
   * The SQL query.
   */
  readonly sqlQuery: SqlQuery;
  /**
   * The column schema from the SQL query result set.
   */
  readonly columns?: InputColumnList;
}
export type CustomSqlName = string;
export interface Dashboard {
  /**
   * Dashboard ID.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * A display name for the dashboard.
   */
  readonly name?: DashboardName;
  /**
   * Version.
   */
  readonly version?: DashboardVersion;
  /**
   * The time that this dataset was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last time that this dataset was published.
   */
  readonly lastPublishedTime?: Timestamp;
  /**
   * The last time that this dataset was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
}
export type DashboardBehavior = 'ENABLED' | 'DISABLED' | string;
export interface DashboardError {
  /**
   * Type.
   */
  readonly type?: DashboardErrorType;
  /**
   * Message.
   */
  readonly message?: NonEmptyString;
}
export type DashboardErrorList = DashboardError[];
export type DashboardErrorType = 'ACCESS_DENIED' | 'SOURCE_NOT_FOUND' | 'DATA_SET_NOT_FOUND' | 'INTERNAL_FAILURE' | 'PARAMETER_VALUE_INCOMPATIBLE' | 'PARAMETER_TYPE_INVALID' | 'PARAMETER_NOT_FOUND' | 'COLUMN_TYPE_MISMATCH' | 'COLUMN_GEOGRAPHIC_ROLE_MISMATCH' | 'COLUMN_REPLACEMENT_MISSING' | string;
export type DashboardFilterAttribute = 'QUICKSIGHT_USER' | string;
export type DashboardName = string;
export interface DashboardPublishOptions {
  /**
   * Ad hoc (one-time) filtering option.
   */
  readonly adHocFilteringOption?: AdHocFilteringOption;
  /**
   * Export to .csv option.
   */
  readonly exportToCSVOption?: ExportToCSVOption;
  /**
   * Sheet controls option.
   */
  readonly sheetControlsOption?: SheetControlsOption;
}
export interface DashboardSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example, "Operator": "StringEquals".
   */
  readonly operator: FilterOperator;
  /**
   * The name of the value that you want to use as a filter, for example, "Name": "QUICKSIGHT_USER".
   */
  readonly name?: DashboardFilterAttribute;
  /**
   * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter, for example, "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1".
   */
  readonly value?: String;
}
export type DashboardSearchFilterList = DashboardSearchFilter[];
export interface DashboardSourceEntity {
  /**
   * Source template.
   */
  readonly sourceTemplate?: DashboardSourceTemplate;
}
export interface DashboardSourceTemplate {
  /**
   * Dataset references.
   */
  readonly dataSetReferences: DataSetReferenceList;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn: Arn;
}
export interface DashboardSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * Dashboard ID.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * A display name for the dashboard.
   */
  readonly name?: DashboardName;
  /**
   * The time that this dashboard was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last time that this dashboard was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * Published version number.
   */
  readonly publishedVersionNumber?: VersionNumber;
  /**
   * The last time that this dashboard was published.
   */
  readonly lastPublishedTime?: Timestamp;
}
export type DashboardSummaryList = DashboardSummary[];
export type DashboardUIState = 'EXPANDED' | 'COLLAPSED' | string;
export interface DashboardVersion {
  /**
   * The time that this dashboard version was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * Errors associated with this dashboard version.
   */
  readonly errors?: DashboardErrorList;
  /**
   * Version number for this version of the dashboard.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The HTTP status of the request.
   */
  readonly status?: ResourceStatus;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * Source entity ARN.
   */
  readonly sourceEntityArn?: Arn;
  /**
   * The Amazon Resource Numbers (ARNs) for the datasets that are associated with this version of the dashboard.
   */
  readonly dataSetArns?: DataSetArnsList;
  /**
   * Description.
   */
  readonly description?: VersionDescription;
  /**
   * The ARN of the theme associated with a version of the dashboard.
   */
  readonly themeArn?: Arn;
  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   */
  readonly sheets?: SheetList;
}
export interface DashboardVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * The time that this dashboard version was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * Version number.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The HTTP status of the request.
   */
  readonly status?: ResourceStatus;
  /**
   * Source entity ARN.
   */
  readonly sourceEntityArn?: Arn;
  /**
   * Description.
   */
  readonly description?: VersionDescription;
}
export type DashboardVersionSummaryList = DashboardVersionSummary[];
export interface DataColorPalette {
  /**
   * The hexadecimal codes for the colors.
   */
  readonly colors?: ColorList;
  /**
   * The minimum and maximum hexadecimal codes that describe a color gradient.
   */
  readonly minMaxGradient?: ColorList;
  /**
   * The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
   */
  readonly emptyFillColor?: HexColor;
}
export interface DataSet {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * The ID of the dataset.
   */
  readonly dataSetId?: ResourceId;
  /**
   * A display name for the dataset.
   */
  readonly name?: ResourceName;
  /**
   * The time that this dataset was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last time that this dataset was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * Declares the physical tables that are available in the underlying data sources.
   */
  readonly physicalTableMap?: PhysicalTableMap;
  /**
   * Configures the combination and transformation of the data from the physical tables.
   */
  readonly logicalTableMap?: LogicalTableMap;
  /**
   * The list of columns after all transforms. These columns are available in templates, analyses, and dashboards.
   */
  readonly outputColumns?: OutputColumnList;
  /**
   * A value that indicates whether you want to import the data into SPICE.
   */
  readonly importMode?: DataSetImportMode;
  /**
   * The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't imported into SPICE.
   */
  readonly consumedSpiceCapacityInBytes?: Long;
  /**
   * Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
   */
  readonly columnGroups?: ColumnGroupList;
  /**
   * The folder that contains fields and nested subfolders for your dataset.
   */
  readonly fieldFolders?: FieldFolderMap;
  /**
   * The row-level security configuration for the dataset.
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * A set of one or more definitions of a  ColumnLevelPermissionRule .
   */
  readonly columnLevelPermissionRules?: ColumnLevelPermissionRuleList;
}
export type DataSetArnsList = Arn[];
export interface DataSetConfiguration {
  /**
   * Placeholder.
   */
  readonly placeholder?: String;
  /**
   * Dataset schema.
   */
  readonly dataSetSchema?: DataSetSchema;
  /**
   * A structure containing the list of column group schemas.
   */
  readonly columnGroupSchemaList?: ColumnGroupSchemaList;
}
export type DataSetConfigurationList = DataSetConfiguration[];
export type DataSetImportMode = 'SPICE' | 'DIRECT_QUERY' | string;
export type DataSetName = string;
export interface DataSetReference {
  /**
   * Dataset placeholder.
   */
  readonly dataSetPlaceholder: NonEmptyString;
  /**
   * Dataset Amazon Resource Name (ARN).
   */
  readonly dataSetArn: Arn;
}
export type DataSetReferenceList = DataSetReference[];
export interface DataSetSchema {
  /**
   * A structure containing the list of column schemas.
   */
  readonly columnSchemaList?: ColumnSchemaList;
}
export interface DataSetSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   */
  readonly arn?: Arn;
  /**
   * The ID of the dataset.
   */
  readonly dataSetId?: ResourceId;
  /**
   * A display name for the dataset.
   */
  readonly name?: ResourceName;
  /**
   * The time that this dataset was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last time that this dataset was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * A value that indicates whether you want to import the data into SPICE.
   */
  readonly importMode?: DataSetImportMode;
  /**
   * The row-level security configuration for the dataset.
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * A value that indicates if the dataset has column level permission configured.
   */
  readonly columnLevelPermissionRulesApplied?: Boolean;
}
export type DataSetSummaryList = DataSetSummary[];
export interface DataSource {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   */
  readonly arn?: Arn;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId?: ResourceId;
  /**
   * A display name for the data source.
   */
  readonly name?: ResourceName;
  /**
   * The type of the data source. This type indicates which database engine the data source connects to.
   */
  readonly type?: DataSourceType;
  /**
   * The HTTP status of the request.
   */
  readonly status?: ResourceStatus;
  /**
   * The time that this data source was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last time that this data source was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * The parameters that Amazon QuickSight uses to connect to your underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
   */
  readonly dataSourceParameters?: DataSourceParameters;
  /**
   * A set of alternate data source parameters that you want to share for the credentials stored with this data source. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the AlternateDataSourceParameters list is null, the Credentials originally used with this DataSourceParameters are automatically allowed.
   */
  readonly alternateDataSourceParameters?: DataSourceParametersList;
  /**
   * The VPC connection information. You need to use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
   */
  readonly vpcConnectionProperties?: VpcConnectionProperties;
  /**
   * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
   */
  readonly sslProperties?: SslProperties;
  /**
   * Error information from the last update or the creation of the data source.
   */
  readonly errorInfo?: DataSourceErrorInfo;
}
export interface DataSourceCredentials {
  /**
   * Credential pair. For more information, see CredentialPair.
   */
  readonly credentialPair?: CredentialPair;
  /**
   * The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use. When CopySourceArn is not null, the credential pair from the data source in the ARN is used as the credentials for the DataSourceCredentials structure.
   */
  readonly copySourceArn?: CopySourceArn;
}
export interface DataSourceErrorInfo {
  /**
   * Error type.
   */
  readonly type?: DataSourceErrorInfoType;
  /**
   * Error message.
   */
  readonly message?: String;
}
export type DataSourceErrorInfoType = 'ACCESS_DENIED' | 'COPY_SOURCE_NOT_FOUND' | 'TIMEOUT' | 'ENGINE_VERSION_NOT_SUPPORTED' | 'UNKNOWN_HOST' | 'GENERIC_SQL_FAILURE' | 'CONFLICT' | 'UNKNOWN' | string;
export type DataSourceList = DataSource[];
export interface DataSourceParameters {
  /**
   * Amazon Elasticsearch Service parameters.
   */
  readonly amazonElasticsearchParameters?: AmazonElasticsearchParameters;
  /**
   * Amazon Athena parameters.
   */
  readonly athenaParameters?: AthenaParameters;
  /**
   * Amazon Aurora MySQL parameters.
   */
  readonly auroraParameters?: AuroraParameters;
  /**
   * Aurora PostgreSQL parameters.
   */
  readonly auroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
  /**
   * AWS IoT Analytics parameters.
   */
  readonly awsIotAnalyticsParameters?: AwsIotAnalyticsParameters;
  /**
   * Jira parameters.
   */
  readonly jiraParameters?: JiraParameters;
  /**
   * MariaDB parameters.
   */
  readonly mariaDbParameters?: MariaDbParameters;
  /**
   * MySQL parameters.
   */
  readonly mySqlParameters?: MySqlParameters;
  /**
   * Oracle parameters.
   */
  readonly oracleParameters?: OracleParameters;
  /**
   * PostgreSQL parameters.
   */
  readonly postgreSqlParameters?: PostgreSqlParameters;
  /**
   * Presto parameters.
   */
  readonly prestoParameters?: PrestoParameters;
  /**
   * Amazon RDS parameters.
   */
  readonly rdsParameters?: RdsParameters;
  /**
   * Amazon Redshift parameters.
   */
  readonly redshiftParameters?: RedshiftParameters;
  /**
   * S3 parameters.
   */
  readonly s3Parameters?: S3Parameters;
  /**
   * ServiceNow parameters.
   */
  readonly serviceNowParameters?: ServiceNowParameters;
  /**
   * Snowflake parameters.
   */
  readonly snowflakeParameters?: SnowflakeParameters;
  /**
   * Spark parameters.
   */
  readonly sparkParameters?: SparkParameters;
  /**
   * SQL Server parameters.
   */
  readonly sqlServerParameters?: SqlServerParameters;
  /**
   * Teradata parameters.
   */
  readonly teradataParameters?: TeradataParameters;
  /**
   * Twitter parameters.
   */
  readonly twitterParameters?: TwitterParameters;
}
export type DataSourceParametersList = DataSourceParameters[];
export type DataSourceType = 'ADOBE_ANALYTICS' | 'AMAZON_ELASTICSEARCH' | 'ATHENA' | 'AURORA' | 'AURORA_POSTGRESQL' | 'AWS_IOT_ANALYTICS' | 'GITHUB' | 'JIRA' | 'MARIADB' | 'MYSQL' | 'ORACLE' | 'POSTGRESQL' | 'PRESTO' | 'REDSHIFT' | 'S3' | 'SALESFORCE' | 'SERVICENOW' | 'SNOWFLAKE' | 'SPARK' | 'SQLSERVER' | 'TERADATA' | 'TWITTER' | 'TIMESTREAM' | string;
export type Database = string;
export interface DateTimeParameter {
  /**
   * A display name for the date-time parameter.
   */
  readonly name: NonEmptyString;
  /**
   * The values for the date-time parameter.
   */
  readonly values: TimestampList;
}
export type DateTimeParameterList = DateTimeParameter[];
export interface DecimalParameter {
  /**
   * A display name for the decimal parameter.
   */
  readonly name: NonEmptyString;
  /**
   * The values for the decimal parameter.
   */
  readonly values: DoubleList;
}
export type DecimalParameterList = DecimalParameter[];
export interface DeleteAccountCustomizationRequest {
  /**
   * The ID for the AWS account that you want to delete QuickSight customizations from in this AWS Region.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The QuickSight namespace that you're deleting the customizations from.
   */
  readonly namespace?: Namespace;
}
export interface DeleteAccountCustomizationResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteAnalysisRequest {
  /**
   * The ID of the AWS account where you want to delete an analysis.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the analysis that you're deleting.
   */
  readonly analysisId: RestrictiveResourceId;
  /**
   * A value that specifies the number of days that QuickSight waits before it deletes the analysis. You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30.
   */
  readonly recoveryWindowInDays?: RecoveryWindowInDays;
  /**
   * This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted.
   */
  readonly forceDeleteWithoutRecovery?: boolean;
}
export interface DeleteAnalysisResponse {
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The Amazon Resource Name (ARN) of the deleted analysis.
   */
  readonly arn?: Arn;
  /**
   * The ID of the deleted analysis.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The date and time that the analysis is scheduled to be deleted.
   */
  readonly deletionTime?: Timestamp;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DeleteDashboardRequest {
  /**
   * The ID of the AWS account that contains the dashboard that you're deleting.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.
   */
  readonly versionNumber?: VersionNumber;
}
export interface DeleteDashboardResponse {
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The Secure Socket Layer (SSL) properties that apply for the resource.
   */
  readonly arn?: Arn;
  /**
   * The ID of the dashboard.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DeleteDataSetRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId: ResourceId;
}
export interface DeleteDataSetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   */
  readonly arn?: Arn;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId?: ResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteDataSourceRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId: ResourceId;
}
export interface DeleteDataSourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source that you deleted.
   */
  readonly arn?: Arn;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId?: ResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteGroupMembershipRequest {
  /**
   * The name of the user that you want to delete from the group membership.
   */
  readonly memberName: GroupMemberName;
  /**
   * The name of the group that you want to delete the user from.
   */
  readonly groupName: GroupName;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface DeleteGroupMembershipResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteGroupRequest {
  /**
   * The name of the group that you want to delete.
   */
  readonly groupName: GroupName;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface DeleteGroupResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * The AWS account ID where you want to delete the IAM policy assignment.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The name of the assignment.
   */
  readonly assignmentName: IAMPolicyAssignmentName;
  /**
   * The namespace that contains the assignment.
   */
  readonly namespace: Namespace;
}
export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * The name of the assignment.
   */
  readonly assignmentName?: IAMPolicyAssignmentName;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteNamespaceRequest {
  /**
   * The ID for the AWS account that you want to delete the QuickSight namespace from.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace that you want to delete.
   */
  readonly namespace: Namespace;
}
export interface DeleteNamespaceResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteTemplateAliasRequest {
  /**
   * The ID of the AWS account that contains the item to delete.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template that the specified alias is for.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The name for the template alias. To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter.
   */
  readonly aliasName: AliasName;
}
export interface DeleteTemplateAliasResponse {
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * An ID for the template associated with the deletion.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * The name for the template alias.
   */
  readonly aliasName?: AliasName;
  /**
   * The Amazon Resource Name (ARN) of the template you want to delete.
   */
  readonly arn?: Arn;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DeleteTemplateRequest {
  /**
   * The ID of the AWS account that contains the template that you're deleting.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the template you want to delete.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template.
   */
  readonly versionNumber?: VersionNumber;
}
export interface DeleteTemplateResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * An ID for the template.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteThemeAliasRequest {
  /**
   * The ID of the AWS account that contains the theme alias to delete.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme that the specified alias is for.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The unique name for the theme alias to delete.
   */
  readonly aliasName: AliasName;
}
export interface DeleteThemeAliasResponse {
  /**
   * The name for the theme alias.
   */
  readonly aliasName?: AliasName;
  /**
   * The Amazon Resource Name (ARN) of the theme resource using the deleted alias.
   */
  readonly arn?: Arn;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * An ID for the theme associated with the deletion.
   */
  readonly themeId?: RestrictiveResourceId;
}
export interface DeleteThemeRequest {
  /**
   * The ID of the AWS account that contains the theme that you're deleting.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * An ID for the theme that you want to delete.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The version of the theme that you want to delete.   Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme.
   */
  readonly versionNumber?: VersionNumber;
}
export interface DeleteThemeResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * An ID for the theme.
   */
  readonly themeId?: RestrictiveResourceId;
}
export interface DeleteUserByPrincipalIdRequest {
  /**
   * The principal ID of the user.
   */
  readonly principalId: String;
  /**
   * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface DeleteUserByPrincipalIdResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DeleteUserRequest {
  /**
   * The name of the user that you want to delete.
   */
  readonly userName: UserName;
  /**
   * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface DeleteUserResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export type Delimiter = string;
export interface DescribeAccountCustomizationRequest {
  /**
   * The ID for the AWS account that you want to describe QuickSight customizations for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The QuickSight namespace that you want to describe QuickSight customizations for.
   */
  readonly namespace?: Namespace;
  /**
   * The Resolved flag works with the other parameters to determine which view of QuickSight customizations is returned. You can add this flag to your command to use the same view that QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels.
   */
  readonly resolved?: boolean;
}
export interface DescribeAccountCustomizationResponse {
  /**
   * The Amazon Resource Name (ARN) of the customization that's associated with this AWS account.
   */
  readonly arn?: Arn;
  /**
   * The ID for the AWS account that you're describing.
   */
  readonly awsAccountId?: AwsAccountId;
  /**
   * The QuickSight namespace that you're describing.
   */
  readonly namespace?: Namespace;
  /**
   * The QuickSight customizations that exist in the current AWS Region.
   */
  readonly accountCustomization?: AccountCustomization;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeAccountSettingsRequest {
  /**
   * The ID for the AWS account that contains the settings that you want to list.
   */
  readonly awsAccountId: AwsAccountId;
}
export interface DescribeAccountSettingsResponse {
  /**
   * The QuickSight settings for this AWS account. This information includes the edition of Amazon QuickSight that you subscribed to (Standard or Enterprise) and the notification email for the QuickSight subscription. In the QuickSight console, the QuickSight subscription is sometimes referred to as a QuickSight "account" even though it's technically not an account by itself. Instead, it's a subscription to the QuickSight service for your AWS account. The edition that you subscribe to applies to QuickSight in every AWS Region where you use it.
   */
  readonly accountSettings?: AccountSettings;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeAnalysisPermissionsRequest {
  /**
   * The ID of the AWS account that contains the analysis whose permissions you're describing. You must be using the AWS account that the analysis is in.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the analysis whose permissions you're describing. The ID is part of the analysis URL.
   */
  readonly analysisId: RestrictiveResourceId;
}
export interface DescribeAnalysisPermissionsResponse {
  /**
   * The ID of the analysis whose permissions you're describing.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the analysis whose permissions you're describing.
   */
  readonly analysisArn?: Arn;
  /**
   * A structure that describes the principals and the resource-level permissions on an analysis.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeAnalysisRequest {
  /**
   * The ID of the AWS account that contains the analysis. You must be using the AWS account that the analysis is in.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the analysis that you're describing. The ID is part of the URL of the analysis.
   */
  readonly analysisId: RestrictiveResourceId;
}
export interface DescribeAnalysisResponse {
  /**
   * A metadata structure that contains summary information for the analysis that you're describing.
   */
  readonly analysis?: Analysis;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeDashboardPermissionsRequest {
  /**
   * The ID of the AWS account that contains the dashboard that you're describing permissions for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard, also added to the IAM policy.
   */
  readonly dashboardId: RestrictiveResourceId;
}
export interface DescribeDashboardPermissionsResponse {
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   */
  readonly dashboardArn?: Arn;
  /**
   * A structure that contains the permissions for the dashboard.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeDashboardRequest {
  /**
   * The ID of the AWS account that contains the dashboard that you're describing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The alias name.
   */
  readonly aliasName?: AliasName;
}
export interface DescribeDashboardResponse {
  /**
   * Information about the dashboard.
   */
  readonly dashboard?: Dashboard;
  /**
   * The HTTP status of this request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeDataSetPermissionsRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId: ResourceId;
}
export interface DescribeDataSetPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   */
  readonly dataSetArn?: Arn;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId?: ResourceId;
  /**
   * A list of resource permissions on the dataset.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeDataSetRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId: ResourceId;
}
export interface DescribeDataSetResponse {
  /**
   * Information on the dataset.
   */
  readonly dataSet?: DataSet;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeDataSourcePermissionsRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId: ResourceId;
}
export interface DescribeDataSourcePermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   */
  readonly dataSourceArn?: Arn;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId?: ResourceId;
  /**
   * A list of resource permissions on the data source.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeDataSourceRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId: ResourceId;
}
export interface DescribeDataSourceResponse {
  /**
   * The information on the data source.
   */
  readonly dataSource?: DataSource;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeGroupRequest {
  /**
   * The name of the group that you want to describe.
   */
  readonly groupName: GroupName;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface DescribeGroupResponse {
  /**
   * The name of the group.
   */
  readonly group?: Group;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * The ID of the AWS account that contains the assignment that you want to describe.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The name of the assignment, also called a rule.
   */
  readonly assignmentName: IAMPolicyAssignmentName;
  /**
   * The namespace that contains the assignment.
   */
  readonly namespace: Namespace;
}
export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * Information describing the IAM policy assignment.
   */
  readonly iAMPolicyAssignment?: IAMPolicyAssignment;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeIngestionRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the dataset used in the ingestion.
   */
  readonly dataSetId: string;
  /**
   * An ID for the ingestion.
   */
  readonly ingestionId: IngestionId;
}
export interface DescribeIngestionResponse {
  /**
   * Information about the ingestion.
   */
  readonly ingestion?: Ingestion;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: string;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeNamespaceRequest {
  /**
   * The ID for the AWS account that contains the QuickSight namespace that you want to describe.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace that you want to describe.
   */
  readonly namespace: Namespace;
}
export interface DescribeNamespaceResponse {
  /**
   * The information about the namespace that you're describing. The response includes the namespace ARN, name, AWS Region, creation status, and identity store. DescribeNamespace also works for namespaces that are in the process of being created. For incomplete namespaces, this API operation lists the namespace error types and messages associated with the creation process.
   */
  readonly namespace?: NamespaceInfoV2;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeTemplateAliasRequest {
  /**
   * The ID of the AWS account that contains the template alias that you're describing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
   */
  readonly aliasName: AliasName;
}
export interface DescribeTemplateAliasResponse {
  /**
   * Information about the template alias.
   */
  readonly templateAlias?: TemplateAlias;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeTemplatePermissionsRequest {
  /**
   * The ID of the AWS account that contains the template that you're describing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
}
export interface DescribeTemplatePermissionsResponse {
  /**
   * The ID for the template.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the template.
   */
  readonly templateArn?: Arn;
  /**
   * A list of resource permissions to be set on the template.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeTemplateRequest {
  /**
   * The ID of the AWS account that contains the template that you're describing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * (Optional) The number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the template is described.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
   */
  readonly aliasName?: AliasName;
}
export interface DescribeTemplateResponse {
  /**
   * The template structure for the object you want to describe.
   */
  readonly template?: Template;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeThemeAliasRequest {
  /**
   * The ID of the AWS account that contains the theme alias that you're describing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The name of the theme alias that you want to describe.
   */
  readonly aliasName: AliasName;
}
export interface DescribeThemeAliasResponse {
  /**
   * Information about the theme alias.
   */
  readonly themeAlias?: ThemeAlias;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeThemePermissionsRequest {
  /**
   * The ID of the AWS account that contains the theme that you're describing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme that you want to describe permissions for.
   */
  readonly themeId: RestrictiveResourceId;
}
export interface DescribeThemePermissionsResponse {
  /**
   * The ID for the theme.
   */
  readonly themeId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the theme.
   */
  readonly themeArn?: Arn;
  /**
   * A list of resource permissions set on the theme.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface DescribeThemeRequest {
  /**
   * The ID of the AWS account that contains the theme that you're describing.
   */
  readonly awsAccountId: AwsAndAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The version number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the theme is described.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes.
   */
  readonly aliasName?: AliasName;
}
export interface DescribeThemeResponse {
  /**
   * The information about the theme that you are describing.
   */
  readonly theme?: Theme;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface DescribeUserRequest {
  /**
   * The name of the user that you want to describe.
   */
  readonly userName: UserName;
  /**
   * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface DescribeUserResponse {
  /**
   * The user name.
   */
  readonly user?: User;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export type Domain = string;
export type Double = number;
export type DoubleList = Double[];
export type Edition = 'STANDARD' | 'ENTERPRISE' | string;
export type EmbeddingIdentityType = 'IAM' | 'QUICKSIGHT' | 'ANONYMOUS' | string;
export type EmbeddingUrl = string;
export type EntryPoint = string;
export interface ErrorInfo {
  /**
   * Error type.
   */
  readonly type?: IngestionErrorType;
  /**
   * Error message.
   */
  readonly message?: string;
}
export interface ExportToCSVOption {
  /**
   * Availability status.
   */
  readonly availabilityStatus?: DashboardBehavior;
}
export type Expression = string;
export interface FieldFolder {
  /**
   * The description for a field folder.
   */
  readonly description?: FieldFolderDescription;
  /**
   * A folder has a list of columns. A column can only be in one folder.
   */
  readonly columns?: FolderColumnList;
}
export type FieldFolderDescription = string;
export type FieldFolderMap = { [key: string]: FieldFolder };
export type FieldFolderPath = string;
export type FileFormat = 'CSV' | 'TSV' | 'CLF' | 'ELF' | 'XLSX' | 'JSON' | string;
export interface FilterOperation {
  /**
   * An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
   */
  readonly conditionExpression: Expression;
}
export type FilterOperator = 'StringEquals' | string;
export type FolderColumnList = String[];
export interface GeoSpatialColumnGroup {
  /**
   * A display name for the hierarchy.
   */
  readonly name: ColumnGroupName;
  /**
   * Country code.
   */
  readonly countryCode: GeoSpatialCountryCode;
  /**
   * Columns in this hierarchy.
   */
  readonly columns: ColumnList;
}
export type GeoSpatialCountryCode = 'US' | string;
export type GeoSpatialDataRole = 'COUNTRY' | 'STATE' | 'COUNTY' | 'CITY' | 'POSTCODE' | 'LONGITUDE' | 'LATITUDE' | string;
export interface GetDashboardEmbedUrlRequest {
  /**
   * The ID for the AWS account that contains the dashboard that you're embedding.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard, also added to the AWS Identity and Access Management (IAM) policy.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The authentication method that the user uses to sign in.
   */
  readonly identityType: EmbeddingIdentityType;
  /**
   * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
   */
  readonly sessionLifetimeInMinutes?: SessionLifetimeInMinutes;
  /**
   * Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.
   */
  readonly undoRedoDisabled?: Boolean;
  /**
   * Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.
   */
  readonly resetDisabled?: Boolean;
  /**
   * Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE.
   */
  readonly statePersistenceEnabled?: Boolean;
  /**
   * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.   Omit this parameter for users in the third group – IAM users and IAM role-based sessions.
   */
  readonly userArn?: Arn;
  /**
   * The QuickSight namespace that contains the dashboard IDs in this request. If you're not using a custom namespace, set this to "default".
   */
  readonly namespace?: Namespace;
  /**
   * A list of one or more dashboard IDs that you want to add to a session that includes anonymous users. The IdentityType parameter must be set to ANONYMOUS for this to work, because other identity types authenticate as QuickSight or IAM users. For example, if you set "--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS", the session can access all three dashboards.
   */
  readonly additionalDashboardIds?: AdditionalDashboardIdList;
}
export interface GetDashboardEmbedUrlResponse {
  /**
   * A single-use URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours.
   */
  readonly embedUrl?: EmbeddingUrl;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface GetSessionEmbedUrlRequest {
  /**
   * The ID for the AWS account associated with your QuickSight subscription.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The URL you use to access the embedded session. The entry point URL is constrained to the following paths:    /start     /start/analyses     /start/dashboards     /start/favorites     /dashboards/DashboardId  - where DashboardId is the actual ID key from the QuickSight console URL of the dashboard    /analyses/AnalysisId  - where AnalysisId is the actual ID key from the QuickSight console URL of the analysis
   */
  readonly entryPoint?: EntryPoint;
  /**
   * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
   */
  readonly sessionLifetimeInMinutes?: SessionLifetimeInMinutes;
  /**
   * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any type of Amazon QuickSight users in your account (readers, authors, or admins). They need to be authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   AWS Identity and Access Management (IAM) users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation   Omit this parameter for users in the third group, IAM users and IAM role-based sessions.
   */
  readonly userArn?: Arn;
}
export interface GetSessionEmbedUrlResponse {
  /**
   * A single-use URL that you can put into your server-side web page to embed your QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours.
   */
  readonly embedUrl?: EmbeddingUrl;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface Group {
  /**
   * The Amazon Resource Name (ARN) for the group.
   */
  readonly arn?: Arn;
  /**
   * The name of the group.
   */
  readonly groupName?: GroupName;
  /**
   * The group description.
   */
  readonly description?: GroupDescription;
  /**
   * The principal ID of the group.
   */
  readonly principalId?: String;
}
export type GroupDescription = string;
export type GroupList = Group[];
export interface GroupMember {
  /**
   * The Amazon Resource Name (ARN) for the group member (user).
   */
  readonly arn?: Arn;
  /**
   * The name of the group member (user).
   */
  readonly memberName?: GroupMemberName;
}
export type GroupMemberList = GroupMember[];
export type GroupMemberName = string;
export type GroupName = string;
export interface GutterStyle {
  /**
   * This Boolean value controls whether to display a gutter space between sheet tiles.
   */
  readonly show?: boolean;
}
export type HexColor = string;
export type Host = string;
export interface IAMPolicyAssignment {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId?: AwsAccountId;
  /**
   * Assignment ID.
   */
  readonly assignmentId?: String;
  /**
   * Assignment name.
   */
  readonly assignmentName?: IAMPolicyAssignmentName;
  /**
   * The Amazon Resource Name (ARN) for the IAM policy.
   */
  readonly policyArn?: Arn;
  /**
   * Identities.
   */
  readonly identities?: IdentityMap;
  /**
   * Assignment status.
   */
  readonly assignmentStatus?: AssignmentStatus;
}
export type IAMPolicyAssignmentName = string;
export interface IAMPolicyAssignmentSummary {
  /**
   * Assignment name.
   */
  readonly assignmentName?: IAMPolicyAssignmentName;
  /**
   * Assignment status.
   */
  readonly assignmentStatus?: AssignmentStatus;
}
export type IAMPolicyAssignmentSummaryList = IAMPolicyAssignmentSummary[];
export type IdentityMap = { [key: string]: IdentityNameList };
export type IdentityName = string;
export type IdentityNameList = IdentityName[];
export type IdentityStore = 'QUICKSIGHT' | string;
export type IdentityType = 'IAM' | 'QUICKSIGHT' | string;
export interface Ingestion {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn: Arn;
  /**
   * Ingestion ID.
   */
  readonly ingestionId?: IngestionId;
  /**
   * Ingestion status.
   */
  readonly ingestionStatus: IngestionStatus;
  /**
   * Error information for this ingestion.
   */
  readonly errorInfo?: ErrorInfo;
  readonly rowInfo?: RowInfo;
  readonly queueInfo?: QueueInfo;
  /**
   * The time that this ingestion started.
   */
  readonly createdTime: timestamp;
  /**
   * The time that this ingestion took, measured in seconds.
   */
  readonly ingestionTimeInSeconds?: long;
  /**
   * The size of the data ingested, in bytes.
   */
  readonly ingestionSizeInBytes?: long;
  /**
   * Event source for this ingestion.
   */
  readonly requestSource?: IngestionRequestSource;
  /**
   * Type of this ingestion.
   */
  readonly requestType?: IngestionRequestType;
}
export type IngestionErrorType = 'FAILURE_TO_ASSUME_ROLE' | 'INGESTION_SUPERSEDED' | 'INGESTION_CANCELED' | 'DATA_SET_DELETED' | 'DATA_SET_NOT_SPICE' | 'S3_UPLOADED_FILE_DELETED' | 'S3_MANIFEST_ERROR' | 'DATA_TOLERANCE_EXCEPTION' | 'SPICE_TABLE_NOT_FOUND' | 'DATA_SET_SIZE_LIMIT_EXCEEDED' | 'ROW_SIZE_LIMIT_EXCEEDED' | 'ACCOUNT_CAPACITY_LIMIT_EXCEEDED' | 'CUSTOMER_ERROR' | 'DATA_SOURCE_NOT_FOUND' | 'IAM_ROLE_NOT_AVAILABLE' | 'CONNECTION_FAILURE' | 'SQL_TABLE_NOT_FOUND' | 'PERMISSION_DENIED' | 'SSL_CERTIFICATE_VALIDATION_FAILURE' | 'OAUTH_TOKEN_FAILURE' | 'SOURCE_API_LIMIT_EXCEEDED_FAILURE' | 'PASSWORD_AUTHENTICATION_FAILURE' | 'SQL_SCHEMA_MISMATCH_ERROR' | 'INVALID_DATE_FORMAT' | 'INVALID_DATAPREP_SYNTAX' | 'SOURCE_RESOURCE_LIMIT_EXCEEDED' | 'SQL_INVALID_PARAMETER_VALUE' | 'QUERY_TIMEOUT' | 'SQL_NUMERIC_OVERFLOW' | 'UNRESOLVABLE_HOST' | 'UNROUTABLE_HOST' | 'SQL_EXCEPTION' | 'S3_FILE_INACCESSIBLE' | 'IOT_FILE_NOT_FOUND' | 'IOT_DATA_SET_FILE_EMPTY' | 'INVALID_DATA_SOURCE_CONFIG' | 'DATA_SOURCE_AUTH_FAILED' | 'DATA_SOURCE_CONNECTION_FAILED' | 'FAILURE_TO_PROCESS_JSON_FILE' | 'INTERNAL_SERVICE_ERROR' | string;
export type IngestionId = string;
export type IngestionMaxResults = number;
export type IngestionRequestSource = 'MANUAL' | 'SCHEDULED' | string;
export type IngestionRequestType = 'INITIAL_INGESTION' | 'EDIT' | 'INCREMENTAL_REFRESH' | 'FULL_REFRESH' | string;
export type IngestionStatus = 'INITIALIZED' | 'QUEUED' | 'RUNNING' | 'FAILED' | 'COMPLETED' | 'CANCELLED' | string;
export type Ingestions = Ingestion[];
export interface InputColumn {
  /**
   * The name of this column in the underlying data source.
   */
  readonly name: ColumnName;
  /**
   * The data type of the column.
   */
  readonly type: InputColumnDataType;
}
export type InputColumnDataType = 'STRING' | 'INTEGER' | 'DECIMAL' | 'DATETIME' | 'BIT' | 'BOOLEAN' | 'JSON' | string;
export type InputColumnList = InputColumn[];
export type InstanceId = string;
export interface IntegerParameter {
  /**
   * The name of the integer parameter.
   */
  readonly name: NonEmptyString;
  /**
   * The values for the integer parameter.
   */
  readonly values: LongList;
}
export type IntegerParameterList = IntegerParameter[];
export interface JiraParameters {
  /**
   * The base URL of the Jira site.
   */
  readonly siteBaseUrl: SiteBaseUrl;
}
export interface JoinInstruction {
  /**
   * The operand on the left side of a join.
   */
  readonly leftOperand: LogicalTableId;
  /**
   * The operand on the right side of a join.
   */
  readonly rightOperand: LogicalTableId;
  /**
   * Join key properties of the left operand.
   */
  readonly leftJoinKeyProperties?: JoinKeyProperties;
  /**
   * Join key properties of the right operand.
   */
  readonly rightJoinKeyProperties?: JoinKeyProperties;
  /**
   * The type of join that it is.
   */
  readonly type: JoinType;
  /**
   * The join instructions provided in the ON clause of a join.
   */
  readonly onClause: OnClause;
}
export interface JoinKeyProperties {
  /**
   * A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by QuickSight to optimize query performance.
   */
  readonly uniqueKey?: Boolean;
}
export type JoinType = 'INNER' | 'OUTER' | 'LEFT' | 'RIGHT' | string;
export interface ListAnalysesRequest {
  /**
   * The ID of the AWS account that contains the analyses.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return.
   */
  readonly maxResults?: MaxResults;
}
export interface ListAnalysesResponse {
  /**
   * Metadata describing each of the analyses that are listed.
   */
  readonly analysisSummaryList?: AnalysisSummaryList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListDashboardVersionsRequest {
  /**
   * The ID of the AWS account that contains the dashboard that you're listing versions for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListDashboardVersionsResponse {
  /**
   * A structure that contains information about each version of the dashboard.
   */
  readonly dashboardVersionSummaryList?: DashboardVersionSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListDashboardsRequest {
  /**
   * The ID of the AWS account that contains the dashboards that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListDashboardsResponse {
  /**
   * A structure that contains all of the dashboards in your AWS account. This structure provides basic information about the dashboards.
   */
  readonly dashboardSummaryList?: DashboardSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListDataSetsRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListDataSetsResponse {
  /**
   * The list of dataset summaries.
   */
  readonly dataSetSummaries?: DataSetSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListDataSourcesRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListDataSourcesResponse {
  /**
   * A list of data sources.
   */
  readonly dataSources?: DataSourceList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListGroupMembershipsRequest {
  /**
   * The name of the group that you want to see a membership list of.
   */
  readonly groupName: GroupName;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return from this request.
   */
  readonly maxResults?: MaxResults;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface ListGroupMembershipsResponse {
  /**
   * The list of the members of the group.
   */
  readonly groupMemberList?: GroupMemberList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListGroupsRequest {
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return.
   */
  readonly maxResults?: MaxResults;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface ListGroupsResponse {
  /**
   * The list of the groups.
   */
  readonly groupList?: GroupList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * The ID of the AWS account that contains the assignments.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The name of the user.
   */
  readonly userName: UserName;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
  /**
   * The namespace of the assignment.
   */
  readonly namespace: Namespace;
}
export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * The active assignments for this user.
   */
  readonly activeAssignments?: ActiveIAMPolicyAssignmentList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListIAMPolicyAssignmentsRequest {
  /**
   * The ID of the AWS account that contains these IAM policy assignments.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The status of the assignments.
   */
  readonly assignmentStatus?: AssignmentStatus;
  /**
   * The namespace for the assignments.
   */
  readonly namespace: Namespace;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListIAMPolicyAssignmentsResponse {
  /**
   * Information describing the IAM policy assignments.
   */
  readonly iAMPolicyAssignments?: IAMPolicyAssignmentSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListIngestionsRequest {
  /**
   * The ID of the dataset used in the ingestion.
   */
  readonly dataSetId: string;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: string;
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: IngestionMaxResults;
}
export interface ListIngestionsResponse {
  /**
   * A list of the ingestions.
   */
  readonly ingestions?: Ingestions;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: string;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: string;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListNamespacesRequest {
  /**
   * The ID for the AWS account that contains the QuickSight namespaces that you want to list.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return.
   */
  readonly maxResults?: MaxResults;
}
export interface ListNamespacesResponse {
  /**
   * The information about the namespaces in this AWS account. The response includes the namespace ARN, name, AWS Region, notification email address, creation status, and identity store.
   */
  readonly namespaces?: Namespaces;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want a list of tags for.
   */
  readonly resourceArn: Arn;
}
export interface ListTagsForResourceResponse {
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   */
  readonly tags?: TagList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListTemplateAliasesRequest {
  /**
   * The ID of the AWS account that contains the template aliases that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListTemplateAliasesResponse {
  /**
   * A structure containing the list of the template's aliases.
   */
  readonly templateAliasList?: TemplateAliasList;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
}
export interface ListTemplateVersionsRequest {
  /**
   * The ID of the AWS account that contains the templates that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListTemplateVersionsResponse {
  /**
   * A structure containing a list of all the versions of the specified template.
   */
  readonly templateVersionSummaryList?: TemplateVersionSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListTemplatesRequest {
  /**
   * The ID of the AWS account that contains the templates that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListTemplatesResponse {
  /**
   * A structure containing information about the templates in the list.
   */
  readonly templateSummaryList?: TemplateSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListThemeAliasesRequest {
  /**
   * The ID of the AWS account that contains the theme aliases that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListThemeAliasesResponse {
  /**
   * A structure containing the list of the theme's aliases.
   */
  readonly themeAliasList?: ThemeAliasList;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
}
export interface ListThemeVersionsRequest {
  /**
   * The ID of the AWS account that contains the themes that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListThemeVersionsResponse {
  /**
   * A structure containing a list of all the versions of the specified theme.
   */
  readonly themeVersionSummaryList?: ThemeVersionSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListThemesRequest {
  /**
   * The ID of the AWS account that contains the themes that you're listing.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
  /**
   * The type of themes that you want to list. Valid options include the following:    ALL (default)- Display all existing themes.    CUSTOM - Display only the themes created by people using Amazon QuickSight.    QUICKSIGHT - Display only the starting themes defined by QuickSight.
   */
  readonly type?: ThemeType;
}
export interface ListThemesResponse {
  /**
   * Information about the themes in the list.
   */
  readonly themeSummaryList?: ThemeSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ListUserGroupsRequest {
  /**
   * The Amazon QuickSight user name that you want to list group memberships for.
   */
  readonly userName: UserName;
  /**
   * The AWS account ID that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return from this request.
   */
  readonly maxResults?: MaxResults;
}
export interface ListUserGroupsResponse {
  /**
   * The list of groups the user is a member of.
   */
  readonly groupList?: GroupList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface ListUsersRequest {
  /**
   * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return from this request.
   */
  readonly maxResults?: MaxResults;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface ListUsersResponse {
  /**
   * The list of users.
   */
  readonly userList?: UserList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface LogicalTable {
  /**
   * A display name for the logical table.
   */
  readonly alias: LogicalTableAlias;
  /**
   * Transform operations that act on this logical table.
   */
  readonly dataTransforms?: TransformOperationList;
  /**
   * Source of this logical table.
   */
  readonly source: LogicalTableSource;
}
export type LogicalTableAlias = string;
export type LogicalTableId = string;
export type LogicalTableMap = { [key: string]: LogicalTable };
export interface LogicalTableSource {
  /**
   * Specifies the result of a join of two logical tables.
   */
  readonly joinInstruction?: JoinInstruction;
  /**
   * Physical table ID.
   */
  readonly physicalTableId?: PhysicalTableId;
}
export type Long = number;
export type LongList = Long[];
export interface ManifestFileLocation {
  /**
   * Amazon S3 bucket.
   */
  readonly bucket: S3Bucket;
  /**
   * Amazon S3 key that identifies an object.
   */
  readonly key: S3Key;
}
export interface MarginStyle {
  /**
   * This Boolean value controls whether to display sheet margins.
   */
  readonly show?: boolean;
}
export interface MariaDbParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export type MaxResults = number;
export interface MySqlParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export type Namespace = string;
export interface NamespaceError {
  /**
   * The error type.
   */
  readonly type?: NamespaceErrorType;
  /**
   * The message for the error.
   */
  readonly message?: String;
}
export type NamespaceErrorType = 'PERMISSION_DENIED' | 'INTERNAL_SERVICE_ERROR' | string;
export interface NamespaceInfoV2 {
  /**
   * The name of the error.
   */
  readonly name?: Namespace;
  /**
   * The namespace ARN.
   */
  readonly arn?: Arn;
  /**
   * The namespace AWS Region.
   */
  readonly capacityRegion?: String;
  /**
   * The creation status of a namespace that is not yet completely created.
   */
  readonly creationStatus?: NamespaceStatus;
  /**
   * The identity store used for the namespace.
   */
  readonly identityStore?: IdentityStore;
  /**
   * An error that occurred when the namespace was created.
   */
  readonly namespaceError?: NamespaceError;
}
export type NamespaceStatus = 'CREATED' | 'CREATING' | 'DELETING' | 'RETRYABLE_FAILURE' | 'NON_RETRYABLE_FAILURE' | string;
export type Namespaces = NamespaceInfoV2[];
export type NonEmptyString = string;
export type OnClause = string;
export type OptionalPort = number;
export interface OracleParameters {
  /**
   * An Oracle host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export interface OutputColumn {
  /**
   * A display name for the dataset.
   */
  readonly name?: ColumnName;
  /**
   * A description for a column.
   */
  readonly description?: ColumnDescriptiveText;
  /**
   * Type.
   */
  readonly type?: ColumnDataType;
}
export type OutputColumnList = OutputColumn[];
export interface Parameters {
  /**
   * String parameters.
   */
  readonly stringParameters?: StringParameterList;
  /**
   * Integer parameters.
   */
  readonly integerParameters?: IntegerParameterList;
  /**
   * Decimal parameters.
   */
  readonly decimalParameters?: DecimalParameterList;
  /**
   * Date-time parameters.
   */
  readonly dateTimeParameters?: DateTimeParameterList;
}
export type Password = string;
export interface PhysicalTable {
  /**
   * A physical table type for relational data sources.
   */
  readonly relationalTable?: RelationalTable;
  /**
   * A physical table type built from the results of the custom SQL query.
   */
  readonly customSql?: CustomSql;
  /**
   * A physical table type for as S3 data source.
   */
  readonly s3Source?: S3Source;
}
export type PhysicalTableId = string;
export type PhysicalTableMap = { [key: string]: PhysicalTable };
export type Port = number;
export type PositiveInteger = number;
export interface PostgreSqlParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export interface PrestoParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Catalog.
   */
  readonly catalog: Catalog;
}
export type Principal = string;
export type PrincipalList = String[];
export interface ProjectOperation {
  /**
   * Projected columns.
   */
  readonly projectedColumns: ProjectedColumnList;
}
export type ProjectedColumnList = String[];
export type Query = string;
export interface QueueInfo {
  /**
   * The ID of the queued ingestion.
   */
  readonly waitingOnIngestion: string;
  /**
   * The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing ingestion to complete.
   */
  readonly queuedIngestion: string;
}
export interface RdsParameters {
  /**
   * Instance ID.
   */
  readonly instanceId: InstanceId;
  /**
   * Database.
   */
  readonly database: Database;
}
export type RecoveryWindowInDays = number;
export interface RedshiftParameters {
  /**
   * Host. This field can be blank if ClusterId is provided.
   */
  readonly host?: Host;
  /**
   * Port. This field can be blank if the ClusterId is provided.
   */
  readonly port?: OptionalPort;
  /**
   * Database.
   */
  readonly database: Database;
  /**
   * Cluster ID. This field can be blank if the Host and Port are provided.
   */
  readonly clusterId?: ClusterId;
}
export interface RegisterUserRequest {
  /**
   * Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:    IAM: A user whose identity maps to an existing IAM user or role.     QUICKSIGHT: A user whose identity is owned and managed internally by Amazon QuickSight.
   */
  readonly identityType: IdentityType;
  /**
   * The email address of the user that you want to register.
   */
  readonly email: String;
  /**
   * The Amazon QuickSight role for the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.
   */
  readonly userRole: UserRole;
  /**
   * The ARN of the IAM user or role that you are registering with Amazon QuickSight.
   */
  readonly iamArn?: String;
  /**
   * You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see  assume-role  in the AWS CLI Reference.
   */
  readonly sessionName?: RoleSessionName;
  /**
   * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
  /**
   * The Amazon QuickSight user name that you want to create for the user you are registering.
   */
  readonly userName?: UserName;
  /**
   * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   To add custom permissions to an existing user, use  UpdateUser  instead. A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a QuickSight user.  QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader). This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).
   */
  readonly customPermissionsName?: RoleName;
}
export interface RegisterUserResponse {
  /**
   * The user's user name.
   */
  readonly user?: User;
  /**
   * The URL the user visits to complete registration and provide a password. This is returned only for users with an identity type of QUICKSIGHT.
   */
  readonly userInvitationUrl?: String;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface RelationalTable {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   */
  readonly dataSourceArn: Arn;
  /**
   * The catalog associated with a table.
   */
  readonly catalog?: RelationalTableCatalog;
  /**
   * The schema name. This name applies to certain relational database engines.
   */
  readonly schema?: RelationalTableSchema;
  /**
   * The name of the relational table.
   */
  readonly name: RelationalTableName;
  /**
   * The column schema of the table.
   */
  readonly inputColumns: InputColumnList;
}
export type RelationalTableCatalog = string;
export type RelationalTableName = string;
export type RelationalTableSchema = string;
export interface RenameColumnOperation {
  /**
   * The name of the column to be renamed.
   */
  readonly columnName: ColumnName;
  /**
   * The new name for the column.
   */
  readonly newColumnName: ColumnName;
}
export type ResourceId = string;
export type ResourceName = string;
export interface ResourcePermission {
  /**
   * The Amazon Resource Name (ARN) of the principal. This can be one of the following:   The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)   The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)   The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight ARN. Use this option only to share resources (templates) across AWS accounts. (This is less common.)
   */
  readonly principal: Principal;
  /**
   * The IAM action to grant or revoke permissions on.
   */
  readonly actions: ActionList;
}
export type ResourcePermissionList = ResourcePermission[];
export type ResourceStatus = 'CREATION_IN_PROGRESS' | 'CREATION_SUCCESSFUL' | 'CREATION_FAILED' | 'UPDATE_IN_PROGRESS' | 'UPDATE_SUCCESSFUL' | 'UPDATE_FAILED' | 'DELETED' | string;
export interface RestoreAnalysisRequest {
  /**
   * The ID of the AWS account that contains the analysis.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the analysis that you're restoring.
   */
  readonly analysisId: RestrictiveResourceId;
}
export interface RestoreAnalysisResponse {
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The Amazon Resource Name (ARN) of the analysis that you're restoring.
   */
  readonly arn?: Arn;
  /**
   * The ID of the analysis that you're restoring.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export type RestrictiveResourceId = string;
export type RoleName = string;
export type RoleSessionName = string;
export interface RowInfo {
  /**
   * The number of rows that were ingested.
   */
  readonly rowsIngested?: long;
  /**
   * The number of rows that were not ingested.
   */
  readonly rowsDropped?: long;
}
export interface RowLevelPermissionDataSet {
  /**
   * The namespace associated with the dataset that contains permissions for RLS.
   */
  readonly namespace?: Namespace;
  /**
   * The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.
   */
  readonly arn: Arn;
  /**
   * The type of permissions to use when interpretting the permissions for RLS. DENY_ACCESS is included for backward compatibility only.
   */
  readonly permissionPolicy: RowLevelPermissionPolicy;
}
export type RowLevelPermissionPolicy = 'GRANT_ACCESS' | 'DENY_ACCESS' | string;
export type S3Bucket = string;
export type S3Key = string;
export interface S3Parameters {
  /**
   * Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded in the console.
   */
  readonly manifestFileLocation: ManifestFileLocation;
}
export interface S3Source {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   */
  readonly dataSourceArn: Arn;
  /**
   * Information about the format for the S3 source file or files.
   */
  readonly uploadSettings?: UploadSettings;
  /**
   * A physical table type for as S3 data source.
   */
  readonly inputColumns: InputColumnList;
}
export interface SearchAnalysesRequest {
  /**
   * The ID of the AWS account that contains the analyses that you're searching for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The structure for the search filters that you want to apply to your search.
   */
  readonly filters: AnalysisSearchFilterList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to return.
   */
  readonly maxResults?: MaxResults;
}
export interface SearchAnalysesResponse {
  /**
   * Metadata describing the analyses that you searched for.
   */
  readonly analysisSummaryList?: AnalysisSummaryList;
  /**
   * A pagination token that can be used in a subsequent request.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface SearchDashboardsRequest {
  /**
   * The ID of the AWS account that contains the user whose dashboards you're searching for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The filters to apply to the search. Currently, you can search only by user name, for example, "Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ]
   */
  readonly filters: DashboardSearchFilterList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The maximum number of results to be returned per request.
   */
  readonly maxResults?: MaxResults;
}
export interface SearchDashboardsResponse {
  /**
   * The list of dashboards owned by the user specified in Filters in your request.
   */
  readonly dashboardSummaryList?: DashboardSummaryList;
  /**
   * The token for the next set of results, or null if there are no more results.
   */
  readonly nextToken?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface ServiceNowParameters {
  /**
   * URL of the base site.
   */
  readonly siteBaseUrl: SiteBaseUrl;
}
export type SessionLifetimeInMinutes = number;
export interface Sheet {
  /**
   * The unique identifier associated with a sheet.
   */
  readonly sheetId?: RestrictiveResourceId;
  /**
   * The name of a sheet. This name is displayed on the sheet's tab in the QuickSight console.
   */
  readonly name?: NonEmptyString;
}
export interface SheetControlsOption {
  /**
   * Visibility state.
   */
  readonly visibilityState?: DashboardUIState;
}
export type SheetList = Sheet[];
export interface SheetStyle {
  /**
   * The display options for tiles.
   */
  readonly tile?: TileStyle;
  /**
   * The layout options for tiles.
   */
  readonly tileLayout?: TileLayoutStyle;
}
export type SiteBaseUrl = string;
export interface SnowflakeParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Database.
   */
  readonly database: Database;
  /**
   * Warehouse.
   */
  readonly warehouse: Warehouse;
}
export interface SparkParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
}
export type SqlQuery = string;
export interface SqlServerParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export interface SslProperties {
  /**
   * A Boolean option to control whether SSL should be disabled.
   */
  readonly disableSsl?: Boolean;
}
export type StatusCode = number;
export type String = string;
export type StringList = String[];
export interface StringParameter {
  /**
   * A display name for a string parameter.
   */
  readonly name: NonEmptyString;
  /**
   * The values of a string parameter.
   */
  readonly values: StringList;
}
export type StringParameterList = StringParameter[];
export interface Tag {
  /**
   * Tag key.
   */
  readonly key: TagKey;
  /**
   * Tag value.
   */
  readonly value: TagValue;
}
export interface TagColumnOperation {
  /**
   * The column that this operation acts on.
   */
  readonly columnName: ColumnName;
  /**
   * The dataset column tag, currently only used for geospatial type tagging. .  This is not tags for the AWS tagging feature. .
   */
  readonly tags: ColumnTagList;
}
export type TagKey = string;
export type TagKeyList = TagKey[];
export type TagList = Tag[];
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   */
  readonly resourceArn: Arn;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   */
  readonly tags: TagList;
}
export interface TagResourceResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export type TagValue = string;
export interface Template {
  /**
   * The Amazon Resource Name (ARN) of the template.
   */
  readonly arn?: Arn;
  /**
   * The display name of the template.
   */
  readonly name?: TemplateName;
  /**
   * A structure describing the versions of the template.
   */
  readonly version?: TemplateVersion;
  /**
   * The ID for the template. This is unique per AWS Region for each AWS account.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * Time when this was last updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * Time when this was created.
   */
  readonly createdTime?: Timestamp;
}
export interface TemplateAlias {
  /**
   * The display name of the template alias.
   */
  readonly aliasName?: AliasName;
  /**
   * The Amazon Resource Name (ARN) of the template alias.
   */
  readonly arn?: Arn;
  /**
   * The version number of the template alias.
   */
  readonly templateVersionNumber?: VersionNumber;
}
export type TemplateAliasList = TemplateAlias[];
export interface TemplateError {
  /**
   * Type of error.
   */
  readonly type?: TemplateErrorType;
  /**
   * Description of the error type.
   */
  readonly message?: NonEmptyString;
}
export type TemplateErrorList = TemplateError[];
export type TemplateErrorType = 'SOURCE_NOT_FOUND' | 'DATA_SET_NOT_FOUND' | 'INTERNAL_FAILURE' | 'ACCESS_DENIED' | string;
export type TemplateName = string;
export interface TemplateSourceAnalysis {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn: Arn;
  /**
   * A structure containing information about the dataset references used as placeholders in the template.
   */
  readonly dataSetReferences: DataSetReferenceList;
}
export interface TemplateSourceEntity {
  /**
   * The source analysis, if it is based on an analysis.
   */
  readonly sourceAnalysis?: TemplateSourceAnalysis;
  /**
   * The source template, if it is based on an template.
   */
  readonly sourceTemplate?: TemplateSourceTemplate;
}
export interface TemplateSourceTemplate {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn: Arn;
}
export interface TemplateSummary {
  /**
   * A summary of a template.
   */
  readonly arn?: Arn;
  /**
   * The ID of the template. This ID is unique per AWS Region for each AWS account.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * A display name for the template.
   */
  readonly name?: TemplateName;
  /**
   * A structure containing a list of version numbers for the template summary.
   */
  readonly latestVersionNumber?: VersionNumber;
  /**
   * The last time that this template was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last time that this template was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
}
export type TemplateSummaryList = TemplateSummary[];
export interface TemplateVersion {
  /**
   * The time that this template version was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * Errors associated with this template version.
   */
  readonly errors?: TemplateErrorList;
  /**
   * The version number of the template version.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The HTTP status of the request.
   */
  readonly status?: ResourceStatus;
  /**
   * Schema of the dataset identified by the placeholder. Any dashboard created from this template should be bound to new datasets matching the same schema described through this API operation.
   */
  readonly dataSetConfigurations?: DataSetConfigurationList;
  /**
   * The description of the template.
   */
  readonly description?: VersionDescription;
  /**
   * The Amazon Resource Name (ARN) of an analysis or template that was used to create this template.
   */
  readonly sourceEntityArn?: Arn;
  /**
   * The ARN of the theme associated with this version of the template.
   */
  readonly themeArn?: Arn;
  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   */
  readonly sheets?: SheetList;
}
export interface TemplateVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the template version.
   */
  readonly arn?: Arn;
  /**
   * The version number of the template version.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The time that this template version was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The status of the template version.
   */
  readonly status?: ResourceStatus;
  /**
   * The description of the template version.
   */
  readonly description?: VersionDescription;
}
export type TemplateVersionSummaryList = TemplateVersionSummary[];
export interface TeradataParameters {
  /**
   * Host.
   */
  readonly host: Host;
  /**
   * Port.
   */
  readonly port: Port;
  /**
   * Database.
   */
  readonly database: Database;
}
export type TextQualifier = 'DOUBLE_QUOTE' | 'SINGLE_QUOTE' | string;
export interface Theme {
  /**
   * The Amazon Resource Name (ARN) of the theme.
   */
  readonly arn?: Arn;
  /**
   * The name that the user gives to the theme.
   */
  readonly name?: ThemeName;
  /**
   * The identifier that the user gives to the theme.
   */
  readonly themeId?: RestrictiveResourceId;
  readonly version?: ThemeVersion;
  /**
   * The date and time that the theme was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The date and time that the theme was last updated.
   */
  readonly lastUpdatedTime?: Timestamp;
  /**
   * The type of theme, based on how it was created. Valid values include: QUICKSIGHT and CUSTOM.
   */
  readonly type?: ThemeType;
}
export interface ThemeAlias {
  /**
   * The Amazon Resource Name (ARN) of the theme alias.
   */
  readonly arn?: Arn;
  /**
   * The display name of the theme alias.
   */
  readonly aliasName?: AliasName;
  /**
   * The version number of the theme alias.
   */
  readonly themeVersionNumber?: VersionNumber;
}
export type ThemeAliasList = ThemeAlias[];
export interface ThemeConfiguration {
  /**
   * Color properties that apply to chart data colors.
   */
  readonly dataColorPalette?: DataColorPalette;
  /**
   * Color properties that apply to the UI and to charts, excluding the colors that apply to data.
   */
  readonly uIColorPalette?: UIColorPalette;
  /**
   * Display options related to sheets.
   */
  readonly sheet?: SheetStyle;
}
export interface ThemeError {
  /**
   * The type of error.
   */
  readonly type?: ThemeErrorType;
  /**
   * The error message.
   */
  readonly message?: NonEmptyString;
}
export type ThemeErrorList = ThemeError[];
export type ThemeErrorType = 'INTERNAL_FAILURE' | string;
export type ThemeName = string;
export interface ThemeSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * the display name for the theme.
   */
  readonly name?: ThemeName;
  /**
   * The ID of the theme. This ID is unique per AWS Region for each AWS account.
   */
  readonly themeId?: RestrictiveResourceId;
  /**
   * The latest version number for the theme.
   */
  readonly latestVersionNumber?: VersionNumber;
  /**
   * The date and time that this theme was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The last date and time that this theme was updated.
   */
  readonly lastUpdatedTime?: Timestamp;
}
export type ThemeSummaryList = ThemeSummary[];
export type ThemeType = 'QUICKSIGHT' | 'CUSTOM' | 'ALL' | string;
export interface ThemeVersion {
  /**
   * The version number of the theme.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * The description of the theme.
   */
  readonly description?: VersionDescription;
  /**
   * The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All themes initially inherit from a default QuickSight theme.
   */
  readonly baseThemeId?: RestrictiveResourceId;
  /**
   * The date and time that this theme version was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The theme configuration, which contains all the theme display properties.
   */
  readonly configuration?: ThemeConfiguration;
  /**
   * Errors associated with the theme.
   */
  readonly errors?: ThemeErrorList;
  /**
   * The status of the theme version.
   */
  readonly status?: ResourceStatus;
}
export interface ThemeVersionSummary {
  /**
   * The version number of the theme version.
   */
  readonly versionNumber?: VersionNumber;
  /**
   * The Amazon Resource Name (ARN) of the theme version.
   */
  readonly arn?: Arn;
  /**
   * The description of the theme version.
   */
  readonly description?: VersionDescription;
  /**
   * The date and time that this theme version was created.
   */
  readonly createdTime?: Timestamp;
  /**
   * The status of the theme version.
   */
  readonly status?: ResourceStatus;
}
export type ThemeVersionSummaryList = ThemeVersionSummary[];
export interface TileLayoutStyle {
  /**
   * The gutter settings that apply between tiles.
   */
  readonly gutter?: GutterStyle;
  /**
   * The margin settings that apply around the outside edge of sheets.
   */
  readonly margin?: MarginStyle;
}
export interface TileStyle {
  /**
   * The border around a tile.
   */
  readonly border?: BorderStyle;
}
export type Timestamp = Date;
export type TimestampList = Timestamp[];
export interface TransformOperation {
  /**
   * An operation that projects columns. Operations that come after a projection can only refer to projected columns.
   */
  readonly projectOperation?: ProjectOperation;
  /**
   * An operation that filters rows based on some condition.
   */
  readonly filterOperation?: FilterOperation;
  /**
   * An operation that creates calculated columns. Columns created in one such operation form a lexical closure.
   */
  readonly createColumnsOperation?: CreateColumnsOperation;
  /**
   * An operation that renames a column.
   */
  readonly renameColumnOperation?: RenameColumnOperation;
  /**
   * A transform operation that casts a column to a different type.
   */
  readonly castColumnTypeOperation?: CastColumnTypeOperation;
  /**
   * An operation that tags a column with additional information.
   */
  readonly tagColumnOperation?: TagColumnOperation;
}
export type TransformOperationList = TransformOperation[];
export interface TwitterParameters {
  /**
   * Twitter query string.
   */
  readonly query: Query;
  /**
   * Maximum number of rows to query Twitter.
   */
  readonly maxRows: PositiveInteger;
}
export type TypeCastFormat = string;
export interface UIColorPalette {
  /**
   * The color of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
   */
  readonly primaryForeground?: HexColor;
  /**
   * The background color that applies to visuals and other high emphasis UI.
   */
  readonly primaryBackground?: HexColor;
  /**
   * The foreground color that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
   */
  readonly secondaryForeground?: HexColor;
  /**
   * The background color that applies to the sheet background and sheet controls.
   */
  readonly secondaryBackground?: HexColor;
  /**
   * This color is that applies to selected states and buttons.
   */
  readonly accent?: HexColor;
  /**
   * The foreground color that applies to any text or other elements that appear over the accent color.
   */
  readonly accentForeground?: HexColor;
  /**
   * The color that applies to error messages.
   */
  readonly danger?: HexColor;
  /**
   * The foreground color that applies to any text or other elements that appear over the error color.
   */
  readonly dangerForeground?: HexColor;
  /**
   * This color that applies to warning and informational messages.
   */
  readonly warning?: HexColor;
  /**
   * The foreground color that applies to any text or other elements that appear over the warning color.
   */
  readonly warningForeground?: HexColor;
  /**
   * The color that applies to success messages, for example the check mark for a successful download.
   */
  readonly success?: HexColor;
  /**
   * The foreground color that applies to any text or other elements that appear over the success color.
   */
  readonly successForeground?: HexColor;
  /**
   * The color that applies to the names of fields that are identified as dimensions.
   */
  readonly dimension?: HexColor;
  /**
   * The foreground color that applies to any text or other elements that appear over the dimension color.
   */
  readonly dimensionForeground?: HexColor;
  /**
   * The color that applies to the names of fields that are identified as measures.
   */
  readonly measure?: HexColor;
  /**
   * The foreground color that applies to any text or other elements that appear over the measure color.
   */
  readonly measureForeground?: HexColor;
}
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   */
  readonly resourceArn: Arn;
  /**
   * The keys of the key-value pairs for the resource tag or tags assigned to the resource.
   */
  readonly tagKeys: TagKeyList;
}
export interface UntagResourceResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateAccountCustomizationRequest {
  /**
   * The ID for the AWS account that you want to update QuickSight customizations for.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace that you want to update QuickSight customizations for.
   */
  readonly namespace?: Namespace;
  /**
   * The QuickSight customizations you're updating in the current AWS Region.
   */
  readonly accountCustomization: AccountCustomization;
}
export interface UpdateAccountCustomizationResponse {
  /**
   * The Amazon Resource Name (ARN) for the updated customization for this AWS account.
   */
  readonly arn?: Arn;
  /**
   * The ID for the AWS account that you want to update QuickSight customizations for.
   */
  readonly awsAccountId?: AwsAccountId;
  /**
   * The namespace associated with the customization that you're updating.
   */
  readonly namespace?: Namespace;
  /**
   * The QuickSight customizations you're updating in the current AWS Region.
   */
  readonly accountCustomization?: AccountCustomization;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateAccountSettingsRequest {
  /**
   * The ID for the AWS account that contains the QuickSight settings that you want to list.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The default namespace for this AWS account. Currently, the default is default. AWS Identity and Access Management (IAM) users that register for the first time with QuickSight provide an email that becomes associated with the default namespace.
   */
  readonly defaultNamespace: Namespace;
  /**
   * The email address that you want QuickSight to send notifications to regarding your AWS account or QuickSight subscription.
   */
  readonly notificationEmail?: String;
}
export interface UpdateAccountSettingsResponse {
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateAnalysisPermissionsRequest {
  /**
   * The ID of the AWS account that contains the analysis whose permissions you're updating. You must be using the AWS account that the analysis is in.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the analysis whose permissions you're updating. The ID is part of the analysis URL.
   */
  readonly analysisId: RestrictiveResourceId;
  /**
   * A structure that describes the permissions to add and the principal to add them to.
   */
  readonly grantPermissions?: UpdateResourcePermissionList;
  /**
   * A structure that describes the permissions to remove and the principal to remove them from.
   */
  readonly revokePermissions?: UpdateResourcePermissionList;
}
export interface UpdateAnalysisPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the analysis that you updated.
   */
  readonly analysisArn?: Arn;
  /**
   * The ID of the analysis that you updated permissions for.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * A structure that describes the principals and the resource-level permissions on an analysis.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateAnalysisRequest {
  /**
   * The ID of the AWS account that contains the analysis that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the analysis that you're updating. This ID displays in the URL of the analysis.
   */
  readonly analysisId: RestrictiveResourceId;
  /**
   * A descriptive name for the analysis that you're updating. This name displays for the analysis in the QuickSight console.
   */
  readonly name: AnalysisName;
  /**
   * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.
   */
  readonly parameters?: Parameters;
  /**
   * A source entity to use for the analysis that you're updating. This metadata structure contains details that describe a source template and one or more datasets.
   */
  readonly sourceEntity: AnalysisSourceEntity;
  /**
   * The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating. To see the theme in the QuickSight console, make sure that you have access to it.
   */
  readonly themeArn?: Arn;
}
export interface UpdateAnalysisResponse {
  /**
   * The ARN of the analysis that you're updating.
   */
  readonly arn?: Arn;
  /**
   * The ID of the analysis.
   */
  readonly analysisId?: RestrictiveResourceId;
  /**
   * The update status of the last update that was made to the analysis.
   */
  readonly updateStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateDashboardPermissionsRequest {
  /**
   * The ID of the AWS account that contains the dashboard whose permissions you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The permissions that you want to grant on this resource.
   */
  readonly grantPermissions?: UpdateResourcePermissionList;
  /**
   * The permissions that you want to revoke from this resource.
   */
  readonly revokePermissions?: UpdateResourcePermissionList;
}
export interface UpdateDashboardPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   */
  readonly dashboardArn?: Arn;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * Information about the permissions on the dashboard.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateDashboardPublishedVersionRequest {
  /**
   * The ID of the AWS account that contains the dashboard that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The version number of the dashboard.
   */
  readonly versionNumber: VersionNumber;
}
export interface UpdateDashboardPublishedVersionResponse {
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   */
  readonly dashboardArn?: Arn;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateDashboardRequest {
  /**
   * The ID of the AWS account that contains the dashboard that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId: RestrictiveResourceId;
  /**
   * The display name of the dashboard.
   */
  readonly name: DashboardName;
  /**
   * The entity that you are using as a source when you update the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only update a dashboard from a template, so you use a SourceTemplate entity. If you need to update a dashboard from an analysis, first convert the analysis to a template by using the CreateTemplate API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
   */
  readonly sourceEntity: DashboardSourceEntity;
  /**
   * A structure that contains the parameters of the dashboard. These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values.
   */
  readonly parameters?: Parameters;
  /**
   * A description for the first version of the dashboard being created.
   */
  readonly versionDescription?: VersionDescription;
  /**
   * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.
   */
  readonly dashboardPublishOptions?: DashboardPublishOptions;
  /**
   * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same AWS account where you create the dashboard.
   */
  readonly themeArn?: Arn;
}
export interface UpdateDashboardResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  readonly arn?: Arn;
  /**
   * The ARN of the dashboard, including the version number.
   */
  readonly versionArn?: Arn;
  /**
   * The ID for the dashboard.
   */
  readonly dashboardId?: RestrictiveResourceId;
  /**
   * The creation status of the request.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateDataSetPermissionsRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dataset whose permissions you want to update. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId: ResourceId;
  /**
   * The resource permissions that you want to grant to the dataset.
   */
  readonly grantPermissions?: ResourcePermissionList;
  /**
   * The resource permissions that you want to revoke from the dataset.
   */
  readonly revokePermissions?: ResourcePermissionList;
}
export interface UpdateDataSetPermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   */
  readonly dataSetArn?: Arn;
  /**
   * The ID for the dataset whose permissions you want to update. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId?: ResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateDataSetRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the dataset that you want to update. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId: ResourceId;
  /**
   * The display name for the dataset.
   */
  readonly name: ResourceName;
  /**
   * Declares the physical tables that are available in the underlying data sources.
   */
  readonly physicalTableMap: PhysicalTableMap;
  /**
   * Configures the combination and transformation of the data from the physical tables.
   */
  readonly logicalTableMap?: LogicalTableMap;
  /**
   * Indicates whether you want to import the data into SPICE.
   */
  readonly importMode: DataSetImportMode;
  /**
   * Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
   */
  readonly columnGroups?: ColumnGroupList;
  /**
   * The folder that contains fields and nested subfolders for your dataset.
   */
  readonly fieldFolders?: FieldFolderMap;
  /**
   * The row-level security configuration for the data you want to create.
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * A set of one or more definitions of a  ColumnLevelPermissionRule .
   */
  readonly columnLevelPermissionRules?: ColumnLevelPermissionRuleList;
}
export interface UpdateDataSetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   */
  readonly arn?: Arn;
  /**
   * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSetId?: ResourceId;
  /**
   * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   */
  readonly ingestionArn?: Arn;
  /**
   * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   */
  readonly ingestionId?: ResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateDataSourcePermissionsRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId: ResourceId;
  /**
   * A list of resource permissions that you want to grant on the data source.
   */
  readonly grantPermissions?: ResourcePermissionList;
  /**
   * A list of resource permissions that you want to revoke on the data source.
   */
  readonly revokePermissions?: ResourcePermissionList;
}
export interface UpdateDataSourcePermissionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   */
  readonly dataSourceArn?: Arn;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId?: ResourceId;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateDataSourceRequest {
  /**
   * The AWS account ID.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId: ResourceId;
  /**
   * A display name for the data source.
   */
  readonly name: ResourceName;
  /**
   * The parameters that QuickSight uses to connect to your underlying source.
   */
  readonly dataSourceParameters?: DataSourceParameters;
  /**
   * The credentials that QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
   */
  readonly credentials?: DataSourceCredentials;
  /**
   * Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
   */
  readonly vpcConnectionProperties?: VpcConnectionProperties;
  /**
   * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
   */
  readonly sslProperties?: SslProperties;
}
export interface UpdateDataSourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   */
  readonly arn?: Arn;
  /**
   * The ID of the data source. This ID is unique per AWS Region for each AWS account.
   */
  readonly dataSourceId?: ResourceId;
  /**
   * The update status of the data source's last update.
   */
  readonly updateStatus?: ResourceStatus;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateGroupRequest {
  /**
   * The name of the group that you want to update.
   */
  readonly groupName: GroupName;
  /**
   * The description for the group that you want to update.
   */
  readonly description?: GroupDescription;
  /**
   * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
}
export interface UpdateGroupResponse {
  /**
   * The name of the group.
   */
  readonly group?: Group;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * The ID of the AWS account that contains the IAM policy assignment.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The name of the assignment, also called a rule. This name must be unique within an AWS account.
   */
  readonly assignmentName: IAMPolicyAssignmentName;
  /**
   * The namespace of the assignment.
   */
  readonly namespace: Namespace;
  /**
   * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
   */
  readonly assignmentStatus?: AssignmentStatus;
  /**
   * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
   */
  readonly policyArn?: Arn;
  /**
   * The QuickSight users, groups, or both that you want to assign the policy to.
   */
  readonly identities?: IdentityMap;
}
export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * The name of the assignment or rule.
   */
  readonly assignmentName?: IAMPolicyAssignmentName;
  /**
   * The ID of the assignment.
   */
  readonly assignmentId?: String;
  /**
   * The ARN for the IAM policy applied to the QuickSight users and groups specified in this assignment.
   */
  readonly policyArn?: Arn;
  /**
   * The QuickSight users, groups, or both that the IAM policy is assigned to.
   */
  readonly identities?: IdentityMap;
  /**
   * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.
   */
  readonly assignmentStatus?: AssignmentStatus;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export type UpdateResourcePermissionList = ResourcePermission[];
export interface UpdateTemplateAliasRequest {
  /**
   * The ID of the AWS account that contains the template alias that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
   */
  readonly aliasName: AliasName;
  /**
   * The version number of the template.
   */
  readonly templateVersionNumber: VersionNumber;
}
export interface UpdateTemplateAliasResponse {
  /**
   * The template alias.
   */
  readonly templateAlias?: TemplateAlias;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateTemplatePermissionsRequest {
  /**
   * The ID of the AWS account that contains the template.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * A list of resource permissions to be granted on the template.
   */
  readonly grantPermissions?: UpdateResourcePermissionList;
  /**
   * A list of resource permissions to be revoked from the template.
   */
  readonly revokePermissions?: UpdateResourcePermissionList;
}
export interface UpdateTemplatePermissionsResponse {
  /**
   * The ID for the template.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the template.
   */
  readonly templateArn?: Arn;
  /**
   * A list of resource permissions to be set on the template.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateTemplateRequest {
  /**
   * The ID of the AWS account that contains the template that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the template.
   */
  readonly templateId: RestrictiveResourceId;
  /**
   * The entity that you are using as a source when you update the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
   */
  readonly sourceEntity: TemplateSourceEntity;
  /**
   * A description of the current template version that is being updated. Every time you call UpdateTemplate, you create a new version of the template. Each version of the template maintains a description of the version in the VersionDescription field.
   */
  readonly versionDescription?: VersionDescription;
  /**
   * The name for the template.
   */
  readonly name?: TemplateName;
}
export interface UpdateTemplateResponse {
  /**
   * The ID for the template.
   */
  readonly templateId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) for the template.
   */
  readonly arn?: Arn;
  /**
   * The ARN for the template, including the version information of the first version.
   */
  readonly versionArn?: Arn;
  /**
   * The creation status of the template.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateThemeAliasRequest {
  /**
   * The ID of the AWS account that contains the theme alias that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The name of the theme alias that you want to update.
   */
  readonly aliasName: AliasName;
  /**
   * The version number of the theme that the alias should reference.
   */
  readonly themeVersionNumber: VersionNumber;
}
export interface UpdateThemeAliasResponse {
  /**
   * Information about the theme alias.
   */
  readonly themeAlias?: ThemeAlias;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateThemePermissionsRequest {
  /**
   * The ID of the AWS account that contains the theme.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * A list of resource permissions to be granted for the theme.
   */
  readonly grantPermissions?: UpdateResourcePermissionList;
  /**
   * A list of resource permissions to be revoked from the theme.
   */
  readonly revokePermissions?: UpdateResourcePermissionList;
}
export interface UpdateThemePermissionsResponse {
  /**
   * The ID for the theme.
   */
  readonly themeId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) of the theme.
   */
  readonly themeArn?: Arn;
  /**
   * The resulting list of resource permissions for the theme.
   */
  readonly permissions?: ResourcePermissionList;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UpdateThemeRequest {
  /**
   * The ID of the AWS account that contains the theme that you're updating.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The ID for the theme.
   */
  readonly themeId: RestrictiveResourceId;
  /**
   * The name for the theme.
   */
  readonly name?: ThemeName;
  /**
   * The theme ID, defined by Amazon QuickSight, that a custom theme inherits from. All themes initially inherit from a default QuickSight theme.
   */
  readonly baseThemeId: RestrictiveResourceId;
  /**
   * A description of the theme version that you're updating Every time that you call UpdateTheme, you create a new version of the theme. Each version of the theme maintains a description of the version in VersionDescription.
   */
  readonly versionDescription?: VersionDescription;
  /**
   * The theme configuration, which contains the theme display properties.
   */
  readonly configuration?: ThemeConfiguration;
}
export interface UpdateThemeResponse {
  /**
   * The ID for the theme.
   */
  readonly themeId?: RestrictiveResourceId;
  /**
   * The Amazon Resource Name (ARN) for the theme.
   */
  readonly arn?: Arn;
  /**
   * The Amazon Resource Name (ARN) for the new version of the theme.
   */
  readonly versionArn?: Arn;
  /**
   * The creation status of the theme.
   */
  readonly creationStatus?: ResourceStatus;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
}
export interface UpdateUserRequest {
  /**
   * The Amazon QuickSight user name that you want to update.
   */
  readonly userName: UserName;
  /**
   * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
   */
  readonly awsAccountId: AwsAccountId;
  /**
   * The namespace. Currently, you should set this to default.
   */
  readonly namespace: Namespace;
  /**
   * The email address of the user that you want to update.
   */
  readonly email: String;
  /**
   * The Amazon QuickSight role of the user. The role can be one of the following default security cohorts:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.   The name of the QuickSight role is invisible to the user except for the console screens dealing with permissions.
   */
  readonly role: UserRole;
  /**
   * (Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a QuickSight user.  QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader). This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).
   */
  readonly customPermissionsName?: RoleName;
  /**
   * A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.
   */
  readonly unapplyCustomPermissions?: Boolean;
}
export interface UpdateUserResponse {
  /**
   * The Amazon QuickSight user.
   */
  readonly user?: User;
  /**
   * The AWS request ID for this operation.
   */
  readonly requestId?: String;
  /**
   * The HTTP status of the request.
   */
  readonly status?: StatusCode;
}
export interface UploadSettings {
  /**
   * File format.
   */
  readonly format?: FileFormat;
  /**
   * A row number to start reading data from.
   */
  readonly startFromRow?: PositiveInteger;
  /**
   * Whether the file has a header row, or the files each have a header row.
   */
  readonly containsHeader?: Boolean;
  /**
   * Text qualifier.
   */
  readonly textQualifier?: TextQualifier;
  /**
   * The delimiter between values in the file.
   */
  readonly delimiter?: Delimiter;
}
export interface User {
  /**
   * The Amazon Resource Name (ARN) for the user.
   */
  readonly arn?: Arn;
  /**
   * The user's user name.
   */
  readonly userName?: UserName;
  /**
   * The user's email address.
   */
  readonly email?: String;
  /**
   * The Amazon QuickSight role for the user. The user role can be one of the following:.    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.
   */
  readonly role?: UserRole;
  /**
   * The type of identity authentication used by the user.
   */
  readonly identityType?: IdentityType;
  /**
   * The active status of user. When you create an Amazon QuickSight user that’s not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a password.
   */
  readonly active?: Boolean;
  /**
   * The principal ID of the user.
   */
  readonly principalId?: String;
  /**
   * The custom permissions profile associated with this user.
   */
  readonly customPermissionsName?: RoleName;
}
export type UserList = User[];
export type UserName = string;
export type UserRole = 'ADMIN' | 'AUTHOR' | 'READER' | 'RESTRICTED_AUTHOR' | 'RESTRICTED_READER' | string;
export type Username = string;
export type VersionDescription = string;
export type VersionNumber = number;
export interface VpcConnectionProperties {
  /**
   * The Amazon Resource Name (ARN) for the VPC connection.
   */
  readonly vpcConnectionArn: Arn;
}
export type Warehouse = string;
export type WorkGroup = string;
export type long = number;
export type timestamp = Date;
/**
 * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
 */
export type apiVersion = '2018-04-01' | 'latest' | string;
export interface ClientApiVersions {
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  readonly apiVersion?: apiVersion;
}
// export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
/**
 * Contains interfaces for use with the QuickSight client.
 */
//   export import Types = QuickSight;
// }
// export = QuickSight;
