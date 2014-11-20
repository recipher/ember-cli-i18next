'use strict';

import Ember from 'ember';
import helper from '../helpers/i18next';

export default {
  name: 'i18next'

, initialize: function(container, app) {
    app.deferReadiness();

    var locale = localStorage.locale || 'en';

    i18n.init({
      ns: { 
        namespaces: [ 'main' ]
      , defaultNs: 'main' 
      } 
    , cookieName: 'locale'
    , preload: [ locale ]
    , lng: locale
    , fallbackLng: 'en'
    , getAsync: true
    , resGetPath: '/locales/__lng__/__ns__.json'
    }

    , function() {
      container.register('app:i18n', Ember.Object.create({ locale: locale }), { instantiate: false });
      
      Ember.A([ 'controller', 'view', 'route' ]).forEach(function(component) {
        container.injection(component, 'i18n', 'app:i18n');
      });

      app.advanceReadiness();
    });

    i18n.addPostProcessor('capitalize', function(value) {
      return value.capitalize();
    });

    i18n.addPostProcessor('titleize', function(value) {
      return value.titleize();
    });

    i18n.addPostProcessor('lower', function(value) {
      return value.toLowerCase();
    });

    i18n.addPostProcessor('upper', function(value) {
      return value.toUpperCase();
    });

    Ember.Handlebars.registerBoundHelper('t', helper);
  }
};