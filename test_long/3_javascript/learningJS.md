---
sort: 1
---

# 러닝자바스크립트


## script의 위치

- **브라우저의 동작 방식**
  - HTML을 읽고 -> Parsing -> DOM tree생성 -> Render트리 (DOM tree + CSS의 cssom 트리 결합) -> display표시

- html에서 js를 포함할때 효율적일수 있도록 도와주는 위치는 ?
  - `<sciprt></sciprt> body 태그 최하단`
    - HTML을 파싱한 다음 DOM 트리를 생성하는데, 브라우저는 HTML 태그들을 읽어나가는 도중 `<script>` 태그를 만나면 파싱을 중단하고 javascript 파일을 로드 후 javascript 코드를 파싱합니다. 완료되면 그 후에 HTML 파싱이 계속 됩니다. 그로 인해 생기는 문제점?
      - html을 파싱 중 script를 만나면 중단 시점이 생기고 그만큼 display 표시 속도는 지연된다.
      - DOM트리 생성전 JS가 생성되지도 않은 DOM의 조작을 시도할 수 있다.
  - `<sciprt></sciprt> 태그 속성으로 로딩 순서 제어하기`
    - 1. async & defer
        - boolean타입의 속성 값이기에 선언만으로도 true로 설정이 된다.
      - script 태그를 body 태그 최하단에 놓기 싫거나, 할 수 없는 상황도 있을 수 있겠죠 그럴 때 활용할 수 있는 다른 방법
      -
      ```
      <script async src="script.js">
      ```
    - 2. defer
    - defer 속성만 있다면 스크립트는 페이지의 파싱이 완료된 후에 실행됩니다.

    ```
      <script defer src="script1.js">
      <script defer src="script3.js">
      <script defer src="script2.js">
      ```
      - 다운로드가 받아진 순서대로 실행되기에 문제야기

- 'use strict';
  - 순수 바닐라 자바 스크립트에서는 js선언 전 해주는 것이 좋다.
  - fiexible === dangerous
  - ECMAScript 5에서 추가 됨
  - 더 상식적이고 모던하게 ㅎ공부할 수 있드

---

## let/const/var

**변수[variable]**
  - rw(read/write) 메모리에 읽고 쓰는것이 가능함 (바뀔 수 있는 값)
  - **let** - mutable data type
  - 같은 이름으로 선언 할 수 없다.
  ```
  let value = 1;
  console.log(value); //특정 이름에 특정 값을 담는 것
  ```
  - ex) let currentTempC = 1; / let currentTempC = 2; x /
  - 각 변수는 한 번만 선언 하지만 값은 계속 바꿀 수 있다  (let은 변수 선언에만 쓰임)
  - ex) currentTempC = 8;
  - 초기값을 지정하지 않을 경우 암시적으로 undefined가 할당된다. 꼭 초깃값 지정이 필요한게 아님
  - ex) let currentTempC; //undefined


** 상수[constant] **
  - r (read only) 바꿀 수 없는 유일한 값
  - **const** - immutable data type
  - 값을 설정하고 나면 바꿀 수 없다. 고정적인 값임.
  - 상수는 대문자와 _ 스네이크바를 따르는게 암묵적 규칙인덧 하다.


  ```
  const ROOM_NUMBER = 1; // 더이상 변경할 수 없는 고정값이 됨.
  ```

**둘 중 어느것을 사용해야 할까?**
  - :exclamation: :grey_exclamation:
  - 우선 상수를 먼저 생각해야 한다.
  - 고정된 값이 이해하기 쉽다.
  - 상수는 안되고 변수를 써야 하는 상황도 있다. -루프제어

**var?**
  - 고전적 변수선언 키워드 / 똑같은 이름으로 여러번 선언 할 수 있음.
  - (val, let은 사용할수 있는 범위가 드름) \ 구형브라우저는 let과 const가 없기에 babel로 변환시킴

**var의 유효범위**
- var를 더이상 사용하면 안되는 이유
  1. 선언도 하기 전에 값을 할당하고, 심지어 출력도 먼저 함  => 호이스팅 현상
     - var hoisting : 어디에 선언했는지 상관 없이 맨 상단으로 선언을 끌어올려지는 것
  2. 블록 스코프를 철저히 무시한다.

