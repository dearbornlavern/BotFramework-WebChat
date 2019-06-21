const gittest2 = require('./gitpushtest');

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

var isTruthy = async function() {
  while (!fs.existsSync('xxx_gittest_finished_flag.txt')) {
    await sleep(1000);
    console.log('...waiting...');
  }
  return 0;
};
//import { gittest } from 'gitpushtest'

//console.log("go: calling gitpushtest.gittest()");
//gitpushtest();
//console.log("go: end");
