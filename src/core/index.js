'use strict'

var XEUtils = require('./utils')
var setupDefaults = require('./setup')
var methodExports = require('../method')

/**
 * functions of mixing
 *
 * @param {Object} methods
 */
XEUtils.mixin = function (methods) {
  methodExports.objectEach(methods, function (fn, name) {
    XEUtils[name] = methodExports.isFunction(fn) && fn._c !== false ? function () {
      var result = fn.apply(XEUtils.$context, arguments)
      XEUtils.$context = null
      return result
    } : fn
  })
}

XEUtils.setup = function (options) {
  methodExports.objectAssign(setupDefaults, options)
}

XEUtils.mixin(methodExports)

module.exports = XEUtils
module.exports.default = XEUtils
