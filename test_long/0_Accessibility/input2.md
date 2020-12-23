---
sort: 2
---

# 중요 표시 버튼
[출처 링크] (https://nuli.navercorp.com/community/article/8012)

- [중요 표시 버튼을 접근성 있게 만드는 방법]
![inputlabel](img/../../../_site/assets/img/imp.gif);
```
중요한 메일이나, 파일들을 표시하기 위해 사용하는 기본적인 UI 요소로 클릭을 하면 색깔이 진해지면서 중요한 아이템이라는 의미를 나타내고, 다시 클릭을 하면 해제가 됩니다.

오늘은 이 중요 표시 버튼을 접근성 있게 만드는 방법을 공유해보고자합니다.
먼저, `'접근성이 있다'` 라고 말할 수 있는 것은 아래 두 가지 항목을 만족시키기 때문입니다.

1. 시각 장애환경에서 스크린리더로 의미 파악이 가능합니다.
2. 키보드로 접근과 조작이 가능합니다.
```

## 체크박스를 이용하자!
- 중요 표시 버튼은 어떤 엘리먼트를 이용해서 마크업 할 수 있을까요?
`<a>`로 처리할 수도 있고, `<button>`을 이용할 수도 있지만 저는 체크박스(`<input type="checkbox">`)를 이용해보려고 합니다.
그 이유는 중요 버튼을 사용하는 데 있어서 어떤 항목이 중요한지,안한지에 대한 '상태'정보가 무엇보다 중요하다고 생각했으며
그 `'상태'정보를 가장 직관적으로 나타내 줄 수 있는 것은 체크박스`라고 생각했기 때문입니다. ^^

- [체크박스를 이용한 기본적인 마크업]
  - 반드시 `<input>의 id값`과 `<label> for 값`을 동일해주어야 둘 사이의 관계가 성립되니 꼭 유의해주세요~!
```html
<input type="checkbox" id="isimp"><label for="isimp">중요 표시</label>
```

- [체크박스는 안보이는데 어떻게 체크박스를 사용할까]
![inputlabel](img/../../../_site/assets/img/imp2.gif);
  - `<input>` 엘리먼트는 밑에, `<label>` 엘리먼트는 그 위에 얹혀진 형태로, 우리 눈에 보이는 별모양의 이미지는 `<label>`이 되는 것입니다.

## 대체 텍스트는 필수!
- 바로 위에서 눈에 보이는 별 모양의 이미지가 `<label>`이 된다고 설명하였습니다. 하지만 이미로만 표시하면 시각 장애환경에서 해당 콘텐츠를 인식할 수 없습니다.
- 따라서 텍스트가 반드시 제공되어야 합니다. 이때 텍스트는 살짝 숨겨서 `눈에는 보이지 않지만 스크린 리더로는 인식이 가능하도록` 처리해줍니다.

- `아래 코드의 blind 클래스가 바로 숨김처리를 해주는 녀석입니다.`
```html
<label><span class="blind">중요 표시</span></label>
```

```danger
숨김처리를 해 줄때 display:none으로 해주면 안된다는 점을 명심해주세요~!
display:none으로 하면 눈에만 안보일 뿐 아니라 스크린리더도 인식하지 못한답니다.
```

```css
.blind{visibility:hidden;overflow:hidden;position:absolute;top:0;left:0;width:0;height:0;font-size:0;line-height:0}
```

## CSS야 부탁해!
- 그 다음으로 할 일은 CSS를 이용해서 `체크박스를 숨기고 <label>에 별 모양의 이미지를 적용`하는 것입니다.

```css
input{position:absolute;top:0;left:0;margin:0;width:17px;height:17px}
label{display:block;position:absolute;top:1px;left:1px;width:15px;height:15px;background:url(btn_imp.gif);cursor:pointer}
label.on{background-position:0 -20px}
```

- input은 absolute속성을 이용해 포지션을 고정하고 `여백을 제거한 후 크기를 지정`해주었습니다.
- label 역시 absolute 속성을 이용해 input 위에 겹쳐질 수 있도록 설정하고 별 모양의 이미지를 background로 지정하였습니다.
- 그리고 label이 활성화 되었을 때는 ".on"이라는 클래스를 추가하여 별 모양의 색깔이 변경되게 하였습니다.
- 여기서 `중요한 것은 label의 배경이 투명하지 않아야 한다는 것입니다.`
  - 투명하면 아래 이미지처럼 체크박스게 뒤에 숨어있는 것을 들통나게 됩니다.

![inputlabel](img/../../../_site/assets/img/imp3.gif);
- 그리고, 별 모양의 이미지가 `clickable하다는 것을 알려주기 위해서` 마우스 커서 모양을 변경`(cursor:pointer)`하는 것도 중요합니다.

## 키보드 접근성 보장하기!
```
"왜 input의 크기가 17x17이어야 하지?"
"label의 포지션 값은 왜 input의 포지션 값보다 1px 씩 밀려났을까?"
"label의 크기는 왜 input 보다 2px 작은 15x15지?"
```
- 그 이유는 바로 키보드 접근성 때문입니다.
  - 위와 같은 내용이 고려되어 있지 않다면, 키보드 포커스 표시가 나타나지 않아 키보드가 접근을 했는지 안했는지 알 수 없을테니까요-
  - 아래와 같은 속성들로 인해서 키보드로 접근했을 때, 포커스 표시가 나타납니다.

```css
input{position:absolute;top:0;left:0;width:17px;height:17px}
label{position:absolute;top:1px;left:1px;width:15px;height:15px}
```
- [!inputlabel4](img/../../../_site/assets/img/imp4.gif);
- 키보드 포커스 표시가 된 중요 표시 버튼
- 키보드로 접근이 되고 나면 기존의 체크박스를 조작할 때와 마찬가지로 스페이스바를 누르면 상태를 변화시킬 수 있습니다.