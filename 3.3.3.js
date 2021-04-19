// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
const arr = [1,2,3,4,5,6,7];
let sum = 0;

arr.forEach(function(i) { // arr안에 있는 요소를 전부 실행
    console.log(i)
    sum += i
});
console.log(sum);