---

## 자바스크립트의 값 [데이터 타입]

### 1. 원시값 (primitive)
- 원시 타입이란 흔히 우리가 아는 것들이다.
- 원시 타입에는 어떠한 메소드도 붙어있지 않다. ex) undefined.toString() x
- 언제든지 재할당 할 수 있다. 하지만 실제 변수에 할당되었던 원시타입의 값이 바뀌는 것이 아니고 새로운 원시 타입의 값이 들어가는 개념이다.
- 원시타입은 불변적이다. (Primitive types are immutable)
  #### 1). 숫자
  #### 2). 문자열
  #### 3). 불리언
    - false : 0, null, undefined, NaN, ''
    - ture : any other value
    ```
    const andRead = ture; // ture
    const test = 3 < 1; // flase
    ```

  #### 4). null / undefined
    - 변수만 선언하고 값을 할당하지 않으면 그 변수안에 기본적으로 undefined
    - 각각의 사용되는 목적과 장소를 판단
    - 대입한 적이 없는 변수 / 명시적인 '없음' 을 구분해야 코드가 명확해 진다.
    - [null]
      - 변수를 선언하고 빈 값을 할당한 경우 (-ex: array, object-의 빈 값)
      - 명시적인 부재를 나타내고 싶을 때 - 보통 어떠한 값도 담고 있지 않다는 의미로 사용됨.
      - null은 불리언문맥에서 사용시 false로 변환

    - [undefined]
      - 변수를 선언만 하고 값을 할당하지 않음. (자료형이 결정되지 않은 상태)
      - 존재하지않는 객체 프로퍼티에 접근하려고 하면 undefined 반환
      - '객체 없음'을 나타내는 것 null 반환
      ```
      var a;    //a가 선언은 되었으나 값이 할당된 적이 없음
      document.writeln(a);       //undefined
      ```

    ```
    let currentTemp; => //undefined
    const targetTemp = null; => 아직 모르는 값 //null
    ```

  #### 5). 심볼(symbol)
    - ECMAScript6 부터 새롭게 추가된 원시 값이다. 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값이다.
    - 우연히 다른 식별자와 혼동해서는 안 되는 고유한 식별자가 필요하다면 심볼을 사용한다.
    - 동일한 스트링이 적혀있어도 서로 다른 심볼이다.

    ```
    const RED = Symbol("이것은 심볼입니다");
    const Orange = Symbol("이것은 심볼입니다");
    RED = Orange // false : 서로 다른 심볼입니다.
    ```

  #### 6). dynamic typing : dynamically typed languae
    - JavaScript 는 동적형식(Dynamic Types)을 가진다.
    - 어떤 타입인지 선언하지 않고, 런타임(프로그램이 동작할때) 중 할당된 값에 따라서 타입이 변경될 수 있다.

```javascript
    let text = 'hello';
    console.log(`value : ${text}, type: ${typeof text}`);
    text = 1;
    console.log(`value : ${text}, type: ${typeof text}`);
    text = '7' + 5;
    console.log(`value : ${text}, type: ${typeof text}`);
    text = '8' / '2';
    console.log(`value : ${text}, type: ${typeof text}`);
```

```
value : hello, type: string
value : 1, type: number
value : 75, type: string
value : 4, type: number
```


### 2. 객체 (object)
- 객체는 원시 값과 다르게 여러 가지 형태와 값을 가질 수 있다.
- 객체의 본질은 container
- 내용물은 바뀔 수 있지만, 컨테이너는 바뀌지 않음
  - 1. array
  - 2. Date
  - 3. RegExp
  - 4. Map / WeakMap
  - 5. Set / WeakSet
  - 6. Number / String / Boolean 등


```
"dog" === "dog"; // true
14 === 14; // true

{} === {}; // false
[] === []; // false
(function () {}) === (function () {}); // false
```
- 원시타입은 값 그자체로 저장되어 있기에 동일한지 체크시 문장이 정확히 무슨 의미인지 알 수 있다.
- 배열과 객체는 내용은 같지만 서로 다른 곳을 참조하기 때문에 false를 리턴한다.

```tip
원시 타입은 값(value)로 저장되고, 객체들은 참조(reference)로 저장된다.
```


