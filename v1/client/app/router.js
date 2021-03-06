import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('manage', { path: '/manage/:app_id' });
  this.route('create-app');
});

export default Router;
