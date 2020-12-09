---
sort: 2
---

# 알고 있으면 유용한 JS문법

## 1.  삼항연산자

## 2. 해체 할당

## 3. 화살표 함수
- **화살표 함수는 항상 익명입니다.**
- function 키워드는 생략
- [출처:ki_blank.log](https://velog.io/@ki_blank/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98Arrow-function#2-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-this)

  ```javascript
  // 일반 함수
  var foo = function () { console.log("foo") }; // foo

  // 화살표 함수
  var bar = () => console.log("bar"); // bar
  ```

### 화살표 함수의 기본문법

[매개변수가 없는 경우]
```javascript
var foo = () => console.log('bar');
foo(); // bar
```

[매개변수가 하나인 경우]
```javascript
var foo = x => x;
foo('bar'); // bar
```

[매개변수가 여려개인 경우]
  ```tip
  간단하게 한줄로 표현할 땐 "{}" 없이 값이 반환됩니다.
  "{}"를 사용하면 값을 반환할 때 return을 사용해야합니다.
  "{}"를 사용하지 않으면 undefined를 반환합니다.
  "{}"을 사용할 때는 여러줄을 썼을 때 사용합니다.
  ```

```javascript
var foo = (a, b) => a + b;
foo(1, 2); // 3

var foo = (a, b) => { return a + b };
foo(1, 2); // 3

var foo = (a, b) => { a + b }; //"{}"를 사용했는데 return이 없을 때
foo(1, 2); // undefined```
```

[여러줄 썼을 때 - {}를 쓰도록!]
```javascript
var foo = (a, b) => {
  var c = 3;
  return a + b + c
};
foo(1, 2); //6
```

[한줄에 썼을 때 - {}생략가능!]
```javascript
var foo = ((a, b) => console.log(foo(1, 2)));
```

[객체를 반환할 때]
```javascript
var foo = () => ( { a: 1, b: 2, c: 3 } );
foo(); // { a: 1, b: 2, c: 3 };
```

[콜백 함수에서도 사용]
```javascript
// ES6
var numbers = [1, 4, 9];
var oddArr = numbers.filter( x => (x % 2) !== 0 );
console.log(oddArr); // [1, 9]
```

### 화살표 함수 this
- `화살표함수는 this를 정의하지 않습니다.`
- 함수의 내부함수, 콜백함수에 사용되는 this는 window입니다.
- 일반 함수와 화살표 함수의 차이점이 있습니다. 일반함수가 전역 컨텍스트에서 실행될 때 this가 정의합니다.


## 4. spread 연산자 / rest 파라미터


### [spread 연산자]
- 객체 혹은 배열을 펼칠 수 가 있다.

#### 1) 객체에서 spread 사용!
```javascript

const slime = {
    name : '슬라임'
};
const cuteSlime = {
    ...slime, //기존 const slime의 정보가 들어옴
    attribute : 'cute'
};
const purpleCuteSlime = {
    ...cuteSlime, //기존 const cuteSlime 정보가 들어옴
    color : 'purple'
};

const greenCuteSlime = {
    ...cuteSlime, //기존 const cpurpleCuteSlime 정보가 들어옴
    color : 'green' // color값은 덮음
};

console.log(slime); //{ name: '슬라임' }
console.log(cuteSlime); //{ name: '슬라임', attribute: 'cute' }
console.log(purpleCuteSlime); //{ name: '슬라임', attribute: 'cute', color: 'purple' }
console.log(greenCuteSlime); //{ name: '슬라임', attribute: 'cute', color: 'green' }

```
- point : 기존의 것을 건들이지 않고, 새로운 객체를 만든다는 것

#### 2) 배열에서 spread 연산자를 `여러번` 사용
```javascript

const animals = ['고양이', '강아지', '토끼'];
const anotherAnimals = [...animals, '고슴도치', '페럿', ...animals];
console.log(animals); // ["고양이", "강아지", "토끼"]
console.log(anotherAnimals); //["고양이", "강아지", "토끼", "고슴도치", "페럿", "고양이", "강아지", "토끼"]
```




### [rest 파라미터]

```warning
rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다르다.
rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.
rest는 객체와 배열에서 사용 할 때는 비구조화 할당 문법과 함께 사용됩니다.
```

```
정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있게한다.
```
  - 객체, 배열, 함수의 파라미터에서 사용 한다.
  - 연산자 `...`을 이용해서 함수의 파라미터로 작성된 형태이다.
  - 데이터를 배열로 전달 받을 수 있다.
  - argument가 여러개 있을 때 parameter를 추가 하지 않고, `...rest` 를 넣어준다.
- [출처: velopert](http://learnjs.vlpt.us/useful/07-spread-and-rest.html)
- [출처: jinwoo.log](https://velog.io/@chlwlsdn0828/Js-Spread-%EC%97%B0%EC%82%B0%EC%9E%90-Rest-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0)

#### [객체에서의 rest]
**`비구조화 할당과 함께 사용 됨`**
```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime} = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);
```

#### [배열에서의 rest]
- 배열 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣는다.
-  주의! 배열에서 rest는 맨 마지막에 와야 한다.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one); //0
console.log(rest); //[1, 2, 3, 4, 5, 6]
```

