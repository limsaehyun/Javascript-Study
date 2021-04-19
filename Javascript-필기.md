#### Javascript Study



**자바스크립트의 자료형**

* null
* undefined
* 숫자
* 문자열
* 불린값

위의 값들을 제외한 것들을 참조 타입이라고 한다.



**변수 선언**

* 호이스팅(hosting) : 변수를 어느 위치에서 선언하더라고 사용할 수 있는 것

* const : 재선언이 불가능하다. (재할당 불가능) [호이스팅이 불가하다]

* ```javascript
  const a = 3;
  a = 4; // 불가능
  ```

* let : 재선언 불가능하다. (재할당 가능) [호이스팅이 불가하다]

* ```javascript
  let a = 3;
  a = 4; // 가능
  ```

* var : 재선언이 가능하다. (재할당 가능) [호이스팅이 가능하다]

* ```javascript
  a = 4; // 가능
  var a = 3; // 호이스팅 가능
  ```



**프로퍼티**

* 프로퍼티는 'key:value' 형태이다.

* key(키)는 value(값)을 가르킨다. (값의 데이터 주소를 가르킨다.)

```javascript
const myInfo = { // myInfo라는 객체 생성
    name: 'LimSaeHyun', // name 이라는 프로퍼티 생성
    age: 17,
    major: 'computer science'
};
```



**반복문**

* 반복문 : for

* ```javascript
  const arr = [1, 2, 3, 4, 50];
  for(let prop in arr) { // 반복문 prop이 arr안의 것들을 싱행
      console.log(prop);
  }
  // 출력 : 1, 2, 3, 4, 50
  ```

* ```javascript
  const arr = [1, 2, 3, 4, 50];
  for(let prop = 0; prop < arr.length; prop++) {
      console.log(prop);
  }
  // 출력 : 1, 2, 3, 4, 50
  ```

  

**배열**

* 선언 : (const/let/var) 변수명 [인덱스];

* ```javascript
  const arr = [1,2,3,4,5];
  
  arr[2] = 3; // 2번 인덱스 수정
console.log(arr)
  ```
  
  
  

**배열 관련 메서드**

* length 메서드 : 변수의 가장 큰 인덱스 + 1

* push 메서드 : 배열 끝에 항목 추가 

* ```javascript
  const animals = ['pugs', 'sheep'];
  
  animals.push('cows');
  
  console.log(animals);
  ```

* pop : 배열 끝에서부터 항목 제거

* ```javascript
  const animals = ['pigs', 'sheeps', 'cows'];
  
  animals.pop(); // 'cows' 삭제
  
  console.log(animals);
  ```

* shift : 배열 앞에 항목 추가

* unsift : 배열 앞에 항목 제거

* forEach() 메서드 : 주어진 함수를 배열 요소 각각에 대해 실행한다.

* ```javascript
  // forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
  const arr = [1,2,3,4,5,6,7];
  let sum = 0;
  
  arr.forEach(function(i) { // arr안에 있는 요소를 전부 실행
      sum += i // arr안의 숫자를 sum에 모두 더함
  });
  
  console.log(sum); // 28 출력
  ```

* indexOf() 메서드 : 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환한다. 

* ```javascript
  const fruit = ['apple', 'banana', 'carrot', 'apple'];
  
  console.log(fruit.indexOf('apple')); // apple이 들어가있는 인덱스인 0 출력
  console.log(fruit.indexOf('carrot'));
  console.log(fruit.indexOf('painapple')); // 일치하는 값이 없으므로 -1 출력
  ```

* findIndex() 메서드 : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환한다.

* ```javascript
  const fruit = ['a' , 'aa', 'aaa', 'aaaa', 'aaaaa'];
  console.log(fruit.findIndex(e => e.length > 3)); // length가 3이 넘는 인덱스를 출력
```
  
* ```javascript
  const fruit = [1, 2, 3, 4, 5, 6, 7];
  console.log(fruit.findIndex(i=>i%4==0)); // 4의 배수 출력
  ```

* map() 메서드 : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

* ```javascript
  const arr = [1,2,3,4,5,6,7];
  const arr2 = arr.map(e => e*e);
  console.log(arr2);
  // 2, 4, 9, 16, 25, 36, 49
  ```

* concat() 메서드 : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 

* ```javascript
  const arr1 = ['a', 'b', 'c'];
  const arr2 = ['d', 'e', 'f'];
  const result = arr1.concat(arr2); // arr1 + arr2
  console.log(result);
  ```

* filter() 메서드 : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

* ```javascript
  const obj = [
      {
          ind:1,
          done: true,
      },
      {
          id: 2,
          done: false,
      },
      {
          id: 3,
          done: false,
      }
  ];
  const who = obj.filter(e => e.done === false); // done == false면 who에 담음
  console.log(who);
  ```

* reduce() 메서드 : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

* ```javascript
  const arr = [1,2,3,4,5];
  const result = arr.reduce((acc, cur) => acc += cur);
  console.log(result);
  // acc는 맨 첫번째 값을 가진다. : 배열의 첫 번째 요소
  // cur 값은 계속 증가해가면서 acc에는 모두 누적된다.
  ```

