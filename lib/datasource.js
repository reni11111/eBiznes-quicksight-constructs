"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceConstruct = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/* eslint-disable @typescript-eslint/no-require-imports */
// import * as qs from '@aws-cdk/aws-quicksight';
const iam = require("@aws-cdk/aws-iam");
const cdk = require("@aws-cdk/core");
const custom = require("@aws-cdk/custom-resources");
const dataset_1 = require("./dataset");
/**
 * @stability stable
 */
class DataSourceConstruct extends cdk.Construct {
    /**
     * @stability stable
     */
    constructor(scope, id, props) {
        super(scope, id);
        if (props.users.length < 1) {
            throw Error('No users defined!');
        }
        if (props.users.find(u => u === '')) {
            throw Error('Empty user not allowed!');
        }
        let parameters = {
            awsAccountId: cdk.Stack.of(this).account,
            type: props.type,
            dataSourceId: props.name,
            name: props.name,
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
        parameters = dataset_1.castUppercase(parameters);
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
exports.DataSourceConstruct = DataSourceConstruct;
_a = JSII_RTTI_SYMBOL_1;
DataSourceConstruct[_a] = { fqn: "cdk-quicksight-constructs.DataSourceConstruct", version: "0.1.5" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQTBEO0FBQzFELGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLG9EQUFvRDtBQUNwRCx1Q0FBMEM7Ozs7QUFvQjFDLE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFNBQVM7Ozs7SUFFcEQsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLFVBQVUsR0FBNEI7WUFDeEMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87WUFDeEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLEVBQUU7b0JBQ1AsK0JBQStCO29CQUMvQiwwQ0FBMEM7b0JBQzFDLDJCQUEyQjtvQkFDM0IsNkJBQTZCO29CQUM3Qiw2QkFBNkI7b0JBQzdCLHdDQUF3QztpQkFDekM7Z0JBQ0QsU0FBUyxFQUFFLHNCQUFzQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxpQkFBaUIsSUFBSSxFQUFFO2FBQ2hILENBQUMsQ0FBQztTQUNKLENBQUM7UUFFRixVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUM5RSxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixrQkFBa0IsRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4RTtZQUNELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsWUFBWTtnQkFDckIsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsVUFBVSxFQUFFO29CQUNWLFlBQVksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPO29CQUN4QyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUk7aUJBQ3pCO2dCQUNELGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ3pDLFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDM0QsZUFBZSxFQUFFO29CQUNmLEdBQUcsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7aUJBQ2xFO2FBQ0YsQ0FBQztZQUNGLE1BQU0sRUFBRSxNQUFNLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNoSCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O0FBM0RILGtEQTREQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbi8vIGltcG9ydCAqIGFzIHFzIGZyb20gJ0Bhd3MtY2RrL2F3cy1xdWlja3NpZ2h0JztcbmltcG9ydCAqIGFzIGlhbSBmcm9tICdAYXdzLWNkay9hd3MtaWFtJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGN1c3RvbSBmcm9tICdAYXdzLWNkay9jdXN0b20tcmVzb3VyY2VzJztcbmltcG9ydCB7IGNhc3RVcHBlcmNhc2UgfSBmcm9tICcuL2RhdGFzZXQnO1xuLy8gaW1wb3J0IHsgTnVtYmVyIH0gZnJvbSAnYXdzLXNkay9jbGllbnRzL2lvdCc7XG4vLyBpbXBvcnQgUXVpY2tTaWdodCA9IHJlcXVpcmUoJ2F3cy1zZGsvY2xpZW50cy9xdWlja3NpZ2h0Jyk7XG5pbXBvcnQgeyBDcmVhdGVEYXRhU291cmNlUmVxdWVzdCwgRGF0YVNvdXJjZVBhcmFtZXRlcnMsIERhdGFTb3VyY2VUeXBlIH0gZnJvbSAnLi9zZGsvcXVpY2tzaWdodCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVByb3BzIGV4dGVuZHMgUVNDb21tb25Qcm9wcyB7XG4gIHJlYWRvbmx5IGRhdGFTb3VyY2VQYXJhbWV0ZXJzOiBEYXRhU291cmNlUGFyYW1ldGVycztcbiAgcmVhZG9ubHkgdHlwZTogRGF0YVNvdXJjZVR5cGUgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUVNDb21tb25Qcm9wcyB7XG4gIC8vIHJlYWRvbmx5IGFjY291bnQ6IHN0cmluZztcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlcnM6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VDb25zdHJ1Y3QgZXh0ZW5kcyBjZGsuQ29uc3RydWN0IHtcbiAgZGF0YVNvdXJjZUFybjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERhdGFTb3VyY2VQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgaWYgKHByb3BzLnVzZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyB1c2VycyBkZWZpbmVkIScpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy51c2Vycy5maW5kKHUgPT4gdSA9PT0gJycpKSB7XG4gICAgICB0aHJvdyBFcnJvcignRW1wdHkgdXNlciBub3QgYWxsb3dlZCEnKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1ldGVyczogQ3JlYXRlRGF0YVNvdXJjZVJlcXVlc3QgPSB7XG4gICAgICBhd3NBY2NvdW50SWQ6IGNkay5TdGFjay5vZih0aGlzKS5hY2NvdW50LFxuICAgICAgdHlwZTogcHJvcHMudHlwZSxcbiAgICAgIGRhdGFTb3VyY2VJZDogcHJvcHMubmFtZSxcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICBkYXRhU291cmNlUGFyYW1ldGVyczogcHJvcHMuZGF0YVNvdXJjZVBhcmFtZXRlcnMsXG4gICAgICBwZXJtaXNzaW9uczogcHJvcHMudXNlcnMubWFwKHVzZXIgPT4gKHtcbiAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICdxdWlja3NpZ2h0OkRlc2NyaWJlRGF0YVNvdXJjZScsXG4gICAgICAgICAgJ3F1aWNrc2lnaHQ6RGVzY3JpYmVEYXRhU291cmNlUGVybWlzc2lvbnMnLFxuICAgICAgICAgICdxdWlja3NpZ2h0OlBhc3NEYXRhU291cmNlJyxcbiAgICAgICAgICAncXVpY2tzaWdodDpVcGRhdGVEYXRhU291cmNlJyxcbiAgICAgICAgICAncXVpY2tzaWdodDpEZWxldGVEYXRhU291cmNlJyxcbiAgICAgICAgICAncXVpY2tzaWdodDpVcGRhdGVEYXRhU291cmNlUGVybWlzc2lvbnMnLFxuICAgICAgICBdLFxuICAgICAgICBwcmluY2lwYWw6IGBhcm46YXdzOnF1aWNrc2lnaHQ6JHtjZGsuU3RhY2sub2YodGhpcykucmVnaW9ufToke2Nkay5TdGFjay5vZih0aGlzKS5hY2NvdW50fTp1c2VyL2RlZmF1bHQvJHt1c2VyfWAsXG4gICAgICB9KSksXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnMgPSBjYXN0VXBwZXJjYXNlKHBhcmFtZXRlcnMpO1xuXG4gICAgY29uc3QgY3JlYXRlRGF0YVNvdXJjZSA9IG5ldyBjdXN0b20uQXdzQ3VzdG9tUmVzb3VyY2UodGhpcywgJ2NyZWF0ZURhdGFTb3VyY2UnLCB7XG4gICAgICBvbkNyZWF0ZToge1xuICAgICAgICBzZXJ2aWNlOiAnUXVpY2tTaWdodCcsXG4gICAgICAgIGFjdGlvbjogJ2NyZWF0ZURhdGFTb3VyY2UnLFxuICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzLFxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQ6IGN1c3RvbS5QaHlzaWNhbFJlc291cmNlSWQub2YoRGF0ZS5ub3coKS50b1N0cmluZygpKSxcbiAgICAgIH0sXG4gICAgICBvbkRlbGV0ZToge1xuICAgICAgICBzZXJ2aWNlOiAnUXVpY2tTaWdodCcsXG4gICAgICAgIGFjdGlvbjogJ2RlbGV0ZURhdGFTb3VyY2UnLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgQXdzQWNjb3VudElkOiBjZGsuU3RhY2sub2YodGhpcykuYWNjb3VudCxcbiAgICAgICAgICBEYXRhU291cmNlSWQ6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBoeXNpY2FsUmVzb3VyY2VJZDogY3VzdG9tLlBoeXNpY2FsUmVzb3VyY2VJZC5vZihEYXRlLm5vdygpLnRvU3RyaW5nKCkpLFxuICAgICAgfSxcbiAgICAgIHJvbGU6IG5ldyBpYW0uUm9sZSh0aGlzLCAnZGF0YXNvdXJjZVJvbGUnLCB7XG4gICAgICAgIGFzc3VtZWRCeTogbmV3IGlhbS5TZXJ2aWNlUHJpbmNpcGFsKCdsYW1iZGEuYW1hem9uYXdzLmNvbScpLFxuICAgICAgICBtYW5hZ2VkUG9saWNpZXM6IFtcbiAgICAgICAgICBpYW0uTWFuYWdlZFBvbGljeS5mcm9tQXdzTWFuYWdlZFBvbGljeU5hbWUoJ0FkbWluaXN0cmF0b3JBY2Nlc3MnKSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgcG9saWN5OiBjdXN0b20uQXdzQ3VzdG9tUmVzb3VyY2VQb2xpY3kuZnJvbVNka0NhbGxzKHsgcmVzb3VyY2VzOiBjdXN0b20uQXdzQ3VzdG9tUmVzb3VyY2VQb2xpY3kuQU5ZX1JFU09VUkNFIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhU291cmNlQXJuID0gY3JlYXRlRGF0YVNvdXJjZS5nZXRSZXNwb25zZUZpZWxkKCdBcm4nKTtcbiAgfVxufSJdfQ==