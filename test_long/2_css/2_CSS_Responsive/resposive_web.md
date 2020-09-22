---
sort: 1
---


# 반응형
- Responsive Web Design, (**rwd**)


## viewport에 대한 이해
- VIEWPORT란? : 화면 상의 화상 표시영역을 뜻함.
  - pc와 mobile의 뷰포트는 서로 다름
  - pc : 사용자가 브라우저 창(visiblee area)의 크기를 조절하면서 뷰포트의 크기를 조절 할 수 있다. (스크롤로 나머지를 볼 수 있음)
  - mobile : 웹 브라우저 창(visiblee area)보다 크거나 작을 수 있다. 스크롤바, 창, 크기조절 버튼이 없다. 대신 상하좌우, 더블탭, 확대/축소를 통해 뷰포트 배율을 바꿀 수 있다.
- 뷰포트 크기 조절의 필요성 ? 다양한 디바이스 크기에서도 페이지의 너비나 화면 배율을 설정할 수 있다.



`viewport 조건 속성 파악하기`
```
<meta name="viewport" content="width=device-width", user-scalable="no", initial-scale=1>
```

|      속성     |           값           |        초기값       |                           특징                          |
|:-------------:|:----------------------:|:-------------------:|:-------------------------------------------------------:|
| width         | <viewport-length>{1,2} | 독자적 속성에 따름. | device-width라는 값을 넣는 것이 가능하다.               |
| height        | <viewport-length>{1,2} | 독자적 속성에 따름  | device-height라는 값을 넣는 것이 가능하다.              |
| user-scalable | no 또는 yes            | yes                 | 사용자가 브라우저의 확대축소를 가능하게 할 것인지 정의. |
| initial-scale | 1부터 10               | 1                   | 초기 확대값                                             |
| minimum-scale | 0부터 10               | .25                 | 최소 확소값                                             |
| initial-scale | 0부터 10               | 1.6                 | 최대 확대값                                             |


[meta name="viewport"]
- 뷰포트 선언
- viewport를 지정해주지않는다면, 기본적으로 웹페이지는 980px을 기준으로 렌더링.

[content="width=device-width"]
- 컨텐츠를 표현할 너비
- width속성은 뷰포트의 크기를 조정한다. width = 600등 또는 device-width와 같은 특정 값을 사용할 수 도 있는데, `device-width`는 `100%` 스케일에서 css픽셀들로 계산된 화면의 폭을 의마한다.
  - 높이에 따라서 크기와 위치가 변하는 요소들로 이루어진 페이지는 `height`와 `device-height` 값들을 사용할 수 있다.

[user-scalable="no"]
- 사용자 단말의 확대기능 (zoom in/out) 사용 유무
- `user-scalable` 속성은 사용자가 스케일을 조절할 수 있는지의 여부를 지정하며 값으로는 'yes' 또는 'no'를 지정한다 기본값은 'yes'지만, 대부분 'no'를 지정한다.
  - no로 설정 하면 `[input]`필드에 텍스트를 입력할 경우 웹 페이지가 스크롤되는 것을 막아준다.
  - user-scalable을 지정하지 않으면 설정없는 상태로 기본값 'yes'가 적용이 된다.

[initial-scale=1]
- 초기 화면 크기 설정(기본 꽉찬 화면)
- 사용자가 너무 극단적으로 화면 축소를 방지한다.
- 페이지가 처음 로딩될 때 줌 레벨을 조정한다. initial-scale=1는 보여지는 화면의 zoom up 정도를 1배율로 한다는 것으로 100%와 같다. 값을 키우면 보여지는 화면이 줌 되어 크게 보이게 된다.

[minimun-scale=1]
- 최소 화면 크기 설정 (기본값 : 0.25, 범위 0 ~ 10.0)
- 페이지가 처음 로딩될 때 줌 레벨을 조정한다. 값이 1일때는 CSS 픽셀과 기기 종속적인 픽셀 간의 1:1 관계를 형성한다.

[maximum-scale=1]
- 최대 크기 설정 (최대 배율 범위 : 0 ~ 10.0)


`[그 외]`
- 최근에 만들어진 많은 웹 사이트들은 viewport의 속성을 일일이 지정하지 않고 있다.
- 복잡한 설정일 수 록 새로운 디바이스 호환성을 고려하지 않을 수 없기 때문에 단순하게 처리하고 있다.

