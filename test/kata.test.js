const  chai = require('chai');
const expect = chai.expect;
const chop= require('../chop');

describe('chop', ()=>{

  it('should return -1 for search number in empty array', ()=>{

    expect(chop(3,[],0)).to.equal(-1);
  });

  it('should -1 if not include', ()=>{
    expect(chop(3,[1],0)).to.equal(-1);
  })

  it('return index if include', ()=>{
    expect(chop(1,[1,2,3,4,5],0)).to.equal(0);
  })

  it('return index if include', ()=>{
    expect(chop(3,[1,2,3,4,5],0)).to.equal(2);
  })
  it('return -1 if not include', ()=>{
    expect(chop(9,[1,2,3,4,5],0)).to.equal(-1);
  })


  // assert_equal(0,  chop(1, [1, 3, 5]))
  // assert_equal(1,  chop(3, [1, 3, 5]))
  // assert_equal(2,  chop(5, [1, 3, 5]))
  // assert_equal(-1, chop(0, [1, 3, 5]))
  // assert_equal(-1, chop(2, [1, 3, 5]))
  // assert_equal(-1, chop(4, [1, 3, 5]))
  // assert_equal(-1, chop(6, [1, 3, 5]))
});