### function
- first-class function
  - 다른 데이터 타입처럼 변수에 할당이 가능
  - 함수의 파라미터로 쓰이고
  - 리턴 타입으로 쓰일 수 있다.

#### Function expression [함수 표현식]
  ```
  const print = function(){ //anonymous function
    console.log(`print`);
  }
  ```
  - 함수를 선언함과 동시에 print라는 변수에 function을 할당해줬다. (함수의 참조 값이 변수로 저장되는것)
  - function의 이름이 없고, function 키워트를 통해서 파라미터와 블럭을 이용함
  - 할당된 다음부터 호출이 가능하다

#### Function declaration [함수 선언식]
  - 함수 선언 방식은 함수 리터럴 형식과 같다.
  - 함수 선언문은 반드시 함수 이름이 명시되어 있어야 한다.
  - 함수 이름으로 함수를 호출한다. ex) greet();


#### 함수표현식과 선언식의 차이점 : 호이스팅

```
sayHi();
sayHello();

const hi = 'hi';
function sayHi(){
  console.log('hi maybooy');
}
var sayHello = function(){
  console.log('hellow maybooy');
}
```
- 선언식은 호이스팅이 가능하다.
- 함수 표현식은 호출 되지 않고, 함수 선언으로 된 함수 선언은 호이스팅이 된다.
- 함수가 정의되기 전에 호출할 수 있다.
- 함수가 선언되기 이전에 호출할 수 있다.

```note
hoisting의 개념 : js엔진이 script을 쭉 읽으면서 선언된 변수와 함수를 메모리에 저장한다.
(sayHi 함수(전체), sayHello 변수가 메모리에 저장)
-> sayHi()는 메모리에 저장되어 있기 때문에 문제없이 실행되지만 sayHello는 아직 값이 할당되기 전이기 때문에 에러발생.
```
- 이러한 함수 호이스팅은 코드 구조를 망칠 수 있을 위험이 있기에 함수 표현식을 권장한다고 한다.


#### 예쁜 함수 표현식

[함수 이름이 있는 함수 표현식을 권장]
```
function greet(name){
  console.log('hello' + name);
}
greet('john');
```
- function greet(name){..} 에서 name은 parameter(함수를 선언할 때 사용)
- greet('John')에서 'John'은 argument (실제 들어가는 값)
- 함수 표현식에서는 세미콜론 사용, 선언에서는 ; 사용하지 않는다.


---

## 식별자와 리터럴

- **식별자 (identifier)**
  - 변수와 상수, 함수 이름을 식별자(identifier)라고 부른다.
  - 식별자의 규칙
    - 반드시 글자나 달러 기호($), 밑줄(_)로 시작
    - 글자, 숫자, 달러기호, 밑줄만 쓸 수 있음
    - 예약어는 사용 불가
    - 카멜케이스, 스네이크 케이스 표기법이 가장 많이 쓰임
    - 대문자로 시작 할 수 없음
  - 표기법은 일관성을 지켜서 써야한다.


- **리터럴 (literal)**
  - 리터럴은 값을 직접 지정한다는 의미임.
  - 22.5는 숫자형 리터럴
  - "confernece_room_a"; 문자형 리터럴
  - js는 따옴표를 통해 literal과 identifier를 구별한다.
      ```
      ex)
      let currentTempC = 22.5;
      let room1 = "confernece_room_a";
      ```

---

## 연산자 [Operator]
- 1. Increment and decrement oprator
```

let counter = 2;
const preIncrement = ++counter;
    //preIncrement = counter +  1;
    //preIncrement = counter;

console.log(`postIncrement : ${preIncrement} ,counter: ${counter}`)
//postIncrement : 3 , counter: 3
```

```
const postIncrement = counter++;
    //postIncrement = counter;
    //counter = counter + 1;

console.log(`postIncrement : ${postIncrement} , counter: ${counter}`)
//postIncrement : 3 , counter: 4
```

- 2. Assignment operators
let x = 3;
let y = 6;
x += y; //9
x -= y; //-3
x *= y; //18
x /= y; //5


- 3. Comparison operator
  -







---

