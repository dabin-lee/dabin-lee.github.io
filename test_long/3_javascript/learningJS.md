---
sort: 1
---

# 러닝자바스크립트


## 1. script의 위치

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

  - 3. 'use strict';
    - 순수 바닐라 자바 스크립트에서는 js선언 전 해주는 것이 좋다.
    - fiexible === dangerous
    - ECMAScript 5에서 추가 됨
    - 더 상식적이고 모던하게 공부할 수 있다.

---

## 2. let/const/var

`**변수[let]**`
  - rw(read/write) 메모리에 읽고 쓰는것이 가능함 (바뀔 수 있는 값)
  - let : mutable data type
  - 같은 이름으로 선언 할 수 없다.
  ```
  let value = 1;
  console.log(value); //특정 이름에 특정 값을 담는 것
  ```
  - ex) let currentTempC = 1; / let currentTempC = 2; x
    - 각 변수는 한 번만 선언 하지만 값은 계속 바꿀 수 있다  (let은 변수 선언에만 쓰임)
  - ex) currentTempC = 8;
    - 초기값을 지정하지 않을 경우 암시적으로 undefined가 할당된다. 꼭 초깃값 지정이 필요한게 아님
  - ex) let currentTempC; //undefined


`**상수[constant]**`
  - r (read only) 바꿀 수 없는 유일한 값
  - const : immutable data type
  - 값을 설정하고 나면 바꿀 수 없다. 고정적인 값임.
  - 상수는 대문자와 _ 스네이크바를 따르는게 암묵적 규칙인덧 하다.


  ```
  const ROOM_NUMBER = 1; // 더이상 변경할 수 없는 고정값이 됨.
  ```

`**둘 중 어느것을 사용해야 할까?**`
  - 우선 상수를 먼저 생각해야 한다.
  - 고정된 값이 이해하기 쉽다.
  - 상수는 안되고 변수를 써야 하는 상황도 있다. -루프제어

`**var?**`
  - 고전적 변수선언 키워드 / 똑같은 이름으로 여러번 선언 할 수 있음.
  - (val, let은 사용할수 있는 범위가 드름) \ 구형브라우저는 let과 const가 없기에 babel로 변환시킴

`**var의 유효범위**`
  - var를 더이상 사용하면 안되는 이유
    - 1. 선언도 하기 전에 값을 할당하고, 심지어 출력도 먼저 함  => 호이스팅 현상
    - 2. 블록 스코프를 철저히 무시한다.

---

## 3. 자바스크립트의 값 [데이터 타입]

### 1. 원시값 (primitive)
- 원시 타입이란 흔히 우리가 아는 것들이다.
- 원시 타입에는 어떠한 메소드도 붙어있지 않다. ex) undefined.toString() x
- 언제든지 재할당 할 수 있다. 하지만 실제 변수에 할당되었던 원시타입의 값이 바뀌는 것이 아니고 새로운 원시 타입의 값이 들어가는 개념이다.
- 원시타입은 불변적이다. (Primitive types are immutable)


#### 1) 숫자
#### 2) 문자열
#### 3) 불리언
- false : 0, null, undefined, NaN, ' (빈값) '
- ture : any other value
```
const andRead = ture; // ture
const test = 3 < 1; // flase
```

#### 4) null / undefined
- 변수만 선언하고 값을 할당하지 않으면 그 변수안에 기본적으로 undefined
- 각각의 사용되는 목적과 장소를 판단
- 대입한 적이 없는 변수 / 명시적인 '없음' 을 구분해야 코드가 명확해 진다.
- `[null]`
  - 변수를 선언하고 빈 값을 할당한 경우 (-ex: array, object-의 빈 값)
  - 명시적인 부재를 나타내고 싶을 때 - 보통 어떠한 값도 담고 있지 않다는 의미로 사용됨.
  - null은 불리언문맥에서 사용시 false로 변환

- `[undefined]`
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

#### 5) 심볼(symbol)
  - ECMAScript6 부터 새롭게 추가된 원시 값이다. 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값이다.
  - 우연히 다른 식별자와 혼동해서는 안 되는 고유한 식별자가 필요하다면 심볼을 사용한다.
  - 동일한 스트링이 적혀있어도 서로 다른 심볼이다.

  ```
  const RED = Symbol("이것은 심볼입니다");
  const Orange = Symbol("이것은 심볼입니다");
  RED = Orange // false : 서로 다른 심볼입니다.
  ```

#### 6) dynamic typing
  - dynamically typed languae
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

value : hello, type: string
value : 1, type: number
value : 75, type: string
value : 4, type: number
```


### 2. 객체 (object)
- 객체는 원시 값과 다르게 여러 가지 형태와 값을 가질 수 있다.
- 객체의 본질은 container
- 내용물은 바뀔 수 있지만, 컨테이너는 바뀌지 않음
- 1) array
- 2) Date
- 3) RegExp
- 4) Map / WeakMap
- 5) Set / WeakSet
- 6) Number / String / Boolean 등


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


### 3. function
- first-class function
  -  **다른 데이터 타입처럼 변수에 할당이 가능**
  - 함수의 파라미터로 쓰이고
  - 리턴 타입으로 쓰일 수 있다.

#### 1) Function expression [함수 표현식]
```
const print = function(){ //anonymous function
  console.log(`print`);
}
```
  - 함수를 선언함과 동시에 print라는 변수에 function을 할당해줬다. (함수의 참조 값이 변수로 저장되는것)
  - function의 이름이 없고, function 키워트를 통해서 파라미터와 블럭을 이용함
  - 할당된 다음부터 호출이 가능하다

#### 2) Function declaration [함수 선언식]
  - 함수 선언 방식은 함수 리터럴 형식과 같다.
  - 함수 선언문은 반드시 함수 이름이 명시되어 있어야 한다.
  - 함수 이름으로 함수를 호출한다. ex) greet();


#### 3) 함수표현식과 선언식의 차이점 : 호이스팅

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



#### 4) 예쁜 함수 표현식

[함수 이름이 있는 **함수 표현식**을 권장]
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


#### 5) 식별자와 리터럴

`**식별자 (identifier)**`
  - 변수와 상수, 함수 이름을 식별자(identifier)라고 부른다.
  - 식별자의 규칙
    - 반드시 글자나 달러 기호($), 밑줄(_)로 시작
    - 글자, 숫자, 달러기호, 밑줄만 쓸 수 있음
    - 예약어는 사용 불가
    - 카멜케이스, 스네이크 케이스 표기법이 가장 많이 쓰임
    - 대문자로 시작 할 수 없음
  - 표기법은 일관성을 지켜서 써야한다.


`**리터럴 (literal)**`
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

## 4. 표현식과 연산자

### 1. 표현식
```note
표현식과 연산자

표현식은 값으로 평가될 수 있는 문입니다.
결과가 값인 문과, 표현식이 아닌 문의 차이를 이해하는 것이 매우 중요합니다.
이 차이를 이해해야만 자바스크립트 요소들을 효과적으로 조합 할 수 있습니다.

표현식이 아닌 문(statement)은 일종의 지시라고 생각 할 수 있고,
표현식은 무언가를 요청하는 것이라고 생각할 수 있습니다.

표현식은 값이 됩니다.
그 결과를 결합해 다른 값을 얻을 수 있고 또 다른 표현식에 결합해서 계속 값을 얻는 식으로 이어질 수 있습니다.
표현식이 아닌 문은 이런 식으로 결합 할 수 없습니다.

표현식은 값이 되므로 할당에 쓸 수 있습니다.
상수나 프로퍼티에 할당이 가능 합니다.
```


```javascript
let x;
x = 3 * 5;
```

3 * 5라는 곱셈 표현식
값 15를 변수 x에 할당한 표현식


```javascript
let x, y;
y = x = 3 * 5;
```

```javascript
let x, y;
y = x = 3 * 5;
```


### 2. 연산자 [Operator]

- 연산자는 하나 이상의 피연산자가 있어야 결과를 낼 수 있다.
- 1 + 2 라는 표현식에서 1, 2가 피연산자 혹은 매개변수라 부르고 +는 연산자 이다.

#### 1. 연산자 우선순위
**비교연산이 먼저 실행되고 => 논리연산자가 실행된다**

```Note
1. ()
2. 단항 연산자 ( --, ++, ! )
3. 산술 연산자 ( *, /, %, +, - )
4. 비교 연산자 ( >, >=, <, <=, ==, ===, !==, != )
5. 논리 연산자 ( &&, || )
6. 대입(복합 대입) 연산자 ( =, +=, -=, *=, /=, %= )
```


```
 8 / 2 + 3 * ( 4 * 2 - 1 ) = 25
```
- 괄호가 제일 먼저 계산되고, 그다음 곱셈 나눗셈, 마지막으로 덧셈 뺄샘으로 계산된다.
- 산수에서만 쓰이는 것은 아니고 자바스크립트는 표현식을 평가할 때도 비슷하게 규칙을 적용한다.

```
let x = 3, y;
x += y = 6*5/2;

