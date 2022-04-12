// // const myArr = [2, 3, 4, 5, 6];
// // let total = 0
// // for (let i = 0; i<myArr.length; i++) {
// //   total +=myArr[i];
// //   // console.log(total);
// //   console.log(myArr[i]);

// // }

// // var nums = [[1,2,3], [4,5,6], [7,8,9]];

// // console.log('Example w/ Numbers:\n');
// // console.log('The array data: ', JSON.stringify(nums));

// // for (var i=0; i < nums.length; i++) {
// //   // Main/"top" array - accessing via "arr[i]"
// //   for (var j=0; j < nums[i].length; j++) {
// //     // here we loop through the "child" arrays
// //     let helpfulLabel = `nums[${i}][${j}]`
// //     let value = nums[i][j]
// //     console.log(helpfulLabel, 'Value=' + value);
// //   }
// // }

// // function multiply(arr, n) {
// //   let product = 1;
// //   for (let i = 0; i < n; i++) {
// //     product = product * arr[i];
// //   }
// //   return product;
// // }
// // console.log(multiply([2,4,6], 3));

// // loop1 -   i=0 - true then pr=1*2=2 pr =2 and i=1 now
// // loop2 -   i=1 -  i<3 then pr = 2*4 pr=8 and i=2 now
// // loop3 -   i=2 - 2<3  then pr = 8*7 = 56 pr=56 and i =3 now
// // loop 4 - i = 3 3<3 false and the loop is terminated 

// // function multiply(arr, n) {
// //   if (n <= 0) {
// //     return 1;
// //   } else {
// //     return multiply(arr, n - 1) * arr[n - 1];
// //   }
// // }
// // console.log(multiply([2,4,6], 3));

// // loop1: n=3 3<=0 false then (arr, n - 1) * arr[n - 1]
// //                            ([2,4,6],3-1) * arr[3-1]
// //                            ([2,4,6],2) * arr[2] 

// // loop2: n=2 2<=0 false then (arr, n - 1) * arr[n - 1]
// //                            ([2,4,6], 2-1) * arr[2-1]
// //                            ([2,4,6], 1) * arr[1] 

// //loop3: n=1  1<=0 false then (arr, n - 1) * arr[n - 1]
// //                            ([2,4,6],1-1) * arr[1-1]
// //                            ([2,4,6],0) * arr[0] 
// // the outcome ([2,4,6],2) * arr[2] 
// //             ([2,4,6], 1) * arr[1]
// //             ([2,4,6],0) * arr[0]


// // const family = [{
// //   firstName: 'Petr',
// //   lastName: 'Danilov',
// //   number: '+37369096275',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // {
// //   firstName: 'Nadya',
// //   lastName: 'Danilov',
// //   number: '+37369096272',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // {
// //   firstName: 'Ivan',
// //   lastName: 'Danilov',
// //   number: '+373690967895',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // {
// //   firstName: 'igor',
// //   lastName: 'Danilov',
// //   number: '+37323456275',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // {
// //   firstName: 'Costya',
// //   lastName: 'Danilov',
// //   number: '+34567896275',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // {
// //   firstName: 'Luiba',
// //   lastName: 'Danilov',
// //   number: '+37369096275',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // {
// //   firstName: 'Julia',
// //   lastName: 'Danilov',
// //   number: '+37369096275',
// //   likes: ['animals', 'guitar', 'gardening'],
// // },
// // ];

// // function lookUpProfile(name, prop) {
// //   for(let i=0; i<family.length; i++) {
// //     if (family[i].firstName === name) {
// //       if (family[i].hasOwnProperty(prop)) {
// //         return family[i][prop];
// //       } else {
// //         return 'No such property';
// //       }
// //     }
// //   }
// //   return 'No such contact';
// // }
// // console.log(lookUpProfile("Costya", "number"));
// // function randomFraction() {

// //   // Only change code below this line

// //   return Math.random();

// //   // Only change code above this line
// // }
// // console.log(randomFraction());

// // function randomWholeNum() {

// //   // Only change code below this line

