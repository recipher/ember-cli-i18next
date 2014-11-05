'use strict';

import Ember from 'ember';

export default function(key, post) {
  return new Ember.Handlebars.SafeString(i18n.t(key, post ? { postProcess: post } : {}));
}