// Exercício 1 
// let idade = 20;
// let nome = "Gustavo Espindola Olegario";
// let altura = "1.70cm"
// console.log("Olá, meu nome é " + nome + ", eu tenho " + idade + " de idade" + ", e eu tenho " + altura + " de altura.");

//Exercício 2: variáveis e seus tipos primitivos(tipos por valores)
// let nome = 'Rafael'; 
// let idade = 25; 
// let estaAprovado = true; 
// sobrenome = undefined;
// let corSelecionado = null;
// No console -->
// typeof nome;
// typeof idade;
// typeof estaAprovado;
// typeof sobrenome;
// typeof corSelecionado;


//Exercício 3: object (tipo por referência)
// let nome = 'Gustavo'; 
// let sobrenome = "Espindola Olegario";
// let idade = 20; 
// let solteiro = true; 
// let cor = null;
// let corFavorita; 
// let nacionalidade = 'brasileiro';

// let pessoa = {}; --> objeto vazio
// let pessoa = {
//     nome: "Gustavo",
//     sobrenome: "Espindola Olegario",
//     idade: 20,
//     solteiro: true,
//     cor: 'branco',
//     corFavorita: "azul",
//     nacionalidade: 'brasileiro'
// };
// console.log(pessoa);
// console.log(pessoa.nome);

//Exercício 4: Arrays(tipo por referência) Arrays são object
// let familia = [true, 45, 'jhonatan', 17];
// console.log(familia.length);
// console.log(familia[0]);
// let nomeDoColega = ['Mario', 30, true, 3500.30, null];
// console.log(nomeDoColega[3])

//Exercício 5: Function
//Pra nomear uma função usamos verbo + substantivo = andaCaminho.
// let corSite = 'azul';
// function resetaCor() {
//     corSite = 'vermelho'
// };
// console.log(corSite);
// resetaCor(); //chamei a função
// console.log(corSite);

// function resetaCorParametro(cor) {
//     corSite = cor;
// };

// console.log(corSite);
// resetaCorParametro('roxo');
// console.log(corSite);

// function resetaCorTonalidade(cor, tonalidade) {
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);
// resetaCorTonalidade('amarelo', 'escuro');
// console.log(corSite);

// let cadastro;
// function cadastraPessoa(nomeCompleto, idade, altura, cor) {
//     cadastro = nomeCompleto + ' ' + idade + ' anos de idade ' + altura + ' cm e ' + cor;
// }
// console.log(cadastro);
// cadastraPessoa('José Espindola', 20, 1.70.toFixed(2), "branco");
// console.log(cadastro);

//Exercício 6: Function sem retorno e Function com retorno
// Realiza uma tarefa, mas não devolve nada
// function dizerNome() {
//     console.log('Gustavo');
// };
// dizerNome();

// Realiza um cálculo ou operação e retorna algo
// function multiplicarPorDois(valor) {
//     return valor * 2;
// }

// console.log(multiplicarPorDois(5))
// Podemos colocar  o resultado dentro de uma variável
// let resultado = multiplicarPorDois(5);
// console.log(resultado);

//Exercícios: Operadores:
/* 
  Operadores Aritiméticos(matemáticos)
  Operadores de Atribuição
  Operadores de Comparação
  Operadores Lógicos
  Operadores Bitwise
*/

//Exercícios 7: Operadores Aritiméticos
//let salario = 100;
/* 
    Operadores Aritiméticos:
    + = adição
    - = subtração
    * = multiplicação
    / = divisão
    ** = exponenciação
*/
// console.log(salario + salario); // = 200
// console.log(salario - salario); // = 0
// console.log(salario * salario); // = 10000
// console.log(salario / salario); // = 1
// console.log(5 ** 5); // = 3125

// Incrementar e Decrementar:
//let idade = 20;
// ++idade = pré incremento, mostra o incremento na hora no console.log(++idade);
//console.log(++idade); // --> 21

// idade++ = pós incremento, mostra depois no console.log(idade++); 
//console.log(idade++); // --> 20
//console.log(idade); // --> 21

// --idade = pré decremento, mostra o decremento na hora no console.log(--idade);
//console.log(--idade);

// // idade-- = pós decremento, mostra o decremento depois no console.log(idade--);
//console.log(idade--);
//console.log(idade);

//Exercícios 8: Operadores de igualdade
//let valorTecladoGamer = 200;
//valorTecladoGamer += valorTecladoGamer;
// é o mesmo que valorTecladoGamer = valorTecladoGamer + valorTecladoGamer; o resultado desse dois será de 400
// valorTecladoGamer -= valorTecladoGamer; // resultado 0
// valorTecladoGamer *= valorTecladoGamer; //resultado 40000
//valorTecladoGamer /= valorTecladoGamer; //resultado 1
//valorTecladoGamer **= valorTecladoGamer; // resultado é infinity pq ele deve ser muito gigante
// console.log(valorTecladoGamer);

// Outras Igualdades solta
// Igualdade solta, compara apenas o valor
// console.log(1 == 1); //resultado será true
// console.log("1" == 1); //resultado será true

// Igualdade estrita, compara o valor e tipo
// console.log(1 === 1); //resultado será true
// console.log("1" === 1); //resultado será false

