// Palidromes: Words that read the same forwards and backwards
// Examples: dad, radar, taco cat
//
// Write a function that takes a string as an argument,
// and returns true if the string is a palindrome,
// and returns false if the string is not a palindrome
// Letter case and spaces should be disregarded

// isPalindrome('mom');	Should return true
// isPalindrome('something'); Should return false
// isPalindrome('TacO cAt'); Should return true

function isPalindrome(str) {
    let processed = str.replace(/\s/g,"").toLocaleLowerCase(); //preprocess string
    return processed.split('').reverse().join('') === processed; //reverse the processed string and check equal
}


console.log(isPalindrome('mom'));
console.log(isPalindrome('something'));
console.log(isPalindrome('TacO cAt'));
// Array Search
// Given an array of strings like below,
// write a function that returns an array
// containing only those strings that match
// a passed-in search string, regardless of case.
//
// Example:
// var testArr = [
//   'iPhone 7',
//   'iPad Pro',
//   'Mac Book Pro',
//   'iMac',
//   'IpHONE 6s',
//   'iphone 3g',
//   'iPod Nano',
//   'iPhOnE SE'
// ];
//
// findString(testArr, 'iPhone');
//
// Should return
// [
//   'iPhone 7',
//   'IpHONE 6s',
//   'iphone 3g',
//   'iPhOnE SE'
// ]

function findString(testArr, searchWord){
    let search = searchWord.toLocaleLowerCase();
    return testArr.filter(val => val.toLocaleLowerCase().includes(search));
}
var testArr = [
      'iPhone 7',
      'iPad Pro',
      'Mac Book Pro',
      'iMac',
      'IpHONE 6s',
      'iphone 3g',
      'iPod Nano',
      'iPhOnE SE'
    ];
console.log(findString(testArr, 'iPhone'))
// Array Modifying
// Given an array of strings like below,
// write a function that returns an array
// of objects with a specific property and value structure.
//
// Example:
// var testArr = [
//   'iPhone 7',
//   'iPad Pro',
//   'Mac Book Pro',
//   'iMac',
//   'IpHONE 6s',
//   'iphone 3g',
//   'iPod Nano',
//   'iPhOnE SE'
// ];
//
// arrayTransform(testArr);
//
// Should return
// [
//   {
//     label: 'iPhone 7',
//     name: 'iphone7',
//     index: 0
//   },
//   {
//     label: 'iPad Pro',
//     name: 'ipadpro',
//     index: 1
//   },
//   {
//     label: 'Mac Book Pro',
//     name: 'macbookpro',
//     index: 2
//   },
//   ...
// ]

function arrayTransform(arr) {
    return arr.map((val,index) => ({label:val,name:val.replace(/\s/g,"").toLocaleLowerCase(),index:index}));
}
var testArr = [
  'iPhone 7',
  'iPad Pro',
  'Mac Book Pro',
  'iMac',
  'IpHONE 6s',
  'iphone 3g',
  'iPod Nano',
  'iPhOnE SE'
];

let output = arrayTransform(testArr);
for(let val of output){
    console.log(val)
}


// Given an array of numbers,
// write a function that returns the sum of those numbers.
//
// Example:
// var testArr = [0, 1, 2, 3, 4];
//
// sumArray(testArr); Should return 10

function sumArray(arr){
    return arr.reduce((sum,val)=>sum+val);
}

var testArr = [0, 1, 2, 3, 4];

console.log(sumArray(testArr));



// Compare Objects
// Write a function that compares two objects for equality.
// It should return true if the object are true, and false otherwise.
// Example:
// const obj1 = { one: "one", two: 2, three: false }
// const obj2 = { three: false, one: "one", two: 2 }
// areObjsEqual(obj1, obj2) should return true

function areObjsEqual(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for(let key in obj1){
        if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false;
    }
    return true;
}

const obj1 = { one: "one", two: 2, three: false }
const obj2 = { three: false, one: "one", two: 2 }
let ans = areObjsEqual(obj1, obj2) 
console.log(ans)

// Filter Object
// Given the below object, return the same object with only the editable fields

// {
// 	name: {
// 		editable: true,
// 		value: 'Jack',
// 		type: 'text'
// 	},
// 	phone: {
// 		editable: true,
// 		value: 8675309,
// 		type: 'number'
// 	},
// 	id: {
// 		editable: false,
// 		value: 'JHA-252',
// 		type: 'text'
// 	}
// }

function filterObject (obj) {
    const validKeys = Object.keys(obj).filter(val => obj[val].editable);
    const ans = {};
    validKeys.forEach(key => {ans[key] = obj[key];});
    return ans;
}

let input = {
	name: {
		editable: true,
		value: 'Jack',
		type: 'text'
	},
	phone: {
		editable: true,
		value: 8675309,
		type: 'number'
	},
	id: {
		editable: false,
		value: 'JHA-252',
		type: 'text'
	}
}

console.log(filterObject(input))
