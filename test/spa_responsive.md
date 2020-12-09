---
sort: 6
---

# spa사이트 피드백 정리

## June 8
1. section, article
   - section, header, footer  등 기본 레아이웃 개념은 잘 정의 되어 있습니다.
   - 추가로 article 태그를 넣으면 좋겠습니다. 어디가 좋을 지 추가해봐 주세요.

2. h1, h2, h3… 타이틀 태그
: h1은 사이트를 대표하는 최상위 타이틀로 보통 페이지 헤더의 로고에 주로 사용 합니다.
: 페이지의 모든 타이틀에 h3, h4, h5.. 타이틀 태그를 꼭 사용 해야 하는 건 아닙니다.
  `목록 요소 ( li태그 ) 안의 타이틀은 strong 으로도 많이 사용 합니다.`

3. form
- form 은 input요소를 특정 페이지로 전송해 주는데요.
- form 안에는 하나의 submit만 존재 합니다.
  - 이름, 전화번호, 날짜, 시간, 메모 ... 등을 하나의 submit으로 보내려면 하나의 form 안에 포함되어야 합니다.


4. link, button
- link, button은 목적에 맞게 사용하는게 좋습니다.
- [ button 속성값 ]
  - type="submit" : 폼의 전송 기능을 담당한다.
  - type="reset" : 폼 작성 내용을 초기화하는데 사용한다.
  - type="button" : 흔히 자바스크립트를 이용한 기능 구현에 많이 사용한다.

- <a> 요소는 앵커(anchor)로써, 문서 간의 연결, URI 참조가 주된 목적이고,
- <button> 요소는 클릭함으로써 이벤트를 발생시키는게 주된 목적입니다.
- `목적에 맞게 기본 링크들은 a 요소로 마크업하고, 기능을 구현하는 것은 (ex. 팝업창을 띄우거나 어떤 요소를 숨기거나 보이게 하거나 등등) button 요소를 사용합니다.`


## June 10

1. section__testimonials 이 영역을 article로 바꿨어요. 추천글이라서 별도 독립적인 부분이라고 생각해서 바꿨습니다. 그런데 section__blog부분도 article영역으로 바꿔도 되는지 궁금합니다.
=> 추천글을 article 영역으로 생각한건 좋은데요.
   시안에서 보면  section--Testimonials 영역에 이디게이터 표시가 있습니다.
   인디게이터가 있다는건 클릭할때 동일 구성의 다른 글들이 나온다고 생각 해야 곘죠.
   그러면 section__testimonials 자체를 article로 바꾸기 보다는 뼈대를 만들고  그 안에 각 내용을 article로 묵는게 좋을 것 같습니다.
   추천글 외에 service__cont, blog__cont 안의  각 내용도 article 로 적용해도 좋을 것 같습니다.

2. h1은 페이지에 한번만 사용
```
<h1>Beauty and success starts here.</h1> 은 시안에서는 section의 타이틀 개념으로 볼 수 있으니
<h2>가 더 맞을 듯 합니다.
```

3. form안에 버튼영역까지 포함해서 다 하나로 묶었는데, 그안에 input요소들은 label을 붙여야 하는건지 햇갈려요. 접근성을 위해서 붙이는걸 지향한다는 글도 봤는데 가끔 웹사이트 페이지 소스보면 label이 없는 input들이 많은거 같아요.
=> label의 사용예로
   http://www.samsungfund.com/retFundList.action
   "펀드명을 입력하세요." 검색 input 같이
   input 박스만 있는 경우는 label 없이  input에 title="펀드명 입력"을 추가해 주면 되구요.
   기본적인 체크박스, 라디오 버튼인 경우도 별도의 텍스트 없으면 title만 넣어 주면 됩니다.

   시안이나 ,
   https://osms.skbroadband.com/hub/logon.do?siteCd=SKBB&returnUrl=https%3A%2F%2Fwww.skbroadband.com%2FTidLogin.do%3FUURL%3Dhttps%3A%2F%2Fwww.skbroadband.com%2FMain.do%3F
   아이다, 비밀번호 이렇게 텍스가 있는 경우는 해당 텍스트들을 label로 연결해줘야 해요.

   라벨을 묶는 방식은 다빈씨같이
   <label>NAME<input type="text"></label> 이렇게 묶는 방법도 있고요.

   SKBB에서 처럼 명시적으로 for="input-01"를 지정해 주는 방법이 있어요.
   <label for="input-01">아이디</label>
   <input type="text" name="userid" id="input-01" value="" placeholder="아이디를 입력해 주세요" maxlength="20" onkeyup="checkkey();useridKeyup(submitform1);">

   다빈씨 방법이 간단하긴 한데
   대부분은 명시적으로 id 값을 연결해주는 방식을 사용 해요.

   체크박스나 라디오 버튼을 이미지화 해서 사용할떄는
   http://www.samsungfund.com/retFundList.action 에서 처럼 input은 숨기고 label에 이미지 처리 해서 사용 합니다.


