import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class issuesIndexController extends Controller {
  @service router;

  get countOfIssue() {
    console.log('Model Value = ', this.model);
    return this.model.length;
  }

  @action
  openIssue(id) {
    this.router.transitionTo(`/issues/issue/${id}`);
  }
}