// x = 18
// y = 15
```


```tip
[연산자 표현식이 아닌 그 외 표현식의 종류]
식별자 표현식 (변수와 상수 이름)
리터럴 표현식 (그 자체를 말함)
값이 되는 것은 모두 표현식이므로, 상수와 변수, 리터럴 모두 표현식인 것은 당연
```


#### 2. 산술 연산자 ( *, /, %, +, -, --, ++, ! )
[산술연산자]
```
  + 덧셈
  - 뺄셈
  / 나눗셈
  * 곱셈
  % 나머지
  - 단항 부정
```
[단항연산자]
```
  + 단항 플러스
  ++ 전위 증가
  ++ 후위 증가
  -- 전위 감소
  -- 후위 감소
```

```javascript
let a = 1;
console.log(a++); //1
console.log(++a); //3


let a = 1;
a--;
console.log(a--); //0
```
  - console.log(a++); 를 할 때에는 1을 더하기 직전 값을 보여준다
  - console.log(++a); 를 할 때에는 1을 더한 다음의 값을 보여준다는 차이가 있습니다.


- `-` 단항 부정 : -x // x의 부호를 바꾼다. x가 5이면 -x는 -5
- `+` 단항 플러스 : +x // x가 숫자가 아니면 숫자로 변환을 시도한다.
- `++` 전위 증가 : ++x // x에 1을 더한 다음 평가한다.
- 후위 증가 `++` : x++ // x를 평가 한 다음 1을 더 한다.
- `--` 전위 감소 : --x // x에서 1을 뺀 다음 평가한다.
- 후위 감소 `--` : x-- // x 값을 평가 후 1을 뺀다.
- **증가와 감소 연산자는 덧셈보다 먼저 실행 된다.**

```javascript
const x = 5;
const y = 3 - -x; //8

const s = 5;
const y = 3 + +s; //8
```

1) Increment and decrement oprator [가감 연산자]

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



#### 3. 비교 연산자 ( >, >=, <, <=, ==, ===, !==, != )
[비교연산자]
```javascript
const n = 5;
const s = '5';

n === s // false
n !== s // true
n === Number(5) //true

n == s //true 권장하지 않음
n != s //false 권장하지 않음
```

[관계연산자]
```javascript
3 > 5 //false
3 >= 5 //false
3 < 5 //true
3 <= 5 //true

5 > 5 //false
5 >= 5 //true
5 < 5 //false
5 <= 5 //true
```

[할당연산자]
```
let x = 3;
let y = 6;
x += y; //9
x -= y; //-3
x *= y; //18
x /= y; //5
```

[숫자비교]
```
NaN === NaN // false
NaN == NaN // false
```

```tip
숫자가 NaN인지 알아보려면 내장된 isNaN 함수를 사용하면 된다.
```

```
let n = 0;
white(true){
  n += 0.1;
  if(n === 0.3) break;
}

console.log(n);
```

#### 4. 논리 연산자 ( &&, || )
```
논리 연산자는 불리언 값만 다룰 수 있으며 불리언에는 false / true 두개의 값이 있다.
js에서는 불리언 아닌 값을 불리언 값으로 바꾸는 방법에 익숙해져야 한다.
```

```js
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
```
- 첫 번째 객체가 거짓 같은 값이라면, 해당 객체를 반환합니다.



**[참 같은 값(Truethy)과 거짓 같은 값(Falsy)]**
```
거짓 같은 값(Falsy, falsey로 쓰이기도 함) 값은 불리언 `문맥에서 false로 평가되는 값`입니다.
참 같은 값(Truthy)인 값이란 불리언을 기대하는 문맥에서 `true로 평가되는 값`입니다. (따로 거짓 같은 값으로 정의된 값이 아니면 모두 참 같은 값으로 평가됩니다.)
```
   - boolean타입 외에도 조건문이나 반복문 등 boolean값이 필요한 곳에서
   - true와 false로 형 변한되어 반환하는데 이를 참 같은 값과 거짓 같은 값이라고 부른다.
   - 거짓 같은 값 이외의 값은 모두 참 같은 값이다.


```javascript
function isBlank(value){
  return !value
}
 isBlank('') //true
 isBlank(' ') // false
 isBlank('some text') //false
 isBlank() // true
```

##### 거짓으로 판단되는 값

```javascript
if (false){
  console.log('hello world');
}

