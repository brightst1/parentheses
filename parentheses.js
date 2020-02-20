var temp = []
function callFunction(start) {
    temp = [];
    doLogic('', start - 1, start, '(', start)
    return temp;
}
//max length 2n
function doLogic(currentString, left, right, key, max) {
    currentString += key
    if (left > 0) {
        doLogic(currentString, left - 1, right, '(', max)
    }
    if (right > left) {
        doLogic(currentString, left, right - 1, ')', max)
    }
    if (left == 0 && right == 0) {
        temp.push(currentString)
    }
}