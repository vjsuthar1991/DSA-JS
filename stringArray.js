function reverseString(input) {
    // const strToArray = input.split("").reverse().join(''); // direct method
    const strToArray = splitStringToArray(input);
    for (let i = 0; i < strToArray.length / 2; i++) {
        const temp = strToArray[i];
        strToArray[i] = strToArray[strToArray.length - 1 - i];
        strToArray[strToArray.length - 1 - i] = temp;
    }

    console.log(strToArray.join(''));
}

function splitStringToArray(string) {
    const strToArray = [];
    for (let i = 0; i < string.length; i++) {
        strToArray.push(string[i]);
    }
    return strToArray;
}
reverseString("maharashtra");

function checkPalindrome(input) {
    // const reverseString = input.split("").reverse().join('');
    const strToArray = splitStringToArray(input);
    for (let i = 0; i < strToArray.length; i++) {
        const temp = strToArray[i];
        strToArray[i] = strToArray[strToArray.length - 1 - i];
        strToArray[strToArray.length - 1 - i] = temp;
    }
    strToArray.join('');
    return input === strToArray;
}

console.log(checkPalindrome('vijay'));

const reverseNumber = (number) => {
    const numberToStr = String(number).split('').reverse().join('');
    console.log(parseInt(numberToStr) * Math.sign(number));
}
reverseNumber(-12345);

const capitalize = (input) => {
    // const capitalizeString = input.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
    const splitStr = input.toLowerCase().split(" ");
    const capitalArray = splitStr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
    return capitalArray;
}

console.log(capitalize('hello world'));

const fizzBuzz = (input) => {
    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(50);

const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        minPrice = Math.min(minPrice, currentPrice);
        const potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        console.log(maxProfit);
    }
    return maxProfit;
}

const prices = [8, 2, 4, 9, 3];
//console.log(maxProfit(prices), "maxProfit");

const chunk = (chunkArray, size) => {
    const chunked = [];
    let index = 0;
    while (index < chunkArray.length) {
        const chunk = chunkArray.slice(index, index + size);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
}

//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

const addToTarget = (numberArray, target) => {
    const indexArray = [];
    for (let i = 0; i <= numberArray.length; i++) {
        // let inValue = numberArray[i];
        // if (inValue + numberArray[i + 1] === 9) {
        //     indexArray.push(i);
        //     indexArray.push(i + 1);
        // }
        for (let j = i + 1; j < numberArray.length; j++) {
            if (numberArray[i] + numberArray[j] === target) {
                indexArray.push(i);
                indexArray.push(j);
            }
        }
    }
    return indexArray;
}

console.log(addToTarget([2, 7, 11, 15], 9), "targets");