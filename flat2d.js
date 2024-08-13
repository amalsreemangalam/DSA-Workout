let twoDarray = [
    [1,2,3],
    [4,5,6],
    [6,7,8]
]
let oneDarray = []
for(i=0;i<twoDarray.length;i++) {
    for(j=0;j<twoDarray[i].length;j++) {
        oneDarray.push(twoDarray[i][j])
    }
}

console.log(oneDarray)