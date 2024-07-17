// https://bigfrontend.dev/problem/detect-data-type-in-JavaScript
/**
 * @param {any} data
 * @return {string}
 */
  function detectType(data) {
    // We found that it returned data in such a format.

    // This is a fixed syntax used to check data types.
    // We can use the slice method to remove the first 8 elements and the last element.
    // Use the toLowerCase method to convert all letters to lowercase
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  }
  //   这个方法的作用是根据传入的参数data的类型来判断并返回该参数的数据类型
  // This method's purpose is to check and return the data type of the passed parameter 'data' based on its type.
  detectType(1)
