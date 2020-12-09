"use strick";

// Javascript is synchronous.
// 자바스크립트는 호이스팅이 된 이후로 부터 코드는 작성순서에 따라 하나하나씩 동기적으로 실행된다.
// (hoisting : var, function선언등 선언이 제일 상단으로 끌어올려가는 것 / 호이스팅이 된 이후로 부터 코드가 나타난 순서대로 자동대로 실행)

console.log("1");
console.log("2");
console.log("3");

// asynchronous(비동기) : 언제 코드가 실행될지 예측할 수 없다.
console.log("1");
setTimeout(function(){
    console.log('2');
},1000); //1초가 지나면 전달한 함수가 실행 되도록 하는 것
console.log("3");// 응답을 기다리지 않고 바로 콘솔 출력

// setTimeout : 브라우저에서 제공되는 API / 지정한 시간이 지나면 콜백함수를 호출
//  1초 뒤에 2가 출력 됨 => 1 3 2


// 콜백을 파라미터 인자로 받아서 이를 처리하는 함수를 지정

// 동기적 콜백 synchronous callback
function printImmediately(print){
    print(); //callback을 바로 실행 하는 함수 생성 -> 함수 선언문이 제일 위로 호이스팅
}
printImmediately(() => console.log('hello')); // 아무런 인자가 전달되지 않는 화살표 함수로 간단하게 출력 / printImmediately호출


// console.log 출력 순서 : 1 3 hello 2(1초뒤에)

// 함수의 선언은 호이스팅이 되니까, 함수 선언문이 제일 위로 호이스팅이 된다.
-



// 비동기적 콜백 Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout); //전달받은 print와 timeout을 결국에는 setTime한테 요청하는 것
}

function printImmediately

printWithDelay (() => {
    console.log('async callback');
}, 2000)


// 콜백지옥

// - 콜백함수를 계속 묶고 묶어서 생기는 상황
// - 체인이 길어지면 길어질 수록 디버깅하고 분석하는게 어려워 진다.
// 어떻게 비동기 코드를 깔끔하게 할 수 있는지? 더 효율적으로 병렬적으로 네트워크 통신을 할 수 있는지?



// promise  배우기


// 시간이 조금 걸리는 heavy한 일 (네트워크에서 데이터를 받아오거나 큰 파일을 읽는)은 프로미스로 만들어서 비동기적으로 실행하는 것이 효율적이다.
// 1. propducer
const promise = new Promise((resolve, reject) => { // 콜백함수는 resolve와 reject로 나뉘어져있다
    console.log('doing someting');
})