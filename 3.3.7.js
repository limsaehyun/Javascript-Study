// map() 메서드 : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
const arr = [1,2,3,4,5,6,7];
const arr2 = arr.map(e => e*e);
console.log(arr2);