function recursivefibonacci(n){
    if(n<2){
        return n
    }
    return recursivefibonacci(n-1)+recursivefibonacci(n-2)
}

console.log(recursivefibonacci(0));
console.log(recursivefibonacci(1));
console.log(recursivefibonacci(6));