const {should, expect , assert} = require('chai');
//const assert = require('assert');
const {add, mul, cover} =require('../src/math');


// if(add(2,3,4)===9){
//     console.log('ok');
// }else{
//     console.log('error');
// }


//assert.equal(add(1,2),3);

should();
add(2,3).should.equal(6);
expect(add(2,3)).to.equal(6);
assert.equal(add(1,2),4);