//Exercícios 9: Operadores Ternários
// Tem um cliente, se os pontos maior q 100 "premium', se não "comum"
// let pontos = 100;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);

// let idade = 20;
// let aprovado = idade >= 18 ? 'Maior' : 'Menor';
// console.log(aprovado);

//Exercícios 10: Operadores Lógicos
// Operado Lógico e (&&)
// Retorna TRUE se os dois operandos forem true
// console.log(true && true); //retornou true
//console.log(true && false); //retornou false
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar); // retorna falso

//Operador Lógico ou (||)
//Retorna true se um dos operandos forem true
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log('pode aplicar ' + podeAplicar);

//Operador Lógico NOT (!)
//Retorna uma negação para variável que foi colocado(ex: !true = false ; !false = true)
// let candidatoRecusado = !podeAplicar;
// console.log('Candidato Recusado',candidatoRecusado)
// let maiorIdade = true;
// let maior = !maiorIdade;
// console.log("De maior?", maior);

// Exercícios 11: Comparação de valores não boleanos
// Falsy e truthy
// O operador Lógico ou (||), usa o conceito de falsy e truthy, e retorna o primeiro truthy que ele encontrar. Ex:
// false || true --> true
// false || 'rafael' --> 'rafael' = truthy
// false || 1 --> 1 = truthy.

// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - not a number

//Truthy
//tudo q nao estiver dentro de falsy

// let corPersonalizada = '';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil);

// Exercícios 12: Mini Projeto 1, trocando valores
// let a = 10;
// let b = 20;
// let extra;
// extra = a; // extra = 10
// a = b; // a = 20
// b = extra; // b = 10
// console.log(a,b);

// Exercícios 13: Condicionais
// No Javascript existem duas principais condicionais: 
// if..else
// switch..case

// Se a hora estiver entre 06:00 até 12:00 : Bom Dia!
// Se estiver entre 12:00 até 18:00 : Boa Tarde!
// Caso contrário : Boa Noite!
// let hora = 6;

// if (hora > 6 && hora < 12) {
//   console.log("Bom Dia!");
// }else if (hora >= 12 && hora <= 18) {
//   console.log('Boa Tarde!');
// }else {
//   console.log('Boa Noite!');
// }

// Switch case aciona determinada função dependendo da variável que for comparada.
// let permissao; // comum, gerente, diretor.
// permissao = 'comum';
// switch(permissao) {
//   case 'comum':
//     console.log('Usuário comum');
//     break;

//   case 'gerente':
//     console.log('Usuário gerente');
//     break;

//   case "diretor":
//     console.log("Usuário diretor");
//     break;

//   default:
//     console.log('Usuário não reconhecido');
//     break;
// }

// Exercícios 14: Laços de repetição: Laço For/Loop For. 

// Jeito errado de repetir alguma coisa:

// console.log('Estou aprendendo');
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');

// Jeito certo, usando:
// 1.For
// 1.While
// 1.Do..While
// 1.For..In
// 1.For..Of

// For crescente
// for(let i = 0; i < 5; i++) {
//   console.log('Estou aprendendo', i);
// }
// For decrescente
// for(let i = 5; i > 0; i--) {
//   console.log('Estou aprendendo', i);
// }
// for(let i = 0; i < 5; i++) {
//   if(i % 2 == 0) {
//     console.log('Par: ' + i);
//   }
//   if(i % 2 !== 0) {
//     console.log('Ímpar: ' + i);
//   }
// }

// While Loop crescente
// let i = 0;
// while(i < 5) {
//   console.log('Estou aprendendo o laço while', i);
//   i++;
// }

// While Loop decrescente

// let i = 5;
// while(i > 0) {
//   console.log('Estou aprendendo o laço while', i);
//   i--;
// }
// let i = 0;
// while(i < 5) {
//   if(i % 2 == 0) {
//     console.log('Par: ' + i);
//   }
//   if(i % 2 !== 0) {
//     console.log('Ímpar: ' + i);
//   }
//   i++;
// }

// Do While loop crescente
// let i = 0;
// do {
//   console.log('Estou aprendendo o laço do while', i);
//   i++;
// }while(i < 5);
// Do While loop decrescente
// let i = 5;
// do {
//   console.log('Estou aprendendo o laço do while', i);
//   i--;
// }while(i > 0);
// let i = 0;
// do{
//   if(i % 2 == 0) {
//     console.log('Par: ' + i);
//   }
//   if(i % 2 !== 0) {
//     console.log('Ímpar: ' + i);
//   }
//   i++;
// }while(i < 5);

// For-in loop, eles foram especificamente feitos para iterar sobre propriedades de objetos ou elementos de array.

// const pessoa = {
//   nome: 'Jhonatan',
//   idade: 25
// };
// for(let chave in pessoa) {
//   console.log(chave, pessoa.nome)
//   console.log(chave, pessoa.idade)
// }
// for(let chave in pessoa) {
//   console.log(chave, pessoa['nome'])
//   console.log(chave, pessoa['idade'])
// }

// const cores = ['Vermelho', 'Azul', 'Verde'];

// for (let indice in cores) {
//   console.log(indice, cores[indice]);
// }