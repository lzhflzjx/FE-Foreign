function flatten(root) {
// If root is empty, return an empty array
if (root === null) {
return []
}
// Create a queue and add the root to the queue
const queue = [root]
// Create a result array to store the final result
const result = []
// Execute the following methods using a while loop, while the length of the queue is greater than 0
while (queue.length > 0) {
// Take out the first element from the queue for traversal
const head = queue.shift()
// After traversal, add the element to the result array
result.push(head)
// Use spread operator to add the children property of this element to the queue
// Add the child nodes of this element, after destructuring, to the queue in order
queue.push(...head.children)

// Check the length of the queue and continue the loop
}
return result
}
