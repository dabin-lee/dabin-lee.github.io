---
sort: 2
---

# 웹 접근성


## 1. alt와 title


```
<img src="이미지 주소" alt="이미지 설명">
<img src="penguin.jpg" alt="해변에 서있는 바위뛰기펭귄.">
```

1. alt 속성
- 'altemate' 대체하다 의 의미
- 이미지를 불러오지 못했을 때 이미지 설명을 대체로 불러온다.
- 웹접근성 : 시각장애인을 위한 웹페이지를 소리로 읽어주는 서비스에 해당

2. title 속성
- title은 alt특성을 적합하게 대체할 수 없다.
- alt의 값을 title에도 반복하는 것을 피해야 한다. (스크린리더기가 설명을 두 번 읽게 됨)
- 이미지가 설명을 필요로 하는 경우 `<figure>`와 `<figcaption>` 요소를 사용
- 새창으로 열릴때는 title로 새창 열림을 정의해 주어야 한다. (title="go to new window")



### `a` 요소의 접근성
- 왜 사용하는지?
  - `a` 요소는 웹 페이지를 이동하는 수단으로 매우 중요한 요소이기 때문에, 페이지를 접속하는 시각장애인은 스크린리더를 통해 `a` 요소만 모아서 읽기도 한다.<br> 그러면 문맥에 상관없이 `a` 요소들만 일괄적으로 읽게 되는데 이런 경우가 많다.<br> '여기'와 '이곳' 그리고 '방문하기'는 어디를  말하는 것인지, 이런 식의 작성이 접근성을 떨어트린다.
  ```
  링크 모아보기
  '뉴스페이지', '여기', '이곳', '방문하기'
  ```

  - '여기'와 같이 문맥 없이는 확인 불가능한 문구보다는 '뉴스 페이지 바로가기'와 같은 자세한 문구로 바꾸어 주는 것이 접근성을 높여준다.
  -  만약 부득이하게 안에 문구를 짧게 써야만 한다면, title 속성으로 부연설명을 적어주는 것도 좋은 대안이다.

### [alt]
```
<img src="news-1.jpg" alt="한 국회의원이 주민과 악수를 나누며 웃고있습니다." />
```

- alt 속성 사용시 유의사항 - 필수
- img 태그에 alt 는 필수
- alt는 단순 명료, 중복 제거
- **의미 없는 이미지는 alt="" 제공**
- **title 속성은 alt 속성을 대체할 수 없으니 주의! alt 없이 title을 적어선 안됨.**
- 명쾌하고 짧은 대체 텍스트를 제공
- alt 속성으로 담기 어려운 긴 내용은 longdesc 속성을 활용. (단, 긴 내용은 텍스트로 표현을 권장)
- 파일명을 대체 텍스트로 제공 지양
- 이미지 맵에 대한 대체 텍스트 제공
- 의미없는 이미지에는 공백으로 대체
- 의미를 제대로 파악할 수 없는 대체 텍스트 지양
- 의미있는 이미지에 무의미한 대체 텍스트 제공 지양
- '~ 하십시오.', '~ 됩니다.' 등 친절한 설명을 자제하고 간단 명료하게
- '링크', '여기', '클릭', '바로가기' 등의 목적지를 구체적으로 알려주지 않는 단어 사용하지 말자

```
  <p><img src="bullet.png" alt="블릿" /> 항목 1</p> <!-- X -->
  <p><img src="bullet.png" alt="" /> 항목 2</p> <!-- O -->
```

  - 스크린 리더에서 '블릿 이미지, 항목 1', '블릿 이미지, 항목 2' 이런 식으로 읽혀지게 되는 무의미한 내용
  - 이렇게 의미 없는 내용은 코드 두 번째 줄처럼 alt 속성을 선언만 하되, 값을 비워두어야 한다.
  - **단, alt 속성 자체를 쓰지 않으면 비 표준**

