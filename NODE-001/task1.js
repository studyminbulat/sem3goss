const  Timer = require('timerpromise');

// (new Timer(5)).start
//     .then(() => console.log('1) 5 sec') || (new Timer(2)).start)
//     .then(() => console.log('2) 2 sec'));

(async () => {
    console.time('s0'); // const s1 = Date.now()
    console.time('s1');
    await  new Timer(3).start;
    console.timeEnd('s1');
    console.time('s2');
    await  new Timer(2).start;
    console.timeEnd('s2');
    console.timeEnd('s0');
} )()