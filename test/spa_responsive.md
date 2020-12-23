---
sort: 6
---

# spa사이트 피드백 정리

## June 8
1. section, article
   - section, header, footer  등 기본 레아이웃 개념은 잘 정의 되어 있습니다.
   - 추가로 article 태그를 넣으면 좋겠습니다. 어디가 좋을 지 추가해봐 주세요.

2. h1, h2, h3 .. 타이틀 태그
- h1은 사이트를 대표하는 최상위 타이틀로 보통 페이지 헤더의 로고에 주로 사용 합니다.
- 페이지의 모든 타이틀에 h3, h4, h5.. 타이틀 태그를 꼭 사용 해야 하는 건 아닙니다.
  `목록 요소 ( li태그 ) 안의 타이틀은 strong 으로도 많이 사용 합니다.`

3. form
- form 은 input요소를 특정 페이지로 전송해줍니다.
- form 안에는 하나의 submit만 존재 합니다.
- 이름, 전화번호, 날짜, 시간, 메모 ... 등을 하나의 submit으로 보내려면 하나의 form 안에 포함되어야 합니다.


4. link, button
- link, button은 목적에 맞게 사용하는게 좋습니다.
- [ button 속성값 ]
  - type="submit" : 폼의 전송 기능을 담당한다.
  - type="reset" : 폼 작성 내용을 초기화하는데 사용한다.
  - type="button" : 흔히 자바스크립트를 이용한 기능 구현에 많이 사용한다.

- `<a>` 요소는 앵커(anchor)로써, 문서 간의 연결, URI 참조가 주된 목적이고,
- `<button>` 요소는 클릭함으로써 이벤트를 발생시키는게 주된 목적입니다.
- `목적에 맞게 기본 링크들은 a 요소로 마크업`
- `기능을 구현하는 것은 (ex. 팝업창을 띄우거나 어떤 요소를 숨기거나 보이게 하거나 등등) button 요소를 사용합니다.`
- a태그가 버튼의 기능으로 사용될 때는 role="button" 을 명시해줌.

## June 10
1. input/label
```
[질문내용]
form안에 버튼영역까지 포함해서 다 하나로 묶었는데, 그안에 input요소들은 label을 붙여야 하는건지 햇갈려요.
접근성을 위해서 붙이는걸 지향한다는 글도 봤는데 가끔 웹사이트 페이지 소스보면 label이 없는 input들이 많은거 같아요.
```

### label의 사용예

