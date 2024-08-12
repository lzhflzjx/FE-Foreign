// 函数节流的实现;
function throttle(fn, delay) {
    let curTime = Date.now();
  
    return function() {
      let context = this,
          args = arguments,
          nowTime = Date.now();
  
      // 如果两次时间间隔超过了指定时间，则执行函数。
      if (nowTime - curTime >= delay) {
        curTime = Date.now();
        return fn.apply(context, args);
      }
    };
  }

  function myFunction() {
    console.log('Function is throttled');
  }
  
  // 使用 throttle 函数对 myFunction 进行节流处理
  const throttledFunction = throttle(myFunction, 2000); // 指定 2000 毫秒的时间间隔

  setInterval(() => {
    throttledFunction()
  }, 200);