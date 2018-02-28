const {should, expect , assert} = require('chai');
//const assert = require('assert');
const {add, mul,cover} =require('../src/math');



describe('#math', ()=>{
    describe('add', ()=>{
        it('should return 5 when 2+3', ()=>{
            expect(add(2,3)).to.equal(5);
        });  //it.only it.skip

        it.skip('should return 5 when 2+3', ()=>{
            expect(add(2,3)).to.equal(5);
        });
    });

    describe('mul', ()=>{
        it('should return 6 when 2*3', ()=>{
            expect(mul(2,3)).to.equal(6);
        });

        it('should return 10 when 2*5', ()=>{
            expect(mul(2,5)).to.equal(10);
        });
    });

    describe('cover', ()=>{
        it('should return 1 when cover(2,1)', ()=>{
            expect(cover(2,1)).to.equal(1);
        });

        it('should return 2 when cover(1,1)', ()=>{
            expect(cover(1,1)).to.equal(2);
        });

        it('should return 3 when cover(1,2)', ()=>{
            expect(cover(1,2)).to.equal(66);
        });
    });
});
