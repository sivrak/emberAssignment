import Model, { attr } from '@ember-data/model';

export default class IssueModel extends Model {
  @attr description;
  @attr severity;
  @attr status;
}
