// 1. What does this function excludeItems do?
// 2. Is this function working as expected ?
// 3. What is the time complexity of this function?
// 4. How would you optimize it ?

let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 },
]

// an exclude array made of key value pair
const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' },
    // ...
]

// function excludeItems(items, excludes) {
//     excludes.forEach(pair => {
//         items = items.filter(item => item[pair.k] !== pair.v)
//         // items = items.filter(item => item[pair.k] === item[pair.v])
//     })
//     return items
// }
// excludeItems(items, excludes)

function excludeItems(items, excludes) {
    const excludeMap = new Map()
    for (let { k, v } of excludes) {
        if (!excludeMap.has(k)) {
            excludeMap.set(k, new Set())
        }
        excludeMap.get(k).add(v)
    }
    console.log('excludeMap', excludeMap)

    return items.filter((item, index) => {
        console.log('Object.keys(item)', Object.keys(item))
        return ['color', 'type', 'age'].every(
            key => {
                console.log('判断key', !excludeMap.has(key), key, index)
                // console.log('!excludeMap.get(key).has(item[key])', !excludeMap.get(key).has(item[key]))
                // return !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
                console.log('判断有没有不符合条件的值', !excludeMap.get(key)?.has(item[key]), item[key])
                if (!excludeMap.has(key) || !excludeMap.get(key).has(item[key])) {
                    // if (excludeMap.has(key)) {
                    //     console.log('判断有没有不符合条件的值', !excludeMap.get(key).has(item[key]), item[key])
                    // }
                    return true
                }
            }
        )
    })
}

console.log('excludeItems(items, excludes)', excludeItems(items, excludes))