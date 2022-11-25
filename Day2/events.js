const events=require('events'); 

const eventEmitter=new events.EventEmitter();
const event1=()=> console.log("event 1");
const event2=()=> console.log("event 2");

eventEmitter.on('myevent',event1);
eventEmitter.on('myevent',event2);

eventEmitter.emit('myevent');

eventEmitter.removeListener("myevent",event1);
// eventEmitter.emit('myevent');
console.log("Program End !")