- [label없이 input만 있는 경우]
   - [예시링크 클릭](http://www.samsungfund.com/retFundList.action)
   - "펀드명을 입력하세요." 검색 input 같이 `input 박스만 있는 경우는 label 없이 input에 title="펀드명 입력"을 추가`해 주면 되구요.
   - `기본적인 체크박스, 라디오 버튼인 경우도 별도의 텍스트 없으면 title만` 넣어 주면 됩니다.

- [label이 있는 input]
   - `시안이나 아이디 비밀번호 이렇게 텍스가 있는 경우는 해당 텍스트들을 label로 연결`
   - [예시링크 클릭](https://osms.skbroadband.com/hub/logon.do?siteCd=SKBB&returnUrl=https%3A%2F%2Fwww.skbroadband.com%2FTidLogin.do%3FUURL%3Dhttps%3A%2F%2Fwww.skbroadband.com%2FMain.do%3F)

   ```
   <label>NAME<input type="text"></label> 이렇게 묶는 방법도 있고요.

   SKBB에서 처럼 명시적으로 for="input-01"를 지정해 주는 방법이 있어요.
   <label for="input-01">아이디</label>
   <input type="text" name="userid" id="input-01" value="" placeholder="아이디를 입력해 주세요" maxlength="20" onkeyup="checkkey();useridKeyup(submitform1);">
   ```

   - 대부분은 명시적으로 id 값을 연결해주는 방식을 사용 해요.
   - 체크박스나 라디오 버튼을 이미지화 해서 사용할떄는
   - http://www.samsungfund.com/retFundList.action 에서 처럼 `input은 숨기고 label에 이미지 처리 해서 사용` 합니다.


2. main태그는 안넣어도 되는건가요?
- main 태그는 html5에 새로 추가된 태그로 "문서의 중요 컨텐츠"를 정의 합니다.
  - 추가로 section태그는 header, footer, main같은 구조적인 태그라 `원칙적으로 클래스명 사용 안하는게 올바른 방식` 입니다.
  - 작업하다보면 페이지에 하나의 section만 있는게 공통의 스타일을 잡다보면 클래스를 부여해서 스타일을 적용하고 있기는 합니다.

```note
다빈씨가 원래 사용 하려고 한 것 처럼
<header></header>
<main></main>
<footer></footer>
실무에서는 아직 사용을 많이 안하고 있기는 한데
( 아직도 div="header", div="main", div="footer" 쓰는 곳도 은근 많이 남아 있습니다. )
앞으로의 방향성은 <main></main>으로 구분 지어 주는게 좋습니다.
대신 main 태그 사용시 주의 사항은 숙지하고 사용 해야 합니다.
```

3. BEM으로 태그
   ```
   작업해주신 클래스명은 전체적으로 생각 많이 하면서 작업해주셨어요.
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
   ```

4. Img관련 - html
- figure : 이미지, 도표. code 등의 내용들이 들어 갈 수있어요.
   ```
   참고
   http://blog.naver.com/pjh445/220017651378
   https://www.codingfactory.net/10247
   ```

- "bg이미지는 position값이 항상 5단위 10단위로 끊어지게"
  - https://skbroadband.com/Main.do
  - https://skbroadband.com/common/img/vin/common/icon_color_set.png
  - 이렇게 각 요소의 배경 이미지를 스프라이트 이미지로 사용 할때  각 위치값을 5단위, 10단위로 끊어지게 구성 하라는 뜻입니다.
   ```
   .banner_wrap .ico.type12 {
      background-position: -100px -100px;
   }
   .banner_wrap .ico.type21 {
      background-position: 0 -200px;
   }
   ```

5. [CSS 중요도]
- 해당 순서는 중요도 보다는 css가 적용 되는 우선 순위로 봐주세요.
- !important > HTML에 Style > #id > .class, :class > 태그이름 > 상위 객체에 의한 상속된 속성



## 마크업
1. 새창 링크
- 전체 sns 새창 링크 추가
- 새창으로 열릴때는 title로 새창 열림을 정의해 주어야 합니다. `title="go to new window"`

1. 반응형과 적응형의 최소 사이즈
- 웹사이트의 종류는 반응형과 적응형으로 크게 나뉩니다.
- 적응형 PC 기준 이긴 하나 모니터 해상도는 사용자 마다 다를 수 있습니다.
- 작은 모니터에서도 시안과 같은 레이아웃을 보여 주기 위해서는 해당 화면이 틀어지지 않는 `최소 사이즈가 필요` 합니다.

- 1) 페이지 전체 최소 가로 사이즈
   ```
   시안에서 내부 컨텐츠는 1140px 기준이고
   section--reserved 영역은 reserved__thumbnail 780px에  reserved__cont 기본 사이즈 750px 로
   페이지 전체 최소 가로 사이즈를 1530pX로 생각하면
   body__wrapper에 min-width: 1530px;을 주면 화면을 계속 줄여도 전체 페이지가 안깨지겠죠.

   추가로 section--reserved에서 구조상 reserved__thumbnail에 padding-right를 주기 보다는
   reserved__cont에 padding-left를 주는 게 맞을 듯 합니다.
   ```

- 2) clearfix, float--left, float--right를 마크업에 넣어서 사용하는 것 보다는 css 내에서 풀어주세요.
   - ( clearfix, float--left, float--right 이렇게 마크업에 바로 넣는 건 옛날에 많이 하던 방식이라 앞으로는 가능하면 피해주세요. )

- 3) 숨김 lable 제공해주는 경우
  - display:none, visibility:hidden을 사용하는 것은 적절치 않으며, overflow:hidden 기법이 권장되고 있습니다. (센스리더, Jaws, NVDA에서 모두 읽기 가능)
  - overflow:hidden 포지셔닝 기법
   ```
   (포지셔닝 예)
   .hidden {position：absolute; left:-10000px; top:auto; height:1px; overflow:hidden; }
   .hidden {display: block; width: 0; text-indent: -9000px; overflow: hidden;}
   ```

- 4) image sprite
   ```
   sns_off.png, sns_on.png를 한 파일로 만들어 사용해 주세요.
   team_sns.png, team_sns_hover.png를 한 파일로 만들어 사용해 주세요.
   visit--info__icon.png position값이 항상 5단위 10단위로 끊어지게 해주세요.
   ```

