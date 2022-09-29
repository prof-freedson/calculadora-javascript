/* JavaScript - Principais Comandos

OBSERVAÇÃO: a linguagem JavScript é fracamente
tipada, pois os dados não recebem um tipo específico,
mas é possível identificar o tipo do dado

O comando responsável por identificar
o tipo de um dado é 'typeof'

Entrada de dados: input
--> Necessário instalar a biblioteca 'prompt-sync'
--> Comando no terminal: npm i prompt-sync
Após a intação, deve-se fazer a importação
-->Inserir o comando no arquivo com a variável:
    var input = require('prompt-sync')()
    O nome da variável pode ser alterado

*/
var input = require('prompt-sync')()
/* Para realizar a entrada de dados
   é necessário declarar uma variável
   e inserir a variável responsável
   pela entrada de dados
*/
/* var nome = input('Qual o seu nome?') */

/* Saída de dados: console.log()
   
   Na saída de dados, é digitado o que
   será exibido no console ou terminal
   entre aspas ou informando a variável
   declarada anteriormente

   A concatenação da saída pode ser feita
   usando vírgula (,) ou o sinal de adição
   (+) para separar os caracteres das 
   variáveis

   Para executar o arquivo, é necessário
   inserir o comando no terminal
   node + nome do arquivo com a extensão .js

*/
/* console.log("Olá, ", nome) */

/*

Declaração de variáveis:

var - pode ser declarado em qualquer
parte do código e pode ser atualizado
a qualquer momento

*/
var fruta = 'uva'
fruta = 'maçã'
fruta = 'laranja'
var fruta = 'damasco'
fruta = 'banana'
var fruta = 'pêssego'
fruta = 'abacate'
console.log(typeof fruta)
/* console.log(fruta) */

/*Declaração de variáveis:

let - pode ser declarado em qualquer
parte do código, mas não pode ser
atualizado, desde que não seja repetida
o tipo da variável (let)

*/

let obj = 'lapis'
obj = 'borracha'
/* let obj = 'copo' --> não pode ser declarada novamente*/


/* console.log(obj) */

/*Declaração de variáveis:

const - pode ser declarado somente
uma vez e não pode ser atualizado

*/

const animal = 'cachorro'
/* animal = 'gato' --> não pode ser atualizado */

/*
Lógica sequencial

É a sequência de comandos
de entrada e saída de dados

*/
/* var nome = input('Qual o seu nome? ')
console.log("Seja bem-vindo(a), ", nome)  */

/*
Lógica condicional simples

Resposnável pelos comandos
if(se) e else(senão)

*/
/* var idade = input("Qual a sua idade? ")
if(idade >= 18){
   console.log("Já pode ser preso(a)! XD")
}
else{
   console.log("Fica na tua!")
} */

/*
Lógica condicional composta

Resposnável pelos comandos
if(se), else if(senão se) e
else(senão)

*/

/* var idade = input("Qual a sua idade? ");
if(idade >= 18 && idade < 79){
   console.log("Já pode ser preso(a)! XD")
}

else if (idade >= 70){
   console.log("Não pode mais aprontar!")
}
else{
   console.log("Fica na tua!")
} */

/*
Lógica de repetição enquanto(while)

É a repetição de instrução até
que a condição seja verdadeira

*/

/* Contar de 1 até 10 */
/* let i = 1
while(i <= 10){
   console.log(i)
   i++
} */

/* Contar de 10 até 1 */
/* let i = 10
while(i > 0){
   console.log(i)
   i--
} */

/*
Lógica de repetição para(for)

É a repetição de instrução para
um número determinado de vezes

*/
/* Contar de 1 até 10 */
/* for(i = 1; i <= 10; i++){
   console.log(i)
} */
/* Contar de 10 até 1 */
/* for(i = 10; i >= 1; i--){
   console.log(i)
} */
/* Operadores aritméticos

adição(+)
subtração(-)
multiplicação(*)
divisão(/)
divisão com resto inteiro(%)

*/

/*Operadores lógicos

igual(=)
diferente(!=)
maior(>)
menor(<)
maior que(>=)
menor que(<=)
operador E (&&)
operador OU (||)
incremento(++)
decremento(--)

*/

/*Vetores

É a coleção de dados para uma variável

*/

/* let numeros = [12, 23, 34, 45, 56, 67]
console.log(numeros[3]) */

// true - verdadeiro
// false - falso

/* É possível inserir dados de 
   tipos diferentes em um vetor
*/

let dados = ["oi", 2, "tela", 3.4, true]
console.log(dados[0])
console.log(dados[1])
console.log(dados[2])
console.log(dados[3])
console.log(dados[4])
console.log(typeof dados[4])
console.log(typeof dados[1])
console.log(typeof dados[3])


