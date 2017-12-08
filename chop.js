
module.exports = function chop (int, array, preIndex) {

  if(array.length == 0) {
    return -1;
  }

  if(!array.includes(int)) {
    return -1;
  }

  // if 


  let index = Math.floor(array.length / 2);
  console.log(index);

  if (array[index] === int) {
    // console.log('find');
    // console.log(index);
    // console.log(preIndex);
    // console.log(array[index]);
    // console.log(index+preIndex);
    return index+preIndex;
  }
  if (array[index] > int) {
    return chop(int, array.slice(0, index-1), preIndex);
  }
  if (array[index] < int) {
    // console.log('less:' , preIndex);
    return chop(int, array.slice(index+1, array.length-1), preIndex+index);
  }



}

// function find(int, array) {

// }