if(null){
  console.log('null');
} else if(undefined){
  console.log('undefined');
} else if(0){
  console.log('0');
} else if(""){
  console.log('빈문자열');
} else {
  console.log('나만 남았네');
}
```
- 모두 거짓으로 판단 되는 값이기에 '나만 남았네'가 실행될 것

```
undefined
null
false
0
NaN
''(빈 문자열)
```


##### 참으로 판단되는 값
```javascript
if([]){
  console.log("[]")
}
```
- 빈 배열은 true로 판단 되기 때문에 실행된다.


- false만 true로 판단되는 것
```
true
0보다 큰 숫자
공백을 포함 한 비어 있지 않은 문자열
[]와 같은 빈 배열
{}와 같은 빈 Object
function () {}과 같은 빈 함수
```


**[기억해야 할 몇가지]**
  - 모든 객체, valueOf() method 호출 시 false를 반환하는 객체도 **참 같은 값** 속함
  - 배열, 빈 배열
  - 공백만 있는 문자열('')
  - 문자열 "false"

```note
빈 배열 arr가 거짓같은 값(falsy)으로 판단 되길 원한다면 arr.length를 사용한다.
[`예시 보기 link`](https://alalstjr.github.io/jjunpro.github.io/javascript/2018/09/25/JavaScript-%EB%B0%B0%EC%97%B4(Array)%EA%B3%BC-%EB%B0%98%EB%B3%B5(Iteration)-%EC%A0%9C%EC%96%B4%EB%AC%B8/)
```

- 배열 내부의 개수를 하나하나 씩 삭제하는 반복문
- while문으로 조건이 참이면 코드블럭을 실행하도록
- if문과의 차이점 : while문은 조건이 참일 경우 계속 실행한다.
- 조건을 거짓으로 변경하는 중단점이 필요하다. -> 이때 참 같은 거짓값을 만들어서 코드블럭을 빠져 나올 수 있도록 한다.
- 중단점이 없을 경우 무한 반복에 빠지게 된다.

```javascript
const array_list = ["사과", "포도", "참외", "수박", "딸기"];

while (array_list.length) {
    array_list.pop(); // 여기서 pop() 는 배열의 맨 끝부분을 제거하는 배열 메서드
    console.log(array_list);
}
```

- array_list.length 값이 0 거짓 이 될때까지 실행 반복한후 반복문을 빠져 나가는것을 확인
```
출력 되는 값
[ '사과', '포도', '참외', '수박' ]
[ '사과', '포도', '참외' ]
[ '사과', '포도' ]
[ '사과' ]
[]
```


#### 5. AND(&&), OR(||), NOT(!)

##### 연산순서
- 사칙연산 처럼 논리연산자도 순서를 갖고 있다.
- <span style="color:blue">**NOT -> AND -> OR**</span>.

```
const value = !( (true && false) || (true && false) || !false );
```

1. not을 먼저 처리
  - `!false -> true`
  ```
  !((true && false) || (true && false) || true);
  ```
2. AND 를 처리
  - `(true && false) -> false`
  - `(true && false) -> false`
  ```
  !(false || false || true);
  ```

3. OR 를 처리
  - OR 연산자를 좌측에서 우측 방향으로 처리.
  - `false || false -> false`
  - `false || true -> true`
  ```
  !true;
  ```

4. 결과
  ```
  false
  ```


##### 단축평가
- 단축평가가 중요한 이유?
  - 피연산자에 부수 효과(side effect)가 있다 하더라도 단축 평가를 거치면 그 효과는 일어나지 않는다.
  - 부수효과는 보통 부정적인 의미로 쓰이지만 항상 그런 것은 아니다.
  - 표현식에서 부수 효과는 **증가, 감소, 할당, 함수 호출**에서 일어날 수 있다.


[ AND(`&&`) 연산자 ]

|   x   |   y   |  x&&y |
|:-----:|:-----:|:-----:|
| false | false | false |
| false | true  | false |
| true  | false | false |
| true  | true  | true  |


[ OR(`||`) 연산자 ]

|   x   |   y   | x \|\| y |
|:-----:|:-----:|:------:|
| false | false |  false |
| false |  true |  true  |
|  true | false |  true  |
|  true |  true |  true  |

[ NOT(`!`) 연산자 ]

|   x     |    ! x   |
|:-----:|:-----:|
| false | true  |
| true  | false |

- AND연산은 피연산자가 모두 true일 때만 true이다.
- OR연산은 피연산자가 모두 false일 때만 false이다.

[and와or]
```javascript
let cat = 0 || "meow"
console.log(cat); //meow 출력
```

```javascript
let dog = 0 && "bark";
console.log(dog); //0 출력
```
- 0은 falsy
- 문자열은 truethy
- `||` false true = true
- `&&` false true = false
- or의 경우 뒤의 값에 따라 이 식이 거짓인지 참인지가 판단 된다. 그래서 meow가 cat에 할당된다.
- 변수 dog는 0이 이미 거짓이기 때문에 and로 묶여져 있어서 항상 거짓이 된다.


[단축평가 논리 계산]
- 논리연산자를 잘 활용하여 코드를 단축하는 것을 뜻한다

```javascript
const dog = {
    name: 'happy'
};

const getName = (animal) => {
    if(animal){
        return animal.name;
    }
    return undefined;
};

const name = getName();
console.log(name);
```

- 논리계산을 통해서 더 간단하게 만들기


```javascript
const getName = (animal) => {
    return animal && animal.name;
};
```

- 인자 animal에 값이 있을 경우에는 true이므로 animal.name에 해당하는 값을 반환
- 인자 animal에 값이 없을 경우에는 false이므로 (빈 문자열 = falsy) && 뒤에는 볼 필요도 없이 undefined 반환
- [단축 평가 논리 계산법](https://devrappers.tistory.com/39)






#### 6. 대입(복합 대입) 연산자 ( =, +=, -=, *=, /=, %= )

[할당 연산자]

```javascript
let v, v0;
v = v0 = 9.8;

const nums = [3, 5, 15, 7, 5];
let n, i =0;

while((n = nums[i]) < 10 && i++ < nums.length){
    console.log(`number less than 10: ${n}`);
}

// number less than 10: 3
// number less than 10: 5
```
- while문의 조건에 있는 할당 :  먼저 n이 nums[i] 의 값을 받는다
- 다음은 표현식 전체가 그 값으로 평가되므로 숫자로 비교 할 수 있다.

[할당과 연산]

| 연산자 | 동등한 표현 |
|:------:|:-----------:|
| x += y |  x = x + y  |
| x -= y |  x = x - y  |
| x *= y |  x = x * y  |
| x /= y |  x = x / y  |
| x %= y |  x = x % y  |

-그 외
	- <<=   :   오른쪽 피연산자 값의 비트수만큼 왼쪽 피연산자를 왼쪽으로 이동해서 왼쪽 피연산자에 저장합니다.
	- >>=   :   오른쪽 피연산자 값의 비트수만큼 왼쪽 피연산자를 오른쪽으로 이동해서 왼쪽 피연산자에 저장합니다.
	- &=   :   왼쪽, 오른쪽 피연산자의 비트 AND를 구해서 왼쪽 피연산자에 저장합니다.
	- |=   :   왼쪽, 오른쪽 피연산자의 비트 OR를 구해서 왼쪽 피연산자에 저장합니다.
	- ^=   :   왼쪽, 오른쪽 피연산자의 비트 XOR를 구해서 왼쪽 피연산자에 저장합니다.

```
var value = 10;
value += 10;
alert(value); //20
```

```
value += 10;
같은 의미
value = value + 10;
```

```
const x = 10;
const y = 20;

y = y-10;
y -= 10;

x = x*10
x *= 10

y = y/10;
y /= 10;

x = x%10
x %= 10
```



---




#### 7. typeof, void연산자
##### typeof 연산자
- 피연산자의 타입을 문자열 형태로 리턴한다.
- `null, 배열은 'object'리턴하고 function은 'function'을 리턴한다`
- typeof는 연산자이므로 괄호는 필요 없다.
- 문법적으로는 유효하지만 다만 괄호 때문에 불필요한 표현식이 끼어드는 것을 방지한다.
  - ex) typeof(x) => typeof x

[typeof의 반환값]
|        표현식       |   반환값  |       참고       |
|:-------------------:|:---------:|:----------------:|
|   typeof undefined  | nudefined |                  |
|     typeof null     |   object  |       주의       |
|      typeof {}      |   object  |                  |
|     typeof true     |  boolean  |                  |
|       typeof 1      |   number  |                  |
|      typeof ""      |   string  |                  |
|   typeof Symbol()   |   symbol  | es에서 새로 생김  |
| typeof function(){} |  function |                  |
|    존재하지 않는값   | undefined |                  |


##### void 연산자
- void 연산자는 뒤에 나타나는 표현식을 실행하고 `무조건 undefined를 리턴`한다.
- 그나마 많이 사용되는 것으로 보이는 것은 a 태그에서 href 기능을 무효화할 때
- void가 붙으면 링크를 클릭하여도 페이지 이동이나 링크가 동작하지 않는다.

```html
<a href="javascript:void 0">do nothing.</a>
```




#### 8. 비구조화 할당 (=구조분해)
- 객체나 배열을 변수로 `해체` 할 수 있다.
- 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치해야 한다.

```javascript
const obj = {b:2, c:3, d:4};

const {a,b,c} = obj;

//기존 obj 객체의 프로퍼티를 새로 생성한 a, b, c객체의 값으로 할당했다.
// b, c는 정상적으로 기존 obj 객체의 프로퍼티 b, c의 값에 할당 됐지만,
// a 객체는 아무런 값이 들어 있지 않음. 할당 받을 값이 없다.


console.log(a); //undefined : "a" 프로퍼티가 없음
console.log(b); //2
console.log(c); //3
console.log(d); //ReferenceError : "d" 는 정의되지 않음
```

- 할당받을 변수의 이름과 해체 할 변수의 프로퍼티 키 값이 불일치
- d는 해체 할당의 프로퍼티로 존재하지 않기 때문에 obj.d는 선언조차 되지 않는다.

```javascript
const obj = {a:1, b:2, c:3, d:4};
let a, b, d;

({a,b,d}) = obj;
```



##### 객체 비구조화 할당
```
const example = {
    name : "james",
    age : "15",
    school : "some"
};

let {name, age} = example;
console.log(name, age); //james 15
```
    1)


##### 배열 구조 분해
```
// 기본 변수 할당
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```
```
// 선언에서 분리한 할당
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

##### 매게변수 해체
**함수의 파라미터에서도 비구조화 할당**
```
function getGogo({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const o = {
  subject: "I",
  verb: "hate",
  object: "javascript"
};

console.log(getGogo(o));
```

```
const obj = { a : 1 };
function print({ a, b = 2 }){
    console.log(a);
    console.log(b);
}
print(obj); // 1 2
```



#### 9. 삼항 연산자
`삼항 연산자 사용방법`
```note
조건 ? true일때 : false일때
```

```javascript
const array = [];
let text = '';
if(array.length === 0){
    text = '배열이 비어있습니다.';
}else{
    text = '배열이 비어있지 않습니다.';
}

console.log(text); //배열이 비어있습니다.
```

[삼항 연산자로 코드를 줄여보자]
```javascript
const array = [];
const text = array.length === 0 ? '이것은 참이요' : '이것은 거짓일세';
console.log(text); //이것은 참이요
```

[라인이 길어질 때]
```javascript
const array = [];
let text = array.length === 0
? ' 배열이 비어있습니다 '
: ' 배열이 비어있지 않습니다 ';
console.log(text); //배열이 비어있습니다
```

[중첩해서 사용하는 삼항 연산자]
```javascript
const condition1 = false;
const condition2 = false;

const value = condition1
  ? '와우!' //true일 경우
  : condition2 //false일 경우
    ? 'blabla' //true일 경우
    : 'foo'; //false일 경우

console.log(value); //foo
```
- condition1 자체가 false이기에 condition2로 넘어가고, condition2 또한 false이기 때문에 foo가 출력된다.
`가독성이 좋지 않기 때문에 이러한 코드는 피하는게 좋다. 차라리 if문으로 처리하는것을 추천!`


#### 10. 표현식과 흐름 제어 패턴

##### if...else문 3항 연산자로 바꾸기
```javascript

if(isPrime(n)){
  label = 'prime';
}else{
  label = 'non-prime';
}
```
```javascript
const label = isPrime(n) ? 'prime' : 'non-prime'
```

##### if문을 단축 평가하는 OR 표현식으로 바꾸기
- 할당이 주 목적인 if문은 단축 평가를 사용하는 or표현식을 써서 간결하게 줄일 수 있다.
- 자주 사용하는 패턴이니 알아둬야 할 것!


```javascript
if(!options) options = {};
```
▼
```javascript
options = option || {};
```




## 5. 함수 [function]
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

- `**하나의 함수는 한가지의 일만 하도록 만든다**`
   - 동작하지 않는다면, 함수안에서 많은 일을 시킨것
- 변수이름을 정할때는 '무엇인가를 동작하는것' doSomething, command, verb
- 자바스크립트에서 function은 object이다.
   - 변수에 할당, 함수를 리턴, 파라미터로 전달 등을 할 수 있다.

### 1. 함수의 선언과 호출/참조

```javascript
function doSomething( '어떤 값을 받아 올건지 전달 받는 인자' ){
  '실제로 함수 안에서 어떤 코드가 동작하는지 작성되는 부분'
}
```

```javascript
function doSomething(){ //함수 선언
  return "hello world";
}

doSomething(); //함수 호출
// hello world

doSomething; // 함수 참조
// function doSomthing()
```
- 함수의 호출의 값 = 반환 값
- 함수 바디 안에 return을 사용하면 즉시 종료 후 return 값을 반환한다. = 함수 호출의 값이 됨
- return 을 명시적으로 호출하지 않으면 undefined가 된다.

**[함수의 호출과 참조 구별하기]**
- 함수는 객체이다. 즉 다른 객체와 마찬가지로 할당하거나 넘길 수 있다.
- `함수 뒤에 괄호를 쓰면` : 호출하려 이해하고 함수 바디를 실행한다. 그리고 함수를 호출한 표현식은 반환 값이 된다.
- `괄호를 쓰지 않으면` : 그 함수는 실행되지 않고 참조만 된다.


**[함수를 변수에 할당하기]**
  - 다른 이름으로 함수를 호출 할 수 있다.

```
function doSomething(){ //함수 선언
  return "hello world";
}

const f = doSomething;
f(); // "hello world"
```

**[함수를 객체 프로퍼티에 할당하기]**

```
function doSomething(){ //함수 선언
  return "hello world";
}
const o = {};
o.f = doSomething;
o.f(); //hello world
```

**[함수를 배열 요소 할당하기]**

```
function doSomething(){ //함수 선언
  return "hello world";
}

const arr = [1, 2, 3];
arr[1] = doSomething;
arr[1](); // hello world
```


```warning
괄호가 하는 일을 명확하게 알자.
괄호가 붙으면 그 값을 함수로 간주하고 호출한다.
```

### 2. parameters [매개변수]

#### 1) 매개변수 타입
- `premitive(원시타입)`
  - value가 메모리에 그대로 저장되어 있음
  - Boolean, Null, Undefined, Number, String, Symbol
  - 데이터의 **실제 값** 할당 - 복사됨
  - 변수에 할당이 될 때 메모리 상에 고정된 크기로 저장이 되고 해당 변수가 원시 데이터 값을 보관한다.


- ` object(참조타입)`
  - 메모리에 reference가 전달됨
  - 함수안에서 object의 값을 변경하면 그대로 전달됨
  - 데이터의 **위치 값** 만 할당
  - Array, Function, Object

`primitive type vs object type`

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

- `원시값과 객체의 핵심적인 차이`
  - 원시 값은 불변이기에 수정할 수 없다
  - 원시 값을 담은 변수는 수정 할 수 있지만 (다른 값으로 바꿀 수 있지만)
  - 객체는 바뀔 수 있다.

#### 2) 매개변수와 인수(argument)

- 함수를 호출하면서 정보를 전달할 때는 매개변수와 인수를 이용한다.
- 매개변수는 함수가 호출되기 전에는 존재하지 않음

- 함수에 선언된 매개변수는 정해진 매개변수(fomual argument)라고 한다.
- 함수가 호출되면 정해진 매개변수는 값을 받아서 실제 매개변수(actual argument)가 된다.

- `인자 (argument) : 실제 함수에 일을 시킬때 넣는 값, 함수를 호출시에 전달되는 값을 말한다.`
- `매개변수 (parameter) : 함수를 호출하면서 정보를 전달한다.`

```
function avg(a, b){ //fomual argument
  return a + b
};
```
- avg(a, b)에서 a, b는 정해진 매개변수

```
avg(5, 10) //전달 인자 (argument)
```
- 전달인자에는 값이 존재 (함수를 호출할 때 전달되는 실제 값)
- 각각 5, 10 값을 받아서 실제 매개변수에 호출해주는 인자 (argument)
- 실제 매개변수는 변수와 매우 비슷하지만, **함수 바디에서만 존재**

```
const a = 5, b = 10; //
avg(a, b);
```


#### 3) 매개변수 해체

- 해체할당과 마찬가지로 매개변수도 해체가 가능하다.

```javascript
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

#### 4) 파라미터 설정

`매개변수 기본값`
- 매개변수에 기본값을 지정하는 기능
- 일반적으로 매개변수 값을 제공하지 않으면 undefined가 값으로 할당된다.

```javascript
function f(a, b = "default", c = 3){
    return `${a} - ${b} - ${c}`
}

f(5, 6, 7); //5 - 6 - 7
f(5, 6); //5 - 6 - 3
f(5); //5 - defalut - 3
f(); // undefined - default - 3
```


`파라미터 없으면 unknown 지정`
```javascript
function showMessage (message, from ='unknown'){//parameter값이 없을 경우의 대체되어 사용되어짐
    console.log(`${massage} by ${from}`);
}
showMessage(hi!, dabin);
```


`Rest parameters` (확산 연산자)
- Rest 파라미터에는 먼저 선언된 parameter에 할당된 argument를 제외한 나머지 argument들이 모두 배열에 담겨 할당된다.
- 따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.
```javascript
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

`매개변수가 함수를 결정?`
- 어떤 함수를 호출하든 그 함수에서 정해진 매개변수 숫자와 관계없이 몇 개의 매개변수를 전달해도 된다.
- 정해진 매개변수에 값을 제공하지 않으면 암시적으로 undefined가 할당

---

```tip
function early return / early exit
- 조건이 맞지 않을때는 return으로 함수를 빨리 종료하고,
- 조건이 맞을 때만 필요한 로직을 실행한다.
```

### 객체의 프로퍼티인 함수

```tip
Property(JavaScript)

property는 해당 object의 특징입니다. property는 보통 데이터 구조와 연관된 속성을 나타냅니다. property에는 2가지 종류가 있습니다.

- 인스턴스 property들은 특정 object 인스턴스의 특정한 데이터를 가지고 있습니다.
- Static Property들은 모든 object 인스턴스들에게 공유 된 데이터를 가지고 있습니다.

기본적으로 property는 어떤 값을 나타냅니다.
그런데 이 값이 다른 값과 연관을 가지고 있을 때 property라고 부릅니다.
예를 들어 문자열에는 length라는 property가 있는데 이 프로퍼티는 문자열 안에 있는 문자의 양을 정수로 나타낸 값을 담고 있습니다.
```

#### 1. 함수는 객체
- 함수는 호출이 가능한(callable) `행동 객체` 라고 이해하면 쉽습니다.
- 우리는 함수를 호출 할 수 있을 뿐만 아니라 `객체처럼 함수에 프로퍼티를 추가·제거하거나 참조를 통해 전달할 수도 있다.`

```javascript
const o = {
  name : 'dabin', //원시 값 프로퍼티
  bark: function() {return 'woof!';}, //함수 프로퍼티(method)
}
```

```javascript
const o = {
  name : 'dabin', //원시 값 프로퍼티
  bark() {return 'woof!';}, //함수 프로퍼티(method) ES6
}
```

[출처[소년코딩]](https://boycoding.tistory.com/14)
```javascript
function add(x, y){
  return x + y;
}

// add() 함수객체에 name, age프로퍼티 추가
add.name = 'oppa';
add.age = 23;

console.log(add.age) //23
```

#### 2. 일급 객체
- JS에서 함수는 일반 객체처럼 취급 될 수 있기 때문에 다음과 같은 동작이 가능하다.
- 이런 특징으로 인해 함수를 일급객체라 부르며 함수형 프로그래밍이 가능하다.

```note
- 리터럴에 의해 생성
- 변수나 배열 요소, 객체 프로퍼티 등에 할당 가능
- 함수의 인자로 전달 가능
- 함수의 리턴 값으로 리턴 가능
- 동적으로 프로퍼티를 생성, 할당 가능
```

[변수에 함수 할당]
```javascript
const db = function(){return "manggo"};
console.log(db()); //manggo
```

[프로퍼티에 함수 할당]
```javascript
const db2 = {};
db2.name = function(name){return `your dog: ${name}`};
db2.age = function(age){return `age: ${age}`};

console.log(db2.name("manggo")); //your dog: manggo
console.log(db2.age(5)); //age: 5
```

[함수 인자로 전달]
```javascript
const adun = function(func) {
    func();
}
adun(function() {
    console.log('Function can be used as the argument.');
}); //Function can be used as the argument.
```

[리턴값으로 활용]
```javascript
const hong = function() {
    return function () {
        console.log('this function is the return value.')
    };
};

const db4 = hong();
console.log(db4()) //this function is the return value.
```

### this 키워드

- 자바스크립트에서 this를 사용하는 여러 가지 방법이 있습니다.
- 일반적으로 this는 객체의 프로퍼티인 함수에서 의미가 있습니다.
- `메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 됩니다.`

```
const o = {
    name : 'wallace',
    speak(){return `My name is ${this.name}`}
}

o.speak(); /My name is wallace
```
- o.speak()를 호출하면 this는 o에 묶인다.
- **함수를 어떻게 선언이 아닌 어떻게 호출을 했는지에 따라 달라진다는 것이 중요하다.**
- ~~this가 o에 묶인 이유는 o에서 speak를 호출했기 때문이다.


### call, apply, bind
```javascript

```

- call 메서드 : 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다.
- 함수를 호출하면서 call을 이용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드 인 것처럼 사용 할 수 있다.





### :star: [정리] 함수 정의방법 :star:
```
1. 함수 선언문
- function square(x) { return x*x }
- 함수 선언문 방식으로 정의된 함수는 반드시 함수명이 정의

2. 함수 표현식
- var square = function(x) { return x*x }
- 함수 표현식 (리터럴)은 function 키워드로 시작함
- 다만 함수명은 선택사항. 이때 함수명이 없는 함수를 익명 함수라 한다.

3. 함수 생성자
- var square = new Function("x", "return x*x");

4. 화살표 함수 표현식
- var square = x => x*x // 실제 : var square = function(x){ return x*x }
```

#### 함수 표현식과 익명함수
- 왜 이름을 정하고 변수에 할당할까?

```javascript
const g = function f(){
  // ...
}
```
- 이름 g에 우선순위가 있다.
- 함수 바깥에서 함수에 접근할 때는 g를 사용해야 하며, f로 접근하려 하면 변수로 정의 되지 않았다는 에러가 생긴다.
- 함수안에서 자신을 호출 할 때 이런 방식이 필요할 수 있다. - 재귀

```javascript
const g = function f(stop){
    if(stop) console.log('f stropped');
    f(true); //자신을 참조
  }
  g(false) //함수를 호출
```
- 함수안에서 f를 써서 자신을 참조하고
- 함수 바깥에서는 g를 써서 호출한다.
- `함수 선언이 표현식으로 사용 됐다면 함수 표현식이고 아니면 함수 선언이다`

```tip
호출할 생각으로 함수를 만든다면 `함수 선언`
다른 곳에 할당하거나 다른 함수에 넘길 목적 `함수 표현식`
```


## 6. 배열
```javascript
const arr1 = [1, 2, 3]; //숫자 구성 배열
const arr2 = ["one", 2, "three"]; //비균질적 배열
const arr3 = [[1, 2, 3], ["one, 2, three"]]; //배열을 포함한 배열
const arr4 = [                  //비균질적 배열
    {name : "fred", type: "object", number: [5,7, 13]},
    [
        {name : "susana", type: "object"},
        {name : "anthony", type: "object"},
    ],
    1,
    function(){return "arrays can contain functions too";},
    "three",
];
```

  [배열 요소에 접근하기]
  ```javascript
  arr1[0]; //1
  arr1[2]; //3
  arr3[1]; //["one, 2, three"]
  arr4[1][0]; //{name : "susana", type: "object"}
  ```


  [배열 길이]
  ```javascript
  arr1.length; //3
  arr3.length; //5
  arr4[1].length; //2
  ```

  [배열 늘리기]
  ```javascript
  arr1[4] =  5;
  arr1; // [1,2,3,undefined,5]
  arr1.lenght; //5
  ```

1. 빈 배열을 만들고 이후에 값을 지정
- var arr = [];
- 배열의 포인트는 index!로 접근이 가능하다. - 삽입과 삭제가 편함
- 배열은 index[0]이 무조건 첫번째!
- [각 배열에 순번과 이름 지정해준 배열]

```javascript
const fruits = [];
fruits[0] = '사과';
fruits[1] = '배';
fruits[2] = '바나나';
```

2. 지정한 변수에 바로 값을 지정
- const arr = new Array();
- [하나의 변수에 배열을 전체 지정]
```javascript
var fruits = ['사과', '배', '바나나'];
```

**[요약본 미리 보기]**




### 배열 콘텐츠 조작 method
```javascript
var fruits = ['사과', '배', '바나나'];
var amount = fruits.length;
var newStr = fruits.join('/');
var newArr = fruits.reverse();
var newArr2 = fruits.sort(); //→ 가나다순으로 출력

document.write(fruits + '<br />'); //→ 사과,배,바나나
document.write(fruits[0] + '<br />'); //→ 사과
document.write(amount + '<br />'); //→ 3
document.write(newStr + '<br />'); //→ 사과/배/바나나
document.write(newArr + '<br />'); //→ 바나나,배,사과
document.write(newArr2 + '<br />'); //→ 바나나,배,사과
```

#### 1)concat [배열의 끝에 여러 요소 추가하기]
- 자바스크립트 문자열 합치기 (concat)
- 두 개의 문자열을 하나의 문자열로 만들어주는 역할을 하는 함수
- 입력값을 문자열 대신 배열을 사용하면 두 개의 배열을 하나의 배열로 만들어주는 역할도 하는 함수
  - concat 사용방법 - (문자열 합치기)
    - "문자열".concat("문자열");
  - concat 사용방법 - (배열 합치기)
    -  배열명.concat(배열명);

```javascript
var fruits = ['사과', '배', '바나나'];
var animals = ['호랑이', '원숭이', '곰'];

var newArr4 = fruits.concat(animal); → 사과,배,바나나,호랑이,원숭이,곰
document.write(newArr4 + '<br />');
```

```Warning
- 단, concat은 제공받은 배열을 한 번만 분해한다.
- 배열 안에 있는 배열을 다시 분해하지 않는다.
```

```
 const arr = [1, 2, 3];
 arr.concat(4, 5, 6); //[1, 2, 3, 4, 5, 6]
 arr.concat([4, 5, 6]); //[1, 2, 3, 4, 5, 6]
 arr.concat([4, 5], 6); //[1, 2, 3, 4, 5, 6]
 arr.concat([4, [5, 6]]); //[1, 2, 3, 4, Array[2]]
```


#### 2)slice [배열 일부 가져오기]
- 배열 혹은 문자열의 시작지점과 끝지점을 받아 해당하는 만큼을 추출하여 돌려주는 함수 - 어디서부터 어디앞까지
- slice 사용방법 - (문자열 추출)
  - "문자열".slice([첫 위치], [마지막 위치]);
- slice 사용방법 - (배열 추출)
  -  배열명.slice([항목 첫 위치], [항목 마지막 위치]);

```javascript
var fruits = ["사과", "배", "바나나", "딸기"];

var newArr4 = fruits.slice(1, 3); //→ 배, 바나나
   // index번호 1번부터 3번 앞까지 출력
document.write(newArr4);
```
  - 배열은 항상 index[0]부터 시작
  - slice(1, 3)은 index[1]부터 index[3] `__앞까지__` 를 의미함
  - 원본은 자르지 않는다.
  - 두번째 위치 매개변수를 생략하면 마지막 끝까지 반환한다.

```javascript
 const arr = [1,2,3,4,5];
 arr.slice(3);// 4, 5
 arr.slice(2, 4);  // 4, 5
 arr.slice(-2); // 4, 5
 arr.slice(1, -2); //2, 3
 arr.slice(-2, -1); //4
```
  - 음수 인덱스를 쓸 수 있고, 음수 인덱스를 쓰면 배열의 끝에서 부터 요소를 센다.


#### 3)splice [임의의 위치에 요소 추가하거나 제거하기]
- 배열에서 특정 범위의 값들을 추출하고, 그 자리에 새로운 값을 넣음.
- 배열을 자유롭게 수정
- 첫 번째 매개변수는 수정을 시작할 index -start
- 두 번째 매개변수는 제거 할 요소 숫자. -end
- 아무 요소도 제거하지 않을 때는 0을 넘긴다.

```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers); //[10, 20, 40]
```

```javascript
const jbAry = [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six' ];
const jbSplice = jbAry.splice( 1, 2, 'Seven', 'Eight' );

console.log(jbSplice) // One, Seven, Eight, Four, Five, Six
```

##### slice와 splice 차이점
- slice 함수는 추출의 의미로 사용되는 함수이지만 splice는 삭제의 의미로 사용하는 함수이다. 그리고 추가적으로 삭제된 자리에 값들을 넣는 기능이 있다.
- slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본은 손상되지 않는다.
- splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

```tip
* slice : 기존 배열은 변하지 않고, 잘려진 배열을 반환
* splice : 기존 배열이 변하고, 잘려진 배열 반환
* split : (string의 메서드) delimeter를 기준으로 잘라서 배열을 만든 후 배열을 반환
```


#### 4)pop/push [배열의 처음이나 끝에서 요소 하나를 추가/제거]
- [push] :  배열 마지막에 요소 추가 (기존 값 뒤에 추가한다.)
```javascript
var beers = ["하이네켄", "코로나", "스텔라", "카스"];
beers.push("칭타오", "산미구엘");
document.write(beers);

//출력 → 하이네켄, 코로나, 스텔라, 카스, 칭타오, 산미구엘
```

- [pop] : 배열의 마지막 요소 제거, 제거된 요소 리턴
```javascript
var beers = ["하이네켄", "코로나", "스텔라", "카스"];
beers.pop();
document.write(beers);

//출력 → 하이네켄, 코로나, 스텔라
```


#### 5)shift (제거) / unshift (추가)
- [unshift] : 배열의 처음에 요소 추가 (`기존의 값 앞에 추가`한다.)
```javascript
var beers = ["하이네켄", "코로나", "스텔라", "카스"];
beers.unshift("칭타오", "산미구엘");
document.write(beers);

//출력 → 칭타오, 산미구엘, 하이네켄, 코로나, 스텔라, 카스
```

- [shift] : 배열의 첫번째 요소 제거 (`기존 맨 앞값을 삭제`한다.)
```javascript
var beers = ["하이네켄", "코로나", "스텔라", "카스"];
beers.shift();
document.write(beers);

//출력 → 코로나,스텔라,카스
```

[정리]
- 배열의 값을 `추가`하는 함수
  - .push() : 배열의 맨 끝에 값 추가
  - .unshift() : 배열의 맨 앞에 값 추가

- 배열에 값을 `제거`하는 함수
  - pop() : 배열의 맨 끝에 값을 제거
  - shift() : 배열의 맨 앞에 값을 제거

```javascript
var arry1 = [ 'apple', 'banana', 'melon' ];
arry1.push( 'berry' );
document.write( '<p>push : ' + arry1.join( ' / ' ) + '</p>' );

var arry2 = [ 'apple', 'banana', 'melon' ];
arry2.pop();
document.write( '<p>pop : ' + arry2.join( ' / ' ) + '</p>' );

var arry3 = [ 'apple', 'banana', 'melon' ];
arry3.unshift( 'berry' );
document.write( '<p>unshift : ' + arry3.join( ' / ' ) + '</p>' );

var arry4 = [ 'apple', 'banana', 'melon' ];
arry4.shift();
document.write( '<p>shift : ' + arry4.join( ' / ' ) + '</p>' );


//결과
//push : apple, banana, melon, berry
//pop : apple, banana
//unshift : berry, apple, banana, melon
//shift : banana, melon
```

#### 6)sort [배열 요소 정렬]
- 기본적으로 배열의 요소를 문자열로 변환한 후 오름차순으로 정렬한다.
```javascript
var arr = [11, 1, 115, 42, 12];
arr.sort();    //-> [ 1, 11, 115, 12, 42 ]
```

- 이렇게 사용할 경우 위 예제와 같이 의도하지 않은 결과를 돌려줄 경우가 있다.
- 이는 `내부적으로 숫자를 문자열로 변환한 후 값을 비교하기 때문임`
- 따라서 대부분의 경우 sort 함수의 인자값으로 비교 함수를 전달하여 정렬하게 된다.

```javascript
var arr = [11, 1, 115, 42, 12];
arr.sort(function(a, b) { return a - b; });
//-> [ 1, 11, 12, 42, 115 ]
```

- 배열 크기는 고정되지 않습니다. 언제든 요소를 추가하거나 제거할 수 있습니다.
- 요소의 데이터 타입을 가리지 않습니다.
- 문자열만 쓸 수 있는 배열이라던가 쓸 수 있는 배열 개념이 아예 없습니다.
- js 배열 리터럴은 대괄호 안에 배열 요소를 쉼표로 구분해 줍니다.

#### 7)copyWithin [배열 안에서 요소 교체]
- 배열 요소를 복사해서 다른 위치에 붙여놓고 기존 요소를 덮어 쓴다.
- 첫 번째 매개변수 : 복소한 요소를 붙여 넣을 위치
- 두 번째 매개변수 : 복사를 시작 할 위치
- 세 번째 매개변수 : 복사를 끝낼 위치 (생략 가능)
- slice와 마찬가지로 음수 인덱스는 배열 끝부터 센다.


#### 8)fill [특정 값으로 배열 채우기]
- 배열의 start index부터 end index 전까지(end index는 미포함) value값으로 채워주는 함수
```
arr.fill(value[, start[, end]])
```
  - value : 배열에 채울 값을 지정
  - start : value값을 채울 배열의 시작 index / 입력없으면 기본값 0
  - end : 배열의 종료 index / 입력이 없으면 배열의 길이(arr.lenght)

```javascript
// 배열 전체를 A로 채움
const arr1 = ['a', 'b', 'c', 'd'];
arr1.fill('A'); // ['A', 'A', 'A', 'A']

// 배열 arr2[1]부터 A로 채움
const arr2 = ['a', 'b', 'c', 'd'];
arr2.fill('A', 1); // ['a', 'A', 'A', 'A']

// 배열 arr3[1]~[2]를 A로 채움
const arr3 = ['a', 'b', 'c', 'd'];
arr3.fill('A', 1, 3); // ['a', 'A', 'A', 'd']
```


#### 9)reverse [배열 요소 순서 바꾸기]
- 배열 원소 순소를 거꾸로 바꿈.
```javascript
var arr =[ 1, 2, 3, 4 ];
arr.reverse();
console.log( arr ); // [ 4, 3, 2, 1 ]
```


#### 10)join [문자열 형태로 합쳐주기]
```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```


### 배열 검색 method

[배열 특정 값 위치(index) 찾기]
```javascript
const arr = [1, 1, '1', 1];

document.writeln(arr.indexOf(1)); // 0
document.writeln(arr.indexOf('1')); // 2
document.writeln(arr.indexOf(1, 1)); // 1
document.writeln(arr.indexOf(0)); // -1

document.writeln('<br>');

document.writeln(arr.lastIndexOf(1)); // 3
document.writeln(arr.lastIndexOf('1')); // 2
document.writeln(arr.lastIndexOf(1, 1)); // 1
document.writeln(arr.lastIndexOf(0)); // -1
```
- indexOf : 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는  '첫번째' element의 index를 리턴
- lastIndexOf : 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '마지막' element의 index를 리턴

  ```tip
  indexOf와 lastIndexOf 는 일치하는 것을 찾지 못하면 -1 반환한다.
  열 안에 있는 값이 숫자, 문자열, 또는 불리언이라면 찾고자하는 항목이 몇번째 원소인지 알아내려면 indexOf 를 사용
  ```


```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
```
[findIndex]
```javascript
const indexN = todos.findIndex(todo => todo.id === 3); //todo라는 파라미터를 받아와서, id가 3인
console.log(indexN); //2
```

[find]
```javascript
const todo = todos.find(todo => todo.id === 3); //todo라는 파라미터를 받아와서, id가 3인
console.log(todo); //{id: 3, text: "객체와 배열 배우기", done: true}
```
- findIndex : (특수한 조건에 의해) 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없다.
  - 특정조건을 확인 후 그 조건이 일치 한다면, 일치하는 원소의 숫자르 나타낸다.
- find : 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환한다.

[includes]
```javascript

```

### 배열 변형 method

#### 1. forEach
- 배열안에 있는 원소들을 가지고 일괄적인 작업을 하고 싶을 때 유용하게 쓰인다.
- 보통 for문으로 배열의 원소를 출력하지만, 이보다 더 간단하게 쓰일 수 있다.
- for문 대신 특정 함수를 사용해서 배열에 있는 모든 원소들을 출력해보자
- ex) 만든 함수를 forEach의 파라미터로 넣는다.

> [1번째]
> ```javascript
> const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
>
> function print(hero) {
>   console.log(hero);
> } //함수 생성
>
> superheroes.forEach(print); //print함수를 파라미터로 넣기
> // 아이언맨
> // 캡틴 아메리카
> // 토르
> // 닥터 스트레인지
> ```


> [2번째]
> ```javascript
> // forEach(파라미터) 에 바로 함수를 넣기
>
> superheroes.forEach(function(hero){
>   console.log(hero);
> });
> ```

> [3번째]
> ```javascript
> // forEach(파라미터) 에 바로 화살표 함수를 넣기
>
> superheroes.forEach((hero) => {
>   console.log(hero);
> });
> ```

> [4번째]
> ```javascript
> // 더 축약 버전
>
> superheroes.forEach((hero) => console.log(hero));
> ```


#### 2. map
- 배열안의 원소를 변환할 때 사용한다.

> [for문을 사용했을 때]
> ```javascript
> const array = [1, 2, 3, 4, 5, 6, 7, 8];
> const squared = [];
> for( let i = 0; i < array.length; i++){
>      squared.push(array[i] * array[i]);
> }
> console.log(squared); //[1, 4, 9, 16, 25, 36, 49, 64]
> ```

> [forEach문을 사용했을 때]
> ```javascript
> array.forEach( i => { //숫자 i에 대하여
>     squared.push(i * i); //squered에 push를 한다.
> })
>
> console.log(squared); //[1, 4, 9, 16, 25, 36, 49, 64]
> ```

> [map을 사용했을 때]
> ```javascript
> const array = [1, 2, 3, 4, 5, 6, 7, 8];
> const squere = n => n * n ; //파라미터 n에 대한 함수 하나 생성
> const squered = array.map(squere); //생성된 함수를 map
>
> console.log(squered); //[1, 4, 9, 16, 25, 36, 49, 64]
> ```

> [map을 사용했을 때 - 더 간추리기]
> ```javascript
> const array = [1, 2, 3, 4, 5, 6, 7, 8];
> const squered = array.map(n => n * n); //함수 자체를 넣어준다.
>
> console.log(squered); //[1, 4, 9, 16, 25, 36, 49, 64]
> ```

```javascript
const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text); // map함수의 파라미터는 각 item을 가리킨다.
console.log(texts); //[ 'hello', 'bye' ]
```
- 배열 안에 원소를 변형할때 사용한다.
- 일정한 형식의 배열을 다른 형식으로 바꿔야 할 때 쓰인다.
- 사본을 반환하며 원래 배열은 바뀌지 않는다.

```javascript
const cart = [{name : "widget", price: 9.95}, {name : "gadget", price: 22.98}];
const names = cart.map(x => x.name);
// const name = cart.map(function (x){ return x.name });
const price = cart.map(x => x.price);
const discountPrices = price.map(x => x*0.8);

console.log(names);
console.log(price);
console.log(discountPrices);

// [ 'widget', 'gadget' ]
// [ 9.95, 22.98 ]
// [ 7.96, 18.384 ]
```
- 콜백함수는 각 요소에서 호출될 때 요소 자체와 요소 인덱스, 배열 전체를 매개변수로 받는다.
ex) 상품과 가격이 따로 저장되어 있는 두 배열을 객체로 결합해보기
```js
const items = [ 'widget', 'gadget' ];
const prices = [ 9.95, 22.98 ];
const cart = items.map((x, i) => ({name : x, price: prices[i]}));
```


