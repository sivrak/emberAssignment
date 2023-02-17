import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IssuesRoute extends Route {
  @service store;
  async model() {
    const issues = await this.store.findAll('issue');
    return issues;
  }
}