- 5).  footer sns type 추가
  ```
   시안에서
   Experienced Team 의 sns 버튼은 가로 세로가 30*30 고정이지만
   footer의 sns 같은 경우는 페이스북 7*14, 트위터 13*11, 인스타그램 13*14, 빙글 13*11로 다 다릅니다.
   [요청 사항]
   footer의 sns는 아래 3가지 type으로 만들어 주세요.
   type01) a태그의 사이즈 각 아이콘 사이즈별로 다른게 주기 ( 페이스북 7*14, 트위터 13*11, 인스타그램 13*14, 빙글 13*11),
           bg이미지 방식
   type02) a태그의 사이즈를 공통 최대값 13*14로 고정하고, 페이스북 마진 분기, 아이콘은 a 태그에 ::before 방식
   type03) a태그의 사이즈를 공통 최대값 13*14로 고정하고, 페이스북 마진 분기, 아이콘은 bg이미지 방식
   ```

## 접근성 고려
- 접근성 검수는 IE를 기준으로 합니다. 접근성 심사 업체가  PC는 IE를 기준으로 하고 있습니다.
1. a, button, input 요소 tab으로 접근
  - a, button, input 요소는 키보드 탭으로 접근이 가능 해야 합니다. 포커스(초점)가 갔을 때 표시가 되어야 합니다.
- 보통 reset.css 에서 디자인 적으로 outline을 제거하는데 해당 요소들에는 outline이든 , border든 포커스가 갔을 때 해 요소에 표시가 되여야 합니다.

2. 인디케이터
- 인디게이터는 포커스만 가면 되고 포커스 시 바로 이동은 x
- 이동은 인디게이터, 좌, 우 버튼 엔터(클릭) 시 실행 되면 됩니다.
- 자동 롤링 Play, stop  버튼 추가해서 자동 롤링 되게 해주세요.
- 초기값은 자동 롤링 이며  play, stop 버튼 클릭 시 변경 되게 해주세요.
  - Ex) [예시 링크 클릭] (https://www.hyundaicard.com/index.jsp)

3. a태그 target

4. alt/title
- [ alt ] 기억할 3가지
  - (1). img 태그에 alt 는 필수
  - (2). alt는 단순 명료, 중복 제거
  - (3). 의미 없는 이미지는 alt="" 제공

- [ title ]
- [참고 링크 클릭](http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0-title-%EC%86%8D%EC%84%B1%EC%9D%98-%EB%B0%94%EB%9E%8C%EC%A7%81%ED%95%9C-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95/)
- title은 부가 설명 기능 이지만 `접근성 측면에서 필수로 적용 되어야 하는 부분`
- 1) _blank 사용 시 "새 창" 명시
- 2) abbr 약자 태그 사용 시 title로 fullname 정의

   ```html
   <p title="html의 정의">
   <abbr title="Hyper Text Markup Language">HTML</abbr>은 웹 페이지를 만드는데 ....
   </p>
   ```

- 3) label 없는 form 요소 사용 시 ( input, select, button, radio, checkbox )
- input 요소: input 요소에 label을 제공하지 못할 때 대신 사용합니다.

   ```html
   <input type="text" title="전화번호 뒷자리">
   ```

- 4) ifrmae 사용 시

1. tabindex
- tabindex는 키보드로 초첨을 받지 못하는 요소에 강제로 초점을 주시 위해 사용. 가능하면 꼭 필요한 경우에만 사용 요함
- `<li class="manager--profile" tabindex="0">`는 하위 sns 영역에 a 태그가 있어 포커스를 받긴 하지만 li에 초점이 가야 sns 영역의 초점이 정상적으로 보이므로 해당 영역은 다빈씨 마크업대로 tabindex="0" 유지하면 될 것 같습니다.

## 반응형 피드백
1. 반응형 기본적인 breakpoint
   - MOBILE : ~ 767px
   - TABLET : 768px ~ ( 1023px or 1199px )
   - PC : ( 1024px or 1200px ) 이상
   - 프로젝트에 따라 조금씩 변경해서 사용

2. 반응형 방식
- 1) __PC first__
  - ( max 사용 : 큰해상도 -> 작은해상도 순으로 )
   ```
   기본 pc style ....  //PC
   @media (max-width:1023px){실행문} //TABLET 1023px 이하에서 실행
   @media (max-width:767px){실행문} //MOBILE 767px 이하에서 실행
   ```

