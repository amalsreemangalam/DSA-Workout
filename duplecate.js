function findDuplicates(arr) {
    var duplicates = [];
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    
    return duplicates;
}

var array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 7];
var duplicateElements = findDuplicates(array);
console.log("Duplicate elements in the array:", duplicateElements);
