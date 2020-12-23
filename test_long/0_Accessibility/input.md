---
sort: 2
---

# 입력 서식 관련 접근성


## input 요소
- form 요소는 다양한 타입의 input 요소를 포함할 수 있습니다.
- HTML에서 자주 사용되는 input 요소의 대표적인 타입은 다음과 같습니다.

1. 텍스트 입력
- `<input>`태그의 type 속성값을 "text"로 설정하면, 사용자로부터 한 줄의 텍스트를 입력받을 수 있습니다.

```html
<form action="/examples/media/request.php">
    검색할 내용을 입력하세요 :
    <input type="text" name="search">
</form>
```
- 위의 예제처럼 form 요소 그 자체는 웹 페이지에 나타나지 않습니다.
- 하지만 form 요소에 포함된 다양한 input 요소를 통해 사용자의 입력을 받을 수 있습니다.

2. 비밀번호 입력
- `<input>`태그의 type 속성값을 "password"로 설정하면, 사용자로부터 비밀번호를 입력받을 수 있습니다.
- 비밀번호를 입력받기 때문에 화면에는 입력받은 문자나 숫자 대신 별표나 작은 원 모양이 표시됩니다.

```html
<form>
    사용자 : <br><input type="text" name="username"><br>
    비밀번호 : <br><input type="password" name="password">
</form>
```

3. 라디오 버튼
- `<input>`태그의 type 속성값을 "radio"로 설정하면, 사용자로부터 여러 개의 옵션(option) 중에서 단 하나의 옵션만을 입력받을 수 있습니다.
- 이때 서버로 정확한 입력을 전송하기 위해서는 반드시 모든 input 요소의 name 속성이 같아야 합니다.

```html
<form>
    <input type="radio" name="lecture" value="html" checked> HTML <br>
    <input type="radio" name="lecture" value="css"> CSS <br>
    <input type="radio" name="lecture" value="java"> JAVA <br>
    <input type="radio" name="lecture" value="cpp"> C++
</form>
```
- checked 속성을 이용하여 여러 개의 옵션 중에서 처음에 미리 선택되는 옵션을 지정할 수 있습니다.

```tip
정확한 입력값 전송을 위해서 radio 타입의 모든 input 요소가 반드시 같은 name 속성을 가지고 있어야 합니다.
```


4. 체크박스(check box)
- `<input>`태그의 type 속성값을 "checkbox"로 설정하면, 사용자로부터 여러 개의 옵션 중에서 다수의 옵션을 입력받을 수 있습니다.
- 체크박스는 라디오 버튼과는 달리 여러 개의 옵션을 한 번에 입력받을 수 있습니다.
- 이때 서버로 정확한 입력을 전송하기 위해서는 반드시 모든 input 요소의 name 속성이 같아야 합니다.

```html
<form>
    <input type="checkbox" name="lecture" value="html" checked> HTML <br>
    <input type="checkbox" name="lecture" value="css"> CSS <br>
    <input type="checkbox" name="lecture" value="java"> JAVA <br>
    <input type="checkbox" name="lecture" value="cpp" disabled> C++
</form>
```
- checked 속성을 이용하여 여러 개의 옵션 중에서 처음에 미리 선택되는 옵션을 지정할 수 있습니다.
- 또한, disabled 속성을 이용하여 해당 옵션을 선택할 수 없게 설정할 수도 있습니다.

5. 파일 선택 박스
- `<input>`태그의 type 속성값을 "file"로 설정하면, 사용자로부터 파일을 전송받을 수 있습니다.

```html
<form>
    <input type="file" name="upload_file" accept="image/*">
</form>
```
- accept 속성을 이용하여 입력받을 수 있는 파일의 확장자 및 종류를 명시할 수 있습니다.

6. 선택(select) 입력(drop-down 리스트)
- select 요소는 여러 개의 옵션이 드롭다운 리스트(drop-down list)로 되어 있으며, 그중에서 단 하나의 옵션만을 입력받을 수 있습니다.
- option 요소는 드롭다운 리스트에서 선택할 수 있는 각각의 옵션을 명시합니다.

