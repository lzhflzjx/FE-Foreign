// ● arr.splice：用于添加、删除或替换数组中的元素，会改变原数组。
// 语法
// arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start：一个整数，表示开始修改的数组元素的索引。
// deleteCount（可选）：一个整数，表示要删除的元素数量。如果设置为 0，则不会删除任何元素。
// item1, item2, ...（可选）：要添加到数组中的元素。
// 返回值
// splice 方法返回一个包含被删除元素的新数组（如果指定了 deleteCount）或者空数组（如果没有指定 deleteCount 或其值为 0）。

// ● arr.slice：用于提取数组的一部分，返回一个新数组，不会改变原数组。

// ● arr.pop：用于删除数组的最后一个元素，并返回被删除的元素，会改变原数组。
let arr = []

console.log('arr.pop', arr.pop())
console.log('原数组', arr)