#### 3 forEach vs. map
`**근본적으로 return이 있는지/없는지**`
```tip
  - 단순 반복일 경우 : for() 사용
  - 배열을 순회하려면 : forEach()
  - 배열 순회 후 새 배열을 얻고 싶을 때 : map()
```

```
1. currentValue(배열 원소의 값) - 처리할 현재 요소
2. index (현재 요소의 인덱스) - 처리할 현재 요소의 인덱스
3. array (현재 배열) - 호출한 배열
4. thisArg - callback실행 할 때 this로 사용할 값
```


[map( ) ex]
- 배열의 각 요소에 대해 callback을 실행하고 실행결과를 모은 새 배열을 리턴합니다.
```
array.map(callback(currentValue[, index[, array]])[, thisArg])
```
  - 목록을 반복하고 해당 목록의 각 멤버들을 변환한다.
  - 변환 된 멤버와 동일한 크기의 다른 목록을 반환한다.
  - 새로운 배열을 반환
  - 이전 배열의 수정된 형태를 얻으려면 사용

[forEach( ) ex]
- 배열의 각 요소에 대해 callback을 실행합니다.
```
array.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```
  - 목록을 반복하고 각 목록 구성원에 부작용이 있는 일부 작업을 적용 한다.
  - 아무것도 반환하지 않음
  - 이전 배열의 수정된 형태를 원하지 않음

