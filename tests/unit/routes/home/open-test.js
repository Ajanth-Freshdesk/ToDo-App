import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/open', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/open');
    assert.ok(route);
  });
});
