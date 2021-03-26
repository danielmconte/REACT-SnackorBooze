function unroll(squareArray) {
    let unwrappedArray = [];
    function helper(){
    for(let i = 0; i < squareArray.length; i++){
        if(i === 0){
            for(let j= squareArray[i].length -1; j >=0; j--){
                let frontElement = squareArray[i].shift()
                unwrappedArray.push(frontElement);
            }   
        } else if (i < squareArray.length - 1) {
            let lastElement = squareArray[i].pop()
            unwrappedArray.push(lastElement)

        } else if (i === squareArray.length -1){
            for (let j = squareArray[i].length-1; j >= 0; j--){
                let lastElement = squareArray[i].pop()
                unwrappedArray.push(lastElement)
                if(j === 0){
                    squareArray.pop();
                    squareArray.shift();
                    for(let j = squareArray.length -1; j >=0; j--){
                        let firstElement = squareArray[j].shift();
                        unwrappedArray.push(firstElement);
                    }
                    helper()
                }
            }
        } 
        }
    }
    if(squareArray.length){
        helper();
    }
    console.log(squareArray);
    console.log(unwrappedArray);
    return unwrappedArray;
}




const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  unroll(square);

module.exports = unroll;
