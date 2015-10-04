import Ember from 'ember';
import mdlUpdater from 'dev-center/mixins/mdl-updater'

export default Ember.Component.extend(mdlUpdater, {
  model () {
    Ember.Logger.debug('main-tabs', this.store.findAll('app'));
    return this.store.findAll('app');
  }
});