```
<a href="">
  <img src="thumb.jpg" alt="즐거운 여름 휴가" />
  <h2>즐거운 여름 휴가</h2>
</a>
```
  - img alt값과 아래 h2태그로 '즐거운 여름 휴가' 라는 말을 2번씩 반복하기에 의미없는 이미지 형태로 alt값을 비워두는것을 추천

```
<a href=""><img src="thumb.jpg" alt="" /></a>
<a href=""><h2>즐거운 여름 휴가</h2></a>
```
  - 하지만 a요소로 각각 싸여진 경우 img요소가 들어간 링크는 내용이 비어버리기에 alt값을 넣어줌. (이런 마크업은 비추!)

```
<h1 class="logo">
  <a href="http://www.bloodinfo.net/main.do" >
    <img src="/images/comm/logo.png" alt="대한적십자사 혈액관리본부">
  </a>
</h1>
```
  - img의 alt은 이미지 글자 그대로 표현 - 로고 자 빼기
  - a요소에 이미 alt값 정보 표시 되어있기때문에 title까지 넣는건 지나침. 접근성 상에서도 스크린리더가 두번 읽게 됨으로 좋지않음.

### [title]
  - title 속성은 참고 제목이다. alt 또는 링크 텍스트만으로 충분하지 않을 때 추가적인 설명을 제공하기 위한 속성이므로 꼭 필요한 경우에만 사용해야 한다.
  - 이동할 목적지에 대해서 좀 더 명확하게 이해할 수 있게 title를 제공해야 한다. (해당 요소의 제목과 같은 역할)
  - a 요소의 텍스트 또는 이미지 등의 콘텐츠가 링크 정보를 정확하게 제시하고 있다면, title 속성을 사용할 필요는 없다.
  - `<a>`요소는 앵커(anchor)로써, 문서 간의 연결, `URI` 참조가 주된 목적이다.
  -  title 속성은 해당 요소를 부연 설명해 주는 속성으로, id 속성처럼 모든 요소에서 사용 가능하다.

    ```
    1. <a href="sub01.html" target="_blank" title="서브페이지로 새창이동"><img src="sub01.jpg" alt="서브페이지"/></a> x
    2. <a href="sub01.html" title="서브페이지로 이동"><img src="sub01.jpg" alt="서브페이지"/></a> x
    3. <a href="sub01.html" ><img src="sub01.jpg" alt="서브페이지"/></a> o
    ```
    - 1번 2번은 alt속성이 있으므로 title을 제공하는 것은 중복된 정보 제공
    - 1번 target속성으로 새창으로 열림은 기계적으로 알 수 있는 것이므로 title속성 자체를 생략하는 것이 좋음
    - alt 또는 링크 텍스트만으로 충분하지 않을 때 title로 추가적인 설명할 것

    ```
    <a href="..." title="공지사항">더보기</a>
    ```
    - 링크에서 title이 유용한 경우의 예시
    - 더보기라는 링크 텍스트가 맥락 정보를 제공하지 않기 때문에 무엇을 더 보는 링크인지 title 속성으로 설명

    [차장님 피드백]
    ```
    1. _blank 사용 시 "새 창" 명시
    1번) target속성으로 새 창으로 열림은 기계적으로 알 수 있는 것이므로 title속성 자체를 생략하는 것이 좋음
    ```

    - :collision: => _blank 라고 마크업 되어 있으면 스크린리더가 해당 내용을 인식해서 정보를 제공해 주는게 기본적인 내용인데 문제는 스크린리더기도 종류별로 있어서 일부 스크린리더 에서는 해당 기능을 지원하지 않는 경우가 있기 때문에<br> _blank로 새 창 열림 할때는 title로 새 창 열림을 명시해 주어야 합니다.
    <br> ( 단 a태그 내 이미지 alt값 이나 텍스트로 새 창 열림이 명시되어 있으면 생략 가능 합니다.)


    ```
    <a href="http://www.bloodinfo.net/main.do" target="_blank" title="새 창">
    <img src="/images/comm/logo.png" alt="대한적십자사 혈액관리본부">
    </a>

    <a href="http://www.bloodinfo.net/main.do" target="_blank">
        <img src="/images/comm/logo.png" alt="대한적십자사 혈액관리본부 새 창 이동">
    </a>
    ```
    - 마크업 수정 예시


    ```
    <a href="https://www.facebook.com" target="_blank" title="facebook 새창열림">facebook</a>
    => <a href="https://www.facebook.com" target="_blank" title="새 창">facebook</a>
    ```
    - 링크 내 텍스트로 새 창 이동 사이트를 facebook이라고 명시 하고 있어서 간단하게 **"새 창"** 이라고만 사용 하면 됩니다.


