const hyun = {
    name: 'hyun',
    age: 27,
    major: 'computer science'
};

// 반복문
for(let i in hyun) { // i 가 foo안에서 모든 키의 값을 가짐
    console.log(i, hyun[i]);
}