"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSetConstruct = exports.castUppercase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/* eslint-disable @typescript-eslint/no-require-imports */
// import * as qs from '@aws-cdk/aws-quicksight';
const iam = require("@aws-cdk/aws-iam");
const cdk = require("@aws-cdk/core");
const custom = require("@aws-cdk/custom-resources");
function castUppercase(o) {
    let newO;
    var origKey, newKey, value;
    if (o instanceof Array) {
        return o.map(function (valueE) {
            if (typeof valueE === 'object') {
                valueE = castUppercase(valueE);
            }
            return valueE;
        });
    }
    else {
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
exports.castUppercase = castUppercase;
/**
 * @stability stable
 */
class DataSetConstruct extends cdk.Construct {
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
        var parameters = {
            awsAccountId: cdk.Stack.of(this).account,
            importMode: 'DIRECT_QUERY',
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
exports.DataSetConstruct = DataSetConstruct;
_a = JSII_RTTI_SYMBOL_1;
DataSetConstruct[_a] = { fqn: "cdk-quicksight-constructs.DataSetConstruct", version: "0.1.5" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMERBQTBEO0FBQzFELGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLG9EQUFvRDtBQVVwRCxTQUFnQixhQUFhLENBQUMsQ0FBTTtJQUNsQyxJQUFJLElBQVMsQ0FBQztJQUNkLElBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7SUFDM0IsSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLE1BQVc7WUFDaEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsS0FBSyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwRixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLEVBQUU7b0JBQzlFLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlCO2dCQUNELElBQUks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LENBQUM7aUJBQ2xFO2FBQ0YsQ0FBQztZQUNGLE1BQU0sRUFBRSxNQUFNLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNoSCxDQUFDLENBQUM7SUFDTCxDQUFDOztBQTdESCw0Q0E4REMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbi8vIGltcG9ydCAqIGFzIHFzIGZyb20gJ0Bhd3MtY2RrL2F3cy1xdWlja3NpZ2h0JztcbmltcG9ydCAqIGFzIGlhbSBmcm9tICdAYXdzLWNkay9hd3MtaWFtJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGN1c3RvbSBmcm9tICdAYXdzLWNkay9jdXN0b20tcmVzb3VyY2VzJztcbi8vIGltcG9ydCB7IENyZWF0ZURhdGFTZXRSZXF1ZXN0IH0gZnJvbSAnYXdzLXNkay9jbGllbnRzL3F1aWNrc2lnaHQnO1xuLy8gaW1wb3J0IFF1aWNrU2lnaHQgPSByZXF1aXJlKCdhd3Mtc2RrL2NsaWVudHMvcXVpY2tzaWdodCcpO1xuaW1wb3J0IHsgUVNDb21tb25Qcm9wcyB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDcmVhdGVEYXRhU2V0UmVxdWVzdCwgTG9naWNhbFRhYmxlTWFwLCBQaHlzaWNhbFRhYmxlTWFwIH0gZnJvbSAnLi9zZGsvcXVpY2tzaWdodCc7XG5leHBvcnQgaW50ZXJmYWNlIERhdGFTZXRQcm9wcyBleHRlbmRzIFFTQ29tbW9uUHJvcHMge1xuICByZWFkb25seSBwaHlzaWNhbFRhYmxlTWFwOiBQaHlzaWNhbFRhYmxlTWFwO1xuICByZWFkb25seSBsb2dpY2FsVGFibGVNYXA6IExvZ2ljYWxUYWJsZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3RVcHBlcmNhc2UobzogYW55KSB7XG4gIGxldCBuZXdPOiBhbnk7XG4gIHZhciBvcmlnS2V5LCBuZXdLZXksIHZhbHVlO1xuICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIG8ubWFwKGZ1bmN0aW9uICh2YWx1ZUU6IGFueSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZUUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhbHVlRSA9IGNhc3RVcHBlcmNhc2UodmFsdWVFKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZUU7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3TyA9IHt9O1xuICAgIGZvciAob3JpZ0tleSBpbiBvKSB7XG4gICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShvcmlnS2V5KSkge1xuICAgICAgICBuZXdLZXkgPSAob3JpZ0tleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG9yaWdLZXkuc2xpY2UoMSkgfHwgb3JpZ0tleSkudG9TdHJpbmcoKTtcbiAgICAgICAgdmFsdWUgPSBvW29yaWdLZXldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGNhc3RVcHBlcmNhc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG5ld09bbmV3S2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3Tztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhU2V0Q29uc3RydWN0IGV4dGVuZHMgY2RrLkNvbnN0cnVjdCB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRGF0YVNldFByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBpZiAocHJvcHMudXNlcnMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIHVzZXJzIGRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLnVzZXJzLmZpbmQodSA9PiB1ID09PSAnJykpIHtcbiAgICAgIHRocm93IEVycm9yKCdFbXB0eSB1c2VyIG5vdCBhbGxvd2VkIScpO1xuICAgIH1cblxuICAgIHZhciBwYXJhbWV0ZXJzOiBDcmVhdGVEYXRhU2V0UmVxdWVzdCA9IHtcbiAgICAgIGF3c0FjY291bnRJZDogY2RrLlN0YWNrLm9mKHRoaXMpLmFjY291bnQsXG4gICAgICBpbXBvcnRNb2RlOiAnU1BJQ0UnLFxuICAgICAgZGF0YVNldElkOiBwcm9wcy5uYW1lLFxuICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgIHBlcm1pc3Npb25zOiBwcm9wcy51c2Vycy5tYXAodXNlciA9PiAoe1xuICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgJ3F1aWNrc2lnaHQ6VXBkYXRlRGF0YVNldFBlcm1pc3Npb25zJyxcbiAgICAgICAgICAncXVpY2tzaWdodDpEZXNjcmliZURhdGFTZXQnLFxuICAgICAgICAgICdxdWlja3NpZ2h0OkRlc2NyaWJlRGF0YVNldFBlcm1pc3Npb25zJyxcbiAgICAgICAgICAncXVpY2tzaWdodDpQYXNzRGF0YVNldCcsXG4gICAgICAgICAgJ3F1aWNrc2lnaHQ6RGVzY3JpYmVJbmdlc3Rpb24nLFxuICAgICAgICAgICdxdWlja3NpZ2h0Okxpc3RJbmdlc3Rpb25zJyxcbiAgICAgICAgICAncXVpY2tzaWdodDpVcGRhdGVEYXRhU2V0JyxcbiAgICAgICAgICAncXVpY2tzaWdodDpEZWxldGVEYXRhU2V0JyxcbiAgICAgICAgICAncXVpY2tzaWdodDpDcmVhdGVJbmdlc3Rpb24nLFxuICAgICAgICAgICdxdWlja3NpZ2h0OkNhbmNlbEluZ2VzdGlvbicsXG4gICAgICAgIF0sXG4gICAgICAgIHByaW5jaXBhbDogYGFybjphd3M6cXVpY2tzaWdodDoke2Nkay5TdGFjay5vZih0aGlzKS5yZWdpb259OiR7Y2RrLlN0YWNrLm9mKHRoaXMpLmFjY291bnR9OnVzZXIvZGVmYXVsdC8ke3VzZXJ9YCxcbiAgICAgIH0pKSxcbiAgICAgIHBoeXNpY2FsVGFibGVNYXA6IHByb3BzLnBoeXNpY2FsVGFibGVNYXAsXG4gICAgICBsb2dpY2FsVGFibGVNYXA6IHByb3BzLmxvZ2ljYWxUYWJsZU1hcCxcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVycyA9IGNhc3RVcHBlcmNhc2UocGFyYW1ldGVycyk7XG5cbiAgICBuZXcgY3VzdG9tLkF3c0N1c3RvbVJlc291cmNlKHRoaXMsICdjcmVhdGVEYXRhU2V0Jywge1xuICAgICAgb25DcmVhdGU6IHtcbiAgICAgICAgc2VydmljZTogJ1F1aWNrU2lnaHQnLFxuICAgICAgICBhY3Rpb246ICdjcmVhdGVEYXRhU2V0JyxcbiAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICAgICAgcGh5c2ljYWxSZXNvdXJjZUlkOiBjdXN0b20uUGh5c2ljYWxSZXNvdXJjZUlkLm9mKERhdGUubm93KCkudG9TdHJpbmcoKSksXG4gICAgICB9LFxuICAgICAgb25EZWxldGU6IHtcbiAgICAgICAgc2VydmljZTogJ1F1aWNrU2lnaHQnLFxuICAgICAgICBhY3Rpb246ICdkZWxldGVEYXRhU2V0JyxcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIEF3c0FjY291bnRJZDogY2RrLlN0YWNrLm9mKHRoaXMpLmFjY291bnQsXG4gICAgICAgICAgRGF0YVNldElkOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQ6IGN1c3RvbS5QaHlzaWNhbFJlc291cmNlSWQub2YoRGF0ZS5ub3coKS50b1N0cmluZygpKSxcbiAgICAgIH0sXG4gICAgICByb2xlOiBuZXcgaWFtLlJvbGUodGhpcywgJ2RhdGFzZXRSb2xlJywge1xuICAgICAgICBhc3N1bWVkQnk6IG5ldyBpYW0uU2VydmljZVByaW5jaXBhbCgnbGFtYmRhLmFtYXpvbmF3cy5jb20nKSxcbiAgICAgICAgbWFuYWdlZFBvbGljaWVzOiBbXG4gICAgICAgICAgaWFtLk1hbmFnZWRQb2xpY3kuZnJvbUF3c01hbmFnZWRQb2xpY3lOYW1lKCdBZG1pbmlzdHJhdG9yQWNjZXNzJyksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHBvbGljeTogY3VzdG9tLkF3c0N1c3RvbVJlc291cmNlUG9saWN5LmZyb21TZGtDYWxscyh7IHJlc291cmNlczogY3VzdG9tLkF3c0N1c3RvbVJlc291cmNlUG9saWN5LkFOWV9SRVNPVVJDRSB9KSxcbiAgICB9KTtcbiAgfVxufSJdfQ==