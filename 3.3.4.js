// indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. 

const fruit = ['apple', 'banana', 'carrot', 'apple'];

console.log(fruit.indexOf('apple')); // apple이 들어가있는 인덱스인 0 출력
console.log(fruit.indexOf('carrot'));
console.log(fruit.indexOf('painapple')); // 일치하는 값이 없으므로 -1 출력