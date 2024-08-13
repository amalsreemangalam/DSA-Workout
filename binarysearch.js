
// function binarysearch(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) {
//         return -1
//     }
//     let mid = Math.floor((left + right) / 2)
//     if (arr[mid] == target) {
//         return mid
//     }

//     if (target <= arr[mid]) {
//         return binarysearch(arr, target, left, mid - 1)
//     }
//     else {
//         return binarysearch(arr, target, mid + 1, right)
//     }


// }

// console.log(binarysearch([-5, 2, 4, 6, 10], 10));
// console.log(binarysearch([-5, 3, 4, 5, 7], 4));
// console.log(binarysearch([-5, 3, 4, 5, 7], 20));



function binarySearch(arr,target,leftIndex=0,rightIndex=arr.length-1){

if(leftIndex>rightIndex){
    return -1
}

let mid=Math.floor((leftIndex+rightIndex)/2)
 if(target===arr[mid]){
    return mid
 }
if(target<arr[mid]){
    return binarySearch(arr,target,leftIndex,mid-1)
}else{
    return binarySearch(arr,target,mid+1,rightIndex)
}
}

console.log(binarySearch([-5, 3, 4, 5, 7],7));