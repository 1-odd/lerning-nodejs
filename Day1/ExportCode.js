// Liner search

function linearSearch(arr,target){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===target) return i;
    }
    return NaN;
}

module.exports = {
    linear: linearSearch
}