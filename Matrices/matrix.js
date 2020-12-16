//Spot Check 1
// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
//   [9, null]
// ]




// function generateMatrix(numRows, numColumns) {
//   let matrix = []
//   let num = 1

//   for (let r = 0; r < numRows; r++) {
//     matrix.push([])
//     for (let c = 0; c < numColumns; c++) {
//       matrix[r].push(num++)
//     }
//   }
//   return matrix
// }

// generateMatrix(3, 4)
// console.log(generateMatrix(3, 4))

// let matrix = generateMatrix(3, 4)
// console.log(matrix[1][2]) //prints 7


//Spot Check 2

// let matrix = generateMatrix(5, 5)

// for (let i = 0; i < matrix.lenght; i++) {
//   for (let j = 0; i < matrix[i].lenght; j++) {
//     console.log(matrix[i][j])
//   }
// }

// console.log(matrix)


//Spot Check 3

// let matrix = generateMatrix(3, 4)

// const get = function (rowNum, colNum) {
//   return matrix[rowNum][colNum]
// }

// console.log(get(1, 2))//return 7


//spot check 4

// let matrix = generateMatrix(3, 4)

// const print = function () {
//   for (let i = 0; i < matrix.length; i++) {
//     let line = ""
//     for (let j = 0; j < matrix[i].length; j++) {
//       line += (matrix[i][j] + "\t")
//     }
//     console.log(line)
//   }
// }

// console.log(print())

