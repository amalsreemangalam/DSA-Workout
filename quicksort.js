function sort(array) {
	if(array.length < 2) return array;

	let pivot = array[array.length-1];
	let right = [];
	let left = [];
	for(let i = 0; i < array.length-1; i++) {
		if(array[i] < pivot) {	
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return [...sort(left), pivot, ...sort(right)];
}



let arr=[10,50,5,87,2]




console.log(sort(arr));    