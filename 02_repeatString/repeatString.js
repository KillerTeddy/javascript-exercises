const repeatString = function(input, amount) {
    if(amount < 0){
        return 'ERROR'
    }
    if(input == ''){
        return ''
    }
    
    let repeatedString = ''
    for (let i = 0; i < amount; i++){
        repeatedString += input
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
