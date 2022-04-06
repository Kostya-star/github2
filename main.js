// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for (let i = 0; i<myArr.length; i++) {
//   total +=myArr[i];
//   // console.log(total);
//   console.log(myArr[i]);

// }

// var nums = [[1,2,3], [4,5,6], [7,8,9]];

// console.log('Example w/ Numbers:\n');
// console.log('The array data: ', JSON.stringify(nums));

// for (var i=0; i < nums.length; i++) {
//   // Main/"top" array - accessing via "arr[i]"
//   for (var j=0; j < nums[i].length; j++) {
//     // here we loop through the "child" arrays
//     let helpfulLabel = `nums[${i}][${j}]`
//     let value = nums[i][j]
//     console.log(helpfulLabel, 'Value=' + value);
//   }
// }

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product = product * arr[i];
//   }
//   return product;
// }
// console.log(multiply([2,4,6], 3));

// loop1 -   i=0 - true then pr=1*2=2 pr =2 and i=1 now
// loop2 -   i=1 -  i<3 then pr = 2*4 pr=8 and i=2 now
// loop3 -   i=2 - 2<3  then pr = 8*7 = 56 pr=56 and i =3 now
// loop 4 - i = 3 3<3 false and the loop is terminated 

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply([2,4,6], 3));

// loop1: n=3 3<=0 false then (arr, n - 1) * arr[n - 1]
//                            ([2,4,6],3-1) * arr[3-1]
//                            ([2,4,6],2) * arr[2] 

// loop2: n=2 2<=0 false then (arr, n - 1) * arr[n - 1]
//                            ([2,4,6], 2-1) * arr[2-1]
//                            ([2,4,6], 1) * arr[1] 

//loop3: n=1  1<=0 false then (arr, n - 1) * arr[n - 1]
//                            ([2,4,6],1-1) * arr[1-1]
//                            ([2,4,6],0) * arr[0] 
// the outcome ([2,4,6],2) * arr[2] 
//             ([2,4,6], 1) * arr[1]
//             ([2,4,6],0) * arr[0]


// const family = [{
//   firstName: 'Petr',
//   lastName: 'Danilov',
//   number: '+37369096275',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// {
//   firstName: 'Nadya',
//   lastName: 'Danilov',
//   number: '+37369096272',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// {
//   firstName: 'Ivan',
//   lastName: 'Danilov',
//   number: '+373690967895',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// {
//   firstName: 'igor',
//   lastName: 'Danilov',
//   number: '+37323456275',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// {
//   firstName: 'Costya',
//   lastName: 'Danilov',
//   number: '+34567896275',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// {
//   firstName: 'Luiba',
//   lastName: 'Danilov',
//   number: '+37369096275',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// {
//   firstName: 'Julia',
//   lastName: 'Danilov',
//   number: '+37369096275',
//   likes: ['animals', 'guitar', 'gardening'],
// },
// ];

// function lookUpProfile(name, prop) {
//   for(let i=0; i<family.length; i++) {
//     if (family[i].firstName === name) {
//       if (family[i].hasOwnProperty(prop)) {
//         return family[i][prop];
//       } else {
//         return 'No such property';
//       }
//     }
//   }
//   return 'No such contact';
// }
// console.log(lookUpProfile("Costya", "number"));
// function randomFraction() {

//   // Only change code below this line

//   return Math.random();

//   // Only change code above this line
// }
// console.log(randomFraction());

// function randomWholeNum() {

//   // Only change code below this line

//   return Math.floor(Math.random() * 10);
// }
// console.log(randomWholeNum());

// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return Math.floor(Math.random() * (myMax-myMin+1)) + myMin; 
//   // Only change code above this line
// }
// console.log(randomRange(50, 100));
 
// function convertToInteger(str) {
//   return parseInt(str);
//   }
  
//  console.log(convertToInteger('0000000000987834200002')); 
function convertToInteger(str) {
  return parseInt(str, 2);
  }
  
 console.log(convertToInteger("1"));