- [target-densitydpi=device-dpi]
  - 모바일 해상도로 맞춰서 보여줌(안드로이드)
- [apple-mobile-web-app-capable]
  ```
  meta name="apple-mobile-web-app-capable" content="yes"
  ```
  - 웹응용프로그램 전체 화면 작동 유무
  - content = "yes" 전체모드 작동함 / "no" 작동안함
- [apple-mobile-web-app-status-bar-style]
  ```
  meta name="apple-mobile-web-app-status-bar-style" content="black"
  ```
  - 웹응용프로그램을 위한 상태 막대의 스타일 설정
  - content="black" / "black-translucent" / "black-translucent"
- [format-detection]
  ```
  meta name="format-detection" content="telephone=no"
  ```
  - IOS 운영체제 / 전화로 호출 링크


```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
viewport의 width를 디바이스에 맞추고 초기 배율을 1.0으로 지정했으며, 다른설정은 지정하지 않음.
```

```tip
모바일화면을 위해 viewport 사용하기 : https://jongmin92.github.io/2017/02/09/HTML/viewport/
참고 : https://aboooks.tistory.com/352
참고 : https://developer.mozilla.org/ko/docs/Mozilla/Mobile/Viewport_meta_tag
```

---

## 반응형 기본적인 breakpoint
- MOBILE : ~ 767px
- TABLET : 768px ~ ( 1023px or 1199px )
- PC : ( 1024px or 1200px ) 이상
- (프로젝트에 따라 조금씩 변경해서 사용)


## @media_query
- media쿼리란? : 다양한 미디어 유형이나 장치에 따라, 서로 다른 스타일 규칙을 적용

### 기본문법
```
@media [only 또는 not] [미디어유형] [and 또는 ,콤마] (조건문) {실행문}
ex) @media only screen and (max-width:786px){width:100%}
ex) @media (max-width:786px){width:100%} : [only 또는 not] [미디어유형] 생략 가능
```

```css
@media 미디어타입 and (미디어특성){
   css코드
}
```

```css
@media screen and (max-width: 1200px){ //뷰포트의 최대 가로 너비 1200px일때 까지
   body{
       color : red;
   }
}

@media screen and (max-width: 1200px){ 1200px 이하일때
@media screen and (min-width: 1200px){ 1200px 이상일때
@media screen and (orientation : portrait){ //portrait: 세로가 긴형태 (세로가 가로보다 더 긴 상태가 됐을 때)
```

`축약ver ALL`
```css
@media (max-width: 1200px){ // 미디어 타입 생략과 and도 굳이 붙을 필요가 없음
   body{
       color : red;
   }
}
```


- [속성] 미디어 타입 - 생략이 가능함

| 타입   | 의미                             | 기본값 |
|--------|----------------------------------|--------|
| all    | 모든 미디어 타입에 적용          | all    |
| screen | 컴퓨터 화면, 타블렛, 스마트폰 등 | all    |
| print  | 인쇄 전용                        | all    |

- [속성] 미디어 특성

| 특성        | 의미                                                                   |
|-------------|------------------------------------------------------------------------|
| width       | 뷰포트 가로 너비                                                       |
| max-width   | 뷰포트 최대 가로 너비(__이하__) <br> 뷰포트가 설정한 값 이상 커질 수 없다. |
| min-width   | 뷰포트 최소 가로 너비(__이상__)                                            |
| height      | 뷰포트 세로 너비                                                       |
| max-height  | 뷰포트 최대 세로 너비(__이하__)                                            |
| min-height  | 뷰포트 최소 세로 너비(__이상__)                                            |
| orientation | 뷰포트 방향 (portrait), (landscape)                                    |

- orientation
- portrait -> /* 세로가 길어지는 상태  */ <br>
- landscape -> /* 가로가 세로보다 길어지는 상태로 변환*/


- [속성] 미디어 옵션 - (grid) options
- 정해져 있는 내용이 아님 / divece 종류에 따른 단위는 '기획, 디자인' 단게에서 결정하는 것이 효과적이다.


| 종류          | 디바이스         | 단위(px)    |
|---------------|------------------|-------------|
| Large Device  | DesktopS         | 1024px 이상 |
| Medium Device | Tablets          | 1024px 이하 |
| Small Device  | Tablets + Phones | 768px 이하  |

 - bootstrap에서 기본적으로 제공하는 device의 grid option : https://getbootstrap.com/docs/4.5/layout/grid/