[console.log 출력해보기]
```javascript
const animals = ["lion", "tiger"];
animals.forEach(animal => {
    console.log(animal);
})

console.log(animal);
//lion
//tiger
//[ 'lion', 'tiger' ]


const animals = ["lion", "tiger"];
aniamlsMap = animals.map(animal => {
  console.log(animal);
});
console.log(aniamlsMap); // [undefined, undefined]
// [콘솔 출력 결과]
// lion
// tiger
// [undefined, undefined]
```
- forEach()는 배열을 순회하면서 각 원소들을 출력한다.
- map()은 배열을 순회하면서 각 원소들을 출력한다. 단, forEach와 다르게 실행결과를 모은 새 배열을 리턴한다는 것
  - 별도 return이 없기 때문에 순회했던 개수만큼 undefined원소가 생겼다.


```javascript
const animals = ["lion", "tiger"];
aniamlsMap = animals.map(animal => {
  console.log(animal);
  return "my favorite animal is " + animal
});
console.log(aniamlsMap);

// [ 'myfavorite animal is lion', 'myfavorite animal is tiger' ]
```

#### 4. filter
- filter 배열에서 특정 조건을 만족하는 원소들을 찾아서 그 원소들을 가지고 새로운 배열을 만드는 것
- 요소를 걸러내어 배열로 true/false 반환, 없으면 빈 배열


