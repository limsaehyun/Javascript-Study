// programmers 42576
function solution(participant, completion) {
    let i = 0;
    participant.sort();
    completion.sort();
    while(1) {
        if(participant[i] != completion[i]) return participant[i];
        i++;
    }
}