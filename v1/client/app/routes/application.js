import Ember from 'ember';

export default Ember.Route.extend({
  dropdownOptions: {
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  },
  model () {
    return this.store.findAll('app');
  }
});
