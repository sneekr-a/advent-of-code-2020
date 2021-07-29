let binarySearch = function (arr, x) {
   
    let start=0, end=arr.length-1;
    let mid;
          
    // Iterate while start not meets end
    while (start<=end){
  
        // Find the mid index
        mid=Math.floor((start + end)/2);
   
        // If element is present at mid, return True
        if (arr[mid]===x) return {'index':mid, 'found':true};
  
        // Else look in left or right half accordingly
        else if (arr[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
    }
   
    return {'index':mid, 'found':false};
}

module.exports = binarySearch;