4. main태그는 안넣어도 되는건가요?
- main 태그는 html5에 새로 추가된 태그로 "문서의 중요 컨텐츠"를 정의 합니다.

```
다빈씨가 원래 사용 하려고 한 것 처럼
<header></header>
<main></main>
<footer></footer> 로 사용 하면 되구요.
실무에서는 아직 사용을 많이 안하고 있기는 한데
( 아직도 div="header", div="main", div="footer" 쓰는 곳도 은근 많이 남아 있습니다. )
앞으로의 방향성은 <main></main>으로 구분 지어 주는게 좋습니다.
대신 main 태그 사용시 주의 사항은 숙지하고 사용 해야 합니다.
```

5. BEM으로 태그 작성했는데요. 예를들어 상단에 play버튼을 banner__summary—paly 이런식으로 (블록__요소—상태)
    만들었는데 이렇게 길게 클래스를 해도되나요??  클래스 만드는거에서 항상 시간이 오래걸리는거 같아요 ㅋㅋ
           저번에 부장님께서 퍼블리싱할 때 유의할 점 얘기해주셨을 때 급하게 적고 정리해봤습니다. 이부분을 참고하면서 보고 있는데요
           https://github.com/dabin-lee/ddbb/blob/master/CSS_Convention/html&css_note.md
           근데 예를들어서 section에는 class를 넣지 말라고 얘기해주셨거든요. (그런데 강의보다가 section에 클래스를 넣어서 혼돈이왔어요.)
           제가 이거 맞게 정리했는지도 한번만 봐주세요.
=>  작업해주신 클래스명은 전체적으로 생각 많이 하면서 작업해주셨어요.
    클래스명만 봐도 해당 영역이 직관적으로 정의 됩니다.
    BEM이 클래스명이 길어지는 단점이 있긴 합니다.

    현재 우리 회사 프로젝트에서는 실제로 css 방법론에 맞게 클래스명을 짓고 있지는 않아요.
    아직까지는 퍼블리셔의 업무가 주이다 보니 CSS 방법론에 부합하는 클래스명은 사용을 잘 안하고 있습니다.
    개념자체도 없구요.
    그래서 현재는 btn-more, btn_more ,  total_banner_area,  total-banner-area 형태이구요.
    실무 하다보면 바빠서 생각할 시간도 없어요. 그래서 단순하게 작업 하게 되는데

    그럼에도 다빈씨에게 클래스명을 자꾸 생각하면서 작업 하라는건 우리의 방향성이 front end 개발에 있어서 입니다.
    spa 과제 할때는 BEM 형식으로 클래스명 정의해보도록 해요.

    부문장님 과제 할떄는 일반적으로 사용하는 클래스명 방식 사용해보셔요.

    두 방식 모두 해보면서 이후에 우리가 사용하기 편한 방향으로 가이드 만들어 사용 하면 될것 같습니다.

    추가로 section태그는 header, footer, main같은 구조적인 태그라
    원칙적으로 클래스명 사용 안하는게 올바른 방식 입니다.
    작업하다보면 페이지에 하나의 section만 있는게 공통의 스타일을 잡다보면 클래스를 부여해서 스타일을 적용하고 있기는 합니다.
    저도 앞으로는 section에는 클래스 사용 안하는 방향으로 노력할께요.

# 수정 사항
1. 다중으로 사용된 h1 태그 정리
2. section--Testimonials 영역 인디게이터 고려하여 재구성
3. article 재구성
4. label 명시적으로 재구성
5. main 태그 재적용
6. section 태그 클래스 제거 후 section 내부 컨텐츠 div로 재구성해서 div에 클래스 주기
7. spa 과제 클래스명은 BEM 형식으로 유지
수정 사항 반영해서 3차 올려 주세요.


# https://github.com/dabin-lee/ddbb/blob/master/CSS_Convention/html&css_note.md
- Img관련 - html
http://blog.naver.com/pjh445/220017651378
https://www.codingfactory.net/10247
figure는 이미지, 도표. code 등의 내용들이 들어 갈 수 있어요.

