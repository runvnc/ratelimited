import Queue from 'queue-up';

let queues = {};

function getQueue(id) {
 
  if (!(queues[id])) {
    configInterval(id, 1000);    
  }

  return queues[id];
}

export function callInterval(id, ms) {
  queues[id] = new Queue(ms);
}

export function rateLimited(id, fn, args...) {
  getQueue(id).up(args)
  .then( params... => fn(params) )
  .catch( e => console.error(e) );
}