## 2. target

| target 속성 | 내용                                                                    | 출력                                                             |
|-------------|------------------------------------------------------------------------|------------------------------------------------------------------|
| _blank      | 새 윈도우 창을 열어서 웹페이지를 연다. 기존의 창은 그대로 남겨져 있음.      | 새창을 띄운 후 출력                                                |
| _self       | 현재 윈도우 창에서 그대로 링크 된 웹 페이지를 연다.                        | 현재브라우저에 출력 기본                                           |
| _parent     | 현재 프레임의 부모 프레임에서 새 웹페이지가 열림.                          | 현재 브라우저를 포함하고 있는 상위 프레임에 출력                     |
| _top        | 최상위 프레임에서 열림. 현재 창에서 full window로 열기                     | 최상위 프레임에 출력                                              |
| framename   | iframe요소의 이름을 명시함                                               | 현재 윈도우가 아닌 다른곳에서 해당 문서를 볼수있도록 지정하는 것      |

* [frame - name 속성]
  * name 속성 : 프레임의 이름에 붙이는 속성. 반드시 영문과 숫자의 조합으로 만들어야 한다. 이름사이에 여백과 특수문자는 사용 할 수 없다.
  * target = "framename" : frame태그의 name속성에 지정한 이름이 같은 frame에 보여짐
  * 웹 문서를 frame으로 나눌 때는 항상 'name'속성과 'target'속성을 지정

```
<frameset row = "*, *">
    <frame src="1.html" name="top">
    <frame src="2.html" name="right">
</frameset>
<p><a href="http://www.naver.com" target="right">네이버</a></p>
```

- _blank title : _blank를 사용한 경우, "ooo 사이트 새창으로 이동" 과 같이 새창이 열림을 명시적으로 말씀해 주는 바람직 합니다.
- target="_blank"를 사용한 경우 스크린리더에서 "새창열림"으로 인식가능 하므로, title에 "새창열림"을 적지 않아도 관찮습니다.
- 하지만 스크립트 등을 이용하여 새창을 만드는 경우는 반드시 "새창열림"을 명시해야 합니다.



## 3. button

### button, a, input 사용법

  - [`<a>`요소]
    - URI를 **‘연결‘** 하기 위한 버튼으로서 `<a href="#url">` 형식으로 마크업 합니다.

  - [`<button>`요소]
    - URI를 연결하지 않고 단순하게 사용자 인터페이스만를 ‘조작‘하기 위한 버튼으로서 `<button type="button">` 엘리먼트로 마크업 합니다.
    -  type을 명시하지 않으면 어떤 브라우저는 Form Submit 기능을 실행하기 때문에 반드시 type 속성을 button으로 지정해 주어야 합니다.
    - `<button> `요소는 클릭함으로써 이벤트를 발생시키는게 주된 목적
    - 기능을 구현하는 것은 (ex. 팝업창을 띄우거나 어떤 요소를 숨기거나 보이게 하거나 등등) button 요소를 사용
    - 페이지 내 기능 a > button 으로

  - [`<input>`요소]
    - 사용자의 입력을 서버로 '전송' 하기 위한 버튼으로서 `<input type="submit">`, `<button type="submit">` 엘리먼트로 마크업 합니다.


 - [button 태그 쓰는 예시]
    ```
    <ul class="btn-article">
        <li class="up"><a href="#" title="글자 크기 확대하기">글자 확대 버튼</a></li>
        <li class="down"><a href="#" title="글자 크기 줄이기">글자 축소 버튼</a></li>
        <li class="basics"><a href="#" title="글자 크기 기본">글자 기본으로 보기</a></li>
    </ul>

    <!--
        이런 경우가 a 대신 button type="button" 을 쓰라는 경우입니다.
        페이지 내의 기능이 들어간 경우.
    -->

    <ul class="btn-article">
        <li class="up"><button type="button">글자 확대 버튼</button></li>
        <li class="down"><button type="button">글자 축소 버튼</button></li>
        <li class="basics"><button type="button">글자 기본으로 보기</button></li>
    </ul>
    ```

