import Route from '@ember/routing/route';

export default class IssuesIssueDetailsRoute extends Route {
    model({issue_id}) {
        return({issue_id});
    }
}
