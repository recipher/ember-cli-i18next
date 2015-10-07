'use strict';

import Ember from 'ember';

export default function(key, options) {
  return new Ember.Handlebars.SafeString(i18n.t(key, options.hash || {}));
}
