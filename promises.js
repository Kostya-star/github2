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

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = true;
//       if(!error) {
//         resolve();
//       } else {
//         reject('Error: smth went wrong');
//       }
//     }, 2000);
//   });
// }

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// let fetchData = function(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('fetching data complete');
//       resolve({
//         id: 1,
//         message: 'nice work!'
//       });
//     }, 2000);
//   });
// };



// let promise = new Promise(function(resolve, reject) {

//   setTimeout(() => resolve('done'), 2000);
// });
// console.log(promise);
// let promise = new Promise(function(resolve, reject) {

//   setTimeout(() => reject(new Error('Whoops!')), 1000);
// });
// console.log(promise);
// function delay(ms) {  
//   return new Promise(function (resolve) {
//   setTimeout( () => resolve('Done'), 1000);
// });
// }
// delay(3000).then(() => console.log('done in 3 sec'));

// fetch('http://getpost.itgid.info/index2.php')
// .then(data => {
//   console.log(data);
//   data.text().then(data2 =>{
//     console.log(data2);
//   })
// })
let a = 7;

console.log(a);

let b = new Promise(function(resolve,reject){
  setTimeout(() => {
    resolve(a=99);
  }, 2000) 
});
b.then(function() {
  console.log(a);
})