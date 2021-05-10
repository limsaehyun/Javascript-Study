const arr = ["a", "b", "c", "d", "e"];
const [ㄱ, ㄴ, ㄷ, ㄹ, ㅁ] = arr;
console.log(ㄴ);
const obj = {
    name: 'hyun',
    age: '17',
    location: 'siheung'
};
const {name, age:su, location} = obj /// age를 su로 사용
console.log(su)