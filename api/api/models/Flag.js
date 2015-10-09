/* globals sails */
'use strict';
/**
* Flag.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  autoCreatedAt: true,
  autoUpdatedAt: true,
  migrate: 'drop',

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    app: {
      model: 'app',
      required: true
    },
    description: {
      type: 'string',
      defaultsTo: ''
    },
    dev: {
      type: 'boolean',
      defaultsTo: false
    },
    stage: {
      type: 'boolean',
      defaultsTo: false
    },
    uat: {
      type: 'boolean',
      defaultsTo: false
    },
    prod: {
      type: 'boolean',
      defaultsTo: false
    }
  },

  beforeCreate: function verifyNoDuplicates (values, cb) {
    var flagModel = sails.models.flag,
        searchOptions;

    searchOptions = {
      name: values.name,
      app: values.app
    };

    flagModel.findOne(searchOptions)
      .then(function (result) {
        sails.log.debug('beforeCreate::searching for duplicate flags => ', {
          searchOptions: searchOptions,
          result: result
        });
        if (result) {
          let err = {
            code: 'E_UNIQUE',
            details: 'The flag must be unique for the given application',
            model: 'Flag',
            invalidAttributes: {
              name: [
                {
                  rule: 'combined_unique',
                  message: 'name and app must be unique'
                }
              ],
              app: [
                {
                  rule: 'combined_unique',
                  message: 'name and app must be unique'
                }
              ]
            },
            status: 400
          };
          cb(err);
        } else {
          cb();
        }
      });
  }
};

