// This is a JavaScript Quiz from BFE.dev https://bigfrontend.dev/quiz/this

const obj = {
  a: 1,
  b: function() {
    console.log(this.a)
  },
  c() {
    console.log(this.a)
  },
  d: () => {
    console.log(this.a)
  },
  e: (function() {
    return () => {
      console.log(this.a);
    }
  })(),
  f: function() {
    return () => {
      console.log(this.a);
    }
  }
}

console.log(obj.a)
obj.b()
;(obj.b)()
const b = obj.b
b()
obj.b.apply({a: 2})
obj.c()
obj.d()
;(obj.d)()
obj.d.apply({a:2})
obj.e()
;(obj.e)()
obj.e.call({a:2})
obj.f()()
;(obj.f())()
obj.f().call({a:2})
//This is a self-invoking function.
// arrow function'this is determined when it defined,not during its execution
//箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的
//This is just a different way of writing the code
//with the same effect as the function above.

//箭头函数没有自己的'this'上下文；它将会向上查找作用域，直到找到'this'。
//Arrow functions do not have their own 'this' context; 
//it look up the scope chain until they find ‘this’..

//普通函数的this取决于函数被调用时的执行上下文
//regular function'this depends on who call the function.
