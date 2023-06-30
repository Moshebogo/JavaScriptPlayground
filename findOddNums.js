// basic function with for loop
function findOddnums1(nums) {
    const oddNums = []
    for (let i = 0; i <= nums.length -1 ; i++) {
        nums[i] % 2!= 0 ? oddNums.push(nums[i]) : null
    }
    return oddNums
}

// uses the ternary statement
const findOddNums2 = nums => {
    oddNums = []
    for (const num of nums) {
        num % 2 != 0 ? oddNums.push(num): null
    }
    return oddNums
}

// uses .filter()
const findOddNums3 = nums => {
    return nums.filter(num => num % 2 != 0)
    
}

function* findOddnums4(nums) {
    for (const num of nums) {
           num % 2 != 0 ? yield num : null
    }
}


// the test section
console.log("expecting => [1, 3, 5, 7, 9]")
console.log(findOddnums1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log()

console.log("expecting => [1, 3, 5, 7, 9]")
console.log(findOddNums2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log()

console.log("expecting => [1, 3, 5, 7, 9]")
console.log(findOddNums3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log()

console.log("expecting => [1, 3, 5, 7, 9]")
console.log([...findOddnums4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])])