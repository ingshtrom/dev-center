import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['dropdown-button'],
  classNameBindings: ['buttonClass'],
  attributeBindings: ['href', 'id:data-activates'],
  href: '#!',

  didInsertElement () {
    window.$(this.element).dropdown();
  },
  util: Ember.inject.service('util'),
  id: Ember.computed(function () {
    return 'dropdown-' + this.get('util').randomString(15);
  })
});
