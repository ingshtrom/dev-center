/* globals Materialize */
import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  isModalOpen: false,
  isModalSaving: false,

  actions: {
    openNewFFModal () {
      Ember.Logger.debug('manage-route::openNewFFModal');
      this.toggleProperty('isModalOpen');
    },
    closeModal () {
      Ember.Logger.debug('manage-route::closeModalAction');
      this.toggleProperty('isModalOpen');
    },
    agreeModal () {
      Ember.Logger.debug('manage-route::agreeModalAction');
      this.toggleProperty('isModalOpen');
    },
    createFeatureFlag () {
      var store, app, self, toastMessage, toastClasses;
      self = this;

      self.toggleProperty('isModalSaving');

      store = self.get('store');
      app = store.createRecord('flag', {
        name: self.get('name'),
        description: self.get('description'),
        app: self.get('app') // passed in from the route
      });

      app.save()
        .then(successHandler)
        .catch(errorHandler)
        .finally(finallyHandler);

      function successHandler () {
        toastMessage = 'Created "' + self.get('name') + '"!';
        toastClasses = 'green lighten-1';
      }

      function errorHandler (e) {
        Ember.Logger.debug('Error creating feature flag => ', e);
        toastMessage = 'Create Failure.';
        toastClasses = 'red lighten-1';
      }

      function finallyHandler () {
        // lets make sure the icon stays up a little longer
        // so we don't create a "flicker" type scenario
        setTimeout(function () {
          self.toggleProperty('isModalSaving');
          Materialize.toast(toastMessage, 3500, toastClasses);
        }, 250);
      }
    }
  }
});
