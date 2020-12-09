---
sort: 2
---

# title 속성의 바람직한 사용 방법

[출처](http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0-title-%EC%86%8D%EC%84%B1%EC%9D%98-%EB%B0%94%EB%9E%8C%EC%A7%81%ED%95%9C-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95/)

## title 속성이란?
   - 요소에 대한 조언 정보를 나타낸다.
   - 요소에서 title속성이 생략된다면, 가장 가까운 부모 요소의 title이 적용될 수 있다.
   - 부모 요소와의 무관함을 밝히려면 명시적으로 title속성을 제공해야 한다.
   - 빈 문자열을 설정한다면, title이 조언 정보를 갖고 있음을 나타낸다.


## 스펙에서 정의 된 title속성의 사용 법

1. a요소 : 대상의 제목이나 설명을 나타낸다.
```html
<a href="http://naver.com" title="네이버 홈페이지">http://naver.com</a>
```
2. link요소 : 링크에 제목을 부여한다.
- 스타일시트 링크의 경우 스타일시트의 목록을 설정 할 수 있다.
- link에 title속성을 사용하지 않아도 부모 요소의 title속성을 상속받지는 않는다.
```html
<link rel="stylesheet" type="text/css" href="css/layout.css" title="common layout">
```



## 햇갈리는거 정리해보자

[이미지 컨텐츠를 표현하는 방법]
- `**img와 background-image**`

HTML 의 `<img />` 태그를 활용하는 방법.
CSS 의 background-image 를 사용하는 방법.
```
<div class="slide_cont">
  <img src="" alt="slideimg">
  <img src="" alt="slideimg">
  <img src="" alt="slideimg">
```
- 슬라이드 img만으로도 가능