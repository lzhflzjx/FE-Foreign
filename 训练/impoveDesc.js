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

// function excludeItems(items, excludes) {
//     excludes.forEach(pair => {
//         items = items.filter(item => item[pair.k] !== pair.v)
//         // items = items.filter(item => item[pair.k] === item[pair.v])
//     })
//     return items
// }

// The function's purpose is based on excludes array to remove item 
// from the 'items' array that meet the exclusion conditions.
function excludeItems(items, excludes) {
    //1.新建一个Map叫excludeMap
    const excludeMap = new Map()
    //2.使用for of 遍历excludes。
    for (let { k, v } of excludes) {
        //判断map中若不存在k
        if (!excludeMap.has(k)) {
            //`set()`方法添加键值对 key-value pair.
            // 将k作为key。（take...as...把。。当作是。。）
            excludeMap.set(k, new Set())
        }
        //将k对应的v设置为value （a corresponding to b —— a对应的b）
        excludeMap.get(k).add(v)
    }
    //上述代码的作用是（the function of the above code ）create criteria to filter items
    //3.使用filter方法过滤items数组
    return items.filter(item => {
        //4.过滤的条件如下 conditions are as follows
        //使用Object.keys得到一个数组，包含item中所有属性名 containing all the property names
        return Object.keys(item).every(
            //使用every方法判断是否所有的属性名满足以下条件 Meeting the following conditions
            p => {
                //1、excludeMap中是否不存在p
                //2、若存在，item的值是否在excludeMap中不存在。
                // Whether the value of item does not exist in excludeMap.
                return !excludeMap.has(p) || !excludeMap.get(p).has(item[p])
                //if this conditions return false。the item be filtered。
                //if this conditions return true。the item be reserved
            }
        )
    })
}

console.log('excludeItems(items, excludes)', excludeItems(items, excludes))