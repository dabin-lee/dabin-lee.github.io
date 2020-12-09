---
sort: 1
---

# 비동기적 프로그래밍
[!async](../../../assets/img/asynchronous.jpg)
- 비동기의 핵심 : 객체에 일을 시키고, 끝나기를 기다리는 것이 아니라 실행되는 동안 나는 다른 내 할일을 하고 있는 것!
- asynchronous = non-block;


## 1. 콜백
- 자바스크립트 함수 표현식에서 익명 함수의 대표적인 용도로 쓰인다. (항상은 아님)
- 명시적으로 호출하는 함수가 아닌, 개발자는 단지 함수를 등록하기만 하고 이벤트발생 또는 `특정시점 도달했을 때 시스템에서 호출되는 함수`를 말한다.
- 특정 함수의 인자로 넘겨서 코드 내부에서 호출되는 함수 또한 콜백 함수가 될 수 있다.
- 대표적 콜백 API
  - setTimeout(fn, delay) : 콜백의 실행을 지정된 밀리초만큼 지연하는 내장함수 / 콜백 함수를 한번만 실행하고 멈춘다.
  - setInterval(fn, delay) : 콜백을 일정 시간마다 호출한다. / ClearInterval을 사용 할 때까지 멈추지 않는다.
    - clearInterval : setInterval로 반복하고 있는 것을 맘추게 한다.
```javascript
const start = new Date();
let i = 0;
const intervalId = setInterval(function(){
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i> 10)
    return ClearInterval(intervalId);
    console.log(`$(i): ${now}`);
}, 5*1000); //$(i): Fri Oct 30 2020 11:22:07 GMT+0900 (대한민국 표준시) ...
```



- 1) **데이터 타입의 일종이기에 값처럼 주고 받을 수 있다.**
```javascript
function func() {
  console.log("func 호출 됨");
}
const f1 = func;
const f2 = f1;
func(); //fnc 호출 됨
f1(); //fnc 호출 됨
f2(); //fnc 호출 됨
```

- 2) **함수는 매개변수로 함수를 받을 수 있다.**
  - myCall() 함수 실행문을 매개변수로 전달 할 수 없다.
```javascript
function func(callback) {
  console.log(typeof callback);
  callback();
}
function myCall() {
  console.log("매개변수로 사용되겠네요");
}

func(myCall); //매개변수로 사용되겠네요
```

- 또 함수는 익명 함수를 전달 받을수 있다.
```javascript
function func(callback) {
  console.log(typeof callback);
  // 넘어온 함수 실행하기
  callback();
}
const afunc = function () {
  console.log("매개변수로 사용되겠네요");
}

func(afunc); //매개변수로 사용되겠네요
```
- 3) **함수는 함수의 결과로 함수를 리턴할 수 있다.**
  - func() 는 cb 함수 그 자체이고 func()() 는 cb() 인 것
```javascript
function func () {
    function cb() {
        console.log("리턴된 함수 실행");
    }
    return cb;
}
func(); // 값 : func함수 안에 있는 cb함수
func()(); // 출력 : 리턴된 함수 실행

const myCb = func(); // myCb 변수에 func() 값인 cb함수를 전달한다.
console.log(typeof (myCb)); // 출력 : function
myCb(); // 출력 : 리턴된 함수 실행
```

- 4) **retrun문에 직접 익명함수 정의 후 반환.**
  - func() 는 cb 함수 그 자체이고 func()() 는 cb() 인 것
```javascript
function func () {
    return function(){
        console.log('리턴된 함수 실행');
    }
}
func();

const myfunc1 = func();
myfunc1(); //리턴된 함수 실행
```



## 2. 프라미스
- 프라미스의 기본 개념 : 프라미스 기반 비동기적 함수를 호출하면 그 함수는 promise 인스턴스를 반환한다.
- 프라미스는 성공하거나 실패하거나 두가지 이다.
- 자바스크립트 안에 내장되어 있는 object이다.
  - (오브젝트이기 때문에 NEW를 통해서 새로운 객체를 생성할 수 있다.)
