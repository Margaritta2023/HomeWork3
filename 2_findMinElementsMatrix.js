function findMinElementsMatrix (arr){

   return arr.map(element => Math.min(...element))

}




let arr=[[1,2,3],[2,3,4],[-5,4],[6,7]]

console.log(findMinElementsMatrix (arr))