function sort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(sort(left), sort(right));
}

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

let num = [8, 20, -2, -4, 6];

console.log(sort(num));
