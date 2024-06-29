let items = [
{ color: 'red', type: 'tv', age: 18 },
{ color: 'silver', type: 'phone', age: 20 },
{ color: 'blue', type: 'book', age: 17 }
]

// an exclude array made of key value pair
const excludes = [
{ k: 'color', v: 'silver' },
{ k: 'type', v: 'tv' },
]

function excludeItems(items, excludes) {
// 1. Create a new Map called excludeMap
const excludeMap = new Map()
// 2. Iterate through 'excludes' using for of loop
for (let { k, v } of excludes) {
console.log(k, "____", v)
// If the key 'k' doesn't exist in the map
if (!excludeMap.has(k)) {
// Create a new Set and add 'k' as the key
excludeMap.set(k, new Set())
}
// Set the value 'v' as the value corresponding to key 'k'
excludeMap.get(k).add(v)
}
// The above code creates criteria to filter items

// 3. Use the filter method to filter the 'items' array
return items.filter(item => {
// 4. Filtering conditions are as follows
// Get an array containing all property names in 'item' using Object.keys()
return Object.keys(item).every(
// Use the every method to evaluate if all property names meet the following condition
// 1. Check if 'p' does not exist in excludeMap
// 2. If it does, check if the value of 'item[p]' does not exist in excludeMap
// If the conditions above return false, the item will be filtered out
// If the conditions above return true, the item will be retained
p => {
return !excludeMap.has(p) || !excludeMap.get(p).has(item[p])
}
)
})
}
