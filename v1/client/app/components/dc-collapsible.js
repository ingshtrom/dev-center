import Ember from 'ember';

export default Ember.Component.extend({
  // element customization
  tagName: 'ul',

  // properties
  typeIsAccordion: Ember.computed('isAccordion', function () {
    let isAccordion = this.get('isAccordion');
    if (isAccordion === undefined) {
      isAccordion = true;
    }
    return isAccordion;
  }),

  // event handlers
  didInsertElement () {
    Ember.Logger.debug('didInsertElement', this.get('options'));
    // options is passed into the component
    window.$(this.element).collapsible({
      accordion: this.get('typeIsAccordion')
    });
  }
});
