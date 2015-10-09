import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions: {
    createApp () {
      var store = this.get('store');
      var app = store.createRecord('app', {
        name: this.get('appName')
      });

      app.save();
    }
  }
});
