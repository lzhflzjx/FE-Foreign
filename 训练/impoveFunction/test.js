
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
  /**
   * @param {object[]} items
   * @excludes { Array< {k: string, v: any} >} excludes
   */
  // O(m * n)
  /**
   * @param {object[]} items
   * @param { Array< {k: string, v: any} >} excludes
   * @return {object[]}
   */
  function excludeItems(items, excludes) {
    const excludeMap = new Map()
  
    for (let { k, v } of excludes) {
      if (!excludeMap.has(k)) {
        excludeMap.set(k, new Set())
      }
      excludeMap.get(k).add(v)
    }
  console.log('excludeMap', excludeMap)
    let arr = items.filter(item => {
      return Object.keys(item).every(
        p => {
          return !excludeMap.has(p) || !excludeMap.get(p).has(item[p])
        }
      )
    })
    console.log(arr)
    return arr
  }
  
  excludeItems(items, excludes)