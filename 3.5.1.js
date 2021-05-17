// programmers 12916
function solution(s){
    var answer = true;
    let num1 = 0, num2 = 0;
    
    for(let i = 0; i <= s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') num1++;
        if(s[i] === 'y' || s[i] === 'Y') num2++;
    }
    if(num1 === num2) answer = true;
    else answer = false;

    return answer;
}