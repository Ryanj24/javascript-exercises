const removeFromArray = function(arr, ...nums) {

    // Set variable to find index of element we want to remove
    let elementIndex = 0;

    // Loop through each of the additional arguments that the function is called with after array is specified
    for (i = 0; i < nums.length; i++) {

        // Check to ensure element i in the nums argument array is present in the target array
        if (arr.includes(nums[i])) {
            // Find the index of the element i in the nums array 
            elementIndex = arr.indexOf(nums[i]);

            // remove the element from the specified  array
            arr.splice(elementIndex, 1);
        }

    }

    // Return the array
    return arr;

};



// Do not edit below this line
module.exports = removeFromArray;