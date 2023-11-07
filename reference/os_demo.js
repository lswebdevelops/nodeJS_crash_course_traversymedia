const os = require('os');

// plataform

console.log(os.platform()); // win32

// CPU arch 

console.log(os.arch());// x64

// / cpu core info

console.log(os.cpus());
/*
[
  {
    model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
    speed: 3000,
    times: {
      user: 9198468,
      nice: 0,
      sys: 7390765,
      idle: 200190625,
      irq: 1413296
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
    speed: 3000,
    times: {
      user: 11586453,
      nice: 0,
      sys: 6175984,
      idle: 199017265,
      irq: 107281
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
    speed: 3000,
    times: {
      user: 10783968,
      nice: 0,
      sys: 5183609,
      idle: 200812125,
      irq: 85937
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
    speed: 3000,
    times: {
      user: 12656312,
      nice: 0,
      sys: 5168156,
      idle: 198955218,
      irq: 69203
    }
  }
]
*/

// free memory 

console.log(os.freemem());// 8628834304
// total memory
console.log(os.totalmem());//17039085568
// home dir 
console.log(os.homedir());//C:\Users\Luciano's i5 Desktop
// seconds awake 
console.log(os.uptime()); //883008.39




