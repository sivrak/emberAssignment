import Route from '@ember/routing/route';

export default class IssuesRoute extends Route {
  model() {
    return [
      {
        id: "1",
        description: 'Issue one',
        severity: 'Minor',
        status: 'Opened',
      },
      {
        id: "2",
        description: 'Issue two',
        severity: 'Major',
        status: 'Closed',
      },
      {
        id: "3",
        description: 'Issue three',
        severity: 'Critical',
        status: 'In Progress',
      },
    ];
  }
}
