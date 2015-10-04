import Ember from 'ember';
import MdlUpdaterMixin from '../../../mixins/mdl-updater';
import { module, test } from 'qunit';

module('Unit | Mixin | mdl updater');

// Replace this with your real tests.
test('it works', function(assert) {
  var MdlUpdaterObject = Ember.Object.extend(MdlUpdaterMixin);
  var subject = MdlUpdaterObject.create();
  assert.ok(subject);
});
