import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal () {
      Ember.Logger.debug('new-ff-modal::closeModal');
      this.sendAction('closeModalAction');
    },
    agree () {
      Ember.Logger.debug('new-ff-modal::agree');
      this.sendAction('agreeModalAction');
    }
  }
});