```html
<select name="fruit">
    <option value="apple"> 사과
    <option value="orange" selected> 귤
    <option value="strawberry"> 딸기
    <option value="peach"> 복숭아
</select>
```
- selected 속성을 이용하여 드롭다운 리스트 중에서 처음에 미리 선택되는 옵션을 지정할 수 있습니다.

7. 문장 입력
- textarea 요소는 사용자로부터 여러 줄의 텍스트를 입력받을 수 있습니다.

```html
<textarea name="message" rows="5" cols="30">
    여기에 적으세요.
</textarea>
```
- rows 속성과 cols 속성을 이용하여 textarea 요소의 크기를 자유롭게 지정할 수 있습니다.


8. 버튼(button) 입력
- button 요소는 사용자가 누를 수 있는 버튼을 나타냅니다.

```html
<button type="button" onclick="alert('버튼을 클릭하셨군요!')">
    버튼을 눌러주세요.
</button>
```


9. 전송 버튼(submit)
- `<input>`태그의 type 속성값을 "submit"으로 설정하면, 사용자로부터 입력받은 데이터(data)를 서버의 폼 핸들러로 제출하는 버튼을 만들 수 있습니다.
- 폼 핸들러(form-handler)란 입력받은 데이터를 처리하기 위한 서버 측의 웹 페이지를 의미합니다.
- 이러한 폼 핸들러의 주소는 form 요소의 action 속성을 이용하여 명시할 수 있습니다.

```html
<form action="/examples/media/request.php">
    어릴 때 자신의 별명을 적어주세요 : <br>
    <input type="text" name="nickname" value="별명"><br><br>
    <input type="submit" value="전송">
</form>
```

10. 필드셋(fieldset)
- fieldset 요소는 form 요소와 관련된 데이터들을 하나로 묶어주는 역할을 합니다.
- legend 요소는 fieldset 요소 안에서만 사용할 수 있으며, fieldset 요소의 제목을 나타냅니다.

```html
<form action="/examples/media/request.php">
    <fieldset>
        <legend>입력 양식</legend>
        이름 : <br>
        <input type="text" name="username"><br>
        이메일 : <br>
        <input type="text" name="email"><br><br>
        <input type="submit" value="전송">
    </fieldset>
</form>
```

## 사용할 수 있는 속성
- `#` : HTML5에서 새롭게 추가된  속성


