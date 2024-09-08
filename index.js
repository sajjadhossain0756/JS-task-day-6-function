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

// task-6 start here;

function inchToFeet(inch){
    const feet = parseInt(inch / 12);
    const inchAfter = inch % 12;
    const height = `Your height is ${feet} feet ${inchAfter} inch`;
    return height;

}

const personHeight = inchToFeet(67);
console.log(personHeight);

// task-7 start here
// Find the lowest number in the array below.

function getLowestNumber(array){
    let lowest = array[0];
    for(let num of array){
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137, 20, 3];

const lowestNumber = getLowestNumber(heights2);
console.log(`The lowest number is ${lowestNumber}`);

// task-8 start here
// Find the friend with the smallest name.

function getSmallestName(array){
    let smallest = array[0];
    for(let num of array){
        if(num.length < smallest.length){
            smallest = num;
        }
    }
    return smallest;
}

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'fa'];
const smallestName = getSmallestName(heights3);
console.log(`the smallest name is ${smallestName}`);

// task-9 start here;
// Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty){
    const laptoPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    let totalLaptopPrice = laptoPrice * laptopQty;
    let totalTabletPrice = tabletPrice * tabletQty;
    let totalMobilePrice = mobilePrice * mobileQty;
    
    let total = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return total;
    
}

const totalBudget = calculateElectronicsBudget(1,1,2);
console.log(`Your total Budget required is ${totalBudget}`);

// task-10 start here
// You are given an array of phone objects, each containing information about the model, brand, and price.
//  Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input
//  and returns the average price of phone.

function findAveragePhonePrice(array, qty){
    let sum = 0; 
    for(let num of array){
        sum = sum + num.price;
    }
    let average = sum / qty;
    return average;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 5000 },
    { model: "PhoneB", brand: "Samsung", price: 130000 },
    { model: "PhoneC", brand: "Oppo", price: 20000 },
    { model: "PhoneD", brand: "Nokia", price: 5000 },
    { model: "PhoneE", brand: "Iphone", price: 10000 },
    { model: "PhoneF", brand: "HTC", price: 10000 },
];
let qantity = phones.length;
const averagePrice = findAveragePhonePrice(phones,qantity);
console.log(`All phones average price is ${averagePrice}`);

// task-11 start here
// For each employee their current salary is calculated by multiplying yearly increment with
//  experience then adding the result to the starting salary. Now calculate is the total 
// salary has to be provided by the company in a month.

function getTotalSalary(array){
    
    let totalSalary = 0;

    for(let num of array){
        totalSalary += num.experience * num.increment + num.starting;
    }
    return totalSalary;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 1, starting: 39000, increment: 6000 },
    { name: "shohelRana", experience: 0, starting: 20000, increment: 2000 },
];

const totalCompanySalaryCost = getTotalSalary(employees);

console.log(`Total One Month Salary Cost of Company is ${totalCompanySalaryCost} Taka.`);