'use strict';

var _ratelimited = require('../ratelimited');

function api1ACall(p1, p2, p3) {
  console.log('api1ACall', p1, p2, p3);
}

(0, _ratelimited.rateLimited)('API_1_A', api1ACall, 'param1');
(0, _ratelimited.rateLimited)('API_1_A', api1ACall, 'param1', 'param2');
(0, _ratelimited.rateLimited)('API_1_A', api1ACall, 'param1', 'param2', 'param3');