---
sort: 1
---

# Jquery Basic

## jQuery.noConflict()
- 다른 라이브러리, 다른 버전의 jQuery와 충돌 방지하기
- jQuery는 $를 jQuery의 alias로 사용합니다. 그런데 다른 라이브러리에서 $를 함수나 변수로 사용한다면 jQuery가 제대로 작동하지 않을 수 있다.
- 이를 방지하는 방법은 jQuery에서 $를 alias로 사용하지 않도록 하는 것이다

- 1) jQuery.noConflict(); 넣으면 $를 다른 라이브러리가 사용하고, jQuery 코드를 만들 때는 $ 대신 jQuery를 사용한다.
```javascript
jQuery.noConflict();
```

- 2) $를 사용하고 싶다면 다음과 같이 한다.
```javascript
jQuery.noConflict();
jQuery(document).ready(function(){
    ///AAA
});
// BBB

 AAA에서는 jQuery가 $를 사용하고, BBB에서는 다른 라이브러리가 $를 사용한다.
```

- 3). jQuery의 alias를 다른 것으로 만드는 방법
    - 보호막을 만들어서 $ 사용을 변수로 가능하게 만든다.
```javascript
var jQ = $.noConflict();
    jQ(function(){
        alert('jQ 문자로 $ 대신 사용함.');
    });
```

- 4) 함수 표현식 IIFE(즉시실행함수) 개발자 개발 함수식 사용
    - 함수식을 만들어서 argument를 매개변수(parameter)에 전달하여 사용 가능하다.
```javascript
(function (parameter1, parameter2, parameter3){
    파라미터(parameter)
    alert('실행문');
})(argument1, argument2, argument3);
    아규먼트(argument)
```

- 즉시실행함수에서 ()이 함수표현식 안에서 argument로 jquery를 매개변수 $ 기호 사용
    - jquery를 사용할 때, $ 달러의 의미를 jqeury에서만 사용하겠다는 의미가 내포되어 있다.
    - $ 달러 자체를 아예 함수의 매개변수로 선언을 하는 것.
    - 함수 안에서 $ 달러의 의미는 jquery의 객체로 사용이 된다는 의미이다.

```javascript
 라이브러리 전역 변수 충돌 방지
    ```
    (function($){
    })(jQuery);
    ```
```

## 익명함수와 선언적함수의 차이점
- [익명함수] : function(){}형태는 함수이지만 이름을 가지고 있지 않으므로 익명함수라고 부른다.
    - 이름이 없으므로 변수에 넣어서 사용해야 한다.
    - 익명함수를 먼저 선언한 후 호출을 할 수 있다. (함수 선언문 위에서는 실행 불가)
        - text1() <- 함수를 호출. 이 문장이 익명함수의 항상 뒤에 와야 한다.
        - var test1 = function(){}

- [선언적 함수] : function이라는 키워드를 사용하여 함수를 선언하는 것이다.
    - 선언적 함수를 호출할 땐 선언적 함수의 전에 와도 호출이 된다.
    - 선언적 함수인 경우 스크립트 태그를 실행하기 전 먼저 읽기 때문이다.
        - function test2(){}

## IIFE (Immediately Invoked Function Expressions) 즉시 호출(실행) 함수 표현식

1.  즉시 실행 함수는 함수 리터럴을 () 로 감싼 뒤 바로 실행하는 형태가 일반적이다.
    - ### 함수 리터럴 (Function Literal) = 익명함수
    - 자바스크립트에서 함수를 정의하는 표현식을 "함수 리터럴" 이라고 하고, 함수 리터럴은 아래 4개의 요소로 구성된다.
        - 예약어 function (필수)
        - 함수이름 (선택)
        - 매개변수 집합 (필수)
        - 함수 본문 (필수)

        ```javascript
        function add(a, b) {
        return a + b
        }
        ```

        ```javascript
        function (a, b) { return a + b }
        이름 없는 함수로도 작성하면 에러가 발생
        ```

2. 함수이름은 선택사항이라고 했지만, 이름 없이 정의하는 경우에는 아래 조건이 충족되어야 한다.
    - 함수를 할당 받을 변수를 지정
    - 이 함수를 즉시 호출
    ```javascript
    const add = function(a, b){return a + b};
    (function(a, b){
        return a + b})
        (1, 2); //3
    ```
- 함수 리터럴 표현식을 통해 즉시 실행 함수를 정의 할 수 있다.
- 그리고 즉시 실행 함수라는건 바로 위 코드처럼 즉시 실행되어 값으로 평가하는 함수를 의미한다.

