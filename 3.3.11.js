const arr = [1,2,3,4,5];
const result = arr.reduce((acc, cur) => acc += cur);
console.log(result);
// acc는 맨 첫번째 값을 가진다. : 배열의 첫 번째 요소
// cur 값은 계속 증가해가면서 acc에는 모두 누적된다.