- a 태그 하나만 적기 보단 div, span, ul li 감싸주는게 css 관련
- 또는 아래와 같이 a > span 사용
  <br> (저렇게 a태그 하나만 써도 되긴 하는데 디자인이나 기능이나 후에 수정을 생각해보면 달랑 a 말고 div > a 쓰는게 수정하기에 편하드)
	- `<a href="#" title="전체 목록열기"><span>전체메뉴</span></a>`
-  이미지가 외부 주소이기에 잘못되었거나 서버에 문제가 생기면 이미지를 못 읽어오기에 alt속성이 해당 이미지를 대체하여 나타낸다.<br>
    (게시판 / blind 를 써서 긴 텍스트를 정리해주는 방법은 좋으나, 한 문장 정도의 글은 alt로 채워넣어도 된다는 점.)

<!-- 읽어보기 : http://library.gabia.com/contents/domain/3010 -->


### button, a, input 접근성
-  버튼의 목적을 명확하게 판단한 뒤 알맞는 엘리먼트를 사용하는 것은 접근성을 향상시켜 줍니다.

-  최근에는 Javascript를 지원하지 않는 브라우저 환경이 드물지만 되도록 Javascript에만 의존하여 기능을 수행하지 않도록 하는 것이 좋습니다.

-  특히 Link Button을 이용하여 Form을 전송하는 기능을 구현하면 Javascript를 지원하지 않는 환경에서의 상호 운용성을 확보하지 못하고 화면낭독기 장치를 이용하는 사람들의 접근성을 떨어 뜨리게 됩니다.

- Form 페이지의 전송 버튼을 ‘submit’ 버튼 대신 ‘a’  버튼으로 마크업 하는 경우 화면 낭독기는 HTML기반으로 내용을 읽어 주기 때문에 이것을 ‘~링크’라고 읽어 주고 시각장애인은 이것을 ‘~전송 버튼’이라고 확신할 수 없는 문제가 발생 합니다.
-  `<button onclick ="window.location.href='/page2'">continue</button>`

- javascript를 필요로 하기 때문에 스크린 리더기에는 접근성이 좋지 않음
버튼을 링크처럼 작동시키는 것은 잘못된 해결책이다.
* 링크를 사용하고 버튼처럼 보이도록 스타일을 지정해야 한다.


## 4. 탭 색인 생성 tabindex

  ```
  <p tabindex="0">p 태그</p>
  <span tabindex="-1">span 태그</span>
  <div tabindex="1">div 태그</div>
  ```

- div > p 태그 순서로 접근
- 0과 1은 tab탭으로 접근 가능합니다. 하지만 -1의 값은 tab으로 접근하지 못함
- a, button, input 태그 등이 tab의 접근이 가능하더라도 -1의 값을 가지면 접근을 차단한다.


### 포커스링
  - 출처 : https://nuli.navercorp.com/community/article/1132995
  - 접근성 좋은 포커스링은 어떻게 제공하는가?
    - 포커스링은 CSS 가상 선택자(pseudo Selector)중 하나인 :focus 로 모든 그래픽 기반의 브라우저에게 보편적으로 제공할 수 있다.
    - 파이어폭스의 경우, :-moz-focusring 선택자를 통해 제공이 가능

  - [가시성을 향상시켜 접근성을 높이기]
    - 초점을 받은 요소의 색상을 눈에 잘 띄도록 바꾸는 방법 사용
    - 최소 2px 정도의 두껍고 대비가 높은 색의 실선(solid)를 사용한 테두리 사용

