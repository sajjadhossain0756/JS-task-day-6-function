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

function averageNumber(array,size){
    
     let sum = 0;
     for(let i = 0; i < size; i++){  

        sum += array[i];   
     }
     const average = sum / size;
     return average;
     
}

const array1 = [20, 30, 40, 10, 25, 55];
let size = array1.length;

const result2 = averageNumber(array1,size);
console.log(`average number is ${result2}`);