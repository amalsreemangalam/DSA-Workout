let arr = [3, 5, 2, 6, 1, 4];

for (let i = 0; i < arr.length; i++) {
	for(let j=0;j<arr.length;j++){
		if(i!=j&&arr[i]<arr[j]){
			let temp=arr[i]
			arr[i]=arr[j]
			arr[j]=temp
		}
	}
}
   console.log(arr);