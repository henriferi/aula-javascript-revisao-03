//parte 1
let fruta = "melancia";
switch (fruta) {
    case "maçã":
        console.log("Não vendemos esta fruta aqui.");
        break;
    case "kiwi":
        console.log("Estamos com escassez de kiwis.");
        break;
    case "melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.log("ERRO! procure o adminstrador do sistema!");
}

//parte 2
function aumento() {
let salario = 0;
let novoSalario;
let valorAumento;
    if(salario > 0 && salario <= 280) {
        novoSalario = salario + (salario*20)/100;
        valorAumento = (salario*20)/100;
        console.log(`Seu salário era de R$${salario} obteve um acréscimo de 20%, o valor do aumento é de ${valorAumento} e seu salário atual passou a ser R$${novoSalario}`);
    } else if (salario > 280 && salario < 700) {
        novoSalario = salario + (salario*15)/100;
        valorAumento = (salario*15)/100;
        console.log(`Seu salário era de R$${salario} obteve um acréscimo de 15%, o valor do aumento é de ${valorAumento} e seu salário atual passou a ser R$${novoSalario}`);
    } else if (salario > 700 && salario < 1500) {
        novoSalario = salario + (salario*10)/100;
        valorAumento = (salario*10)/100;
        console.log(`Seu salário era de R$${salario} obteve um acréscimo de 10%, o valor do aumento é de ${valorAumento} e seu salário atual passou a ser R$${novoSalario}`)
    } else if (salario >= 1500) {
        novoSalario = salario + (salario*5)/100;
        valorAumento = (salario*5)/100;
        console.log(`Seu salário era de R$${salario} obteve um acréscimo de 5%, o valor do aumento é de ${valorAumento} e seu salário atual passou a ser R$${novoSalario}`);
    } else {
        console.log(`ERRO!`);
    }
}
console.log(aumento())