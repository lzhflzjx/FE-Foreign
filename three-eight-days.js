// ------------------promisify
//接受传入的一个泛型类型 T ，keyof 获取type T /FOO 的属性名。使用 in 关键字遍历传入的 T 类型
//T[P]获取遍历属性的类型
//-? hyphen question 定义属性为必填  required 
  type MyRequired<T> = {[P in keyof T]-?:T[P];}




// -----------------create a pipe()
//reduce()函数是 ECMAScript 6 (ES6) 中数组的一个迭代方法
//它接收一个回调函数作为累加器（accumulator），
//对该数组的所有元素（从左到右）执行操作，最后将计算结果累积为单一输出值。
function pipe(funcs) {
//pipe返回值是一个函数。所以我们ruturn function
//首先我们要把x传进去
    return function(arg) {
      //对funcs使用reduce方法。接收一个回调函数作为累加器（accumulator），从左到右依次遍历。
      //result是上一次回调函数的返回值，第一次调用回调函数时，指定了初始值 arg，那么该参数值就是 arg
      //func是数组中正在处理的元素。
       return funcs.reduce((result, func) => {
        //对该元素使用call方法，并把result作为参数传入
         return func.call(this, result)
       }, arg)
    }
  }


pipe([
    times(2),
    times(3)
  ]) (5)
  // x * 2 * 3
  
  // pipe([
  //   times(2),
  //   plus(3),
  //   times(4)
  // ]) 
  // (x * 2 + 3) * 4
  
  // pipe([
  //   times(2),
  //   subtract(3),
  //   divide(4)
  // ]) 
  // (x * 2 - 3) / 4




// ------------------promisify
    /**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
    const promisify = (func) => {
        // 返回一个匿名函数，该函数接受所有参数
        return function (...args) {
            // 返回一个promise对象
            return new Promise((resolve, reject) => {
                // 使用call方法区调用func函数，最后一个参数是func的callback
                func.call(this, ...args, (error, data) => {
                    // 判断error然后根据需要使用reject或resolve
                    if (error) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
            })
        }
    }

    const func = (arg1, arg2, callback) => {
        // some async logic
        if (hasError) {
            callback(someError)
        } else {
            callback(null, someData)
        }
    }
    const promisedFunc = promisify(func)

    promisedFunc().then((data) => {
        // handles data
    }).catch((error) => {
        // handles error
    })
