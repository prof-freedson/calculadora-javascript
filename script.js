var n1 = window.document.getElementById("n1")
var n2 = window.document.getElementById("n2")
var res = window.document.getElementById("res") // res é o resultado



function imc() {
    var n1 = window.document.getElementById("n1")
    var n2 = window.document.getElementById("n2")
    var res = window.document.getElementById("res") // res é o resultado

    var p = Number(n1.value)
    var a = Number(n2.value)
    var r = p / (a * a)
    if(r < 18){
        res.innerHTML = "O IMC é " + r + ", indicando magreza"
        res.style = "background-color:red;color:white"
    }
    else if(r >= 18 && r < 24){
        res.innerHTML = "O IMC é " + r + ", indicando peso normal"
        res.style = "background-color:green;color:white"
    }
    else{
        res.innerHTML = "O IMC é " + r + ", indicando obesidade"
        res.style = "background-color:yellow"
    }
}

function soma() {
    var n1 = window.document.getElementById("n1")
    var n2 = window.document.getElementById("n2")
    var res = window.document.getElementById("res") // res é o resultado

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var r = num1 + num2
    res.innerHTML = "O resultado da soma é " + r
}

function subtracao() {
    var n1 = window.document.getElementById("n1")
    var n2 = window.document.getElementById("n2")
    var res = window.document.getElementById("res") // res é o resultado

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var r = num1 - num2
    res.innerHTML = "O resultado da subtração é " + r
}

function multiplicacao() {
    var n1 = window.document.getElementById("n1")
    var n2 = window.document.getElementById("n2")
    var res = window.document.getElementById("res") // res é o resultado

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var r = num1 * num2
    res.innerHTML = "O resultado da multiplicação é " + r
}

function divisao() {
    var n1 = window.document.getElementById("n1")
    var n2 = window.document.getElementById("n2")
    var res = window.document.getElementById("res") // res é o resultado

    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var r = num1 / num2 // if = se ; else if = senão se ; else = senão
    if (num2 == 0) {
        res.innerHTML = "Não é possível dividir por zero"
    }
    else {
        res.innerHTML = "O resultado da divisão é " + r
    }
}
