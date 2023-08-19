function includesWords(matrix, word) {

    let searchWord = word.split("");
    let searchWordsLength = word.length;
    let firstLetter = word[0];

    for (let i = 0; i < matrix.length; i++) {    //searching ->

        let searchRow = matrix[i] ;
        let firstIndex = searchRow.indexOf(firstLetter)
        if (firstIndex === -1) { 
            continue
        }
        if (searchRow.length - firstIndex >= searchWordsLength) {
        
            let temporaryFound = searchRow.slice(firstIndex, firstIndex + searchWordsLength)
      
            if (temporaryFound.join('') === searchWord.join('')) {  
              return true
            }
          }

          if (matrix.length - i >= searchWordsLength) {    // searching 🠓
      
            let temporaryFound = []
      
            for (let j = 0; j < searchWordsLength; j++) {
                temporaryFound.push(matrix[i + j][firstIndex])
            }
            if (temporaryFound.join('') === searchWord.join('')) {
              return true
            }
          }
        }
       return false
    }

let arr=[["a","b","c"],["d","e","f"],["j","h","i"],["k","l","m"]]

console.log(includesWords(arr, "beh"))