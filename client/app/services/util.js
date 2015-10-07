import Ember from 'ember';

export default Ember.Service.extend({
  randomString (size) {
    var text, possible, i;
    Ember.assert('Parameter size must be a number', typeof(size) === 'number');

    text = "";
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (i = 0; i < size; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
});
