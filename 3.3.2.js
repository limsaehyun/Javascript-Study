const arr = ['one', 'two', 'three', 'four'];
arr.splice(2,1); // 인덱스가 2인부터 1개를 삭제
console.log(arr);
console.log(arr.length);
// splice는 프로퍼티를 완전히 제거하므로 length값도 줄어든다.
// splice(시작위치(인덱스), 삭제할 개수, 삭제한 위치에 추가할 요소(생략가능))
