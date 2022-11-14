// ASSESSMENT 3: Coding Practical Questions with Jest

// const { objectExpression } = require("@babel/types")
// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Jest template
// describe("functionName", () => {
//     it("describe what functionName does here", () => {
//     expect(functionName(pass arg as needed)).toEqual(expected output)
//     })
// })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("great2", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
       const fibLength1 = 6
       const fibLength1Output = [1, 1, 2, 3, 5, 8]
       const fibLength2 = 10
       const fibLength2Output = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
       expect(great2(fibLength1)).toEqual(fibLength1Output)
       expect(great2(fibLength2)).toEqual(fibLength2Output)
    })
})
// ReferenceError: great2 is not defined

// b) Create the function that makes the test pass.
// Input = number greater than 2 
// Output = number of fibonacci sequence 

// Create a function called great2 that takes in an array
// One parameter - num
// Using a for loop, set fib to start the array at [1,1] to prevent the array to start at 0.
//   in the for loop, let i start at 0.
//   use .push() takes the argument of fib [1,1] starting at index 1 and what is to be added 
    // return the output of the method itself is the length of the new array
    // -1 to add previous index to get new value
  
const great2 = (num) => {
  let fib = [1,1]
  for (let i = 1; i < num; i++) {
    fib.push(fib[i] + fib[i - 1])
  
  }
  return fib
}

// Jest test is giving me one extra input so I'm thinking there is something wrong with my for loop. I thought it could be i++ that would give me an extra output.

  //   expect(received).toEqual(expected) // deep equality

  //   - Expected  - 0
  //   + Received  + 1

  //   @@ -3,6 +3,7 @@
  //       1,
  //       2,
  //       3,
  //       5,
  //       8,
  //   +   13,
  //     ]

  //     35 |        const fibLength2 = 10
  //     36 |        const fibLength2Output = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  //   > 37 |        expect(great2(fibLength1)).toEqual(fibLength1Output)
  //        |                                   ^
  //     38 |        expect(great2(fibLength2)).toEqual(fibLength2Output)
  //     39 |     })
  //     40 | })

  //     at Object.toEqual (code-challenges.test.js:37:35)

  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe("sortNum", () => {
//     it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
//       const studyMinutesWeek1 = {
//         sunday: 90,
//         monday: 30,
//         tuesday: 20,
//         wednesday: 15,
//         thursday: 30,
//         friday: 15,
//         saturday: 60
//       }
//       const studyMinutesWeek1Output = [15, 15, 20, 30, 30, 60, 90]
//       const studyMinutesWeek2 = {
//         sunday: 100,
//         monday: 10,
//         tuesday: 45,
//         wednesday: 60,
//         thursday: 20,
//         friday: 15,
//         saturday: 65
//       }
//       const studyMinutesWeek2Output = [10, 15, 20, 45, 60, 65, 100]
//       expect(sortNum(studyMinutesWeek1)).toEqual(studyMinutesWeek1Output)
//       expect(sortNum(studyMinutesWeek2)).toEqual(studyMinutesWeek2Output)
//     })
// })
// //ReferenceError: sortNum is not defined

// b) Create the function that makes the test pass.
// input - objects
// outputs - values

// create a function called sortNum
// one parameter - object
// return 
  // use Object.values to return an array of the object's number values in the sme order that it was provided 
  // use .sort() to sort the new array from ascending order .sort((a, b) => a - b)

// const sortNum = (object) => {
//     return Object.values(object).sort((a, b) => a - b)
// }

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

// describe("trans", () => {
//     it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
//     const accountTransactions1 = [100, -17, -23, -9]
//     const accountTransactions1Output = [100, 83, 60, 51]
//     const accountTransactions2 = [250, -89, 100, -96]
//     const accountTransactions2Output = [100, 83, 60, 51]
//     const accountTransactions3 = []
//     const accountTransactions3Output = []
//     expect(trans(accountTransactions1)).toEqual(accountTransactions1Output)
//     expect(trans(accountTransactions2)).toEqual(accountTransactions2Output)
//     expect(trans(accountTransactions3)).toEqual(accountTransactions3Output)
//   })
// })

// b) Create the function that makes the test pass.
// input - array 
// output - array of accumlated sum or empty array

// create a function called newArray 
// one paramter- array
// set sum to index 0
// using a for loop, the let i start at 1 and let it loop through the length of the array by using .length
  // push sum and have the array's previous index add to the next index
  // return sum



// const trans = (array) => { 
//   let sum = [0]
//   // let empty = []
//   for (let i = 1; i < array.length; i++) {
//     sum.push(array[i-1] + array[i])
//   }
//   return sum
// }

// It seems like I am receiving the correct values in the array but I am also receiving additional values. By setting the sum to 0, would this cause more values?
// I tried using a conditional statement in the for loop to let the empty array to return back an empty array, however it was giving only one value 83. 

// - Expected  - 3
// + Received  + 3

//   Array [
// -   100,
// +   0,
//     83,
// -   60,
// -   51,
// +   -40,
// +   -32,
//   ]

//   186 |     const accountTransactions3 = []
//   187 |     const accountTransactions3Output = []
// > 188 |     expect(trans(accountTransactions1)).toEqual(accountTransactions1Output)
//       |                                         ^
//   189 |     expect(trans(accountTransactions2)).toEqual(accountTransactions2Output)
//   190 |     expect(trans(accountTransactions3)).toEqual(accountTransactions3Output)
//   191 |   })

//   at Object.toEqual (code-challenges.test.js:188:41)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


