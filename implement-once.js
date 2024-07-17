//https://bigfrontend.dev/problem/implement-once
/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let result= null;
  let isCalled = false;
  // closure environment
  return function(...args){
    if(!isCalled){
      result = func.call(this, ...args);
      isCalled = true;
    }
    console.log(result)
    return result;
  }
}


const onced = once(func)

function func(num) {
  return num
}

onced(1)
// 1, func called with 1

onced(2)
// 1, even 2 is passed, previous result is returned 
