function isprime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(i*n==0){
            return false
        }
        return true
    }
}
console.log(isprime(7));