- 2) __mobile first__
  - ( min 사용 : 작은해상도 -> 큰해상도 순으로 )
   ```
   기본 mobile style .... //MOBILE
   @media (min-width:768px){실행문}  //TABLET 768px 이상에서 실행
   @media (min-width:1024px){실행문} //PC 1024px 이상에서 실행
   ```

   ```note
   다빈씨가 넣어준 순서는  PC first 입니다.
   <link rel="stylesheet" href="./css/main.css"><!-- PC -->
   <link rel="stylesheet" media="(max-width: 1139px)" href="./css/main_pad.css"> <!-- TABLET -->
   <link rel="stylesheet" media="(max-width: 767px)" href="./css/main_mobile.css"> <!-- MOBILE -->

   각 css 안에서도 더 세부적으로 breakpoint 분리하여 사용해도 됩니다.

   작업자들 마다 반응형은 mobile first가 우선이라는 사람도 있고 PC first가 우선이라는 사람도 있어 정답은 없습니다.
   실무에서는 전체 레이아웃이 한번에 나오는게 아니다 보니
   pc 먼저 진행하고 이후에 mobile, tablet을 진행하는 경우도 다반사며
   혼합해서 사용하는경우도 다반사입니다.
   ```

3. mediaquery
- 기본문법 : @media [only 또는 not] [미디어유형] [and 또는 ,콤마] (조건문) {실행문}
   ```html
   ex) @media only screen and (max-width:786px){width:100%}
   ex) @media (max-width:786px){width:100%} : [only 또는 not] [미디어유형] 생략 가능
   ```

- 미디어쿼리 적용방법
1) css파일 내에 직접 media를 설정
   ```html
   * <link rel="stylesheet" href="style.css" />
   ```

2) HTML의 link태그에 media속성에 값을 설정
   ```html
   * <link rel="stylesheet" media="all and (min-width:320px)" href="style.css" />
   ```

3)css파일 내에서 import 해서 적용
   ```html
   * @import url(style.css) all and (min-width:320px);
   ```

4. % 레이아웃
- 모든 요소를 %로 잡을 필요는 없습니다.
- 브라우저 사이즈에 따라 자연스럽게 사이즈 조절이 같이 되어야 하는 레이아웃에 %를 사용 하면 되구요.
- 특정 breakpoint에서만 사이즈 조정이 되는 요소는 고정값을 사용해도 됩니다.
  - EX) 상단 배너에서 "RESERVED NOW" 버튼과 "Watch our story" 링크는 기본 고정값 team__manager sns 링크 버튼 고정값


5. 단위
- px : 절대값
- __em__: 해당 태그가 상속받고 있는 크기에 비례하는 상대적인 길이
   ```
   : <div class="a"><p>내 사이즈는?</p></a>
   : .a {font-size: 12px}
   : p {font-size: 1.2em; padding: 1em;}
      => p는 font-size는 .a에서 폰트값을 상속 받고 있으니 12*1.2 = 14.4px
      => p의 padding은 p의 14.4px에서 상속 받고 있으니 14*1=14.4px;
   ```

- __rem(root em)__ : 최상위 요소인 html요소에 비례하여 크기를 가지는 상대적인 길이
   ```
   : html에 별도 사이즈 지정이 없으면 기본 시스템 사이즈 {font-size: 16px;} 로 정의 (1rem = 16px;)
   : html에 특정 사이즈를 지정하면
   : ex) <div class="a"><p>내 사이즈는?</p></a>
   : html {font-size:14px}
   : .a {font-size: 10px}
   : p {font-size: 2.0rem; padding: 1rem;}
   => p의 font-size는 14*1.2 = 16.8px;
      p의 padding는 14*1.0 = 14px
   ```

- __em과 rem을 사용하는 이유?__
  - 공통적인 요소들을 각 html의 root값으로 넣고 rem으로 한번에 수정이 가능하다.
  - 브레이크 포인트로 변경되는 제각의 값을 rem, em을 사용하는 것이 아님을 주의