// //   return Math.floor(Math.random() * 10);
// // }
// // console.log(randomWholeNum());

// // function randomRange(myMin, myMax) {
// //   // Only change code below this line
// //   return Math.floor(Math.random() * (myMax-myMin+1)) + myMin; 
// //   // Only change code above this line
// // }
// // console.log(randomRange(50, 100));
 
// // function convertToInteger(str) {
// //   return parseInt(str);
// //   }
  
// //  console.log(convertToInteger('0000000000987834200002')); 
// // function convertToInteger(str) {
// //   return parseInt(str, 2);
// //   }
  
// //  console.log(convertToInteger("1"));

// // function countup(n) {
// //   if (n < 1) {
// //     return [];
// //   } else {
// //     const countArray = countup(n - 1);
// //     countArray.push(n);
// //     return countArray;
// //   }
// // }
// // console.log(countup(5));

// // Only change code below this line
// // function countdown(n){
// //   if (n<=0) {
// //     return [];
// //   } else {
// //     const countBackwardsArray = countdown(n-1);
// //     countBackwardsArray.push(n);
// //     return countBackwardsArray;
// //   }
// // }
// // console.log(countdown(5));
// //  let value = true;
// //  console.log(typeof value)
// //  value = String(value);
// //  console.log(typeof value)
// // let num = '123';
// // console.log(typeof num);
// // num = Number(num);
// // console.log(typeof num);

// // console.log('6'/'2');
// // console.log(Number(1));
// // console.log(Number(6));

// // console.log(Boolean(1));
// // console.log(Boolean(0));
// // console.log(Boolean('hello'));
// // console.log(Boolean());
// // console.log(Boolean('0'));
// // console.log(Boolean(' '));

// // let x = 1;
// // x = -x;
// // console.log(x);
// // console.log(8%3)
// // console.log(10%3)

// // console.log(2**2)
// // console.log(3**5);
// // console.log(1**45);
// // let cans = 'a' + 'b';
// // console.log(cans);
// // console.log(2+2+'2');
// // console.log('2'+'2'+2);
// // console.log('2'-'1');
// // console.log(6-'5');
// // console.log(6/'2');
// // console.log(+true);
// // console.log(+'4');
// // let apples = '3';
// // let oranges = '4';
// // console.log(+apples + +oranges);
// // console.log(Number(apples) + Number(oranges));
// // console.log(2+2*5);
// // '1'
// // '-1'
// // 1 or true
// // 2
// // 6 or '6'
// // '9px'
// // "$45"
// // 2
// // NaN
// // -4
// // '-14'
// // ----
// // ----
// // null
// // let a = +prompt('your first number', 1);
// // let b = +prompt('second num', 2);
// // console.log(a + b)

// // let age = prompt('How old are you?');
// // let message = (age <3) ? ' hey baby' :
// //     (age<18) ? 'hey u r a teenager already!' :
// //     (age<100) ? 'you r old man!' :
// //     'What an unusual age!';
// //     console.log(message);
// // let message;
// // let age = prompt('how old r u?');
// // if (age<3) {
// //   message = 'hey';
// // } else if (age <18) { 
// //   message = 'Hello young man!';
// // } else if (age <100) {
// //   message = 'Hello an old man!'
// // } else {
// //   message = 'what an unusual age!'
// // }
// // console.log(message);

// // let company = prompt('what company created js?');
// // if(company == 'Netscape') {
// //   console.log('Right!');
// // } else {
// //   console.log('Wrong!');
// // }
// // let comp = prompt('what comp created js?');
// // (comp == 'Netsacpe') ? console.log('right!') : 
// // console.log('wrong!');

