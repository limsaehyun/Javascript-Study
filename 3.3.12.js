const arr = [1,2,3,4,5];
const [one, two, three, four, five] = arr; // 1:one, 2:two 덮어쓰기같은 개념
console.log(one);
console.log(five);

const obj = {
    name: 'seo',
    major: 'cs',
    age: 29,
};
const {name:nickname, age, major} = obj; // name 이란 변수를 nickname으로도 사용
console.log(nickname);

function call({name, major, age}) {
    console.log(name);
    console.log(major);
    console.log(age);
}
call(obj); // 위에서 불러온 것을 개체와 연결
























































