##### :one:[outline 속성]
    - css의 outline 속성으로 선을 제공하는 방식
    - ex) button:focus,button {outline:solid 3px #0088ff;}
    - 장점은 보편적인 방법이기 때문에 모든 브라우저에서 무리 없이 동일한 디자인을 제공하기 수월하다는 점
    - border가 제공된 요소의 디자인을 변경하지 않고 동시에 사용할 수 있다는 장점
    - border-radius나 clip-path 등으로 요소의 모양을 변형한 요소에 대응할 수 없다는 치명적인 단점
    - outline 사용시 고려사항
      - 요소보다 낮은 높이 계층에 테두리가 부여되기에 콘텐츠 간격을 고려해야 한다.
      - 간격이 너무 좁은 연속된 콘텐츠에 outline으로 포커스링 제공할 경우 일부분이 콘텐츠 요소에 가려지게 된다.



##### :two:[border 속성]
    - outline 속성과 거의 유사한 방법, Border 속성을 사용하여 포커스링 테두리 스타일을 주는 방법
    - 테두리 속성이라 기존에 있던 테두리를 대체하는 것이 단점
    - border-radius 등의 형태를 변환하는 속성과 호환되어 형태에 맞는 포커스링을 제공할 수 있다.
    - __디자인상 테두리가 없는 링크(a) 요소와 같은 곳에 사용 시 적합한 기법__
      ```
      button:focus {
      outline:none;
      border-style:solid;
      border-width:1px 3px 3px 3px;
      border-color: #88dfff #228fbf #33bfff #228fbf;
      }
      ```
    - border 사용시 고려사항
      - 초점을 받은 요소의 크기가 늘어나 레이아웃 컨테이너의 크기를 벗어나 넓이가 맞지 않아 레이아웃이 의도와 다르게 표시되는 현상이 발생
      - border로 포커스링 제공 시 컨텐츠 크기 등을 반드시 고려 후 계산하여 디자인을 제공


##### :three:[box-shadow]
    - border와 시각적 비슷한 효과를 제공하는 방법
    - 한 번에 여러 겹의 색상을 사용 할 수 있고, __border와 outline이 동시에 사용 가능__
    - 반면에 border와 같이 한 면의 색상을 따로 주는 등의 디자인이 어려운 단점을 갖고 있다.
    - 실선(solid)을 제외한 border나 outline에서 제공하는 점선(dotted), 마루형 선(ridge), 대시 선(dashed) 등의 다양한 선 디자인을 구현하기 어려운 점
    - border-radius에도 대응이 가능한 기법이며, CSS3 속성이기 때문에 __구형 internet Explorer에서 작동하지 않는 점을 유의__
    ```
    button:focus {
    outline:none;
    border-style:solid;
    border-width:1px 3px 3px 3px;
    border-color: #88dfff #228fbf #33bfff #228fbf;
    }
    ```

## 5. focus & active
- :focus 요소가 현재 입력을 수신하도록 선택된 상태
- :active 요소가 현재 사용자에 의해 활성화 되고 있는 상태

## 6. name 과 value의 차이점
- name은 서버전송을 위해 꼭 필요한 필수 값
- value는 폼 필드에 기본적으로 입력을 해주는 값.


## 7. label의 관해서
- label태그?
- label은 for속성과 id속성을 명시함으로써 연결해주는 방식을 의미한다.
- 스크린 리더기와 같은 통신 기기가 label태그를 통해 연결된 input 태그를 인식한다.
- 명시적, 암시적 label

```
// 명시적
<label for="name">이름</label>
<input type="text" id="name"/>

// 암시적
<label>
	이름 <input type="text" id="name"/>
</label>
```

## 8. form

- input 요소를 특정 페이지로 전송하는 역할
- form안에는 하나의 submit만 존재
- 양식과 button이 모두 form 안에 포함되어야 한다.

## 9. dl dt dd

- `<li>` 사이에 br이 들어가면 안되는 거 처럼
- `<dd>` 사이에 br 태그 들어가면 안되어요.
- `<dl><dt></dt><dd></dd></dl>` 는 세트잖아요.

<!--
    button type="button" : 일반 버튼 사용자 ui
    button type="submit" : 데이터 서버 전송을 위함
-->



## 10. IR 기법
- IR이란? (Image Replacement)
  - 이미지를 볼 수 없는 사용자에게 적절한 대체 텍스트를 제공하는 것

### 1) IR 기법소개
    - 배경 이미지로 처리한 의미 있는 아이콘, 로고<br>
    `<a href="/" class="logo_naver" data-clk="top.logo"> <span class="blind">네이버</span> </a>`
   - 이 외 고정된 이미지들 -> sprite이미지 이용
   - 전체가 이미지로 되어있는 이벤트 페이지의 경우
   - 광고 배너 같은 경우에는 데이터가 계속해서 변하기 때문에 서버에서 이미지를 내려 준다. 이런 경우에만 이미지를 사용한다.


### 2) 요소 숨김 처리
    - 시멘틱 마크업 -> css로 요소를 숨김처리 -> 스크린리더가 인식

- [BAD] 스크린 리더가 인식 못함
    - 1) visibility: hidden; //투명도를 0으로 주는 것과 동일하게 화면에서 사라지지만, 스크린 리더 인식 안함
    - 2) display: none; //요소가 아예 없는 것으로 인식
    - 3) width :0; height:0; font-size: 0; line-height:0; //요소의 사이즈가 0이 되면 스크린리더 인식 안함

