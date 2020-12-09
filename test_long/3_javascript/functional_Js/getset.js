const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate (){
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b(){
        return this._b;
    },
    set a (value){ //set은 파라미터를 넣어줘야 한다.
        this._a = value;
        this.calculate(); //sum 값을 업데이트 시켜줌 => 함수를 호출시켜준다.
    },
    set b (value){
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);


//
// set함수안에 calculate()함수가 호출되기 때문에 a, b값을  설정할때마다 sum값이 자동으로 업데이트가 되어진다.