// // let jsname = prompt('what is the official name of js?');
// // if (jsname == 'ECMAScript') {
// //   console.log('right!');
// // } else {
// //   console.log('didnt u know? ECMAScript!');
// // }
// // let num = prompt('Number?');
// // if (num > 0) {
// //   console.log(1);
// // } else if (num <0) {
// //   console.log(-1);
// // } else {
// //   console.log(0);
// // }
// // let result = (a+b<4) ? 'Below' : 'over';
// // let login = prompt();
// // let message = (login=='employee') ? 'hello!' :
// //               (login == 'Director') ? 'Greetings!' :
// //               (login == '') ? 'No login!' :
// //               '';
// // console.log(message);            
// // if(age >=14 && age<=90)  
// // if(!/
// // let message;
// // let login = prompt('insert your login plz!')
// // if(login=='Admin') {
// //   let password = prompt('Insert your password plz!');
// //   if(password == 'TheMaster'){
// //     message = 'Welcome!';
// //   } else if(password == '' || password == null) {
// //     message = 'Canceled';
// //   } else {
// //     message = 'Wrong password'
// //   }
// // }
// //  else if (login == '' || login == null) {
// //   message = 'Canceled';
// // } 
// // else {
// //   message = 'I dont know you!';
// // }
// // console.log(message);

// // let i = 0;
// // while (i<3) {
// //   console.log(i);
// //   i++;
// // }
// // let i = 10;
// // while (i !=0) {
// //   console.log(i);
// //   i--;
// // }
// // let i = 0;
// // do{
// //   console.log(i);
// //   i++;
// // } while(i<5);
// // let i = 1;
// // for(i = 1; i < 10; i++){
// //   // console.log(i);
// // }
// // console.log(i);
// // console.log(i);
// // console.log(i);
// // let i = 0;
// // for (;i<3;i++) {
// //   console.log(i);
// // }
// // let i = 0;
// // for (;i<4;) {
// //   console.log(i++);
// // }
// // let sum = 0;
// // while (true) {
// //   let value = +prompt('Enter your number');
// //   if(!value) break;
// //   sum = sum+value;
// // }
// // alert('Sum: ' + sum);
// // for (let i = 0; i<10; i++) {
// //   if(i % 2 == 0) continue;
// //   console.log(i);
// // }
// // for (let i = 0; i<10;i++) {
// //   if(i%2) {
// //     console.log(i);
// //   }
// // }

// // outer: 
// // for (let i=0;i < 3;i++) {
// //   for(let j =0; j < 3; j++){
// //     let input = prompt(`Value at coordinates is (${i},${j})`);
// //     if(!input) break outer;
// //   }
// // }
// // console.log('Done!');

// // let i = 0;
// // while (++i < 5) {
// //   console.log(i);
// // }
// // for(let i = 2;i<=10; i++) {
// //   if(i % 2 == 0) {
// //     console.log(i);
// //   }
// // }

// // let i = 0;
// // while(i<3) {
// //   console.log(`number ${i}`);
// //   i++;
// // }

// // outer:for (let i; ;i++) {
// //   let input = +prompt('plz insert a number that is greater than 100')
// //   if(input<100) {
// //     +prompt('plz insert a number that is greater than 100!!!');
// //   } else if (input >= 100) {
// //     break outer;
// //   } else if(input == '') {
// //     console.log(null);
// //   } 
// // }
// // let num = undefined;
// // do {
// //   num = prompt('Enter a number greater than 100?');
// // } while(num<=100&&num)
// // console.log(typeof num);

// // let n = 10;
// // label:
// // for(let i = 2; i<=n;i++) {
// //   for(let j = 2; j<i; j++) {
// //     if(i%j == 0) continue label;
// //   }
// //   console.log(i);
// // }
// // let out = document.querySelector('.out');
// // console.log(out);

// // for(let i = 1; i < 10; i++) {
// //   for(let j = 1; j < 10; j++) {
// //     out.innerHTML += `${i} * ${j} = ${i * j} <br>`
// //   }
// //   out.innerHTML += '<hr>'
// // }

// // let n = 10;

