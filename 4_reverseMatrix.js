function transposeMatrix (arr) {

    let transposedMatrix = []

    for( let i = 0; i < arr[i].length; i++) {

        transposedMatrix.push([]);
    };

    for(let i = 0 ; i < arr.length; i++) {

        for(let j = 0 ; j < arr[i].length; j++) {
        
            transposedMatrix[j][i] = arr[i][j]
        }    
    }

    return transposedMatrix;
}

console.log(transposeMatrix ([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]))