- Img관련 - css
"bg이미지는 position값이 항상 5단위 10단위로 끊어지게"라는 의미는
https://skbroadband.com/Main.do
https://skbroadband.com/common/img/vin/common/icon_color_set.png
이렇게 각 요소의 배경 이미지를 스프라이트 이미지로 사용 할때  각 위치값을 5단위, 10단위로 끊어지게 구성 하라는 뜻입니다.
.banner_wrap .ico.type12 {
    background-position: -100px -100px;
}
.banner_wrap .ico.type21 {
    background-position: 0 -200px;
}

- CSS 정리
중요도 : !important > HTML에 Style > #id > .class, :class > 태그이름 > 상위 객체에 의한 상속된 속성
해당 순서는 중요도 보다는 css가 적용 되는 우선 순위로 봐주세요.


## 09 / 21 반응형 피드백

1. 반응형 기본적인 breakpoint
   - MOBILE : ~ 767px
   - TABLET : 768px ~ ( 1023px or 1199px )
   - PC : ( 1024px or 1200px ) 이상
   - 프로젝트에 따라 조금씩 변경해서 사용

2. 반응형 방식
- 1) PC first ( max 사용 : 큰해상도 -> 작은해상도 순으로 )
 기본 pc style ....  //PC
 @media (max-width:1023px){실행문} //TABLET 1023px 이하에서 실행
 @media (max-width:767px){실행문} //MOBILE 767px 이하에서 실행
 ...

- 2) mobile first ( min 사용 : 작은해상도 -> 큰해상도 순으로 )
 기본 mobile style .... //MOBILE
 @media (min-width:768px){실행문}  //TABLET 768px 이상에서 실행
 @media (min-width:1024px){실행문} //PC 1024px 이상에서 실행

 다빈씨가 넣어준 순서는  PC first 입니다.
 <link rel="stylesheet" href="./css/main.css"><!-- PC -->
 <link rel="stylesheet" media="(max-width: 1139px)" href="./css/main_pad.css"> <!-- TABLET -->
 <link rel="stylesheet" media="(max-width: 767px)" href="./css/main_mobile.css"> <!-- MOBILE -->
 각 css 안에서도 더 세부적으로 breakpoint 분리하여 사용해도 됩니다.

 작업자들 마다 반응형은 mobile first가 우선이라는 사람도 있고 PC first가 우선이라는 사람도 있어 정답은 없습니다.
 실무에서는 전체 레이아웃이 한번에 나오는게 아니다 보니
 pc 먼저 진행하고 이후에 mobile, tablet을 진행하는 경우도 다반사며
 혼합해서 사용하는경우도 다반사입니다.


3. mediaquery
             -  기본문법 : @media [only 또는 not] [미디어유형] [and 또는 ,콤마] (조건문) {실행문}
        ex) @media only screen and (max-width:786px){width:100%}
       ex) @media (max-width:786px){width:100%} : [only 또는 not] [미디어유형] 생략 가능

    - 미디어쿼리 적용방법
                           * <link rel="stylesheet" href="style.css" />
                             css파일 내에 직접 media를 설정

                           * <link rel="stylesheet" media="all and (min-width:320px)" href="style.css" />
                             HTML의 link태그에 media속성에 값을 설정

                           * @import url(style.css) all and (min-width:320px);
                              css파일 내에서 import 해서 적용


4. % 레이아웃
  모든 요소를 %로 잡을 필요는 없습니다.
  브라우저 사이즈에 따라 자연스럽게 사이즈 조절이 같이 되어야 하는 레이아웃에 %를 사용 하면 되구요.
  특정 breakpoint에서만 사이즈 조정이 되는 요소는 고정값을 사용해도 됩니다.
  EX) 상단 배너에서 "RESERVED NOW" 버튼과 "Watch our story" 링크는 기본 고정값
      team__manager sns 링크 버튼 고정값


