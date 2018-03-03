const {num1,num2}=require('../src/fn');


const Benchmark = require('benchmark');
var suite = new Benchmark.Suite;


suite.add('num1 parseInt', ()=>{
  num1('123456');
}).add('Number', ()=>{
  num2('123456');
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() { //完成事件
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });


//官网例子
// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() { //完成事件
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });