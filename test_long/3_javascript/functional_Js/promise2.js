
// promise  배우기
// 비 동기적으로 실행하고 싶은 코드를 promise에 작성 후 성공과 실패로 만든다.

// 시간이 조금 걸리는 heavy한 일 (네트워크에서 데이터를 받아오거나 큰 파일을 읽는)은 프로미스로 만들어서 `비동기적으로 실행하는 것이 효율적`이다.
// 1. propducer
// - 새로운 프로미스가 만들어 질 때는, 우리가 전달한 함수가 바로 자동적으로 실행이 된다.
const promise = new Promise((resolve, reject) => { // 콜백함수는 resolve와 reject로 나뉘어져있다
    console.log('doing someting Execution(실행)');

    // promise안에서 네트워크 통신을 하는것처럼 setTimeout을 통해서 time을 딜레이 해보기
    setTimeout(() => {
        resolve('ellie') //성공적 기능 수행의 대답
        //reject(new Error('no network'));
    },2000);
})


// consumer / 에러 핸들링 사용하기
promise
.then((value) => { //then을 이용해서 성공적인 케이스를 다루기.
    console.log(value);
})
.catch(error => { //error가 발생시 catch를 이용해 콜백함수 전달.
    console.log(error);
})
.finally(()=> {
    console.log('finally');
});

// 더이상 에러를 받아오지 않은 상태로 진행이 가능하다.
// finally : 성공, 실패 상관없이 마지막에 무조건 호출된다.


// 3. promise chaining : (api를 묶어서 사용된) then호출 -> promise리턴 -> 리턴된 promise의 catch를 등록
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000); //1초뒤에 숫자 1을 전달함
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));
//  then은 값을 바로 전달할수도, promise를 전달해도 된다.


// 4. promise체이닝 후 에러 핸들링 해보기
//  총 3가지의 promise를 리턴하는 함수
const getHen = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`:panda_face:`), 1000);
    });
const getEgg = hen => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    });
const cook = egg => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });


getHen()//닭을 받아옴
.then(getEgg (hen)) //전달받은 닭을 이용해서 달걀을 만듬
.then(cook (egg)) //받아온 달걀로 요리를
.then(console.log)
.catch(console.log)