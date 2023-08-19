function findMaxIndex (arr){
    
    let result = arr.map(item => item.reduce((acc, element)=> acc+element, 0));

    return  result.indexOf(Math.max(...result))

}

let arr=[[1,2,3],[2,31,4],[5],[6,7]]

console.log(findMaxIndex (arr))
