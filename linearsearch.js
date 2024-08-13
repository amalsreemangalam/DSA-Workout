function linearsearch(arr,t){
    for (let i=0;i<arr.length;i++){
        if(arr[i]===t){
            return i
        }
    }
    return -1
}

console.log(linearsearch([-5,3,4,5,7],10));
console.log(linearsearch([-5,3,4,5,7],4));
console.log(linearsearch([-5,3,4,5,7],7));