3. 즉시 실행 함수의 다양한 표현식
   - 왜 ()로 감싸야만 할까? : function(){}과 같이 작성되면, js코드를 해석하는 이것을 선언문(statement)로 인지한다.
   - (문과 식의 차이점 : )
   - ()와 같이 괄호로 묶어주어 함수 선언문이 아닌 "함수표현식" 이라는 것을 명시적으로 나타내야한다.


4. 즉시실행함수를 쓰는 이유
   - 첫 로드 시 초기화 할 때 변수를 global하게 선언하고 싶지 않을 때
   - 변수에 함수를 이용해 즉시 값을 할당하고 싶을 때
       - 라이브러리 전역 변수 충돌 방지
    ```javascript
    (function($){
    })(jQuery);
    ```
### jqeuryEVENT

1) method 체인
- 메서드를 체인처럼 연결해서 작성하고 실행하는 방법
```javascript
$('선택자').methodA().methodB().methodC();
```
2).bind  ->  .on .off 이제는.bind 이벤트는 사용하지 않는다.
```javascript
$('#type').on('이벤트 정류' 할일);
//할일 : 임의함수 = function(){}

$('#type').on('mouseover', function(){
    //아이디 type의 배경색을 green
   $(this).css('background', 'green'); //event가 일어나는 그 요소 -> this
}).on('mouseout', function(){
    $(this).css('background', 'blue');
});
```

3. on메서드 생략하고 method chain을 이용한 animate적용
```javascript
$('#type').mouseover(function(){
   $(this).css('background', 'green');
}).mouseout(function(){
    $(this).css('background', 'blue');
});
```

4. ANIMATE
- 선택자.animate({속성:값, 속성:값},시간, 이징, 다른할일);
```javascript
$(this).animate({opacity:0, fontSize:'0px'},1500);
```
- 1)easing효과 : linear, swing
    - 다른 라이브러리를 활용하면 다양한 효과 가능 (jquery UI)

    [jquery Ui를 사용]
    - script src에서 ui.min.js 꼭!
    - 2가지 easing효과 외에도 여러 종류 이징효과 사용 가능
    - $(this).animate({opacity:0, fontSize:'0px'},1500,'easeInOutElastic');


- 2)다른할일 : function(){실제할일} - 익명함수(임의함수)
```javascript
$(this).animate({opacity:0, fontSize:'0px'},1500,'easeInOutElastic',  //앞의 애니메이트가 끝나면 할일
function(){
    $(this).animate({opacity:1, fontSize:'114px'},500,'swing');
});
```

- 3)animate는 수치만 바꾸는 것이 가능!
  - 메소드는 색(color)에 관한 속성을 제외한 거의 모든 CSS 속성을 사용할 수 있다.
  - background-color등 style중 수치 외 부분은 jQuery UI를 사용해야 한다.

- [주의]
  * .css() 메소드에서는 하이픈(-)으로 연결된 CSS 속성 명과 camelCase 방식으로 바꾼 속성 명을 둘 다 사용할 수 있다.
  * 하지만 .animate() 메소드에서는 camelCase 방식의 속성 명만 사용할 수 있다.
```javascript
   function(){
        $(this).animate({'backgroundColor' : 'blue'},500,'swing');
   });
```

- 4) animate의 stop
  - animate에는 이전에 하는 것을 멈춰야 한다.
  - strop은 true이기에 생략가능
```javascript
  function(){
    $('div').mouseover(function(){
            $(this).stop(true).animate({'backgroundColor' : 'green'},500,'swing');
        })
        .mouseout(function(){
            $(this).stop().animate({'backgroundColor' : 'blue'},500,'swing');
        });
   });
```

5. find / filter
- 공백이 있을 경우 find
- 공백이 없으면 filter
```css
  #images p span{} -> $image.find('span')
  #images p.strong{} -> $image.filter('strong')
```

6. focus / blur ,  focusin / focusout
- focusin, focusout : 버블링 발생함
- focus, blur : 버블링 발생안함
```html
<div class="parent">
  <input type="text">
</div>
```


#### 함수 선언식 - Function Declarations
    - 일반적인 프로그래밍 언어에서의 함수 선언과 비슷한 형식이다.
    ```
    function 함수명() {
    구현 로직
    }
    ```
      ```
      function funcDeclarations() {
      return 'A function declaration';
      }
      funcDeclarations(); // 'A function declaration'
      ```

#### 함수 표현식 - Function Expressions
    - 유연한 자바스크립트 언어의 특징을 활용한 선언 방식

      ```
      var 함수명 = function () {
      구현 로직
      };
      ```

      ```
      var funcExpression = function () {
          return 'A function expression';
      }
      funcExpression(); // 'A function expression'
      ```

#### 함수 선언식과 표현식의 차이점
- 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
- 함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

- 실행 시
```
function logMessage() {
  return 'worked';
}

var sumNumbers;

logMessage(); // 'worked'
sumNumbers(); // Uncaught TypeError: sumNumbers is not a function

sumNumbers = function () {
  return 10 + 20;
};
```