```javascript
const arr = [4, 15, 377, 395, 400, 1024, 3000];
const arr2 = arr.filter( (n) => (n % 5 === 0))
console.log(arr2); //[ 15, 395, 400, 3000 ]
```


#### 5. reduce
##### [reduce( )]

- [출처 : Tech](https://m.blog.naver.com/wideeyed/221877924629)
-  배열의 각 요소에 대해 callback을 실행하며 `단 1개의 출력 결과`를 만든다.

```
array.reduce(callback(accumulator, currentValue[, index[, array]] )[, initialValue])
```
  - 배열 원소를 입력으로 하여 1개의 수치 또는 문자열 또는 배열 또는 딕셔너리를 생성한다.
  - 그래서 "줄이다"는 의미의 reduce 라는 이름을 얻게되었다.
  - return값이 숫자든 배열이든 객체든 하나의 값으로 return 된다.

##### [reduce의 특징 정리]
- 콜백 함수를 받는다.
- reduce가 받는 첫 번째 매개변수는 배열이 줄어드는 대상인 accumulator
- 두 번째 매개변수부터는 콜백의 순서대로 (currentValue[, index[, array]])
- return받을 accumulate(누적된 값)의 초기값을 지정해줘야 한다.


##### [reduce의 실행 방식]
```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```
  - 1. 초기값 0 이 accumulator가 된다.
  - 2. current값으로 numbers의 인덱스 값들이 하나씩 온다. (즉 첫번째는 1이 들어옴)
  - 3. ` => accumulator + current` 0 과 1이 더해져서 누적된 값은 1이 된다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
```
[](./../../assets/img/NhagmTP.png)



##### [reduce를 이용해 합산해보기]
  ```js
  let total = [1, 2, 3, 4, 5].reduce(( acc, curr ) => acc + curr,  0);
  console.log(total) // 결과값: 15
  ```

  ```js
  let total = [ {quntity : 1}, {quntity: 2}, {quntity : 1}].reduce(
      (acc, cur) => acc + cur.quntity, 0
  )
  console.log(total); //4
  ```

##### [평균값 구하기]
  ```js
  const numbers = [1,2,3,4,5];

  const avg = numbers.reduce((accumulator, current, index, array) => {
      if(index === array.length -1) { // (index는 4이고 array의lenght는 5 ) 만약 4일 경우
          return (accumulator + current) / array.length;
      }
      return accumulator + current;
  }, 0)
  console.log(avg); //3
  ```
  - index는 각 원소가 몇번째 아이템인지 알려준다.( avg의 index는 0, 1, 2, 3, 4)
  - array는  현재 처리하고 있는 배열 자신을 의미한다. (numbers)


## 7. 객체지향프로그래밍 (OOP)

### 자바스크립트 생성자(Constructor)함수
```
`객체 생성자란?`
- 함수를 통해서 새로운 객체를 만들고 그 안에 넣고싶은 값 또는 함수를 구현 할 수 있도록 해준다.
- 객체 생성자 함수를 작성할 때에는 관례상 이름의 첫 문자만을 대문자로 작성한다.
- 생성자 함수를 가지고 새로운 객체를 만들 때는 new라는 키워드를 사용한다.
- js에서 생성자 함수가 **class 역할**을 대신 한다.
```

```javascript
function Person(name, age, hasjob){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(this.name + ' said "hello"');
    }
    this...
}
```
▼  실제 사람 객체를 만들기 : 생성자 함수를 바탕으로 new키워드를 사용해서 호출한다.
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(this.name + ' said "hello"');
    }
}

const p1 = new Person('dabin', 30);
const p2 = new Person('bongsun', 50);

console.log(p1);
console.log(p2);

p1.sayHello();
p2.sayHello();

 - p1, p2는 생성자를 바탕으로 2사람을 만들었다.
 - 그리고 이 객체들은 공통적으로 `sayHello`라는 메소드를 갖고 있다.
```
1. Person의 매개변수들을 this에 저장한다. (this는 바로 생성자 함수 자신을 가리킨다.)
2. 이렇게 this에 저장된 것들은 new를 통해서 객체를 만들 때 적용 된다.


