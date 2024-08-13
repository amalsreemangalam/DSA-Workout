function reversestring(str){
    var reversedstring=''
    for(var i=str.length-1;i>=0;i--){
        reversedstring+=str[i]

    }
    return reversedstring
}
var orginalstring="amal"
var reversed=reversestring(orginalstring)
console.log(reversed);