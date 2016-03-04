// Bubble sort

function bubbleSort(array) {
	var finalArray = [];

	while (array.length > 1) {
		var swapped = false;
		// Sorts one pass
		for (var i = 0; i<array.length -1; i++) {
			if (comparison(array[i], array[i+1])) {
				swap(array, i);
				swapped = true;
			}
		}
		// If row is sorted, no need to continue bubble sort.
		// Concatenate the current array to the final.
		if (!swapped) return array.concat(finalArray);

		// Add largest element to the final array
		finalArray.unshift(array.pop());
	}
	// Add the last element
	if (array.length === 1) {
		finalArray.unshift(array.pop());
	}
	return finalArray;
}


function comparison(val1, val2) {
	// Compares two values and returns if first is bigger
	return (val1 > val2);
}

function swap(arr,i) {
	// Swaps array elements at index i, i+1
	var smaller = arr[i+1];
	var larger= arr[i];
	arr[i] = smaller;
	arr[i+1] = larger;
}