// // outer: 
// // for(let i = 2; i <= n; i++) {
// //   for(let j = 2; j < i; j++){
// //     if(i % j == 0) continue outer;
// //   }
// //   console.log(i);
// // }
// // let out = document.querySelector('.out');
// // let tmp = '';
// // for (let i = 4; i<=400; i++) {
// //   tmp = tmp + i + ' ';
// // }
// // out.innerHTML = tmp;
// // for(i=4; i<=13; i=i+3) {
// //   tmp = tmp + i + ' ';
// // }
// // out.innerHTML = tmp;
// // for(i=654; i>0; i=i-1) {
// //     // tmp = tmp + i + ' ';
// //     console.log(i);
// // }
// // // out.innerHTML = tmp;

// // for(i=1983; i<=2017; i++) {
// //   console.log(i);
// // }
// // for(i=-4; i<=100; i=i+2) {
// //   console.log(i);
// // }

// // let out = document.querySelector('.out');

// // for(i=1; i<=9;i++) {
// //   for(j=1; j<=9; j++){
// //     out.innerHTML += i + '*' + j + '=' + (j*i) + '<br>';
// //   }
// //   out.innerHTML+= '<hr>';
// // }
// // for(i=7; i<=100;i++) {
// //     out.innerHTML += '&#' + i + ' ';
// // }
// // let browser;
// // if(browser === 'Edge') {
// //   console.log('uve got the edge!');
// // }else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
// //   console.log('okay we support these browsers too!');
// // } else {
// //   'we hope this page looks ok!'
// // }
// //  let a = +prompt('a?');
// //  switch(a) {
// //    case 0:
// //      console.log(0);
// //      break;
// //    case 1:
// //      console.log(1);
// //      break;
// //    case 2:
// //    case 3:
// //      console.log('2, 3');   
// //      break;   
// //  }

// // let userName = 'Costya';

// // function showMessage() {
// //   let greeting = 'Hello ' + userName;
// //   console.log(greeting);
// // }
// // showMessage();

// // function showMessage(from, text) {
// //   from = '*' + from + '*';
// //   console.log(from, text);
// // }
// // showMessage('Anna', 'Hello!');

// // function showMessage(from, text) {
// //   if(text===undefined) {
// //     text = 'text does not exist'
// //   }
// //   console.log(from + ': ' + text);
// // }
// // showMessage('Costya', 'you are trully awesome!')

// // function sum(a, b) {
// //   return a + b;
// // }
// // let result = sum(1, 2);
// // console.log(result);

// // function checkAge(age) {
// //   if(age > 18) {
// //     return true
// //   } else {
// //     return confirm('Did your parents allow you?')
// //   }
// // }
// // let age = prompt('how old r u?');
// // if(checkAge(age)) {
// //   console.log('Access granted');
// // } else {
// //   console.log('Access denied');
// // }

// // function showPrimes(n) {
// //   nextPrime:
// //   for(i=2; i<n; i++) {
// //     for(j=2; j<i; j++) {
// //       if(i%j==0) continue nextPrime;
// //     }
// //     console.log(i);
// //   }
// // }
// // showPrimes(100);

// // function showPrimes(n) {
// //   for(let i =2; i<n; i++) {
// //     if (!isPrime) continue; 
// //     console.log(i);
// //   }
// // }
// // function isPrime(n) {
// //   for(let i = 2; i<n; i++) {
// //     if (n%i == 0) return false;
// //   }
// //   return true;
// // }

// // function checkAge(age) {
// //   if (age>18) 
// //   {return true;}
// //   else {
// //     return confirm('did your parents allow you to?')
// //   }
// // }

// // function checkAge(age) {
// //   return (age>18) ?  true :  confirm('did your parents allow u to?');
// //   return (age>18) || confirm('did your parents allow u to?');
// // }

// // function checkNum(a, b) {
// //   return (a<b) ? a : b
// // }
// // checkNum(4, 54)

// // function checkNum(a, b) {
// //   if (a<b) {
// //     return a;
// //   } else {
// //     return b;
// //   }
// // }
// // console.log(checkNum(3, 3));

// // function pow(x, n) {
// //   x = +prompt('insert x?');
// //   n = +prompt('insert n?');
// //   if (n<1) {
// //     console.log(`the ${n} power isnt suppoerted so plz insert a num that is greater than 0`);
// //   }
// //   return x**n;

