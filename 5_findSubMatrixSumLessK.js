function findSubMatrixSumLessK (matrix,k) {

   let objColumn = {} ;
   let resRows = 0 ;
   let newMatrixColumn = [];
   let rowSum = 0;
   let maxRowQuantity = 0;

   for(let i = 0; i < matrix.length; i++) {   // taking only those rows which sum is less than k

      let res = matrix[i].reduce((acc,item)=>acc+item,0);

      if (res <= k) objColumn[i] = matrix[i];
       }
   let objKey = Object.keys(objColumn); 
    
   for(let i = 0; i < objKey.length ; i++) {  // crеating matrix with columns that are attached

      if (objKey[i+1]-objKey[i] === 1) newMatrixColumn.push ( matrix[objKey[i]])
   }

   for(let i = 0; i < newMatrixColumn[0].length ; i++){ // cheking sum of the rows and their attachment

   for(let j = 0; i < newMatrixColumn.length ; i++) {

       resRows = resRows + matrix[i][j] 
   }
   if (resRows <= k) {

      ++rowSum;
      maxRowQuantity = (maxRowQuantity < resRows) ? resRows : maxRowQuantity;
   } else {
      
      maxRowQuantity = 0;
      resRows=0;  
   }
}
return Math.min(maxRowQuantity, newMatrixColumn.length )
}

let matrix=[[1,2,3,4,1,0,0],[9,10,11,12,1,1,0],[5,6,7,8,0,0,0],[5,6,7,8,0,0,0],[5,4,2,8,0,0,0],[5,3,7,1,1,1,0],[0,5,3,7,8,22,0]]

console.log(findSubMatrixSumLessK (matrix,26) )
