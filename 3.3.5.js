// findIndex() 메서드 : 주어진 판별 함수를 만족하는 배열의 첫 번쨰 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환한다.
const fruit = ['a' , 'aa', 'aaa', 'aaaa', 'aaaaa'];
console.log(fruit.findIndex(e => e.length > 3)); // length가 3이 넘는 인덱스를 출력
