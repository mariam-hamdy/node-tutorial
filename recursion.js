function addArray(arr) {
    if(arr.length === 1){
        return arr[0];
    } else {
        return arr.pop() + addArray(arr);
    }
}
