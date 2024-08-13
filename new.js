function binarySearch(arr, target) {
    let leftIndex = 0
    let rightindex = arr.length - 1

    if (leftIndex < rightindex) {
        let mid = Math.floor((leftIndex + rightindex) / 2)

        if (target === arr[mid]) {
            return mid
        }

        if (target <= mid) {
           leftIndex = mid + 1
        } else {
            rightindex=mid-1
    }
   
}
return -1
}


console.log(binarySearch([10,20,30,40,50],30))