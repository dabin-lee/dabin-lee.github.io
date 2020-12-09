
// 1. propducer와 consumer의 차이점을 알아두기


// 콜백지옥

// - 콜백함수를 계속 묶고 묶어서 생기는 상황
// - 체인이 길어지면 길어질 수록 디버깅하고 분석하는게 어려워 진다.
// 어떻게 비동기 코드를 깔끔하게 할 수 있는지? 더 효율적으로 병렬적으로 네트워크 통신을 할 수 있는지?



// promise  배우기


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

// 출력결과
// doing someting Execution(실행)

// promise를 만드는 순간 내가 전달 한 executor라는 callback함수가 바로 실행이 된다.
// 네트워크통신을 하는 코드를 작성했다면 바로 실행이 된다.
// point) 사용자가 요구하는 순간만 해야한다면 불필요한 네트워크 통신이 일어난다.

// 새로운 프로미스가 만들어 질 때는 엑시큐터가 바로 자동으로 실행이 된다. 주의점은 예) 버튼 클릭 후 기능 수행 중 불필요한 네트워크 통신이 있으면 안됨.




// 2. promise 사용하기 - consumer만들기 (then, catch, finally)를 이용해서 값을 받아 올 수 있다.
promise.then((value) => { //promise가 잘 수행된다면(then), 우리가 원하는 기능의 콜백함수를 받아온다.
    // value라는 파라미터 : promise가 잘 수행되어서 마지막 resolve로 전달된 값이 들어온다.
    console.log(value);
})

// 출력결과
// doing someting Execution(실행)
// ellie


// reject호출
// Error(javascript에서 제공하는 object중 하나)를 통해서 전달한다.
// 어떤 이유에서 에러가 발생한지 잘 작성해야 한다.
setTimeout(() => {
    //resolve('ellie') //성공적 기능 수행의 대답
    reject(new Error('no network'));
},2000);
//출력결과 : Uncaugth Error: no network


