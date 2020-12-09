const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '후드티', price: 55000},
    {name: '맨투맨', price: 45000},
    {name: '카디건', price: 80000},
];

// 1. 이름만 따로 출력하기
let names = [];
for (const p of products){
    names.push(p.name);
}
console.log(names);
// [ '반팔티', '긴팔티', '후드티', '맨투맨', '카디건' ]

// 2. 가격만 따로 출력하기
let prices = [];
for (const p of products){
    prices.push(p.price);
}
console.log(prices);
// [ 15000, 20000, 55000, 45000, 80000 ]


// 3. 이럴 때 map을 사용하면 간편함.
const map = (f, iter) => {
    let res = [];
    for (const a of iter){
        res.push(f(a));
    }
    // console.log(names); -> 직접적으로 명령을 통해 외부에 영향을 준다.
    return res; //함수에 인자를 보내는것이 아닌 결과를 리턴한다. 리턴된 값으로 사용한다.
}

// 1). map함수가 받는것은 상품 뿐만이 아니기에 iterable을 사용한다.
// 2). 어떤 값을 수집할지? map은 추상화를 하기에 만든 함수에 위임을 한다.
    // ex) names.push(f(p)).name); f라는 함수에 값을 줄테니 names에 수집할 값을 줘라!

console.log(map (p => p.name, products));
// [ '반팔티', '긴팔티', '후드티', '맨투맨', '카디건' ]

console.log(map (p => p.price, products));
//[ 15000, 20000, 55000, 45000, 80000 ]
