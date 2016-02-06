import {callInterval, rateLimited} from '../ratelimited';

function api1ACall(p1, p2, p3) {
  console.log('api1ACall', p1, p2, p3);
}

rateLimited('API_1_A', api1ACall, 'param1');
rateLimited('API_1_A', api1ACall, 'param1', 'param2');
rateLimited('API_1_A', api1ACall, 'param1', 'param2', 'param3');

