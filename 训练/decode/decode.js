/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    let row = 0,//当前行 We initialize the current row to 0.
      column = 0,//当前列 We initialize the current column to 0.
      // Obtained the total number of columns in the first row.
      totalColumn = message[0]?.length;//如果第一行存在,获取第一行的总列数--
    let result = "",//表示解码后的字符串
      dir = 1;//表示每一步的移动方向
  
    while (column < totalColumn) {//如果当前列小于总列数。
       //Append the character at the current position to the decoded string.
      result += message[row][column];//将当前位置的字符拼接到decoded字符串中。
  
      if (!message[row + dir]) {//: 如果下一行不存在。
        dir *= -1;//则改变step方向(Make step be negative)
      }
      row += dir;//步长step更新行数
      column++;//列数加一，移动到下一列
    }
  
    return result;//返回解码后的字符串。
  }

/**
* @param {string[][]} message
* @return {string}
*/
function decode1(message) {
    let i = 0, // Current row
        j = 0, // Current column
        cols = message[0]?.length; // If the first row exists, get the number of columns in the first row
    let decoded = "", // Represent the decoded string
        step = 1; // Represent the movement direction at each step

    while (j < cols) { // If the current column is less than the total number of columns.
        decoded += message[i][j]; // Append the character at the current position to the 'decoded' string.
        if (!message[i + step]) { // If the next row does not exist.
            step *= -1; // Change the direction of 'step' (Make 'step' be negative)
        }
        i += step; // Update the row number based on the step size
        j++; // Move to the next column by incrementing the column number
    }

    return decoded; // Return the decoded string.
}

const message = [
    ["I", "B", "C", "A", "L", "K", "A"],
    ["D", "R", "F", "C", "A", "E", "A"],
    ["G", "H", "O", "E", "L", "A", "D"],
];
console.log("decode(message)", decode(message));