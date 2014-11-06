'use strict';

var path = require('path');
var fs   = require('fs');

var EmberCLIi18next = function(project) {
  this.project = project;
  this.name = 'Ember CLI i18next';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; }
  , cleanup: function() { }
  };
}

EmberCLIi18next.prototype.treeFor = function(name) {
  var treePath =  path.join('node_modules', 'ember-cli-i18next', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIi18next.prototype.included = function(app) {
  this.app = app;
  this.app.import(app.bowerDirectory + '/i18next/i18next.js');
};

module.exports = EmberCLIi18next;