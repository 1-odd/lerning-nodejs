// method 1 when need only  export single function
export  function linear(arr,target){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===target) return i;
    }
    return NaN;
}

// method 2 when more then 1 function required to export 

export {
    linear as liniarSearch 
    // other function
}