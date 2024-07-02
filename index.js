//Exercício 1
/*1 - Implementar em JavaScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.
No console
Como um alerta
E no documento do HTML*/

let cotacao = Number(prompt("Informe a cotação do Dólar"));

let carteira = Number(prompt("Informe o valor que você tem"));

let opcao = Number(prompt("Informe o tipo de conversão: /n1 - REAL -> DOLAR -> /N2 - DOLAR -> REAL ->"))

if(opcao == 2)  {
    valorConvertido = cotacaoAtual * carteira;
} else {
    valorConvertido = carteira / cotacaoAtual
}
alert (valorConvertido)

//Exercício 2
/*2 - Faça um programa em JS que leia um número inteiro informado pelo usuário e diga se esse número é par ou ímpar.
Sugestão: Use o % (resto da divisão inteira).*/

const numero = parseInt(prompt("Informe o número inteiro:"));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par `);
    
} else { 
    console.log(`O número ${numero} é ímpoar `)
}

//3 - Faça um programa que leia dois números e informe qual é o maior.
/*Ex.: 
numero1 = 20
numero2 = 30
resposta = ‘O número2 é o maior’*/

let numero1 = Number(prompt("Informe o número 1"));

let numero2 = Number(promt("Informe o número 2"));

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior`);
} else {
    console.log(`O número ${numero2} é maior`);
}

//Exercício 4
/*4 - Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.*/

let provaUm = parseFloat(prompt("Informe a nota da prova"));

let provaDois = parseFloat(prompt("Informe a nota da prova"));


if (provaUm >= 6) {
    console.log(`Aluno aprovado`);
} else {
    console.log(`Aluno reprovado`);
}

if (provaDois >= 6) {
    console.log(`Aluno aprovado`);
} else {
    console.log(`Aluno reprovado`);
}

//Exercicio 5
/*5 - Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP (com uma poltrona) e um ingresso standard (cadeira comum). É possível optar também por um combo promocional de pipoca e refrigerante ou não. Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não (opção 2). O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:
Ingresso VIP sem pipoca: “Valor: 80 reais”;
Ingresso VIP com pipoca: : “Valor: 110 reais”;
Ingresso standard sem pipoca: “Valor: 40 reais”;
Ingresso standard com pipoca: “Valor: 70 reais”;*/


let tipoIngresso = parseInt(prompt("Digite o tipo de ingresso (1 para VIP, 2 para standard): "));

let opcaoPipoca = parseInt(prompt("Deseja o combo de pipoca e refrigerante? (1 para sim, 2 para não): "));

let valorIngresso;

if (tipoIngresso === 1) {
    if (opcaoPipoca === 1) {
        valorIngresso = 110;
    } else {
        valorIngresso = 80;
    }

//Ingresso standard
} if (tipoIngresso === 2) {
    if (opcaoPipoca === 1) {
        valorIngresso = 70;
    } else {
        valorIngresso = 40;
    }
} else {
    console.log("Opção inválida. Tente novamente!");
    return;
}
    console.log(`Valor do ingresso é: ${valorIngresso} reais`);

//Exercicio
/* 6 - Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. Antes de terminar, o código deve informar que irá ser encerrado.*/

// Inicializa o chat
console.log("Bem-vindo ao nosso chat!");
console.log("Eu sou o seu assistente virtual.");

// Pergunta inicial
console.log("O que você gostaria de fazer?");
console.log("1 - Falar sobre o tempo");
console.log("2 - Pedir ajuda com uma tarefa");
console.log("3 - Sair do chat");

let resposta = prompt("Digite a opção desejada:");

// Opção 1: Falar sobre o tempo
if (resposta == "1") {
  console.log("Ah, o tempo está muito interessante hoje!");
  console.log("Você gostaria de saber mais sobre o clima?");
  console.log("1 - Sim, quero saber mais");
  console.log("2 - Não, obrigado");
  let respostaTempo = prompt("Digite a opção desejada:");
  if (respostaTempo == "1") {
    console.log("O clima hoje é ensolarado com uma temperatura de 23°C.");
  } else {
    console.log("Ok, não há problema!");
  }
// Opção 2: Pedir ajuda com uma tarefa
} else if (resposta == "2") {
  console.log("Claro que posso ajudar!");
  console.log("Qual é a tarefa que você precisa de ajuda?");
  console.log("1 - Fazer um trabalho de escola");
  console.log("2 - Resolver um problema de matemática");
  console.log("3 - Outra coisa");
  let respostaTarefa = prompt("Digite a opção desejada:");
  if (respostaTarefa == "1") {
    console.log("Ok, posso ajudar você a fazer o trabalho de escola.");
  } else if (respostaTarefa == "2") {
    console.log("Posso ajudar você a resolver o problema de matemática.");
  } else {
    console.log("Ok, posso ajudar você de outra forma.");
  }
  // Opção 3: Sair do chat
} else if (resposta == "3") {
  console.log("Ok, até logo!");
} else {
  console.log("Opção inválida!");
}
// Informa que o chat será encerrado
console.log("O chat será encerrado em breve.");
console.log("Obrigado por conversar comigo!");

//Exercicio 7
/*7 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um programa que leia o número de horas trabalhadas em um mês,
o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas.
(considere que o mês possua 4 semanas exatas). */

let horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioPorHora = parseFloat(prompt("Digite o salário por hora:"));

// Calcula o salário total
let salarioTotal = 0;
if (horasTrabalhadas <= 160) { // 40 horas/sem x 4 semanas
  salarioTotal = horasTrabalhadas * salarioPorHora;
} else {
  let horasExtras = horasTrabalhadas - 160;
  let salarioExtras = horasExtras * salarioPorHora * 1.5;
  salarioTotal = 160 * salarioPorHora + salarioExtras;
}

console.log(`O salário total do funcionário é R$ ${salarioTotal.toFixed(2)}`);

//Exercicio 8
/*8 - Elabore uma calculadora simples, levando em consideração dois números de entrada pelo usuário e uma opção de operação (SOMA, SUBTRAÇÃO, DIVISÃO etc).
Pode ser utilizado o conceito do switch/case, IF/ELSE, funções e... laço se já souber! */

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Digite a operação desejada (+, -, *, /):");

// Realiza a operação selecionada
let resultado;
switch (operacao) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      alert("Erro: não é possível dividir por zero!");
    } else {
      resultado = num1 / num2;
    }
    break;
  default:
    alert("Erro: operação inválida!");
}

if (resultado !== undefined) {
  console.log(`O resultado da operação é: ${resultado}`);
}

