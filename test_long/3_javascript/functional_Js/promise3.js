
const getHen = () => {
  new Promise((resolve, reject) => {
      setTimeout(() => resolve(`:panda_face:`), 1000);
  });
const getEgg = hen => {
  new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(`${hen} => 달걀`), 1000);
      setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
  });
const cook = egg => {
  new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });


  getHen()
  .then(getEgg)
  .then(cook)
  .then(console.log);
