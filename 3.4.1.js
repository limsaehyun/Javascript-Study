// 1부터 x의 합을 구하는 함수
const hap = function(x) {
    let sum = 0;
    for(let i = 1; i <= x; i++) {
        sum += i
    };
    return sum;
};

console.log(hap(10));