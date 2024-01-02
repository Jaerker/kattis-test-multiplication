/*



*/


function BigMultiplication(firstNum, secondNum) {
    if (firstNum === 0 && secondNum === 0)
        return "";
    let tableMap = [];
    let endCalculation = firstNum * secondNum;
    let storedValues = [];
    //Stores the seperate values of the grid numbers in storedValues
    for (let i = 0; i < secondNum.toString().length; i++) {
        storedValues[i] = [];
        for (let j = 0; j < firstNum.toString().length; j++) {
            storedValues[i][j] = (parseInt(firstNum.toString()[j]) * parseInt(secondNum.toString()[i])).toString().length != 2 ? '0' + (parseInt(firstNum.toString()[j]) * parseInt(secondNum.toString()[i])).toString() : (parseInt(firstNum.toString()[j]) * parseInt(secondNum.toString()[i])).toString();
        }
    }
    tableMap.push('+' + '-'.repeat(3 + firstNum.toString().length + (firstNum.toString().length * 3)) + '+'); // First print line: +---~---+
    let currentLine = ''; //currentLine stores multiple values that are going to take place in one array item
    for (let i = 0; i < firstNum.toString().length; i++) {
        currentLine += `${firstNum.toString()[i]}   `;
    } // prepares the first number that shows at the top as shown at next line
    tableMap.push('|   ' + currentLine + '|'); //  |   {number}   {number} ~   |
    for (let i = 0; i < secondNum.toString().length; i++) { //Goes through every number in secondNum to fix subgrid
        tableMap.push('| +' + '---+'.repeat(firstNum.toString().length) + ' |'); //Top section = | +---+~+ |
        i > (firstNum.toString().length + secondNum.toString().length) - endCalculation.toString().length ? currentLine = '|/|' : currentLine = '| |';
        for (let j = 0; j < firstNum.toString().length; j++) {
            currentLine += `${storedValues[i][j].toString()[0]} /|`;
        }
        tableMap.push(currentLine + ' |');
        tableMap.push('| |' + ' / |'.repeat(firstNum.toString().length) + secondNum.toString()[i] + '|');
        i + endCalculation.toString().length - (firstNum.toString().length + secondNum.toString().length) >= 0 ? currentLine = `|${endCalculation.toString()[i + endCalculation.toString().length - (firstNum.toString().length + secondNum.toString().length)]}` : currentLine = '| ';
        for (let j = 0; j < firstNum.toString().length; j++) {
            currentLine += `|/ ${storedValues[i][j].toString()[1]}`;
        }
        tableMap.push(currentLine + '| |');
    }
    tableMap.push('| +' + '---+'.repeat(firstNum.toString().length) + ' |');
    currentLine = '|';
    for (let i = endCalculation.toString().length - firstNum.toString().length; i < endCalculation.toString().length; i++) {
        currentLine += i === (endCalculation.toString().length - 1) ? `/ ${endCalculation.toString()[i]}` : `/ ${endCalculation.toString()[i]} `;
    }
    tableMap.push(currentLine + '    |');
    tableMap.push('+' + '-'.repeat(3 + firstNum.toString().length + (firstNum.toString().length * 3)) + '+'); // +---~---+
    let returnValue = "";
    tableMap.forEach(line => {
        returnValue += line +"\n";
    });
    return console.log(returnValue);
}


BigMultiplication(1272, 1256);
/*

+---------------+ 17 karaktärer, 15 streck
|   3   4   5   |
| +---+---+---+ |
| |1 /|2 /|2 /| |
| | / | / | / |5|
|1|/ 5|/ 0|/ 5| |
| +---+---+---+ |
|/|1 /|2 /|3 /| |
| | / | / | / |6|
|9|/ 8|/ 4|/ 0| |
| +---+---+---+ |
|/ 3 / 2 / 0    |
+---------------+

+-----------+
|   1   2   |
| +---+---+ |
| |0 /|0 /| |
| | / | / |2|
| |/ 2|/ 4| |
| +---+---+ |
| |0 /|1 /| |
| | / | / |7|
|3|/ 7|/ 4| |
| +---+---+ |
|/ 2 / 4    |
+-----------+

3 + 4 + 12 = 19
3 + 3 + 9 = 15
3 + 2 + 6 = 11

4 digits, 3 mellan varje och 3 på vardera sida
3 + digits.length + (digits.length *3)

+-------------------+ 21 tecken, 19 streck
|   9   9   9   9   |
| +---+---+---+---+ |
| |6 /|6 /|6 /|6 /| |
| | / | / | / | / |7|
|6|/ 3|/ 3|/ 3|/ 3| |
| +---+---+---+---+ |
|/ 9 / 9 / 9 / 3    |
+-------------------+

*/ 
//# sourceMappingURL=script.js.map