// 1. Display Numbers in Text feild
function displayNumber(num){
    result.value+=num
}

// 2. Clear the text field
function cleartext(){
    result.value=" "
}

// 3. evaluate the expression
function evaluateExpression(){
 result.value=eval(result.value)
}

// 4. remove the last character
function removechar(){
    result.value=result.value.slice(0,-1)
}