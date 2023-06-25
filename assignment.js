function findCombinations(array, target) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    let result = [];

    while (left < right) {
        const sum = array[left] + array[right];

        if (sum === target) {
            result.push([array[left], array[right]]);
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    const mergedArray = result.flat().sort((a, b) => a - b);

    const doubledTarget = target * 2;
    const result2 = [];
    const stack = [];

    let i = 0;
    let currentSum = 0;
    let combination = [];

    while (true) {
        if (i < array.length && currentSum + array[i] <= doubledTarget) {
            combination.push(array[i]);
            currentSum += array[i];
            stack.push(i);
            i++;
        } else {
            if (currentSum === doubledTarget) {
                result2.push(combination.slice());
            }

            if (stack.length === 0) {
                break;
            }

            const lastIdx = stack.pop();
            const lastNum = array[lastIdx];
            combination.pop();
            currentSum -= lastNum;
            i = lastIdx + 1;
        }
    }

    return {
        result,
        mergedArray,
        result2,
    };
}

const array = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const { result, mergedArray, result2 } = findCombinations(array, target);
console.log("Combinations with target value:");
console.log(result);
console.log("Merged and sorted array:");
console.log(mergedArray);
console.log("Combinations with doubled target value:");
console.log(result2);
