/*

    Vad ska göras:
    - Mata in 2 tal som ska multipliceras
    - Talen ska visualiseras som nedan:

    15 streck
    +---------------+
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

    Hur varje rad ser ut är följande:

    - INLEDANDE OCH AVSLUTANDE:
        "+- ~ -+" där ~ är mängden tal i första numret = 3 + firstNum.toString().length + (firstNum.toString().length *3)
    - WORD ONE RADEN:
        "|   {n}" och repetera "   {n}" tills sista siffran, sen avsluta med "   |"
    - SUB GRID START, SUB GRID GAP, SUB GRID END:
        "| " och sen "+---" per siffra i firstNum, avsluta med "+ |"
    - SUB GRID MITT-1:
        "| |" följt av tiotals numret i firstNum[0] * secondNum[0], sen " /|" och sen loopa genom alla talen i firstNum på secondNum[0]
    - SUB GRID MITT-2:
        "| |" följt av " / |" lika många gånger som firstNum.Length, avslutat med högsta talet i secondNum.
    

//parseInt(num.toString()[INDEX])


    PSEUDOKOD:
    SET VARIABLES:
        hLine       =   "-"
        vLine       =   "|"
        dash        =   "/"
        plus        =   "+"
        space       =   " "
    FUNCTION BigMultiplication(firstNum, secondNum):
        SET ARRAY tableMap = []
        SET INT endCalculation = firstNum * secondNum;
        SET ARRAY storedValues = []
        FOR EACH secondSingleNum IN secondNum with INDEX1:
            storedValues[INDEX1] = []
            FOR EACH firstSingleNum IN firstNum with INDEX2:
                storedValues [INDEX1][INDEX2] = secondSingleNum * firstSingleNum; //prepares all numbers we will need to put inside the table

        tableMap.PUSH = '+' + '-'.repeat(3 + firstNum.toString().length + (firstNum.toString().length *3)) + '+';
        SET VARIABLE currentLine = ' '.repeat(3);
        FOR EACH num IN firstNum:
            currentLine += num + ' '.repeat(3);
        tableMap.PUSH = '|' + currentLine + vLine;
        
        FOR EACH num IN secondNum WITH INDEX:
            currentLine = '| ' + ('+' + '-'.repeat(3)).repeat(firstNum.toString().length) + '+ |';
            tableMap.PUSH = currentLine;

            FOR EACH subNum IN storedValues[INDEX]
            
            



        
    END FUNCTION



*/
function BigMultiplication(firstNum, secondNum) {
    var endCalcLengthCheck = -1;
    var tableMap = [];
    var endCalculation = firstNum * secondNum;
    var storedValues = [];
    for (var i = 0; i < secondNum.toString().length; i++) {
        storedValues[i] = [];
        for (var j = 0; j < firstNum.toString().length; j++) {
            storedValues[i][j] = (parseInt(firstNum.toString()[j]) * parseInt(firstNum.toString()[j])).toString().length != 2 ? '0' + (parseInt(firstNum.toString()[j]) * parseInt(firstNum.toString()[j])).toString() : (parseInt(firstNum.toString()[j]) * parseInt(firstNum.toString()[j])).toString();
        }
    }
    tableMap.push('+' + '-'.repeat(3 + firstNum.toString().length + (firstNum.toString().length * 3)) + '+'); // +---~---+
    var currentLine = '   ';
    for (var i = 0; i < firstNum.toString().length; i++) {
        currentLine += "".concat(firstNum.toString()[i], "   ");
    }
    tableMap.push('|   ' + currentLine + '|'); //  |   {} ~   |
    for (var i = 0; i < secondNum.toString().length; i++) {
        tableMap.push('| +' + '---+'.repeat(firstNum.toString().length) + ' |');
        i === 0 ? currentLine = '|/|' : currentLine = '| |';
        for (var j = 0; j < firstNum.toString().length; j++) {
            currentLine += "".concat(storedValues[j][i].toString()[0], " /|");
        }
        tableMap.push(currentLine + ' |');
        tableMap.push('| |' + ' / |'.repeat(firstNum.toString().length) + secondNum[i] + '|');
        endCalcLengthCheck++;
        currentLine = "|".concat(endCalculation[endCalcLengthCheck], "|");
        for (var j = 0; j < firstNum.toString().length; j++) {
            currentLine += "/ ".concat(storedValues[j][i].toString()[1], "|");
        }
        tableMap.push(tableMap.push(currentLine + '|'));
    }
    tableMap.push('| +' + '---+'.repeat(firstNum.toString().length) + ' |');
    currentLine = '|';
    for (var i = endCalcLengthCheck; i < endCalculation.toString().length; i++) {
        currentLine += "/ ".concat(endCalculation.toString()[i], " ");
    }
    tableMap.push(currentLine + '   |');
    tableMap.push('+' + '-'.repeat(3 + firstNum.toString().length + (firstNum.toString().length * 3)) + '+'); // +---~---+
    tableMap.forEach(function (line) {
        console.log(line);
    });
}
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