## function
  - 프로시저랭귀지(절차적 언어)는 함수가 프로그래밍에서 굉장히 중요하다.
  - prototype
  - sub-program : 프로그램 안에서 각각의 기능 수행
  - input(파라미터)를 받아서 output(return) 해준다.
  - api를 쓸때 함수의 이름을 보며 판단한다.


```
function name(parameter, parameter){
    body... return;
}
```

1. **하나의 함수는 한가지의 일만 하도록 만든다.**
   - 동작하지 않는다면, 함수안에서 많은 일을 시킨것
2. 변수이름을 정할때는 '무엇인가를 동작하는것' doSomething, command, verb
3. 자바스크립트에서 function은 object이다.
   - 변수에 할당, 함수를 리턴, 파라미터로 전달 등을 할 수 있다.

### [parameters]
   1). premitive(원시타입) : value가 메모리에 그대로 저장되어 있음
     - Boolean, Null, Undefined, Number, String, Symbol
     - 데이터의 **실제 값** 할당 - 복사됨
       - 변수에 할당이 될 때 메모리 상에 고정된 크기로 저장이 되고 해당 변수가 원시 데이터 값을 보관한다.
   2). object(참조타입) : 메모리에 reference가 전달됨
     - 함수안에서 object의 값을 변경하면 그대로 전달됨
     - 데이터의 **위치 값** 만 할당
     - Array, Function, Object

   3). primitive type vs object type
    ```
    const list1 = [1, 2, 3]
    const list2 = [1, 2, 3]

    const IsSame = list1 === list2;
    console.log(IsSame); //false

    ```
    - 새로운 메모리 위치를 만들어 저장하고 그 위치를 참조하여 변수에 해당 위치값을 저장하는 것과 같다.
    - 안의 요소는 같지만 배열을 새롭게 만들어 각각의 변수에 담고 있기에 결과는 false다.

    ```
    const list3 = [1, 2, 3]
    const list4 = list3;

    const IsSame = list3 === list4;
    console.log(IsSame); //true
    ```
    - list3의 위치값을 그대로 list4에 참조했기에 위치값은 같은 경우이다. 따라서 결과는 ture

    ```
    function changeName(obj){
      obj.name = 'coder';
    }

    const ellie = { name : 'ellie'}; //ellie라는 object 생성
    changeName(ellie);
    console.log(eliie); //name : coder
    ```
    - object는 reference로 전달되기 떄문에 함수안에서 object의 값을 변경하게 되면 변경된 사항이 그대로 메모리에 저장이 된다.


#### 매개변수(parameter)와 인수(argument)
- 함수에 정보를 전달하기 위해서 ?
  - 함수를 호출하면서 정보를 전달할 때는 매개변수와 인수를 이용한다.
  - 매개변수는 함수가 호출되기 전에는 존재하지 않음
  - 함수에 선언된 매개변수는 정해진 매개변수(fomual argument)라고 한다.
  - 함수가 호출되면 정해진 매개변수는 값을 받아서 실제 매개변수(actual argument)가 된다.


```
def plus(a,b):
  return a+b

  - argument(전달인자,인자)
  res_argument = plus(1,2) // 변수가 아닌 1과 2를 넣어 함수를 호출한다. 이때 넣어주는 값을 전달인자라 한다.

  a = 1
  b = 2
  - parameter(매개변수- 파라미터)
  res_parameter = plus(a,b)// 변수인 a, b를 넣어 함수를 호출한다. 이때 넣어주는 것을 매개변수라 한다.
```


```
function avg(a, b){
  return a + b
};
```
- avg(a, b)에서 a, b는 정해진 매개변수

```
avg(5, 10)
```
- 각각 5, 10이라는 인자값을 받아서 실제 매개변수가 된다.
- 실제 매개변수는 변수와 매우 비슷하지만, **함수 바디에서만 존재**

```
const a = 5, b = 10; //
avg(a, b);
```


```js
function f(x){
  console.log(`1번 : f의 내부 x = ${x}`);
  x = 5;

  console.log(`2번 : f의 내부 x = ${x}`);
}
let x = 3;
console.log(`3번 : f를 호출하기 전 x = ${x}`);
f(x);
console.log(`4번 : f를 호출한 다음 x = ${x}`);
```

