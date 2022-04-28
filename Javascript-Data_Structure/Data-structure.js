/*
* nextInLine - this function takes two arguments as
* parameters, the first argument adds a data to end
* of an array (push), while the second argument removes
* the first element of the array (shift)
* @array - takes in the name of the array
* @newData - adds this data to the end of array
* Return: the function returns the removed element
*/


function nextInLine(array, newData)
{
// use the Javascript push() method to push newData to the end of the array
    array.push(newData);
// use the shift() method to remove first element and store it in a variable to be returned
    const removed = array.shift();
// return the removed element
    return removed;
}

 var test = [8,3,4,5,6,74,32,342];

 console.log("The returned element is: " + nextInLine(test, 9))
 console.log("The new value of test is: " + (test))
