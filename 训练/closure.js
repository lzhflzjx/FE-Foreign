function outerFunction() {
  let count = 0

  function innerFunction() {
    console.log('count2', count)
    return count++
  }

  return innerFunction; // 返回内部函数
}

const innerFunc = outerFunction(); // 调用外部函数，返回内部函数
console.log('innerFunc', innerFunc())
innerFunc(); // 调用返回的内部函数，输出"I am from outer function"
innerFunc(); // 调用返回的内部函数，输出"I am from outer function"
innerFunc(); // 调用返回的内部函数，输出"I am from outer function"
innerFunc(); // 调用返回的内部函数，输出"I am from outer function"
innerFunc(); // 调用返回的内部函数，输出"I am from outer function"
for (let i = 0; i < 10000; i++) {
  innerFunc(); // 调用返回的内部函数，输出"I am from outer function"
}