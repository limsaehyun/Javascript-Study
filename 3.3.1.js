const arr = ['zero', 'one', 'two', 'three'];
console.log(arr);
console.log(arr.length);
delete arr[2];
console.log(arr);
console.log(arr.length);
// delete는 값만 제거하므로 프로퍼티는 그대로이다.
