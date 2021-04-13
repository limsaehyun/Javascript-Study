// 객체 리터럴 방식 이용
const hyun = {
    name : 'Lim Sae Hyun',
    age : 17,
    gender : 'male',
    major: 'conputer science'
};
console.log(typeof(hyun));
console.log(hyun);

// 객체 프로퍼티 읽기
console.log(hyun.name);
console.log(hyun[ "name" ]);
// console.log(hyun.nickname) // undefined

// 객체 프로퍼티 갱신
hyun.major = 'electronics engineering';
console.log(hyun.major);
console.log(hyun[ 'major' ]);

// 객체 프로퍼티 동적 생성
hyun.age = 27;
console.log(hyun.age);

// 대괄호 표기법을 사용해야 하는 경우
hyun[ 'full_name' ] = 'lim sae hyun';
console.log(hyun.full_name);
console.log(hyun['full_name']);
