const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    if (a < 0 || b < 0) return "ERROR"

    let total = 0
    let smallerNum = 0
    let biggerNum = 0
    if (a < b){ 
        smallerNum = a
        biggerNum = b
    }
    else {
        smallerNum = b
        biggerNum = a
    }


    for(let i = smallerNum; i < biggerNum + 1; i++){
        total += i
    }
    return total

};

// Do not edit below this line
module.exports = sumAll;
