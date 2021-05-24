// programmers 12935
function solution(arr) {
    
    var i;
    let min = 0;
    
    if(1 >= arr.length) {
        arr[0] = -1
        return arr;
    }   
    
    for(i = 1; i < arr.length; i++) {
        if(arr[i] <= arr[min]) min = i;
    }
    arr.splice(min,1);

    return arr;
}