// // }
// // console.log(pow());

// // function sayHi() {
// //   console.log('Hello!');
// // }
// // console.log(sayHi);

// // function sayHi() {
// //   console.log('Hello!');
// // }
// // let func = sayHi;
// // func();
// // sayHi();

// // function ask(question, yes, no) {
// //   if(confirm(question) == true) {
// //     yes()
// //   } 
// //   else {
// //     no()
// //   }
// // }
// // function showOk() {
// //   console.log('u agreed');
// // }
// // function showCancel() {
// //   console.log('you canceled');
// // }
// // ask('do oyu agree?', showOk, showCancel);

// // function ask(question, yes, no) {
// //   if(confirm(question) === true) {
// //     yes()
// //   } else {
// //     no()
// //   }
// // };
// // ask('do u agree?',
// // function(){console.log('u just agreed');},
// // function(){console.log('u just canceled');}
// // );

// // let sayHi = function(name) {
// //   console.log(`Hello, ${name}!`);
// // }
// // function sayHi() {
// //   console.log('Hello!');
// // }
// // let func = sayHi;
// // func();
// // sayHi();

// // function ask (question, yes, no) {
// //   if(confirm(question)) yes()
// //   else no()
// // }
// // function agree() {
// //   console.log('u just agreed');
// // }
// // function noAgree() {
// //   console.log('you just canceled');
// // }
// // ask('do u agree', 
// // agree,
// // noAgree);

// // function ask(question, yes, no) {
// //   if(confirm(question)) yes()
// //   else no()
// // }
// // ask('do u agree?',
// // function agree() {console.log('You just agreed');},
// // function noAgree() {console.log('You just canceled');});

// // let age = prompt('How old r u?');

// // if(age<18) {
// //   function welcome() {
// //     console.log('Hey!');
// //   }
// //   // welcome()
// // } else {
// //   function welcome() {
// //     console.log('Good day!');
// //   }
// //   // welcome()
// // }

// // welcome()

// // let age = prompt("Сколько Вам лет?", 18);

// // // в зависимости от условия объявляем функцию
// // if (age < 18) {

// //   function welcome() {
// //     alert("Привет!");
// //   }

// // } else {

// //   function welcome() {
// //     alert("Здравствуйте!");
// //   }

// // }

// // // ...не работает
// // welcome(); // Error: welcome is not defined

// // let age = 16; // присвоим для примера 16

// // if (age < 18) {
// //   welcome();               // \   (выполнится)
// //                            //  |
// //   function welcome() {     //  |
// //     alert("Привет!");      //  |  Function Declaration доступно
// //   }                        //  |  во всём блоке кода, в котором объявлено
// //                            //  |
// //   welcome();               // /   (выполнится)

// // } else {

// //   function welcome() {
// //     alert("Здравствуйте!");
// //   }
// // }

// // // здесь фигурная скобка закрывается,
// // // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// // welcome(); // Ошибка: welcome is not defined

// // let age = prompt("Сколько Вам лет?", 18);

// // // в зависимости от условия объявляем функцию
// // if (age < 18) {

// //   function welcome() {
// //     alert("Привет!");
// //   }

// // } else {

// //   function welcome() {
// //     alert("Здравствуйте!");
// //   }

// // }

// // // ...не работает
// // welcome(); // Error: welcome is not defined

// // let age = 16; // присвоим для примера 16

// // if (age < 18) {
// //   welcome();               // \   (выполнится)
// //                            //  |
// //   function welcome() {     //  |
// //     alert("Привет!");      //  |  Function Declaration доступно
// //   }                        //  |  во всём блоке кода, в котором объявлено
// //                            //  |
// //   welcome();               // /   (выполнится)

// // } else {

// //   function welcome() {
// //     alert("Здравствуйте!");
// //   }
// // }

// // // здесь фигурная скобка закрывается,
// // // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// // welcome(); // Ошибка: welcome is not defined
// // let age = prompt("Сколько Вам лет?", 18);

// // let welcome;

// // if (age < 18) {

