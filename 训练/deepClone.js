function deepClone(obj) {
    if (!obj || typeof obj != 'object') return
    let newObject = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObject
}

let man = {
    name: 'spark',
    age: '18'
}

let newMan = deepClone(man)
console.log('newMan', newMan)
// console.log('jument', newMan === man)