const hyun = {
    name: 'hyun',
    nickname: 'skeat'
};

console.log(hyun.nickname);
delete hyun.nickname; // hyun 객체의 nickname 프로퍼티를 삭제
console.log(hyun.nickanme); // undefined

delete hyun;
console.log(hyun); // 객체는 삭제할 수 없다.