---
sort: 1
---

# Jquery Basic

## 1. stopPropagation, preventDefault, return false 간의 차이점

## 2. SelectBox 제어, 사용법

1. 현재 선택된(selected) 값(value) 구하기.
   - $("#selBox option:selected").val();

2. 현재 선택된(selected) 내용 구하기.
   - $("#selBox option:selected").text();

3. selectBox에 옵션 추가하기
   - SelectBox 옵션 아래에 추가
     - $("#selBox").append("<option value='keyboard'>키보드</option>");
   - SelectBox 옵션 최상단에 추가
     - $("#selBox").prepend("<option value='mouse'>마우스</option>");
   - 특정 위치 아래에 옵션 추가하기
     - $("#selBox option:eq(1)").after("<option value='mouse'>키보드</option>");
   - 특정 위치 위에 옵션 추가하기
     - $("#selBox option:eq(2)").before("<option value='mouse'>키보드</option>");


4. slectBox에 옵션 삭제하기
- 첫번째 옵션 삭제하기
    - $("#selBox option:first").remove();
  - 마지막 옵션 삭제하기
    - $("#selBox option:last").remove();
  - 특정위치 옵션 삭제하기
    - $("#selBox option:eq(2)").remove();
  - 모든 옵션 삭제하기
    - $("#selBox").find("option").remove();

5. 특정 값으로 selected 이벤트 주기
   - index 값으로 주기
    - $("#selBox option:eq(0)").attr("selected", "selected");
   - value 값으로 주기
    - $("#selBox").var("desk").attr("selected", "selected");


6. 선택된 옵션의 index 구하기
   - $("#selBox option").index($("#selBox option:selected"));

7. 선택된 옵션의 갯수 구하기
   - $("#selBox option").size();

[출처](https://fruitdev.tistory.com/142)



## 3. style 속성 여러개

[사용법]
- style 속성 하나씩 바꿀때는
```
.css("속성","값");

.css("속성","값");
```

- style 속성 여러개를 바꿀때는
```
.css({"속성":"값", "속성":"값"});
```
