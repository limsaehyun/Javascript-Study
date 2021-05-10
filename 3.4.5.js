const foo = function() {
    return function() {
        console.log("this function is the return value");
    };
};

// bar는 내부 함수의 function를 참조하고 있다.
const bar = foo();
bar();
