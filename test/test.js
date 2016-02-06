'use strict';

var _ratelimited = require('../ratelimited');

function api1ACall(p1, p2, p3) {
  console.log(new Date().getTime() - start, ' api1ACall', p1, p2, p3);
}

function api1AOther(p1, p2, p3) {
  console.log(new Date().getTime() - start, ' api1AOther', p1, p2, p3);
}

function api2BCall(p1, p2, p3, p4) {
  console.log(new Date().getTime() - start, 'api2BCall', p1, p2, p3, p4);
}

function api2BDiff(p1, p2, p3) {
  console.log(new Date().getTime() - start, 'api2BDiff', p1, p2, p3);
}

var start = new Date().getTime();

(0, _ratelimited.callInterval)('API_1_A', 200); // wait at least 200 ms between function calls for key API_1_A
(0, _ratelimited.rateLimited)('API_1_A', api1ACall, 'param1', 'param2'); // immediately calls api1ACall(param1,param2)
(0, _ratelimited.rateLimited)('API_1_A', api1AOther, 'param1', 'param2'); // waits 200ms then calls api1AOther(param1, param2)

(0, _ratelimited.rateLimited)('API_2_B', api2BCall, 'arg1', 'arg2', 'arg3', 'arg4'); // immediately calls api2BCall(arg1,arg2,arg3,arg4)
(0, _ratelimited.rateLimited)('API_2_B', api2BDiff, 'arg1'); // waits 1000 ms (1 second) then calls api2BDiff(arg1);