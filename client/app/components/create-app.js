/* globals Materialize */
import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  isSaving: false,

  isValidForm: Ember.computed('appName', function () {
    var appName = this.get('appName');
    Ember.Logger.debug('current app name', appName);
    return appName && appName !== '';
  }),

  actions: {
    createApp () {
      var store, app, self, toastMessage, toastClasses;
      self = this;

      self.toggleProperty('isSaving');

      store = self.get('store');
      app = store.createRecord('app', {
        name: self.get('appName')
      });

      app.save()
        .then(successHandler)
        .catch(errorHandler)
        .finally(finallyHandler);

      function successHandler () {
        toastMessage = 'Created "' + self.get('appName') + '" app!';
        toastClasses = 'green lighten-1';
      }

      function errorHandler (e) {
        Ember.Logger.debug('Error creating app => ', e);
        toastMessage = 'App name validation failed.';
        toastClasses = 'red lighten-1';
      }

      function finallyHandler () {
        // lets make sure the icon stays up a little longer
        // so we don't create a "flicker" type scenario
        setTimeout(function () {
          self.toggleProperty('isSaving');
          Materialize.toast(toastMessage, 3500, toastClasses);
        }, 250);
      }
    }
  }
});
