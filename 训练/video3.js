const nums = [2, 7, 11, 15];
const target = 66;
function solveFunc(nums,target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i]
        map.set(nums[i],i)
        if (map.has(comp)) {
            return [i,map.get(comp)]
        }
    }
    return 'no answer'
}
console.log('result', solveFunc(nums,target))
