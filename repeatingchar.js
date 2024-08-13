function countCharacters(arr) {

    var charCount = {};


    arr.forEach(function (char) {

        if (charCount[char]) {

            charCount[char]++;
        } else {

            charCount[char] = 1;
        }
    });


    return charCount;
}


var arr = ['a', 'b', 'c', 'a', 'b', 'a'];

var counts = countCharacters(arr);

console.log(counts);