- 비동기적인것을 콜백함수 대신 유용하게 쓰인다.

- promise state : 프로세스 기능 수행의 실패와 성공을 알 수 있다. operation 수행
- state pending => fulfilled || rejected / 프로세스가 기능 수행의 실패와 성공
  - propducer : 원하는 기능을 수행 후 해당 데이터를 만듬
  - consumer : 원하는 데이터를 소비
- 장시간으로 기능을 수행 후 정상적으로 기능이 수행이 되었다면, 성공의 메세지와 처리된 결과값을 전달해준다.
- 예상치 못한 문제에는 error를 전달해준다.


<!-- 프라미스 만들기 -->
  - resolve : 기능 정상 수행 콜백함수 전달
  - reject : 기능 수행 중 문제발생 상황 전달

PROMISE는 CLASS이기 때문에 NEW라는 키워드로 생성한다.



## 3. async&await
- 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와 준다.
  - 동기적으로 실행되는 것처럼 보이게 만든다.
  - promise - then -promise -then 체이닝방법을 간편하게 만들어 준다.
  - promise위에 조금 더 간편한 api제공 => Syntactic sugar//`더 달콤하게`
    - ex) class 처럼
- 읽고 이해한 방식대로 코드를 구성하는 것이 async, await 문법의 목적입
  - 서버에서 사용자 정보를 가져오는 HTTP 통신 코드 : async & await 문법이 적용된 형태

[async & await 기본 문법]
```note
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```
▼
```javascript
fundtion delay(ms){
  return new Promise (resolve => setTimeout(resolve, ms));
}
async function getApple(){
  await delay(3000);
  return 'apple';
}
```



## 비동기 방식 (Asynchronous)
[출처](https://jieun0113.tistory.com/73)


- 요청을 보낸 후 응답(=결과)와는 상관없이 다음방식이 동작하는 방식이다.
- 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할 수 있으므로 자원을 효율적으로 사용할 수 있다.
-  비동기식 처리를 요청할 때 할일 이 끝난 후 처리결과를 알려주는 콜백이라는 함수를 함께 알려준다.

```
비동기식 처리를 요청하였을 때 호출받은 함수는 바로 응답(=확인)을 수행한다.
이 응답은 처리 결과에 대한 응답이 아니라 요청에 대한 확인 동작일 뿐이다.
호출받은 함수는 처리가 끝나면 요청한 함수를 호출하여 처리 결과를 전달하게 된다.
이러한 함수 호출의 흐름은 사용자가 아닌 일을 마친 시스템이 호출하는 형태이기 때문에 콜백이라고 불린다.
이미 응답을 했기 때문에 처리결과를 함수 호출이라는 형태로 전달하는 것이다.
비동기 방식은 DOS같은 단일 운영체제에서는 불가능하며 windows 같은 multitask 환경에서만 가능하다.
(ajax에서는 success, error, complete 을 콜백함수라고 할 수 있다.)
```

[Ajax]
- 기존에는 Ajax는 Asynchronous Javascript and XML의 약자로 사용되었으나 이후에는 웹 어플리케이션 개발에 사용되는 기술 그룹을 말한다.

비동기 방식인 Ajax의 주목적으로는 화면 전환 없이 클라이언트와 서버간의 정보를 교환하기 위해서이다.

기존 웹 어플리케이션에서는 HTTP 요청이 웹 서버로 전달되며, 웹 서버는 요청을 처리한 후 사용자에게 HTML 페이지를 리턴한다.

이 과정에서 HTTP 전송 중에는 사용자는 웹 어플리케이션과 상호 작용을 할 수 없다.

하지만 Ajax 통신을 이용하면 클라이언트와 화면을 랜더링하고 사용자와 서버간의 HTTP 전송과는 별도로 웹어플리케이션과 상호 작용을 할 수 있다.


즉각적 동기 실행 ->동기
언제 실행될지 모르는 ->비동기