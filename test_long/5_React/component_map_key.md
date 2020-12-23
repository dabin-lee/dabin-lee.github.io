---
title: React 를 다루는 기술
---

## 컴포넌트의 반복

### 자바스크립트 배열의 map()함수
- 코드가 더 늘어난다면 파일용량과 코드의 양은 늘어 날 것이며 보여주어야 할 데이터가 유동적이라면 코드관리에 한계를 느끼게 된다.
- map 함수를 사용해서 반복되는 컴포넌트를 렌더링 할 수 있다.
- map함수는 파라미터로 전달 된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성한다.

```javascript
const IterationSample = () => {
    const numbers = [1, 2 , 3, 4, 5];
    const processed = numbers.map(function(num){
        return num + num;
    });
};
```


### 데이터 배열을 컴포넌트 배열로 변환하기
- 문자열로 구성된 배열을 선언한다.
- 배열 값을 이용하여 `<li></li>` JSX코드로 된 배열을 새로 생성한 후 nameList에 담는다.
- map함수에서 JSX작성 시 DOM요소를 작성해도 되고, 아래 코드처럼 컴포넌트를 사용해도 된다.

```javascript
const IterationSample = () => {
    const name = ['눈사람', '얼음', '바람', '비'];
    const nameList = name.map(name => <li>{name}</li>);
    return (
        <ul>
            {/* <li>눈사람</li>
            <li>얼음</li>
            <li>바람</li>
            <li>비</li> */}
            {nameList}
        </ul>
    );
};
```

### key
- 컴포넌트 배열을 렌더링했을 때, 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
- 변화를 더욱 빠르게 알아낼 수 있다.


#### key설정
- 데이터의 고윳값을 key로 설정한다.


```
<div>
    const article = article.map((article) => (
        <Article
            title={article.title}
            title={article.writer}
            title={article.id}
        >
    );
</div>
```


#### key의 역할
- key 의 존재유무에 따른 업데이트 방식
- 배열이 업데이트 될 떄 key 가 없을 때 처럼 비효율적으로 업데이트 하는 것이 아니라, 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제한다.
- 때문에, 배열을 렌더링 할 때에는 고유한 key 값이 있는것이 중요하며, 만약에 배열안에 중복되는 key 가 있을 때에는 렌더링시에 오류메시지가 콘솔에 나타나게 되며, 업데이트가 제대로 이루어지지 않게 된다.

#### key로 사용할 고유값이 없을 경우?
- 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용한다.
- 하지만 index를 사용할 경우 고유값을 표기하는 것이 아니라 에러표기가 없어지는 기능 뿐이기에 성능이 좋아지거나 하지 않는다.
```
<div>
    {user.map ((user, index) => (
        <User user={user} key={index} />
    ))}
</div>
```

### 응용
