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
        "+- ~ -+" där ~ är mängden tal i första numret < 3 + firstNum.toString().length + (firstNum.toString().length *3) >
    - WORD ONE RADEN:
        "|   {n}" och repetera "   {n}" tills sista siffran, sen avsluta med "   |"
    - SUB GRID START, SUB GRID GAP, SUB GRID END:
        "| " och sen "+---" per siffra i firstNum, avsluta med "+ |"
    - SUB GRID MITT-1:
        "| |" följt av tiotals numret i firstNum[0] * secondNum[0], sen " /|" och sen loopa genom alla talen i firstNum på secondNum[0]
    - SUB GRID MITT-2:
        "| |" följt av " / |" lika många gånger som firstNum.Length, avslutat med högsta talet i secondNum.
    

*/
function BigMultiplication(firstNum, secondNum) {
    var firstNumLength = firstNum.toString().length;
    var secondNumLength = secondNum.toString().length;
    console.log("+".concat(PrintOut('-', (firstNumLength + 3 + (firstNumLength * 3))), "+\n    "));
}
function PrintOut(character, length) {
    var value = "";
    for (var i = 0; i < length; i++) {
        value += character;
    }
    return value;
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
//# sourceMappingURL=script.js.map