- `respond.js` : IE 6~8 버전에서 미디어쿼리를 해석할 수 있도록 만들어주는 자바스크립트 라이브러리
- https://offbyone.tistory.com/121






### 미디어쿼리 적용방법

`[선언]`
- 1) css파일 내에 직접 media를 설정
  - css 안에서 breakpoint 분리하여 사용
```html
<link rel="stylesheet" href="style.css" />
```

- 2) HTML의 link태그에 media속성에 값을 설정
   - css에서 breakpoint 표기 따로 안하고 사용해도 무관
```html
<link rel="stylesheet" media="all and (min-width:320px)" href="style.css" />
```

- 3) css파일 내에서 import 해서 적용
  - css에서 breakpoint 표기 따로 안하고 사용해도 무관
```css
@import url(style.css) all and (min-width:320px);
```


`[작성순서]`
1. min을 사용할때는 반드시 작은 순서대로 작성 (min은 최소 또는 그이상이라 는 뜻으로, 점차 커지는 것을 의미하기 때문에)
```
@media (min-width:320px){실행문} << 스마트폰 / 모바일 핸드폰
@media (min-width:768px){실행문} << 테블릿 PC
@media (min-width:1024px){실행문} << PC 컴퓨터, 노트북
```

2. max 사용시 큰 순서대로 작성
```
@media (max-width:1600px){실행문}
@media (max-width:1024px){실행문}
@media (max-width:768px){실행문}
```

```tip
작업자들 마다 반응형은 mobile first가 우선이라는 사람도 있고 PC first가 우선이라는 사람도 있어 정답은 없습니다. <br>
실무에서는 전체 레이아웃이 한번에 나오는게 아니다 보니 pc 먼저 진행하고 이후에 mobile, tablet을 진행하는 <br>
경우도 다반사며 혼합해서 사용하는경우도 다반사입니다.
```

### 미디어쿼리 사용 전략
- 모바일 단말에서 float 스타일을 피하는 것
- flexble 디자인을 사용
- 여백을 줄이는 것
- 서체 크기 조절
- 네비게이션 메뉴 변경
- 휴대용 기기에는 불필요한 내용은 `display: none;`
- 스마트폰 화면에 맞도록 작게 표시하는 방법은 css 배경 이미지를 사용하는 것
- 자세한 내용 읽어 보기!! https://webclub.tistory.com/305
- [flexble images 체크 사항]
  - 원래 이미지 그 이상으로 확대되지 않도록 해야한다.
  - 단 폭을 기준으로 자동 확대시 화질 저하될 수 있다.
  - ex) 200px 이미지 사이드바 안에 image : width 100% / 300px 모니터로 확인하면 이미지가 늘어나서 화질 저하 됨
<!-- 2. 자바스크립트와 PHP를 이용하여 디바이스에 맞는 크기의 이미지를 전송하도록 하는 방법
  -  페이지를 스마트폰으로 보면 각 단과 이미지 너비가 데스크톱에서보다 훨씬 작게 줄어드는데, 화질 저하가 아닌 고품질 이미지 다운으로 인해 대역폭을 낭비한다.
  -  적응형과 자바스크립트를 이용해서 디바이스에 맞는 이미지 파일을 받게 하도록 한다. -->

- 비디오와 플래시 : max-width를 사용하여 그 바깥 태그 너비에 맞게 크기를 조정
```
img, video, embed, object{
  max-width : 100%;
}
```

## 가변형 레이아웃 (Fluid Layout)
- 사이트의 모든 요소를 상대적인 크기로 지정해서 브라우저 크기에 따라서 다르게 표시해주는 방법
- 그리드 시스템 : 화면을 몇 개의 column으로 나누어 요소들을 배치하는 것 (그리드를 이용해서 가변형 레이아웃을 많이 씀)

```tip
* 가변그리드 : http://blog.naver.com/PostView.nhn?blogId=syc0821&logNo=221474505823&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView
* 참고 : https://www.youtube.com/watch?v=BTNndpnQFw8
```


`**[고정형 레이아웃을 가변형으로 만드는 방법]**`
1. 요소의 너비를 백분율(%)로 바꾸기
   - 소수점 이하 자리가 많다면 한두 자리로 표시하고. 오차를 고려하여 실제 계산한 값보다 약간 작게 지정
