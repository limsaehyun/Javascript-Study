const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i in arr) { // arr에 있는 모든 인덱스 실행
    sum += arr[i];
}
console.log(sum);