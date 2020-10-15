---
title: 이벤트버블링
---

# 이벤트 버블링

`이벤트 위임을 하는 이유?`

- 각이벤트의 버튼에 함수 호출 :  addEventListener는 메모리를 많이 잡아 먹어서 페이지 성능을 저하시킨다. 그래서  각각 버튼에 바인딩을 해주는 것이 아닌,  그 부모인 (class="menu")에 이벤트 처리를 위임시킨다.


[HTML]

```
<div class="menu">
<button class="menu-btn" data-value="1">
          <img src="" alt="icon">
          <span class="btn-label">일분이</span>
</button>
<button class="menu-btn" data-value="2">
      <img src="" alt="icon">
      <span class="btn-label">이분이</span>
</button>
<button class="menu-btn" data-value="3">
      <img src="" alt="icon">
      <span class="btn-label">삼분이</span>
</button>
</div>
```

[CSS]

```
.btn-label{
    text-shadow: rgba(255,255,255,1);
    pointer-events: none;
}
.icon{
    pointer-events: none;
		/* [주의사항] target불가! click이 인식이 안됨 */
}
```

[javascript]

```
const btns = document.querySelectorAll('.menu-btn');
     function clickBtnHandler(){
            console.log(this); //지금 클릭한 버튼이 어떤것인지 this 출력
      }
      for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener('click', clickBtnHandler);
      }
```

-  for문을 풀면btns[0]~ [i] 까지 각각의 버튼에 이벤트를 바인딩 해줌
-  이렇게 할 경우 이벤트 위임이 아니다. 성능저하와 페이지 메모리 차지




####  EVENT 객체
- DOM과 관련된 이벤트가 발생하면 관련 정보는 모두 Event객체에 저장된다.
- 함수가 이벤트 핸들러(또는 이벤트리스너)로써 호출이되면 첫번째 매개변수자리에 자동으로 이벤트 객체가 들어간다.
- event 객체의 속성중  currentTarget는 this랑 같은 객체를 가리킨다. (addEventListener메소드를 호출한 'menu'객체
- event.target

```
		const menu = document.querySelector('.menu');
        function clickBtnHandler(event){ //event라는 이름의 이벤트 객체
						 console.log(event.target);
                }
        menu.addEventListener('click', clickBtnHandler); //이벤트호출
```


####  방법_2
- 클릭이벤트를 받지 않았으면 하는 Element를 CSS로 설정

```
const menu = document.querySelector('.menu');
function clickBtnHandler(event){

    console.log(event.target.getAttribute('data-value'));

}
menu.addEventListener('click', clickBtnHandler);
```

####  방법_3
- 버튼 밖 영역이 클릭되지 않게 하기
```
		const menu = document.querySelector('.menu');
        function clickBtnHandler(event){
            let elem = event.target;
            //
            while(!elem.classList.contains('menu-btn')){
                //elem가 menut-btn의 클래스를 포함하고 있지 않다면
                // (하위 요소가 여러개 일 경우 반복해서 체크해야하기에 if보다 while을 사용)
                elem = elem.parentNode;
                // 부모를 할당해본다. html까지 타고올라서 에러가 발생

                if(elem.nodeName == "BODY"){
                // 제한을 걸어주면 됨
                    elem = null;
                    return;
                }
            }

            console.log(elem.dataset.value);
        }
        menu.addEventListener('click', clickBtnHandler);
```

source: `{{ page.path }}`
