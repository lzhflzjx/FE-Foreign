/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
// 该函数接受两个参数：要记忆化的函数func和用于生成缓存键的解析器resolver
function memo(func, resolver = (...args) => args.join("_")) {
    console.log('resolver', resolver)
    const cache = new Map(); // 创建了一个Map对象cache用于存储函数的结果。

    return function (...args) {
        // 返回一个闭包函数，该函数接受任意数量的参数。
        const cacheKey = resolver(...args); //使用传入的resolver函数生成参数args的缓存键cacheKey。
        // 判断缓存中是否已经存在相同的cacheKey，
        if (cache.has(cacheKey)) {
            // 如果存在则直接返回对应的值。
            return cache.get(cacheKey);
        }
        // 调用传入的函数func，传入参数args，并将结果存储在value中。
        const value = func.call(this, ...args);
        //将计算得到的值存储在缓存cache中，以备后续使用。
        cache.set(cacheKey, value);
        // 返回计算得到的值。
        return value;
    };
}

/**
* @param {Function} func
* @param {(args:[]) => string } [resolver] - cache key generator
*/
// This function accepts two parameters: the function 'func' to be memoized and the resolver function used to generate cache keys.
function memo1(func, resolver = (...args) => args.join("_")) {
    console.log('resolver', resolver);
    const cache = new Map(); // Created a Map object 'cache' to store the results of the function.

    return function (...args) {
        // Returns a closure function that accepts any number of arguments.
        const cacheKey = resolver(...args); // Utilize the provided resolver function to generate a cache key for the 'args'.

        // Check if the cache already contains the same 'cacheKey'.
        if (cache.has(cacheKey)) {
            // If it does, return the corresponding value directly.
            return cache.get(cacheKey);
        }

        // Invoke the function 'func' with the arguments 'args' and store the result in 'value'.
        const value = func.call(this, ...args);

        // Store the computed value in the 'cache' for future reference.
        cache.set(cacheKey, value);

        // Return the computed value.
        return value;
    };
}


const func = (arg1, arg2) => {
    return arg1 + arg2;
};

const memoed = memo(func, () => "samekey");

memoed(1, 2);
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2);
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3);
// 3, since key is the same, 3 is returned without calling func