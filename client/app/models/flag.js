import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  name: DS.attr('string'),
  application: DS.belongsTo('app'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
