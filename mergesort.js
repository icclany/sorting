function merge(arr1, arr2) {
	var finalArray = [];
	
while(arr1.length && arr2.length) {
	if (arr1[0] > arr2[0]) {
		finalArray.push(arr2.shift()); 
	} else {
		finalArray.push(arr1.shift());
	}
}

// Add the remaining array to the final array
if (arr1.length > 0) {
	finalArray = finalArray.concat(arr1);
}
else finalArray = finalArray.concat(arr2);

	return finalArray;
};

function split(wholeArray) {
	// Determine midpoint of array
	var half = Math.floor(wholeArray.length/2);

	var firstHalf = wholeArray.slice(0,half);
	var secondHalf = wholeArray.slice(half);

	return [firstHalf, secondHalf];
}

function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}
	else {
		return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));
	}
}