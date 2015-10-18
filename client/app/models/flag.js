import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr(),
  name: DS.attr('string'),
  app: DS.belongsTo('app'),
  description: DS.attr('string'),
  dev: DS.attr('boolean'),
  stage: DS.attr('boolean'),
  uat: DS.attr('boolean'),
  prod: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