- [SOSO] 다음으로 상황에 따라서 사용해도 되는 그런 방법들 - 레이아웃이나 성능 등의 상황에 따라서 이슈가 발생
    - 1) text-indent: -9999px; //전체 레이어의 크기가 지나치게 크게 잡힘: 성능 이슈
    - 2) opacity: 0; // 투명해진 것 뿐, 위치를 그대로 잡고 있기 때문에 단독으로 사용 불가능
    - 3) z-index: -1; // position 속성 추가해야 함: position: relative 때문에 성능 이슈가 발생

- [BEST] 스크린 리더가 인식하면서 레이아웃이나 성능 등에 영향을 미치지 않는 방법으로, 아래 속성들을 조합해서 사용.
    - HTML 전체적으로 많이 쓰이기 때문에 클래스로 처리하는 것이 효율적입니다.

        ```
        <span class="blind">숨김 텍스트</span>
        .blind {
            /* 눈에 보이는 부분을 제거1 */
            border: 0;
            padding: 0;
            margin: 0;

            /* 레이아웃에 영향을 끼치지 않도록 */
            position: absolute;

            /* 스크린 리더가 읽을 수 있도록 */
            width: 1px;
            height: 1px;

            /* 눈에 보이는 부분을 제거3 */
            clip: rect(0 0 0 0);
            overflow: hidden;

            clip: rect(1px 1px 1px 1px); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
            clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
            clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
            white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
        }
        ```

    - clip: rect(top right bottom left);
      - 네개의 좌표로 지정한 직사각형 모양대로 요소를 잘라내는 속성이다.
      - position 속성 값이 absolute 혹은 fixed인 요소여야하고, 만약 overflow 속성 값이 visible일 경우에는 적용이 되지 않는다.
      - 예시) https://www.codingfactory.net/10636

### 3) IS(Image Sprite)
- ★ 이미지들을 하나의 이미지로 배경 처리해서 최적화 시킬수 있는 기법
- 조각난 이미지 파일들을 하나의 파일로 병합 후 배경으로 처리해서 웹 문서 전송 속도를 높이는 기법. <br>
  이 때 의미가 있는 이미지는 전경에 상응하는 텍스트를 포함시켜서 접근성을 확보해야 하기 때문에 IR(Image Replacement) 기법이 함께 사용 된다.
  - 출처: https://freemi99.tistory.com/entry/Tip-IR기법과-IS기법 [꿈을꾸고있는]
d