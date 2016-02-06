# ratelimited

## Description

Rate limit function calls per key optionally specifying minimum call interval (default is 1000 ms).

## Usage

```javascript
import {callInterval, rateLimited} from 'ratelimited';

// Note: None of these calls will block unless synchronous code is used in the functions specified

callInterval('API_1_A', 200); // wait at least 200 ms between function calls for key API_1_A

rateLimited('API_1_A', api1ACall, 'param1', 'param2');  // immediately calls api1ACall(param1,param2)
rateLimited('API_1_A', api1AOther, 'param1', 'param2'); // waits 200ms then calls api1AOther(param1, param2)

rateLimited('API_2_B', api2BCall, 'arg1', 'arg2', 'arg3', 'arg4'); // immediately calls api2BCall(arg1,arg2,arg3,arg4)
rateLimited('API_2_B', api2BDiff, 'arg1'); // waits 1000 ms (1 second) then calls api2BDiff(arg1);

// -- Actual order of calls for the above example:
// apiACall() at 0 ms
// api2BCall() at ~0 ms
// api1AOther() at ~200 ms
// api2BDiff() at ~1000 ms

```
