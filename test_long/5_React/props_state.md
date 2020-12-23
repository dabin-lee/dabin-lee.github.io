---
title: props와 state
---

# 1_1. props와 state
- state는 컴포넌트가 고정적으로 가지고 있는 데이터이며, Props는 이 State를 부모의 컴포넌트에 적용시켜 줄 때 사용한다.
  - 컴포넌트는 사용하는 쪽과 구현하는 쪽이 철저히 분리되어 있고, 나눠짐으로 각자 양쪽의 편의성을 높인다.
  - 컴포넌트가 좋은 부품이 되기 위해서 실제 구현되는 내부 (state)구성이 잘 되어 있어야 한다.
>[props]
> > - 사용자가 컴포넌트를 사용하는 입장에서 중요
> > - component안에서 기본적인 동작을 변경할 수 있게 사용자에게 제공하는 것
> > - 컴포넌트의 동작을 바꾸고 싶을 때 제공하는 문법적인 정보
>
>[state]
> > - props의 값에 따라 내부 구현에 필요한 값
> > - 👉 state는 다양한 동작을 하는 컴포넌트 제작에 필수



## 리팩토링 방법
```tip
  JSX
  - JavaScript 문법의 확장 : React는 JSX를 HTML로 변환하는 역할
```
  - 태그의 재사용성을 높이기 위한 속성
  - 언제나 같은 값을 뱉어내는 컴포넌트를 효율적으로 사용 가능하다.
  - 컴포넌트 내부에 직접 들어가서 출력 값을 직접 바꾸는게 아니고 Jsx를 통해 props(속성값)을 직접 변경한다.
  - 리액트는 props를 받고 그것을 바탕으로 서로 다른 결과를 만들어 낸다.


```javascript
class Subject extends Component{ //subject
  render(){
    return(
      <header>
        <h1>WEB</h1>
        World wide web!
      </header>
    );
  }
}

class App extends Component { //App
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="World wide web!"/>
        <Nav />
        <Content />
      </div>
    )
  }
}
export default App;
```
▼
```javascript
//subject
<header>
    <h1>{this.props.title}</h1>
    {this.props.sub}
</header>


class App extends Component { //App
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="World wide web!"/>
        <Nav />
        <Content />
      </div>
    )
  }
}
export default App;
```
- Subject라고 하는 컴포넌트가 실행될 때 속성을 알아내서 위치시킬 수 있는방법 (사용할 때 약속된 JSX기호는 `{}`를 쓴다.)

```tip
<h1>{this.props.title}</h1>
this (객체지향 this).attribute처럼 쓰이는게 props.원하는 값의 이름
```

## 2-1 constructor() 생성자 사용법
```javascript
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

// 컴포넌트를 만드는 코드
class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        Subject: {title: "WEB", sub: "World Wide Web!"} //state화 시킨 후 객체를 만듬
      }
  }

  render(){
    return(
      <div className="App">
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}/>
        <TOC />
        <Content desc="HTML is Hyper Text Markup Language"/>
      </div>
    )
  }
}
export default App;
```
- `construcotr()`
  - 컴포넌트를 생성할 때 state값을 초기화하고 메서드를 바인딩 할때 사용한다.
  - Component가 마운트 되기 전 호출 : `컴포넌트 실행 render 함수 보다 먼저 실행이 되어야 한다.`
    - (마운트(mount)란? DOM이 생성되고 웹 브라우저 상에 나타나는 것을 마운트(mount)라고 한다. / 어떠한 것을 Available 한 상태로 준비하는 것을 말한다.)
  - Component를 상속한 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하고 있습니다. 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 생기기 때문입니다.
  - state 객체 안에는 여러 값이 있을 수 있다.


## 2-2 constructor() 에서 꺼내기
```javascript
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){//컴포넌트가 만들어질 때마다 호출되는 함수
        super(props); //component가 갖고 있는 생성함수를 호출해줘야 한다.
        this.state = {
            number : 0,
            fixedNumber : 3
        };
    }

    render(){...}
```
▼
```javascript
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number : 0,
        fixedNumber : 0
      };
    }

    render(){...}
```
- constructor메서드 선언하지 않고 state 초깃값을 설정할 수 있다.
- 바벨에서 사용하는 방법으로 javascript문법은 아님.

