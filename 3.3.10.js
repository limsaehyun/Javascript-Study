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