|     속성명     |   |                                                                     속성값                                                                     |                                                                                        설명                                                                                        |
|:--------------:|:-:|:----------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|     accept     |   | 파일 확장자 audio/* video/* image/* 미디어 타입                                                                                                | 서버로 업로드할 수 있는 파일의 타입을 명시함. (단, `<input>` 요소의 type 속성값이 “file”인 경우에만 사용할 수 있음)                                                                  |
|      align     |   | left right top middle bottom                                                                                                                   | 이미지 입력에 대한 정렬 방법을 명시함. (단, `<input>` 요소의 type 속성값이 “image”인 경우에만 사용할 수 있음) HTML5에서는 더 이상 지원하지 않음.                                     |
|       alt      |   | 텍스트                                                                                                                                         | 이미지를 위한 대체 텍스트를 명시함. (단, `<input>` 요소의 type 속성값이 “image”인 경우에만 사용할 수 있음)                                                                           |
|  autocomplete  | # | on off                                                                                                                                         | `<input>` 요소에서 자동 완성 기능을 사용할지 여부를 명시함.                                                                                                                          |
|    autofocus   | # | autofocus                                                                                                                                      | 페이지가 로드될 때 자동으로 포커스(focus)가 `<input>` 요소로 이동됨을 명시함.                                                                                                        |
|     checked    |   | checked                                                                                                                                        | 페이지가 로드될 때 미리 선택될 `<input>` 요소를 명시함. (단, `<input>` 요소의 type 속성값이 “checkbox” 또는 “radio”인 경우에만 사용할 수 있음)                                         |
|     dirname    | # | inputname.dir                                                                                                                                  | 폼 데이터(form data)가 서버로 제출될 때 서버로 보낼 입력 필드의 텍스트 방향성(text directionality)을 저장할 이름을 명시함. (언제나 이름 뒤에 “.dir”를 추가함)                      |
|    disabled    |   | disabled                                                                                                                                       | 해당 `<input>` 요소가 비활성화됨을 명시함.                                                                                                                                           |
|      form      | # | form id                                                                                                                                        | 해당 `<input>` 요소가 포함될 하나 이상의 `<form>` 요소를 명시함.                                                                                                                       |
|   formaction   | # | URL                                                                                                                                            | 폼 데이터(form data)가 서버로 제출될 때 입력 데이터를 처리할 파일의 URL을 명시함. (단, `<input>` 요소의 type 속성값이 “submit” 또는 “image”인 경우에만 사용할 수 있음)               |
|   formenctype  | # | application/x-www-form-urlencoded multipart/form-data text/plain                                                                               | 폼 데이터(form data)가 서버로 제출될 때 해당 데이터가 인코딩(encoding)되는 방식을 명시함. (단, `<input>` 요소의 type 속성값이 “submit” 또는 “image”인 경우에만 사용할 수 있음)       |
|   formmethod   | # | get post                                                                                                                                       | 폼 데이터(form data)가 서버로 제출될 때 사용할 HTTP 메소드를 명시함. (단, `<input>` 요소의 type 속성값이 “submit” 또는 “image”인 경우에만 사용할 수 있음)                            |
| formnovalidate | # | formnovalidate                                                                                                                                 | 폼 데이터(form data)가 서버로 제출될 때 해당 데이터의 유효성 검사를 하지 않음을 명시함. (단, `<input>` 요소의 type 속성값이 “submit”인 경우에만 사용할 수 있음)                      |
|   formtarget   | # | _blank _self _parent _top 프레임 이름                                                                                                          | 폼 데이터(form data)가 서버로 제출된 후 받는 응답(response) 데이터를 어디에 표시할 지를 명시함. (단, `<input>` 요소의 type 속성값이 “submit” 또는 “image”인 경우에만 사용할 수 있음) |
|     height     | # | 픽셀                                                                                                                                           | `<input>` 요소의 높이를 픽셀 단위(in pixels)로 명시함. (단, `<input>` 요소의 type 속성값이 “image”인 경우에만 사용할 수 있음)                                                          |
|      list      | # | datalist id                                                                                                                                    | `<input>` 요소에서 사용하기 위해 미리 정의해 놓은 옵션들을 포함하고 있는 `<datalist>` 요소를 명시함.                                                                                   |
|       max      | # | 숫자 날짜                                                                                                                                      | `<input>` 요소의 최댓값을 명시함.                                                                                                                                                    |
|    maxlength   |   | 숫자                                                                                                                                           | `<input>` 요소에서 허용되는 최대 문자수를 명시함.                                                                                                                                    |
|       min      | # | 숫자 날짜                                                                                                                                      | `<input>` 요소의 최솟값을 명시함.                                                                                                                                                    |
|    multiple    | # | multiple                                                                                                                                       | `<input>` 요소에 사용자가 둘 이상의 값을 입력할 수 있음을 명시함.                                                                                                                    |
|      name      |   | 텍스트                                                                                                                                         | `<input>` 요소의 이름을 명시함.                                                                                                                                                      |
|     pattern    | # | 정규 표현식                                                                                                                                    | 폼 제출 시 `<input>` 요소의 값을 검사할 때 사용되는 정규 표현식(regular expression)을 명시함.                                                                                        |
|   placeholder  | # | 텍스트                                                                                                                                         | `<input>` 요소에 입력될 값에 대한 짧은 힌트를 명시함.                                                                                                                                |
|    readonly    |   | readonly                                                                                                                                       | `<input>` 요소의 입력 필드가 읽기 전용임을 명시함.                                                                                                                                   |
|    required    | # | required                                                                                                                                       | 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시함.                                                                                            |
|      size      |   | 숫자                                                                                                                                           | `<input>` 요소의 너비를 문자수(in characters) 단위로 명시함.                                                                                                                         |
|       src      |   | URL                                                                                                                                            | 제출 버튼(submit button)으로 사용될 이미지의 URL을 명시함. (단, `<input>` 요소의 type 속성값이 “image”인 경우에만 사용할 수 있음)                                                    |
|      step      | # | 숫자                                                                                                                                           | `<input>` 요소에 입력할 수 있는 숫자들 사이의 간격을 명시함.                                                                                                                         |
|      type      |   | button checkbox color date datetime-local email file hidden image month number password radio range reset search submit tel text time url week | `<input>` 요소가 나타낼 타입을 명시함.                                                                                                                                               |
|      value     |   | 텍스트                                                                                                                                         | `<input>` 요소의 초깃값(value)을 명시함.                                                                                                                                             |
|      width     | # | 픽셀                                                                                                                                           | `<input>` 요소의 너비를 픽셀 단위(in pixels)로 명시함. (단, `<input>` 요소의 type 속성값이 “image”인 경우에만 사용할 수 있음)                                                          |


## input 요소의 속성
- input 요소의 여러 속성을 사용하면 사용자가 입력하는 방식을 더욱 다양하게 제어할 수 있다.
```
```

### value 속성
- value 속성은 input 요소의 입력 필드(input field)에 나타나는 초깃값을 설정합니다.
```html
<form>
    이름 : <br><input type="text" name="student_name"><br>
    학번 : <br><input type="text" name="student_id"><br>
    학과 : <br><input type="text" name="department" value="컴퓨터공학과"><br>
</form>
```

### readonly 속성
- readonly 속성은 사용자가 입력 필드를 볼 수는 있으나, 수정할 수는 없도록 설정합니다.
- disabled 속성과 다른 점은 전송 버튼(submit)을 누르면 초깃값이 서버로 전송된다는 점입니다.
```html
<form>
    이름 : <br><input type="text" name="student_name"><br>
    학번 : <br><input type="text" name="student_id"><br>
    학과 : <br><input type="text" name="department" value="컴퓨터공학과" readonly><br>
</form>
```

### disabled 속성
- disabled 속성은 사용자가 입력 필드를 아예 사용할 수 없도록 설정합니다.
- disabled 속성이 설정된 입력 필드는 사용할 수도 없고, 클릭할 수도 없습니다.
- 또한, readonly 속성과는 달리 전송 버튼(submit)을 눌러도 초깃값이 서버로 전송되지 않습니다.
```html
<form>
    이름 : <br><input type="text" name="student_name"><br>
    학번 : <br><input type="text" name="student_id"><br>
    학과 : <br><input type="text" name="department" value="컴퓨터공학과" disabled><br>
</form>
```

### maxlength 속성
- maxlength 속성은 입력 필드에 입력할 수 있는 문자의 최대 길이(length)를 설정합니다.
```html
<form>
    이름 : <br><input type="text" name="student_name" value="홍길동" maxlength="10"><br>
    학번 : <br><input type="text" name="student_id"><br>
</form>
```

### size 속성
- size 속성은 입력 필드에 보여지는 input 요소의 크기(size)를 설정합니다.
- maxlength 속성과는 달리 입력 필드가 한 번에 보여줄 수 있는 문자의 최대 개수만을 의미합니다.
- 따라서 입력될 수 있는 문자의 최대 길이는 maxlength 속성값에 따라 달라지며, size 속성과는 전혀 무관합니다.
```html
<form>
    이름 : <br><input type="text" name="student_name" value="홍길동" size="30"><br>
    학번 : <br><input type="text" name="student_id"><br>
</form>
```