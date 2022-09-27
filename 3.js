/*
QUESTION 3

You are given a 2d array (array of arrays)
Each sub-array is an array of integer numbers

If you sum all the values of a given sub-array:
    1. Find the sub-array with the SECOND LARGEST summed value
    2 .Find the sub-array with the SECOND SMALLEST summed value

If you take the largest value from each of the found sub-arrays above and multiply these two values together, what do you get?

NOTE: all sub-arrays will have a unique sum

e.g.

const input = [
    [1, 2, 3],  //sum is 6
    [4, 5, 6],  //sum is 15
    [7, 8, 9],  //sum is 24
    [2, 3, 4],  //sum is 9
    [3, 4, 5]   //sum is 12
]

2nd largest sum is 15 and the largest value from this sub-array is 6
2nd smallest sum is 9 and the largest value from this sub-array is 4

6 * 4 = 24
*/


const findSecondLargest = (parentArray) => {
    const arraySums = parentArray.map((subArray) => {
        const subSum = subArray.reduce((sum, item) => sum + item, 0);
        const maxValue = subArray.reduce((max, value) => Math.max(max, value), subArray[0]);
        return {
            sum: subSum,
            maxValue,
        }
    });

    const arrayOrderedSums = arraySums.sort((a, b) => a.sum > b.sum ? 1 : -1);
    return {
        secondSmallest: arrayOrderedSums[1],
        secondLargest: arrayOrderedSums[arrayOrderedSums.length - 2]
    };
}
  
//DO NOT modify this
const input = require('./3-input');

const result = findSecondLargest(input)

console.log(`2nd largest sum is ${result.secondLargest.sum} and the largest value from this sub-array is ${result.secondLargest.maxValue}`)
console.log(`2nd smallest sum is ${result.secondSmallest.sum} and the largest value from this sub-array is ${result.secondSmallest.maxValue}`);
console.log(`the final multiplication is: ${result.secondLargest.maxValue} * ${result.secondSmallest.maxValue} =  ${result.secondLargest.maxValue * result.secondSmallest.maxValue}`);
//Hint, the final multiplication is: 933 * 438 =  408654