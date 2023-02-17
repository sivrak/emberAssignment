import { module, test } from 'qunit';
import { setupTest } from 'assignment/tests/helpers';

module('Unit | Model | issue', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('issue', {});
    assert.ok(model);
  });
});
