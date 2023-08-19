 function findSubMatrixOf1 (matrix) {

    let columns = matrix[0].length
    let rows = matrix.length
    let newMatrix = [];
 
for (let i = 0; i < rows; i++ ) {
    newMatrix[i] = [];
    for ( let j = 0; j < columns; j++ ) {
        newMatrix [ i ][ j ] = 0;
    }
}  
    for( let i = 0; i < rows; i++)
        newMatrix[i][0] = matrix[i][0];

    for( let i = 0; i < rows; i++)
        newMatrix[0][i] = matrix[0][i];

    for(let i = 1; i < rows; i++)
    {
        for(j = 1; j < columns; j++) {
        
        if(matrix[i][j] == 1) 
            newMatrix[i][j] = Math.min(newMatrix[i][j-1], Math.min( newMatrix[i-1][j],newMatrix[i-1][j-1])) + 1;
        else
            newMatrix[i][j] = 0;
        }
    }

    return Math.max(...(newMatrix.flat()))

}



let Matrix=[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,0,1,1,1],[1,0,1,1,1]]

console.log(findSubMatrixOf1(Matrix))