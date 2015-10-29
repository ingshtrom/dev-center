import Ember from 'ember';
import App from 'dev-center/app';

export default Ember.Route.extend({
  model() {
    return App.APPS;
  }
});
