// async&await
// promise를 유지한 상태
// async&await로 변환한 상태

// function fetchUser(){
//   가정 : backend에서 데이터를 불러오는 중 (데이터를 받아오는 시간 10secs)
//     return 'ellie';
// }
// const user = fetchUser();
// console.log(user);
// 이렇게 오래걸리는 코드 :  비동기적으로 수행하지 않으면 (동기적인 처리를 하면) 처리할 수


function delay(ms){
    return new Promise (resolve => setTimeout(resolve, ms));
}
async function getApple(){
    await delay(3000);
    return 'apple';
}

getApple();