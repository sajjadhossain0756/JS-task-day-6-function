// JS function task start here;
// task-1 start here;
// Take four parameters. Multiply the four numbers and then return the result

function multiplyNumber (num1,num2,num3,num4){
      result = num1 * num2 * num3 * num4;
      return result;
}

const Multiply = multiplyNumber(2,5,3,2);
const Multiply1 = multiplyNumber(2,5,9,2);

console.log(Multiply);
console.log(Multiply1);

// task-2 start here;
// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.

function multiplyNumber2(num1){
    if(num1 % 2 === 1){
        result = num1 * 2;
    }
    else{
        result = num1 / 2 ;
    }
    return result;
}

const oddOrEven = multiplyNumber2(9);
const oddOrEven2 = multiplyNumber2(20);
console.log(oddOrEven);
console.log(oddOrEven2);

// task-3 start here;
// Write a function called make_avg() which will take an array of integers and the size of 
// that array and return the average of those values.

function make_avg(array,size){
    
     let sum = 0;
     for(let i = 0; i < size; i++){  

        sum += array[i];   
     }
     const average = sum / size;
     return average;
     
}

const array1 = [20, 30, 40, 10, 25, 55];
let size = array1.length;

const result2 = make_avg(array1,size);
console.log(`average number is ${result2}`);

// task-4 start here
// Write a function called count_zero() which will take a binary string (Binary string 
// is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString){
    let count = 0;
    for(let i = 0; i < binaryString.length; i++){
        
        if(binaryString[i] === '0'){
           count++
        }   
    }
    return count;
}

const result3 = count_zero('110000100010');

console.log(result3);

// task-5 start here;
// Write a function called odd_even() which takes an integer
//  value and tells whether this value is even or odd. If even return Even. If odd return Odd

function even_odd(integer){
    let value = '';
    if(integer % 2 === 1){
       value = `this is odd number ${integer}`;
    }
    else{
        value = `this is even number ${integer}`
    }
    return value;
}

const result4 = even_odd(34);
console.log(result4);