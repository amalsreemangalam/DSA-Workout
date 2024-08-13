function reversestring(str) {
    var stack = []
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    var reversedstring = ''
    while (stack.length > 0) {
        reversedstring += stack.pop()
    }

    return reversedstring
}

var orginalstring = "amalmnair"
var reversed = reversestring(orginalstring)
console.log(reversed);


