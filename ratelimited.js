'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callInterval = callInterval;
exports.rateLimited = rateLimited;

var _queueUp = require('queue-up');

var _queueUp2 = _interopRequireDefault(_queueUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queues = {};

function getQueue(id) {
  if (!queues[id]) {
    callInterval(id, 1000);
  }
  return queues[id];
}

function callInterval(id, ms) {
  queues[id] = new _queueUp2.default(ms);
}

function rateLimited(id, fn) {
  var args = Array.prototype.slice.call(arguments, 2);

  getQueue(id).up(function () {
    return fn.apply(null, args);
  }).catch(function (e) {
    console.error(e);
  });
}