```
3번 : f를 호출하기 전 x = 3
1번 : f의 내부 x = 3
2번 : f의 내부 x = 5
4번 : f를 호출한 다음 x = 3
```

- [중요한점]
  - x에 값을 할당하더라도 함수 바깥의 변수 x에는 아무 영향도 없다는 점
  - 이름은 같지만, 둘은 다른 개체이다.
  - 함수안의 매개변수의 값을 바꿔도 바깥의 변수에는 아무런 영향이 없다.


```js
function f(o){ //o라는 인자
    console.log(`f안에서 수정함 (이전 값 : '${o.message}')`);
}
let o = { //인자값으로 변수 o를 받아옴
    message :"초기값"
}


console.log(`f를 호출 하기 전 :o.message : '${o.message}'`);
f(o)
console.log(`f를 호출한 다음 :o.message : '${o.message}' `);
```

```
f를 호출 하기 전 :o.message : '초기값'
f안에서 수정함 (이전 값 : '초기값')
f를 호출한 다음 :o.message : '초기값'

```

- f안에서 객체 o를 수정했고, 이렇게 바꾼 내용은 함수 바깥에서도 o에 그대로 반영 됨
- [원시값과 객체의 핵심적인 차이]
  - 원시 값은 불변이기에 수정할 수 없다
  - 원시 값을 담은 변수는 수정 할 수 있지만 (다른 값으로 바꿀 수 있지만)
  - 객체는 바뀔 수 있다.


#### 파라미터 값이 없으면 unknown 지정

```
function showMessage (message, from ='unknown'){//parameter값이 없을 경우의 대체되어 사용되어짐
    console.log(`${massage} by ${from}`);
}
showMessage(hi!, dabin);
```

**매개변수 기본값**
- 매개변수에 기본값을 지정하는 기능
- 일반적으로 매개변수 값을 제공하지 않으면 undefined가 값으로 할당된다.

```
function f(a, b = "default", c = 3){
    return `${a} - ${b} - ${c}`
}

f(5, 6, 7); //5 - 6 - 7
f(5, 6); //5 - 6 - 3
f(5); //5 - defalut - 3
f(); // undefined - default - 3
```


#### Rest parameters (확산 연산자)
  - Rest 파라미터에는 먼저 선언된 parameter에 할당된 argument를 제외한 나머지 argument들이 모두 배열에 담겨 할당된다.
  - 따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

```
function printAll(...args){
    for(let i = 0; i < args.lenght; i++){
        console.log(args[i]);
    }
}

printAll('dream', 'coding', 'ellie'); //printAll 함수 전달시 인자가 총 3개
```
- 함수는 object의 일종이기에 printAll.method가 가능하다.
- 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
- 블럭안에서 변수 선언 : 지역변수 (밖에서 출력하면 에러가 발생함)
- 함수 안에 다른 함수도 지역변수를 갖고 있음


#### 매개변수가 함수를 결정?
- 어떤 함수를 호출하든 그 함수에서 정해진 매개변수 숫자와 관계없이 몇 개의 매개변수를 전달해도 된다.
- 정해진 매개변수에 값을 제공하지 않으면 암시적으로 undefined가 할당

#### 매개변수 해체
- 해체할당과 마찬가지로 매개변수도 해체가 가능하다.


```
function getSentenceObj({subject, verb, object}){
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "i",
    verb: "am",
    object: "hero",
};


function getSentenceArr([subject, verb, object]){
    return `${subject} ${verb} ${object}`;
}

const arr = ["i", "am", "so happy"]


getSentenceObj(o); //i am hero
getSentenceArr(arr); //i am so happy

```

---


1. early return / early exit
  - 조건이 맞지 않을때는 return으로 함수를 빨리 종료하고,
  - 조건이 맞을 때만 필요한 로직을 실행한다.



- 프로그래밍 언어에서 우리가 필요한 데이터를 담는 것이 변수
- 반복적으로 이루어지는 로직들을 함수로 만들면 재사용이 가능해지기 때문!
- function 키워드를 사용한다.
- function add(a, b) 여기서 (a, b)는 인자라고 하고 이 위치는 몇가지의 인자들을 받는지 정의하는 것
- 인자는 외부에서 값을 받아온다.