- 출력결과
```
Uncaugth TypeError : sumNumber is not a function
```
- 함수 표현식 sumNumbers 에서 var 도 호이스팅이 적용되어 위치가 상단으로 끌어올려졌다.
- 하지만 실제 sumNumbers 에 할당될 function 로직은 호출된 이후에 선언되므로, sumNumbers 는 함수로 인식하지 않고 변수로 인식한다.
* 호이스팅을 제대로 모르더라도 함수와 변수를 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상은 방지할 수 있다. *



#### hoisting
- 아래있는 선언만(을) 끌어올리는 현상을 호이스팅이라고 한다.
- 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언을 하는 것을 말한다.
- var 키워드를 사용하면 호이스팅 문제가 야기될 확률이 높다. (var를 상단에 쓰지 않아도 허락이 되는 부분)
- let 키워드는 먼저 선언을해야 사용이 가능 -> 호이스팅 문제 해결


```
- 정상적 출력
//함수 먼저
function hello(){
  console.log('hello1');
}
hello(); // hello1

//함수의 호출 먼저
hello2(); // hello2
function hello2(){
  console.log('hello2');
}
```

- 이렇게 함수 뿐만아니라 변수 또한 호이스팅
```
//선 사용

age = 6;
age ++;
console.log(age);

// 후 선언
var age = 6;
```


```
(var name; -> 선언만 위로 올라오는것이 호이스팅 이다.)
console.log(name); //dabin
name = "mark"
console.log(name); //mark
name = "dabin";


선언되지 않은 let으로 된 변수를 사용 할 경우 -> 사용 불가
console.log(name); //name is not defined
name = "mark"
let name = "dabin";
```

var 키워드를 상단에 선언 하지 않아도 사용할 수 있기에 호이스팅이 생기고 이러한 문법이
let에는 문제가 없다. 선언이 상단으로 간다.


https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/

.





## IIFE(immediately-invoked function expression, 즉시실행함수 표현식)
    - (function() { })()
    - 런타임 시에 즉시 호출되며 한번 실행 후에는 우리가 다시 호출할 수 없습니다.
### IIFE가 동작하는 방법
1. IIFE의 구조
```
function write() {
  document.write("Test");
}
write();
```
- 위 예시처럼 write()라고 호출해 주지 않으면 write 함수는 실행되지 않습니다. 그런데 만약 write() 없이도 write 함수를 실행시키고 싶다면, 어떻게 해야 할까요?


```
(function write() {
  document.write("Test");
})
```
- 우선 write 함수를 괄호로 감싸줍니다. 이렇게 하면, 해석기는 이 함수(function)를 함수식(function expression)으로 취급합니다.
(함수식으로 만들지 않은 채 function() { }(); 처럼 호출할 수는 없습니다. 함수식으로의 전환은 일종의 우회 공정이죠.)


```
(function write() {
  document.write("Test");
})();
```
- 그리고 write();처럼 뒤에 __`();`를 붙여 함수식을 호출__ 해 줍니다. 이렇게 짜여진 함수는 즉시 실행되는 함수식, 즉 IIFE가 되며, 우리는 document.write();가 올바르게 실행되었음을 확인할 수 있게 됩니다.


2. 언제, 왜 IIFE를 사용하죠?
3.





https://findawayer.tistory.com/entry/IIE%EC%9D%98-%EC%9D%98%EB%AF%B8%EB%8A%94











## 객체지향 이벤트방식
- 하나의 이벤트 다음 콤마(,)로 구분


// objectfundtion.js

// 객체 리터럴 함수 만들기 - 객체지향
;(function($){

    var txt='';
    var objFn = {
        // 리터럴 객체는 반드시 안에 생성
        a : 80,
        b : 90,
        c : ['멍멍', '야옹', '꿱꿱', "꿀꿀"],
        init : function(){  //intro function - 최초 로딩시 실행 할 함수
            this.slide();
            this.txtFn();
        }, //callback함수
        slide : function(){
            console.log('메인슬라이드!', this.a);
        },
        txtFn : function(){
            // 배열을 한꺼번에 출력하는 방법? 반복문 사용 - for
            for(i = 0; i <= this.c.length; i++){
            // for (i = 0; i <=3; i++){} 또는 for(var i = 0; i <= objFn.c.length; i++){
    /*
    반복문 for(변수 = 시작값; 변수 <= 종료값; 증감변수);
    반복문 변수를 i -> j -> k 로 자주 쓰임
    */      txt += '<p>' + this.c[i] + '</p>';
            }
            $('.output').html(txt);
        }
    }

    objFn.init();
    // 객체를 만들고 전체실행

})(jQuery);