2. 패딩과 마진을 백분율(%)로 바꾸기
3. 글자 크기를 em으로 바꾸기
   - 16px = 1em 이기 때문에 (px 값)/ 16 = em값
4. 이미지나 비디오가 있는 경우 크기 조절
   - max-width: 100% 해주면 브라우저 너비를 기준으로 항상 100%에 맞게 이미지 너비가 조절 됨.


`**[가변 그리드 공식]**`
- ex) 해상도 너비가 1920 일때 font-size:5vw; 일 때 브라우저에서는 96px 크기 이다.

```
(가변 크기로 만들 박스의 가로 너비 / 가변 크기로 만들 박스를 감싸고 있는 박스의 가로 너비 ) x 100 = 가변 너비 값
(가변 마진을 적용할 마진값 / 적용할 박스를 감싸고 있는 박스의 가로 너비 ) x 100 = 가변 마진 값
( 가변 패딩을 적용할 패딩 값 / 적용할 박스를 감싸고 있는 박스의 가로 너비 ) x 100 = 가변 패딩 값
( vw, vh, vmin, vmax 단위를 적용할 글자 크깃값 x 브라우저의 너빗값 ) / 100 = 카변 폰트 크기 값
```

`**[가변형 높이값]**`
1. 이미지를 만들어서 html과 css에 모두 적용 `max-width : "100%";`
```css
.background {
	width : 100 %;
	height : 0;
	padding-top : calc (300 / 1000 * 100 %); / * calc (이미지 높이 ÷ 이미지 가로 × 100 %) * /
	background : url (bg.jpg) center center / cover no-repeat;
}
```
- 반응형엘리먼트 계산식(‘target / parent value * 100′) 을 이용해도 같은 결과를 얻을 수 있지만,<br> 추후의 유지보수 또는 리뉴얼을 생각한다면 calc() 함수가 훨씬 더 효율적이라는 것을 알 수 있어요~!!

2. 정사각형일때 : padding을 이용하기 padding-top: 100%;
   - cover에 높이가 없는데 padding-top으로 %값 (%는 부모기준) 을 잡는다.
   - 즉 wrapper의 너비를 %로 가져온것이 되고 정사각형이 됨 (100%).
   - wrapper 에 max-width : 960px; / cover { padding-top: 100%; }
3. 원하는 너비, 높이 수로 하고 싶을때 padding-top: 비율계산값;
   - 비율계산 : 박스 높이 % 박스 너비 x 100
   - 750 % 960 x 100 = 78%
   - wrapper 에 max-width : 960px; / cover { padding-top: 78%; }

```html
<div class="wrapper">
    <div class="cover">
        <div class="cover-logo">
            <div class="show"></div>
        </div>
    </div>
</div>
```

```css
<style>
    .wrapper{
        max-width: 960px;
        margin : 0 auto;
    }

    .cover{
        padding-top:78%;
    }
</style>
```


`**[비율에 상관없이 가변적인 멀티미디어 요소 만들기]**`
- 기존의 웹사이트에서는 아무런 문제가 없었지만 브라우저의 비율에 따라 웹사이트의 구조가 늘어나거나 줄어드는 가변형 레이아웃에서 브라우저 너비에 맞게 이미지나 기타 멀티미디어 요소들도 가변적으로 작동하게 만들어 줘야 함.

```html
<span style="font-size: 11pt;"><!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width-device-width, initial-scale=1, minimum-scale=1, maxmum-scale=1, user-scalable=no">
  <title>Document</title>
  <style>
 /* @media all and (min-width: 320px){
    body{
      background:red;
    }
  }
  @media all and ( min-width: 768px){
    body{
      background: green;
    }
  }
  @media all and ( min-width: 960px){
    body{
      background: yellow;
    }
  }*/

  *{margin:0; padding: 0; font-size: 100%; }

    #wrap{
      width: 90%;
      margin: 0 auto;
      border: 4px solid #000;
    }
    img, video{
      width: 100%;
      max-width: 100%;
    }
    </style>
  </head>

    <div id="wrap">
      <div><img src="./img/web/visual-new.png" alt="visual-new"></div>
    </div>
</span>
```

```css
img,video{
    width:100%;
    max-width:100%;
    }
```