## 3. 각 state 메서드와 컴포넌트 인스턴스의 관계를 연결하는 3가지 방법
- (1) constructor에서 함수를 바인딩 해주기
  - constructor 내부에서 state값 설정
  - constructor에서 사용하는 this를 바인딩 해주기

```javascript
class Counter extends Component{
  constructor(props){
      super(props){
          this.handleIncrease = this.handleIncrease.bind(this);
      }
  }
  handleIncrease(){
    console.log(this);
  }
  render(){
    return(
      <button onClick={this.handleIncrease}>+1</button>
    )
  }
```


- (2)커스텀메소드 화살표함수 사용
  - constructor 내부에서 state값 설정

```javascript
class Counter extends Component{
  constructor(props){
    super(props){
      this.state = { // 1. state 특정객체 설정
      counter : 0 //2. 해당 컴포넌트에서 사용할 초기값 넣기 -
      };
    }
  }
  handleIncrease = () => {
    this.setState({ //3. 컴포넌트 상태 조회
      counter: this.state.counter + 1
    })
  }
  render(){
    return(
      <h1>{this.state.counter}</h1> //4. 값이 변동
    )
  }
```

- (3) constructor없이 state값 바로지정
   - 바벨 플러그인을 이용함

```javascript
class Counter extends Component{
    state = {
      counter : 0,
      fixed : 1,
      }
    }

  handleIncrease = () => {
    this.setState({ //setState에 있는 값만 변경해주는것
      counter: this.state.counter + 1
    })
  }
  render(){
    return(
      <h1>{this.state.counter}</h1>
      <p>{this.state.fixed}</p>
    )
  }
```

- (4) state추가시 메소드에 전부 다 표기

```javascript
class Counter extends Component{
    state = {
      counter : 0,
      fixed : 1,
      updateMe: {
        toggleMe: false,
        dontChangeme: 1,
      }
    }

  handleIncrease = () => {
    this.setState({ //setState에 있는 값만 변경해주는것
      counter: this.state.counter + 1
    })
  }
  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe, //객체는 다 넣어줘야 한다.
        toggleMe: !this.state.updateMe.toogleMe,
      }
    })
  }
  render(){
    return(
      <h1>{this.state.counter}</h1>
      <p>{this.state.fixed}</p>
    )
  }
```


- (5) setState의 함수형 업데이트
  - this.setState를 사용해도 바로 state값이 바뀌는것이 아니다.(setState는 설정해놓은 상태로 바꿔달라고 요청하는 것임)

```javascript
class Counter extends Component{
    state = {
      counter : 0,
      fixed : 1,
      }
    }

  handleIncrease = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }
  render(){
    return(
      <h1>{this.state.counter}</h1>
      <p>{this.state.fixed}</p>
    )
  }
```

- (6) this.setState가 끝난 후 특정 작업

```javascript
<button onClick={() => {
    this.setState(
        {
        number: number + 1
        },
      () => {
          console.log('방금 setState가 호출되었습니다.');
          console.log('this.state')
      }
    );
  }}
>
  +2
</button>
```
- setState를 사용하여 값을 업데이트 한 후 특정 작업을 하고 싶을 때는 setState의 `두번째 파라미터 사용`
- 콜백함수를 등록하여 작업 처리를 한다.
```tip
화살표함수에서 값 바로 반환을 받고 싶으면 코드 {}를 생략한다.
const sum = (a, b) => a + b;
```


1. 함수형 컴포넌트 useState 를 통해 컴포넌트에서 바뀌는 값 관리하기
   - 동적인 값을 끼어 컴포넌트 상태를 관리한다.
   - 리액트 16.8 에서 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.

```javascript
import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    // 상태의 기본값을 나타낸다.
    const onClickEnter = () => {setMessage(n => n + '님 안녕하세요')};
    const onClickLeave = () => setMessage('안녕히가세요');

    const [color, setColor] = useState('black');
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    )
}

export default Say;
```
- 첫번째 원소(message) : 현재 상태
- 두번째 원소(setMessage) : Setter함수


4. state와 props 정리
5.