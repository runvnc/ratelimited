import Queue from 'queue-up';

let queues = {};

function getQueue(id) {
  if (!(queues[id])) {
    callInterval(id, 1000);    
  }
  return queues[id];
}

export function callInterval(id, ms) {
  queues[id] = new Queue(ms);
}

export function rateLimited(id, fn) {
  getQueue(id).up({args: Array.prototype.slice.call(arguments, 2)})
  .then( params => {
     fn.apply(this, params.args);
   })
  .catch( e => {
     console.error(e);
  });
}


