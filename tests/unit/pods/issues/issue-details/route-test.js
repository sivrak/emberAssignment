import { module, test } from 'qunit';
import { setupTest } from 'assignment/tests/helpers';

module('Unit | Route | issues/issue-details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:issues/issue-details');
    assert.ok(route);
  });
});