- __%__: 해당 태그가 상속받고 있는 크기에 비례하는 상대적인 길이 (em과 동일)
- 모바일 전용 vw, vh :  뷰포트의 너비값과 높이값에 상대적인 영향을 받는다. ( 레아이웃, 폰트 단위 모두 가능)
  - vw : 브라우저 너비값의 1/100 ( 가로 760px * 1vw = 7.6px )
  - vh : 브라우저 높이값의 1/100 ( 세로 600px * 1vh = 6px )
   ```
   반응형이든 적응형이든 특정 단위 하나만 통일해서 사용하는 것은 아니며
   모바일이나 반응형에서 무조건 상대 단위만 사용하는 것도 아닙니다.
   단 em보다는 rem이 계산하기 편하니 상대 단위 사용시에는 rem으로 사용하는게 더 나을 것 같습니다.

   단위 사용은 화면 구성을 어떻게 하느냐에 따라 작업자가 선택적으로 사용 가능 합니다.
   ```

6. 모바일 PSD 퍼블리싱 작업
 - 모바일에서는 작은이미지 사용시 해상도가 떨어져 보여서 보통 2배 이미지를 축소해서 사용.
 - 모바일 퍼블리싱 작업할때에는 원본 psd 1/2크기로 계산해서 작업합니다.
   - `보통 640, 720 기준으로 psd 넘어오면 320, 360 기준으로 퍼블리싱 작업`

 - 모바일 요소는 짝수 구성이 기본입니다.
   - ex) psd 전체메뉴 사이즈가 80px*80px 이라면 퍼블리싱에서는 40px*40px로 적용
   - (레티나 디스플레이 대응은 현재는 예외로 하겠습니다.)

- 실제 반응형 업무시 pc, tablet, mobile 세 단계의 디자인 시안 (ex : psd) 받아야 함
   * 근래 사용하는 제플린, 어도비 XD같은 벡터(확대 축소에도 이미지가 깨지지 않음) 기반 프로그램에서는 png, jpg를 사이즈별로 다운받을 수 있어서 모바일도 정사이즈 (320, 360 ...) 디자인으로 진행
   * 대표적 벡터기반 이미지 형식 : svg

### role="button"
- `a 태그가 버튼의 기능으로 사용될 때` role="button" 을 명시해줌.
  - Anchor element (a 태그) : 다른 페이지 링크나, 자체 페이지내의 (name, id) 위치로 이동 ( href 속성과 함께 사용 )
  - Button element (button 태그) :  링크 없이 onclick 사용 (레이어를 띄우거나 , 좌우 슬라이드를 이동, form submit ..)
  - '버튼의 기능' 이란 a태그가 링크 없이 onclick를 사용 할 때
   ```
   <a href="javascript:" role="button" class="slider__arrow-btn--prev"><span>Prevbutton</span></a> => OK
   <a href="javascript:" role="button"><span>좋아요</span></a> => OK
   <a href="https://www.facebook.com" role="button" target="_blank" title="새 창"><span>facebook</span></a> => X
   ```

1. hover 일 때 변경되는 스타일
- 기본 스타일을 설정 하고 hover 기능은 opacity나 위치등 변경되는 스타일을 미리 정의해둔다.
   - ex) sns 영역 .on 들어가기 전에 미리 모양 설정
   - .on 에서는 opacity, box-shadow, transform만 처리

2. pad, mobile 에서는
- hover 기능을 사용 할 수 없는 점 인지
- hover 기능상에서 정보가 이었다면
- pad, mobile에서는 해당 정보가 보이게 표시
- 스와이프 실행도 고려


3. 모바일 전체메뉴 open시 dim 적용해 주세요. ( dim 클릭해도 전체 메뉴 close 되게 해주세요.)

4. 백그라운드 이미지
  - 1) 처음부터 큰 이미지로 pc, tab, mo  백그라운드 사이즈만 조정해서 같이 쓰는 방법도 있고
  - 2) 각각 별개 이미지 사용하는 방법도 있어요.
- 비율이 동일하면 하나의 이미지로 사용하는 게 좋아요.

5. ie대응시 스타일 순서
   ```
   Css는 ( 동일 레벨의 우선순위 전제하에) 뒤에 있는 스타일을 최종적으로 적용하잖아요.
   color: var(--color-pink); color: #ff817e;
   이 순서면 ie, 기타 모던 브라우저 모두 뒤에 있는 color: #ff817e;  를 사용하겠죠

   color: #ff817e; color: var(--color-pink); 순서가 되어야
   모던 브라우저는 뒤에 이는 color: var(--color-pink); 를 사용하고
   Ie는 color: var(--color-pink); 를 인식 못하니 앞에 있는 color: #ff817e;  를 사용하겠죠.
   ```


