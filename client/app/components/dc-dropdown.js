import Ember from 'ember';

export default Ember.Component.extend({
  // services
  util: Ember.inject.service('util'),

  // element configuration
  tagName: 'a',
  classNames: ['dropdown-button'],
  classNameBindings: ['buttonClass'],
  attributeBindings: ['href', 'id:data-activates'],
  href: '#!',

  // event handlers
  didInsertElement () {
    // Ember.Logger.debug('didInsertElement', this.get('options'));
    // options is passed into the component
    window.$(this.element).dropdown();
  },

  // computed proeprties
  id: Ember.computed(function () {
    return 'dropdown-' + this.get('util').randomString(15);
  })
});
