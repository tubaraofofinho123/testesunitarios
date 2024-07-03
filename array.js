function removeDuplicada(arr){
    let ret = []
    for(let i = 0; i < arr.length; i++ ){
        if(ret.indexOf(arr[i]) == -1){
            ret.push(arr[i])
        }
    }
    return ret;

}

console.log(removeDuplicada([1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]))

module.exports = removeDuplicada;