### 프로토타입(prototype)
```
`프로토타입이란?`
- prototype 객체는 사전 그대로 원형을 뜻한다. 본래의 모습
- 같은 생성자로부터 만들어진 객체들은 모두 같은 원형 객체를 공유한다.
- ex) Persono의 prototype객체에 sayHello라는 메소드를 넣으면 Person 생성자로 만든 모든 객체는 이 메소드 사용 가능
- prototype은 모든 객체가 공유하고 있어서 한 번만 만들어 진다. (<-> this는 객체 하나를 만들때 메소드도 발생하기에 메모리 낭비)
- 객체 생성자 함수에서 바깥으로 꺼내서 재사용 하도록 한다.
```

```
생성자함수명.prototype.[원하는키] = 코드
```
- 모든 함수에는 prototype이라는 특별한 프로퍼티가 있다.
- 일반 함수에서는 사용할 일이 없지만, 객체 생성자로 동작하는 함수에서는 프로토타입이 중요하다.
  - new 키워드로 새 인스턴스를 만들었을때 새 객체는 prototype 프로토타입에 접근할 수 있다.
  - 객체 인스턴스는 생성자의 prototype 프로퍼티를 `__proto__`프로퍼티에 저장한다.

[생성자함수와 prototype]

```
function Person(){
	this.hand = 2;
	this.body = 1;
	this.nose = 1;
}

var kim = new Person();
var lee = new Person();
console.log(kim.hand); // 2
console.log(lee.hand); // 2
```
▼ prototype을 사용해서 [객체 생성자 상속받기]
```
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
Person.prototype.sayHello = function() {
    alert(this.name + ' said "hello"');
};

const p3 = new Person('dabin', 30);
console.log(p3);

function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.sayHello = function(){
    console.log(this.sound);
}

const dog = new Animal('개', '고양이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');
```
- *클래스의 인스턴스는 모두 같은 프로토타입을 공유한다.*
- prototype에 메서드가 있다면 해당 클래스의 인스턴스 모두 프로퍼티나 메서드 접근 가능하다.
  - Person.prototype이라는 어떤 Object의 hand라는 속성을 공유하고 있다.
  - 위의 코드 처럼 생성된 객체의 수 만큼 변수가 저장되는 것이 아니라, 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype 이라는 Object를 공유하고 있다는 뜻



