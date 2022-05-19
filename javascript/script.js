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

// const cores = ['Vermelho', 'Azul', 'Verde'];
// for(let cor of cores){
//   console.log(cor);
// }

// const numeros = [1,2,3,4,5];
// for(let n of numeros) {
//   console.log(n);
// }

// Exercícios 14: Mini-projeto 2, máximo entre dois valores
// let n1 = 7;
// let n2 = 5;
// maiorNumero();
// function maiorNumero() {
//   if(n1 > n2) {
//     return console.log(n1);
//   }else {
//     return console.log(n2);
//   }
// }
// // Uma forma de código mais limpa
// let ValorMaior = max(17,11);
// console.log(ValorMaior);
// function max(numero1, numero2) {
//   return numero1 > numero2 ? numero1 : numero2;
// }

// Exercícios 15: Mini-projeto 3, FizzBuzz
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'

// Meu exercício:
// let resultado = 1;
// fizzBuzz();
// function fizzBuzz() {
//   if(typeof resultado !== 'number') {
//     return console.log('Não é um número');
//   }else if(resultado % 3 === 0 && resultado % 5 === 0) {
//     return console.log('FizzBuzz');
//   }else if(resultado % 3 === 0) {
//     return console.log('Fizz');
//   }else if(resultado % 5 === 0) {
//     return console.log('Buzz');
//   }else if(resultado % 3 !== 0 || resultado % 5 !== 0) {
//     return console.log(resultado);
//   }
// }

// O exercício feito:
// const resultado = fizzBuzz(1);
// console.log(resultado);
// function fizzBuzz(entrada) {
//   if(typeof entrada !== 'number') {
//     return 'Não é um número';
//     }
//     if((entrada % 3 === 0) && (entrada % 5 === 0)) {
//     return 'FizzBuzz';
//     }
//     if(entrada % 3 === 0) {
//     return 'Fizz';
//     }
//     if(entrada % 5 === 0) {
//     return 'Buzz';
//     }
//     return entrada;
// }

// Exercícios 16: Mini-projeto 4, Medidor de velocidade
// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor()
// caso pontos seja maior que 12 -> "Carteira Suspendida"

// verificarVelocidade(130);
// function verificarVelocidade(velocidade) {
//   const velocidadeMaxima = 70;
//   const kmPorPonto = 5;
//   if(velocidade <= velocidadeMaxima) {
//     console.log('Ok');
//   }else {
//     const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
//     if(pontos >= 12) {
//       console.log('Carteira Suspensa');
//     }else
//       console.log('Pontos', pontos);
//   }
// }

// Exercícios 17: Mini-projeto 5, Par ou Ímpar
// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

// Meu exercicio:
// var n = 10;
// parOuImpar();
// function parOuImpar() {
//   for(let i = 0; i <= n; i++) {
//     if(i % 2 == 0){
//       console.log("Par, ", i);
//     }else {
//       console.log("Ímpar, ", i);
//     }
//   }
// }
// O exercicio feito:
// exibirTipo(6);
// function exibirTipo(limite) {
//   for(let i = 0; i <= limite; i++) {
//   if(i % 2 === 0)
//     console.log("Par", i);
//   else 
//     console.log("Ímpar", i);
//   }
// }

// Exercícios 18: Mini-projeto 6, Encontre o String
// Criar um método para ler propriedades de um objeto e 
// Exibir somente as propriedades do tipo string que estão nesse objeto

// const filme = {
//   titulo: 'Vingadores',
//   ano: 2018,
//   diretor: 'Robin',
//   personagem: 'Thor'
// };

// exibirPropriedades(filme);
// function exibirPropriedades(obj) {
//   for(prop in obj) {
//   if(typeof obj[prop] === 'string') {
//     console.log(prop, obj[prop])
//   }  
// }
// }

// const carro = {
//   nome: 'Zezão',
//   marca: 'fiat',
//   ano: 2001,
//   cor: 'azul',
//   placa: 'Ri343MJ',
//   preco: 9000.50
// };
// exibirPropriedadesCarro(carro)
// function exibirPropriedadesCarro(obj) {
//   for(parte in obj) {
//     if(typeof obj[parte] === 'string') {
//       console.log(parte, obj[parte]);
//     }
//   }
// }

// Exercícios 19: Mini-projeto 7, Múltiplos de 3 e 5.
// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// com valor 10:
// Serão múltiplos de 3: 3, 6, 9.
// Serão múltiplos de 5: 5, 10.

// Somando os múltiplos
// Armazenar os múltiplos de 3
// Armazenar os múltiplos de 5
// somar os dois

// soma(10);
// function soma(limite) {
//   let multiplo3 = 0;
//   let multiplo5 = 0;
//   for(let i = 0; i <= limite; i++) {
//     if(i % 3 === 0) {
//       multiplo3 += i;
//     }
//     if(i % 5 === 0) {
//       multiplo5 += i;
//     }
//   }
//   console.log(multiplo3 + multiplo5);
// }

// Meu exercício com múltiplos de 4 e 11
// soma(22);
// function soma(numeroEscolhido) {
//   let multiplo4 = 0;
//   let multiplo11 = 0;