### kia_online_sale 반응형

1.	인풋요소 display:none 사용 안됨
- 눈에 보이는 인풋요소에 디자인을 위해서 display:none을 하면 안됩니다.
- 인풋요소에는 무조건 tab키 이동으로 포커스도 가야하며 display:none을 하면 스크린리더가 읽지 못해요. 접근성 위반입니다.
- 보통 opacity나 visible로 화면에서 숨겨주고 스크린 리더에서는 읽을 수 있게 합니다.
  - 포커스도 체크박스 선택될 때  label에 디자인 주듯이 주면 되겠죠~

2.	체크박스와 라디오버튼의 구분
- 통념상 동그라미는 라디오버튼으로 인식합니다.
- 라디오버튼과 체크박스의 차이점도 알고 계시죠?
   -	라디오버튼은 그룹중에서 하나만 선택 가능
   -	체크박스는 멀티 선택 가능

3.	셀렉트박스
- 셀렉트박스에 ul,li, div를 사용 하는 이유는 기본 select box는 Drowdown에 디자인을 입히지 못하기 때문입니다.
- Drowdown 영역 까지 디자인을 입혀야 하는 상황이면 별도 마크업 처리가 필요합니다.
-	select box는 form 요소 입니다.
   - `form 요소 안에 또 a태그를 쓰면 잘못된 마크업 입니다.`
-	Form 요소로서의 Select box를 디자인적(UI) 으로 표현할 때
- 기본적으로 form 값을 정의해 주어야 하기 때문에 `기본 Select box를 숨겨`서 ui적으로 선택된 값을 같이 선택되게 하여 넘겨 주던지
- Input type=hidden 으로 Input값으로 선택된 값을 넘겨 줘야 합니다.
-	Optgroup 기능은 알아 두시면 좋구요
  - 동일 select box 안에서 option의 성격이 다를 때 사용하는 기능이라 같은 경우는 불필요한 마크업 이므로 사용하지 않아도 됩니다.
  - Optgroup label 값이 화면에 표시되기 때문에 사용시에는 기획과 먼저 논의가 필요합니다.

4.	이미지 두배 사이즈 사용
- 모바일에서는 해상도가 좋아 보통 두 배 사이즈 이미지를 사용합니다.
- 그래서 반응형은 처음부터 두 배 이미지를 사용하여 css로 이미지 사이즈를 줄여 사용합니다.
- 제플린 두배로 확대해서 이미지 잘라서 사용해주세요.

6.	`필수표시 (*)`
- `* Mandatory Field` 시각적으로만 표시하지 말고 접근성을 고려하여 스크린리더를 사용하는 사람들이 필수 사항이라고 인지할 수 있도록 작업해봐 주세요.


7. form 태그
- 고유값을 쓸거라면 클래스를 사용한다.
- 유일한 폼태그 일 경우는 form자체를 css에 사용해도 무관

```note
form .f_persn .select_zone .ui_select_box .select_lis ~
이렇게 form태그 밑으로 스타일을 지정해뒀는데
Form 태그는 한 페이지에 여러 개가 들어갈 수 있고
개발과 연관된 태그라 바로 쓰지 말고 클래스명 지정해서 넣어주세요.
```

8. 스프라이트 이미지

```note
적응형 같은 경우는 pc용, mo용 이미지를 따로 사용하는 경우가 많고
반응형 같은 경우는 mo용 이미지 하나로 사용 하는 경우가 많아요.
kia건은 반응형 이니 mo용 이미지 하나로 사용 할 수 있는 건 변경해봐 주세요.

백그라운드 이미지를 스프라이트 이미지로 사용할 경우
지금처럼 중구난방으로 넣지 말고 간격 맞춰서 넣어 주세요.
한 이미지당 50 * 50 이나 100 * 100 으로
그리고 백그라운드 이미지는 두배 사이즈 사용할꺼니까 500 * 500 이미지면
모두 250 * 250 으로 리사이징 해서 불러와야합니다.
```

9. em과 rem
```note
실제 사이트 작업 하다 보면 단위는 대부분 px로 사용하고 있어요.
em과 rem은 필요에 따라 최소로 사용 합니다.
보통 반응형에서 em과 rem을 많이 쓴다고 하는데
공통되는 사항이 있으면 각 미디어쿼리에서 root값으로 font-size를 조절한 후에
rem과 em을 사용할 것
```