[Prototype Link]
- 기본적으로 Constructor(생성자)가 부여된다.
- new를 통해 객체를 생성하고, Prototype Object가 생성되서 이 Object와 함수가 가지고 있는 prototype 속성과 연결이 된다.
- kim은 __proto__ 라는 것을 가지고 있다. 자신을 생성 했던 함수가 가지고 있는 속성 즉, 자신의 부모의 속성들을 물려받은 것이다.
  - kim.hand 라는 의미는 부모인 Person.prototype이 가르키고 있는 Prototype Object의 속성 중 hand라는 속성을 가르킨다.



### Class
[참조 : 버미노트블로그](https://beomy.tistory.com/15?category=591557)
- 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 할 수 있게 해준다.
- 추가적으로, 상속도 훨씬 쉽게 해줄 수 있다.
- 함수와 마찬가지로 클래스 선언( class declarations )와 클래스 표현식( class expresstions )로 만들 수 있다.
- class 함수선언, 표현은 [Hoisting](https://beomy.tistory.com/7)이 되지 않는다.
- class 메소드는 class의 {} 안에 정의해야 하고, [strict mode](https://beomy.tistory.com/13)로 실행된다.


```js
class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
      say() {
        console.log(this.sound);
      }
    }

  class Dog extends Animal {
    constructor(name, sound) {
      super('개', name, sound);
    }
  }

  class Cat extends Animal {
    constructor(name, sound) {
      super('고양이', name, sound);
    }
  }

  const dog = new Dog('멍멍이', '멍멍');
  const dog2 = new Dog('왈왈이', '왈왈');
  const cat = new Cat('야옹이', '야옹');
  const cat2 = new Cat('냐옹이', '냐옹');

  dog.say();
  dog2.say();
  cat.say();
  cat2.say();

  console.log(dog);
  console.log(dog2);
  console.log(cat);
  console.log(cat2);

  // 멍멍
  // 왈왈
  // 야옹
  // 냐옹
  // Dog { type: '개', name: '멍멍이', sound: '멍멍' }
  // Dog { type: '개', name: '왈왈이', sound: '왈왈' }
  // Cat { type: '고양이', name: '야옹이', sound: '야옹' }
  // Cat { type: '고양이', name: '냐옹이', sound: '냐옹' }
```
- [extends] 특정 class를 상속 받는다는 의미
- [constructor] : 객체 생성자의 역할을 하고, 파라미터를 받아온다.
  - class 내부의 함수는 `메서드` 라고 부른다.
  - `메서드를 만들면 자동으로 prototype으로 등록이 된다.`
- [super()] : constructor에서 사용하는 super()함수
    - 함수가 상속받은 클래스의 생성자(constructor)를 가르킨다. (서브(자식) 클래스에서 상위 클래스를 호출할 때 사용)



#### 클래스 선언( class declarations )
```
class foodRestaurant{
    constructor (name){
        this.name = name;
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand)
    }
    print(){
        console.log(`${this.name}을 파는 음식점들;`),
        console.log(this.brands.join(', '));
    }
}

const chicken = new foodRestaurant();
const pizza = new foodRestaurant();

pizza.addBrand('도미노피자');
chicken.addBrand('bbq');

console.log(pizza);
console.log(chicken);
```

- Class키워드와 함께 클래스의 이름을 선언
- 호이스팅이 되지 않는다.
- 클래스를 선언 한 후 객체를 생성할 수 있다.


#### 클래스 표현식( class expresstions )
```
// 클래스 이름이 없는 표현식
var Student = class {
  constructor(string, num){
    this.name = stirng;
    this.age = num;
  }
};
```



### 객체 프로퍼티 나열

## 8. map과 set
- **값들을 매핑하기 위한 새로운 데이터 구조**
  - map : 키와 값을 연결하는 객체와 비슷하다.
  - set : 중복을 허용하지 않는다는 점만 제외하면 배열과 비슷
  - 특정 상황에서 유용하도록 메소드가 추가된 거라고 생각

[키와 값을 연결하기 위해선 객체를 사용할 때 생기는 단점]
```
1. prototype 체인 때문에 의도하지 않은 연결이 생길 수 있다.
2. object안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아내기가 힘들었다.
3. key는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 열결할 수 없다.
4. 객체는 프로퍼티 순서를 전혀 보장하지 않는다.
```

### Map()
- `object를 변형한 것`
- object와 달리 순서가 기억이 된다. (넣은 순서대로 반복)
- 키가 문자열이 아니어도 된다.(key에 다양한 자료형을 허용) 객체도 가능하다.
- size를 항상 체크 가능하다.
- 편리한 메소드가 제공된다.

```javascript
const map = new Map([['zero', 'ZeroCho']]); //생성자에 배열의 배열을 넘기는 형태로 써도 가능.
map.set('hero', 'Hero');
map.get('zero'); // 'ZeroCho'
map.size; // 2
map.has('hero'); // true
map.has('nero'); // false
map.entries(); // {['zero', 'ZeroCho'], ['hero', 'Hero']}
map.keys(); // {'zero', 'hero'}
map.values(); // {'ZeroCho', 'Hero'}
map.delete('hero');
map.clear();
```

- **[Map에서 제공하는 속성과 메소드]**
  - `set`으로 설정하고, get으로 가져온다.
  - `get` 으로 역할을 알아본다. (맵에 존재 하지 않으면 undefined)
  - `has`로 해당 키가 있는지 확인한다.
  - `delete`로 기존 키를 지울 수 있다.
  - `clear`로 초기화 할 수 있다.
  - `forEach`로 내용물 반복할 수 있다.
  - `size` 로 내용물 크기를 바로 알 수 있다.
    - object는 직접 확인해야 한다.
  - `entries` : Map안의 `키:값` 쌍을 돌려준다.
  - `keys`: key 값만 돌려준다.
  - `values`: 값만 돌려준다.

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// map.keys()
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// map.values()
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// map.entries
for (let entry of recipeMap) { // recipeMap.entries()와 동일
  alert(entry); // cucumber,500 ...
}

// Map은 object와 다르게 property 순서를 기억함
```

### set()
- `array를 변형한 것`
- 중복을 허용하지 않는 데이터 집합이다.
- set[1] 이렇게 값을 하나씩 확인할 수는 없다.
- 넣어두고 전체를 반복하는 것이다.
- set에는 키가 없는 값이 저장된다.
- set의 장점은, 추가하려는 셋이 이미 있는지 확인할 필요가 없다. 이미 있어도 상관없다.
- **Array와의 차이점**
  - 중복 불가능
  - 중간 값 확인 불가능
  - 편리한 메소드 제공

```javascript
const roles = new Set(); //set 인스턴스 생성
console.log(roles.add('User')); //Set(1) { 'User' }
console.log(roles.add('Admin')); // Set(2) { 'User', 'Admin' }
console.log(roles.size); //2
console.log(roles.add('User')); //Set(2) { 'User', 'Admin' }
console.log(roles.size); //2
console.log(roles.delete('Admin')); //true
console.log(roles); //Set(1) { 'User' }
console.log(roles.delete('Admin'));//false
```
- **[set에서 제공하는 속성과 메소드]**
  - `new Set(iterable)` – iterable object를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 set에 넣어줌.
  - `set.add(value) `– 값을 추가하고 set 자신을 반환.
  - `set.delete(value)` – 값을 제거함. 호출 시점에 set의 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.
  - `set.has(value) `– set 내에 값이 존재하면 true, 아니면 false를 반환
  - `set.clear()` – set을 비움.
  - `set.size `– set에 몇 개의 값이 있는지 세어줌.

### Iteration
- [iterable 객체]
  - 반복 가능한 (iterable) 객체는 배열을 일반화한 `객체이다`.
  - 이터러블을 사용하면 어떤 객체에든 `for..of / forEach`반복문을 적용할 수 있다.

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

// (1) for..of
for (let value of set) alert(value);

// (2) forEach
set.forEach((value, valueAgain, set) => {
  alert(value);
})
```

## 9. 예외와 에러 처리


## 10. 이너레이터와 제너레이터
```
프로그래밍 언어에서 iterator 란 배열이나 유사한 자료 구조의 내부의 요소를 순회(traversing)하는 객체이다.
```
[Iterator]
- 이터레이터(Iterator) : `지금 어디 있는지` 파악할 수 있도록 돕는 `책갈피` 와 같은 개념.
  - Iterable: 객체의 맴버를 반복할 수 있는 객체
  - JS객체가 iterable하기 위해서는, object에 `[@@iterator]`메소드가 구현되어 있어야 한다.
  - 객체는 반드시 하나의 `Symbol.iterator` 만을 가질수 있다.

[Generator]
  - 제너레이터는 이터레이터에 의존하는 개념
  - 제너레이터는 쉽게 말해 Iterator의 반대쪽 (Iterator가 값을 읽어오기 위한 인터페이스라면 Generator는 값을 쓰기 위한 인터페이스란 측면 때문이다.)