/*
 * dom - v1.0.0
 * @danielrohers
*/
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.dom = factory(root);
  }
})(this, function (root) {

  'use strict';

  var exports = {};

  var _create = function(name, properties, assignmentProperties) {
    var element = document.createElement(name);
    if (properties) {
      for (var key in properties) {
        element.setAttribute(key, properties[key]);
      }
    }
    if (assignmentProperties) {
      for (var key in assignmentProperties) {
        element[key] = assignmentProperties[key];
      }
    }
    return element;
  };

  exports['create'] = _create;

  return exports;

});
