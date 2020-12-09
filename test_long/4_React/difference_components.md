---
title: 클래스형 함수형 컴포넌트 차이점
---

# 1_2. 리액트 클래스형 함수형 컴포넌트 차이점

```
<!-- vscode react 단축키 -->
rcc→	class component skeleton <br>
rrc→	class component skeleton with react-redux connect <br>
rccp→	class component skeleton with prop types after the class <br>
rcjc→	class component skeleton without import and default export lines <br>
rcfc→	class component skeleton that contains all the lifecycle methods <br>
rwwd→	class component without import statements <br>
rpc→	class pure component skeleton with prop types after the class <br>
rsc→	stateless component skeleton <br>
rscp→	stateless component with prop types skeleton <br>
rsf→	stateless named function skeleton
```

- 가장 기본적인 단축키로 rcc와 rsc가 존재한다.
- `rcc 는 class 형태의 컴포넌트 템플릿`이고, `rsc는 stateless 즉, 함수형 컴포넌트`를 만들어준다.

[출처](https://velog.io/@sdc337dc/0.%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8#4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%A7%81)


## 1. 선언방식
### 1) 함수형 컴포넌트
```javascript
import React from 'react';
import './App.css';

function App() {
  const name = 'react';
  return <div className = "react">{name}</div>
}

export default App;
```
### 2) 클래스형 컴포넌트
```javascript
import React, {Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}

export default App;
```
   1) component에서 상속되고, class로 시작한다.
   2) render함수가 반드시 존재한다.
   3) state 사용이 가능하다.
   4) 라이프사이클 API 사용이 가능하다.


## 2. 기능 : props
- props : 컴포넌트 내부에서 바뀔 수 있는 값.
### 1) 클래스형 컴포넌트에서 props 사용하기
  - render함수에서 this.props를 조회한다.
  - 그 외에는 함수형 컴포넌트와 동일하게 사용할 수 있다.
```javascript
class MyComponent extends Component {
    render() {
      const {name, favoriteNum, children} = this.props;
        return (
           (...)
```
### 2) 함수형 컴포넌트의 props
  - props를 불러올 필요 없이 바로 호출 할 수 있다.
```javascript
const MyComponent = ({ name, children }) => {
    return (
        (...)
```


### 3) props.을 붙이지 않고 사용하는 방법
  - `비구조화 할당 문법`을 통해 `props 내부 값 추출`하기
  - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 방법


```javascript
const Mycomponenet = props => {
    const { name, children } = props;
    return(<div>
        hi, my name is {name} <br />
        my children is {children}
    </div>);
    };
```

## 3. 기능 : state
- state : 컴포넌트 내부에서 바뀔 수 있는 값.


### 1) 클래스형 컴포넌트
(1). [constructor 안에서 this.state 초기 사용]

```javascript
constructor(props){
    super(props);

    this.state = {
        name: [],
        userInput : "",
    }
}
```
▼
(2). [constructor 없이 바로 state 초기 사용]

```javascript
state = {
      name: [],
      userInput : "",
  }
```
▼
(3). [class형 컴포넌트의 state는 객체 형식]

```javascript
this.state = {name : [], userInput: "",};
```
▼
(4). [class형 : this.setState함수로 state값 변경]

```javascript
onclick = {() => {
    this.setState({number:number+1});
}}
```


### 2) 함수형 컴포넌트
- useState 동적 상태 띄우기
  - 첫번째 원소(number) : 현재 상태
  - 두번째 원소(setNumber) : Setter함수

```
const [number, setNumber] = useState(0);
```

- 배열 비구조화 할당을 통해서 코드를 간편하게 작성할 수 있다.
  - -> useState 함수를 불러와줌
  - -> number라는 상태를 만듬 / `useState(0);` 이상태의 기본값은 0 으로 한다.
  - -> setNumber는 현재 상태 업데이트 하는 함수 (setNumber로 `useState(0);`의 상태값을 바꿔주는 함수이다.)