5. 단위
             - px : 절대값
             - em : 해당 태그가 상속받고 있는 크기에 비례하는 상대적인 길이
                           : <div class="a"><p>내 사이즈는?</p></a>
                           : .a {font-size: 12px}
                           : p {font-size: 1.2em; padding: 1em;}
                              => p는 font-size는 .a에서 폰트값을 상속 받고 있으니 12*1.2 = 14.4px
                              => p의 padding은 p의 14.4px에서 상속 받고 있으니 14*1=14.4px;
             - rem(root em) : 최상위 요소인 html요소에 비례하여 크기를 가지는 상대적인 길이
                                                       : html에 별도 사이즈 지정이 없으면 기본 시스템 사이즈 {font-size: 16px;} 로 정의 (1rem = 16px;)
                                                        : html에 특정 사이즈를 지정하면
                                                        : ex) <div class="a"><p>내 사이즈는?</p></a>
                                                        : html {font-size:14px}
                                                        : .a {font-size: 10px}
                                                        : p {font-size: 2.0rem; padding: 1rem;}
                                                        => p의 font-size는 14*1.2 = 16.8px;
                                                           p의 padding는 14*1.0 = 14px

             - % : 해당 태그가 상속받고 있는 크기에 비례하는 상대적인 길이 (em과 동일)

             - 모바일 전용 vw, vh :  뷰포트의 너비값과 높이값에 상대적인 영향을 받는다. ( 레아이웃, 폰트 단위 모두 가능)
               vw : 브라우저 너비값의 1/100 ( 가로 760px * 1vw = 7.6px )
               vh : 브라우저 높이값의 1/100 ( 세로 600px * 1vh = 6px )

    반응형이든 적응형이든 특정 단위 하나만 통일해서 사용하는 것은 아니며
    모바일이나 반응형에서 무조건 상대 단위만 사용하는 것도 아닙니다.
    단 em보다는 rem이 계산하기 편하니 상대 단위 사용시에는 rem으로 사용하는게 더 나을 것 같습니다.

    단위 사용은 화면 구성을 어떻게 하느냐에 따라 작업자가 선택적으로 사용 가능 합니다.


6. 모바일 PSD 퍼블리싱 작업
             - 모바일에서는 작은이미지 사용시 해상도가 떨어져 보여서 보통 2배 이미지를 축소해서 사용.
               모바일 퍼블리싱 작업할때에는 원본 psd 1/2크기로 계산해서 작업합니다.
     : 보통 640, 720 기준으로 psd 넘어오면 320, 360 기준으로 퍼블리싱 작업

             - 모바일 요소는 짝수 구성이 기본입니다.
               ex) psd 전체메뉴 사이즈가 80px*80px 이라면 퍼블리싱에서는 40px*40px로 적용
               (레티나 디스플레이 대응은 현재는 예외로 하겠습니다.)

- 실제 반응형 업무시 pc, tablet, mobile 세 단계의 디자인 시안 (ex : psd) 받아야 함

             * 근래 사용하는 제플린, 어도비 XD같은 벡터(확대 축소에도 이미지가 깨지지 않음) 기반 프로그램에서는 png, jpg를 사이즈별로 다운받을 수 있어서
               모바일도 정사이즈 (320, 360 ...) 디자인으로 진행
             * 대표적 벡터기반 이미지 형식 : svg


[ 요청 사항 ]
### role="button"
- a태그가 버튼의 기능으로 사용될 때 role="button" 을 명시해줌.
  - Anchor element (a 태그) : 다른 페이지 링크나, 자체 페이지내의 (name, id) 위치로 이동 ( href 속성과 함께 사용 )
  - Button element (button 태그) :  링크 없이 onclick 사용 (레이어를 띄우거나 , 좌우 슬라이드를 이동, form submit ..)
  - '버튼의 기능' 이란 a태그가 링크 없이 onclick를 사용 할 때
   ```
   <a href="javascript:" role="button" class="slider__arrow-btn--prev"><span>Prevbutton</span></a> => OK
   <a href="javascript:" role="button"><span>좋아요</span></a> => OK
   <a href="https://www.facebook.com" role="button" target="_blank" title="새 창"><span>facebook</span></a> => X
   ```


5. 기본 스타일을 설정 하고 hover 기능은 opacity나 위치 정의, hover 일 때 변경되는 스타일
   ex) sns 영역 .on 들어가기 전에 미리 모양 설정
      .on 에서는 opacity, box-shadow, transform만 처리

6. pad, mobile 에서는
   hover 기능을 사용 할 수 없는 점 인지
   hover 기능상에서 정보가 이었다면
   pad, mobile에서는 해당 정보가 보이게 표시
   스와이프 실행도 고려

7. TABLET breakpoint 768px ~ 1139px 로
   spa 과제는 box모델 기본 사이즈가 1140 이라 타블렛은 768~1140 으로 요청드렸으나 실제 작업할떄는 아래 구성으로 breakpoint 잡아 주는 게 좋을 것 같습니다.
                           * MOBILE ~ 767px
                           * TABLET 768px ~ 1139px
                           * PC 1140px ~

8. 모바일 스타일 psd의 1/2 기준으로 적용
   샘플 psd 는 제가 임의로 줄여둔거라 좀 안맞을 거에요.
   홀수나 소수점 이하로 떨어지는건 짝수 처리 해주세요.


감사합니다.