// //   welcome = function() {
// //     alert("Привет!");
// //   };

// // } else {

// //   welcome = function() {
// //     alert("Здравствуйте!");
// //   };

// // }

// // welcome(); // теперь всё в порядке

// // let age = prompt('how old r u?');
// // let welcome;

// // if (age<18) {
// //   welcome = function() {
// //     console.log('Hello!');
// //   }
// // } else {
// //   welcome = function() {
// //     console.log('Good day!');
// //   }
// // }
// // welcome();

// // let age = prompt('how old r u?');

// // let welcome;

// // (age<18) ? welcome = function() {console.log('Hey!')} : 
// // welcome = function() {console.log('Good day!');}
// // welcome();
// // 'use strict';


// // let age = prompt('how old r u?');

// // function welcome(string) {
// //   console.log(string);
// // }
// // if (age && +age<18) {
// //   welcome ('Hello!');
// // } else {
// //   welcome('Good day!')
// // }
// // // welcome('Hi there!')
// // 'use strict'
// // let age = prompt("Сколько Вам лет?", 18);

// // // в зависимости от условия объявляем функцию
// // if (age < 18) {

// //   function welcome() {
// //     alert("Привет!");
// //   }

// // } else {

// //   function welcome() {
// //     alert("Здравствуйте!");
// //   }

// // }

// // // ...не работает
// // welcome(); // Error: welcome is not defined

// // let sum = (a, b) => a + b;
// // console.log(sum(1, 2));

// // let multiply = n => n*2;
// // console.log(multiply(4));

// // let sayHi = () => console.log('Hello!');
// // sayHi();

// // let age = prompt('how old r u?');

// // let welcome = (age<18) ? 
// //                       () => console.log('Hello!') :
// //                       () => console.log('Greetings!');
// // welcome();
// // let sum = (a, b) => {
// //   let result = a + b;
// //   return result;
// // }
// // console.log(sum(6, 24));
// // let ask = (question, yes, no) => {
// //   if(confirm(question)) yes();
// //   else no();
// // }
// // ask('do u agree',
// // () => {console.log('U agreed');},
// // () => {console.log('u canceled');}
// // );
// // 'use strict';
// // let userName = prompt('whats your name?');
// // let wantsTea = confirm(`${userName}, do you want some tea?`);
// // let wantsTeaCheck = (yes, no) => {
// //   (wantsTea) ? yes() : no();
// // }
// // wantsTeaCheck(() => console.log('here u are'), 
// // () => console.log('fine')
// // );
// const posts = [
//   {title: 'Post One', body: 'This is post one'},
//   {title: 'Post Two', body: 'This is post two'},
// ];
// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post, index) =>{
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   },1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
// console.log('Start');

// console.log('Start2');

// function timeout2sec() {
//   console.log('timeout2sec');
// }

// window.setTimeout(function() {
//   console.log('Inside timeout, after 2000 sec');
// }, 4000)
// setTimeout(timeout2sec, 2000)

// console.log('End');




// console.log('request data...');

// setTimeout(() => {
//   console.log('preparing data');

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('preparing data')
//     const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//   resolve(backendData)
//   }, 2000)
// })

// p.then(data => {
//   console.log('Promise resolved', data)
// })



// let firstFunction = function() {
//   return new Promise(function(resolve, reject) {
//     resolve('your cat is ');
//   })
// }

// let secondFunction = function(dataFromFirstFunction) {
//   return new Promise(function(resolve, reject){
//     resolve(dataFromFirstFunction + 'crazy')
//   })
// }
// firstFunction().then(function(data) {
//   return secondFunction(data);
// }).then(function(data) {
//   console.log(data);
// })

// let allGood = true;
// let fetchSomeData = new Promise((resolve, reject) => {
//   if (!allGood) {
//     reject('error fetching data!')
//   } else {
//     resolve({
//       id: 1,
//       message: 'nice work!'
//     })
//   }
// })
// fetchSomeData.then(fetchedData => {
//   console.log('then: ', fetchedData);
// }).catch(err => {
//   console.log('catch:', err);
// })