//   for(let i = 0; i <= numeroEscolhido; i++) {
//     if(i % 4 === 0) {
//       multiplo4 += i;
//     }
//     if(i % 11 === 0) {
//       multiplo11 += i;
//     }
//   }
//   let resultado = multiplo4 + multiplo11;
//   console.log('O resultado será = ' + resultado);
// }

// Exercícios 20: Mini-projeto 8, Média de nota escolar
// Obter a mpedia a partir de um array

// se
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// Meu exercício:
//const array = [70, 70, 80];
// média: 73.33
// mediaDoAluno(array)
// function mediaDoAluno(notas) {
//   let notasTotal = 0;
//   for(let nota of notas) {
//     notasTotal += nota;
//   }
//   let media = notasTotal/3;
//   if(media >= 0 && media <= 59) {
//     console.log('Nota F');
//   }else if(media >= 60 && media <= 69) {
//     console.log('Nota D');
//   }else if(media >= 70 && media <= 79) {
//     console.log('Nota C');
//   }else if(media >= 80 && media <= 89) {
//     console.log('Nota B');
//   }else if(media >= 90 && media <= 100) {
//     console.log('Nota A');
//   }
//   console.log(media);
// }
// Exercício feito pelo professor:
// const array = [70,70,80];
// console.log(mediaDoAluno(array));
// function mediaDoAluno(notas) {
//   const media = calcularMedia(notas);
//   if(media < 59) return 'F';
//   if(media < 69) return 'D';
//   if(media < 79) return 'C';
//   if(media < 89) return 'B';
//   return 'A';
// }

// function calcularMedia(array) {
//   let soma = 0;
//   for(let valor of array) {
//     soma += valor;
//   }
//   return soma / (array.length);
// }

// Exercícios 21: Mini-projeto 9, Contador de asteríscos
// Criar uma função que exibe a quantidade de *

// que aquela linha possui
// exiberAsteriscos(10); 
// function exiberAsteriscos(valor) {
//   let padrao = '';
//   for(let i = 1; i <= valor; i++) {
//     padrao += '*';
//     console.log(padrao);
//   }
// }
// exiberAsteriscos(10); 
// function exiberAsteriscos(linhas) {
// let padrao = '';
// for(let linha = 1; linha <= linhas; linha++) {
//   padrao += '*';
//   console.log(padrao);
// }

//   for(let linha = 1; linha <= linhas; linha++) {
//     let padrao = '';
//     for(let i = 0; i < linha; i++) {
//       padrao += '*';
//     }
//     console.log(padrao);
//   }
// }

// Exercícios 22: Mini-projeto 10, Números Primos

// Criar função para mostrar os números primos
// Primos
// Compostos
// Ex: 10, 11 num laço crescente
// Numero primo é divisivel por (1 e por ele mesmo)
// 10 - 1, 2, 4, 6, 10
// 11 - 1, 11 (11) --> número primo

// exibirNumerosPrimos(15);
// function exibirNumerosPrimos(limite) {
//   for(let numero = 2; numero <= limite; numero++) {
//     let ehPrimo = true;
//     for(let divisor = 2; divisor < numero; divisor++) {
//       if(numero % divisor === 0) {
//         ehPrimo = false;
//         break;
//       }
//     }
//     if(ehPrimo) console.log(numero);
//   }
// }

// Forma mais clean
// exibirNumerosPrimos(15);
// function exibirNumerosPrimos(limite) {
//   for(let numero = 2; numero <= limite; numero++) {
//     if(numeroPrimo(numero)) console.log(numero);
//   }
// }

// function numeroPrimo(numero) {
//     for(let divisor = 2; divisor < numero; divisor++) {
//       if(numero % divisor === 0) {
//         return false;
//       }
//     }
//     return true
// }

// Exercícios 23: Factory Functions (Função de Fábrica)
// O objetivo é desenvolver um função q cria celulares dinamicamente
// O object q a gente vai usar:
// const celular = {
//   marcaCelular: 'ASUS',
//   tamanhoTela: {
//     vertical: 155,
//     horizontal: 75
//   },
//   capacidadeBateria: 5000,
//   ligar: function() {
//     console.log("Fazendo ligação...")
//   }
// }

// function criarCelular() {
//   const celular = {
//     marcaCelular,
//     tamanhoTela,
//     capacidadeBateria,
//     ligar() {
//       console.log("Fazendo ligação...")
//     }
//   }
// }
// const celular1 = criarCelular('Zenfone', 5.5, 5000);
// console.log(celular1);

// Modelo de objeto: 
// const pais = {
//   nome: 'Canada', 
//   numeroDeEstados: 10,
//   capital: 'Ottawa',
//   primeiraLingua: 'Inglês',
//   segundaLingua: 'Francês',
//   PIB: 1643000000000,
//   ehDesenvolvido: true
// }
// function cadastrarPais(nome,numeroDeEstados,capital,primeiraLingua,segundaLingua,PIB,ehDesenvolvido) {
//   const pais = {
//     nome: nome, // nome: nome ; nome; fazem a mesma coisa
//     numeroDeEstados,
//     capital,
//     primeiraLingua,
//     segundaLingua,
//     PIB,
//     ehDesenvolvido
//   }
//   return pais;
// }
// const cadastro = cadastrarPais('Canada', 10, 'Ottawa', 'Inglês', 'Francês', 1643000000000, true);
// console.log(cadastro);