#### [...rest 는 배열이기에 관련 API 사용가능]
[참조 블로그](https://sheldhe93.tistory.com/13)

```javascript
function fun(...rest){
  rest.forEach((e) => {
    console.log(e);
  })
}

fun(1, 2, 3, 4, 5);
//1
//2
//3
//4
//5
```

#### [함수에서의 rest]
   - 함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 매우 유용하다.
   - 함수의 인자에서 spread연산자를 사용

```tip
인수(Argument)와 인자(Parameter, 매개변수) 의 차이점

function subtract(x, y){ //여기서 x, y는 파라미터
  return x - y;
}
const result = subtract(1, 2)// 파라미터로 쓰여지는 값 : 인자
```

[배열 메소드와 함께]

```javascript
function sum(...rest){
    return rest.reduce((acc, current) => acc + current, 0)
}
    const result = sum(1,2,3,4,5,6,7)
    console.log(result) // 28
```

```tip
Spread 연산자는 연산자의 대상 배열 또는 이터러블(iterable)을 "개별" 요소로 분리한다.
(이터러블(iterable)은 Array, String, Map, Set, DOM구조다.

iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블이라고 생각하면 된다.
```


### rest와 spread 혼동
- rest는 함수 선언의 파라미터에 spread(...)연산자를 이용해서 인자를 통해 배열로 데이터를 전달 받는 것이고, 함수 호출문의 파라미터에 spread(...)연산자를 이용해서 호출하면 배열이 해당 매개변수로 각각 매핑되는 것은 다르다.

```javascript
//[rest]
function foo(para, ...rest){
    console.log(para); //1
    console.log(rest); //[ '이것은 rest1', '이것은 rest2', '이것은 rest3' ]
}
foo(1, '이것은 rest1','이것은 rest2','이것은 rest3');


//[spread]
function bar(x, y, z){
    console.log(x); //1
    console.log(y); //2
    console.log(z); //3
}
bar(...[1, 2, 3]);
```


## 5. Scope
[SOCPE](https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e)

- 1) 전역변수와 지역변수
  - 전역(global)변수를 만드는 일은 최대한 지양해야한다.
  - 전역변수란 자바스크립트에서 제일 바깥 범위(함수 안에 포함되지 않은)에 변수를 만드는 것인데, window 객체에 변수를 만드는 것이다.
  - 지역 변수는 함수 안에 들어있는 변수를 의미한다.

- 2) 스코프(Scope)
- 정적스코프 (렉시컬 스코핑(lexical scoping))
- 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(`상위 범위에서`)에 있는 변수를 계속 참조하게 된다.

## 5.Getter Setter 함수

1. 프로퍼티의 종류
- 데이터 프로퍼티(data property) : 값을 저장하기 위한 프로퍼티. 일반적으로 사용하는 프로퍼티는 데이터 프로퍼티이다.
- 접근자 프로퍼티(accessor property) : 값이 없음. 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티. 접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당한다. 그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보인다.

```
get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
```
- Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있다.
- Getter 함수는 특정 값을 `조회 할 때` 우리가 설정한 함수로 연산된 값을 반환한다.

```javascript
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum); //sum 함수가 실행됩니다. 3
numbers.b = 5;
console.log(numbers.sum); //sum 함수가 실행됩니다. 7
```


```javascript
const dog = {
    _name : '멍멍이',
    get name (){
        console.log('_name을 조회합니다.');
        return this._name;
    },
    set name(value){// parameter를 무조건 설정해줘야 한다.
        console.log('이름이 바뀝니다 ' + value);
        this._name = value;
    }
};

// 값과 함수의 이름은 똑같을 수 없다.
// 하지만 get, set함수 이름은 동일할 수 있다.

console.log(dog._name); //멍멍이
console.log(dog.name); //_name을 조회합니다.

dog.name = '망고';
console.log(dog.name);

//이름이 바뀝니다 망고
//_name을 조회합니다.
//망고
```