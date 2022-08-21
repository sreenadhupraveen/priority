// Given an unsorted array of numbers, write a function that returns true if the array consists of consecutive numbers. 

var tempArray = [78,79,80,81,82];

// Note: Given array has to be sorted first then do the operations;

// var firstIndex = tempArray[0];
// var firstVal = tempArray[0];
var consecutive = true;
for(var i=0; i< tempArray.length;i++){
  
  // Method 1

  // if(firstVal === tempArray[i]){
  //   firstVal++;
  // } 
  // else{
  //   consecutive = false
  // }
  
  // Method 2

  // if((tempArray[i+1] - tempArray[i]) !== 1 && i !== tempArray.length -1)
  //   consecutive = false;

	
	/* The function checks if the array elements are consecutive
	If elements are consecutive, then returns true, else returns
	false */
	function areConsecutive(arr,n)
	{
		if (n < 1)
			return false;
			
		/* 1) Get the minimum element in array */
		let min = getMin(arr, n);
		
		/* 2) Get the maximum element in array */
		let max = getMax(arr, n);
		
		/* 3) max - min + 1 is equal to n, then only check all elements */
		if (max - min + 1 == n)
		{
			/* Create a temp array to hold visited flag of all elements.
			Note that, calloc is used here so that all values are initialized
			as false */
			let visited = new Array(n);
      console.log(visited, 'visiteddddd');
			for(let i=0;i<n;i++)
			{
				visited[i]=false;
			}
      console.log(visited, 'visiteddddd new')
			let i;
      // let arr=[5, 4, 2, 3, 1, 6]
			for (i = 0; i < n; i++)
			{
				/* If we see an element again, then return false */
				if (visited[arr[i] - min] != false)
				{
					return false;
				}
				/* If visited first time, then mark the element as visited */
				visited[arr[i] - min] = true;
			}
			/* If all elements occur once, then return true */
			return true;
		}
		return false; // if (max - min + 1 != n)
	}
	
	/* UTILITY FUNCTIONS */
	function getMin(arr, n)
	{
		let min = arr[0];
		for (let i = 1; i < n; i++)
		{
			if (arr[i] < min)
				min = arr[i];
		}
		return min;
	}
	function getMax(arr,n)
	{
		let max = arr[0];
		for (let i = 1; i < n; i++)
		{
			if (arr[i] > max)
				max = arr[i];
			
		}
		return max;
	}
	
	/* Driver program to test above functions */
	let arr=[5, 4, 2, 3, 1, 6]
	let n = arr.length;
	if (areConsecutive(arr, n))
	{
		console.log("Array elements are consecutive");
	}
	else
	{
		console.log("Array elements are not consecutive");
	}
	// This code is contributed by avanitrachhadiya2155
	

}


console.log(consecutive, 'consecutive');