// CALCULADOR EM JS
var readlineSync = require('readline-sync');

var a = parseInt(readlineSync.question("Digite o valor 1: "));
var b = parseInt(readlineSync.question("Digite o valor 2: "));
var cal = readlineSync.question("Digite uma opção: ");

switch (cal) {
    case "+":
        res = a + b;
        console.log(res);
        break;

    case "-":
        res = a - b;
        console.log(res);
        break;

    case "/":
        if (b == 0) {
            console.log("Não existe divisão por 0.");
        } else {
            res = a / b;
            console.log(res);
        }
        break;

    case "*":
        res = a * b;
        console.log(res);
        break;

        defaut:
            console.log("Opção inválida")

}