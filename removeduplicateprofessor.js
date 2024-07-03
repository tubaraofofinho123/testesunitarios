const teste = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9]

function removeDuplicates(arr) {
    const nova_arr = []
    for (let i = 0; i < arr.length; i++){
        if(!nova_arr.includes(arr[i])){
            nova_arr.push(arr[i]);
        }
    }
    return nova_arr
    };

console.log(removeDuplicates(teste))