function clima (estaLloviendo){
    if (estaLloviendo){
        console.log("si eta lloviendo")
    }
    else{
        console.log("No esta lloviendo")
    }
}
clima(false)




//#2
function calcular (num1,num2,num3){
    let sumar = num1 + num2;
    let resultado = sumar + num3;
    return resultado
}
console.log(calcular (2,3,4))



//#3
let base = parseInt(prompt("Ingrese base"));
let altura = parseInt(prompt("Ingrese altura"));
let area;
area = (base * altura)/2;
document.write("el resultado del area del triangulo es: "+area);

//una funcion que calcule el promedio variables
function promedio() {
    var not1 = parseInt(prompt("ingrese la primera nota"))
    var not2 = parseInt(prompt("ingrese la segunda nota"))
    var not3 = parseInt(prompt("ingrese la tercera nota"))
    prom = (not1 + not2 + not3) / 3;
    if (prom > 3) {
    document.write("fecidades has pasado")
    }
    else {
    document.write("Repites el año")

    }

} 

/* crea una funcion que calcula y recive 3 parametros,un string llamado operaciones y dos
llamados num1, num2 entonces el string nos indica que tipo de operacion se llevara a cabo
entre num1 y num2 hacer suma resta, multiplicacion, divicion, exponente 
function calculadora() {
    let operaciones = prompt("que tipo de operacion deseas realizar (suma, resta, multiplicacion, divicion o exponente)");
    let num1 = parseInt(prompt("ingrese el primer numero"));
    let num2 = parseInt(prompt("ingrese el segundo numero"));

    let Resultado;

        if (operaciones == "suma") {
        document.write(Resultado = num1 + num2)
        } 
        else if (operaciones == "resta") {
        document.write(Resultado = num1 - num2)
        } 
        else if (operaciones == "multiplicacion") {
        document.write(Resultado = num1 * num2)
        } 
        else if (operaciones == "divicion") {
        document.write(Resultado = num1 / num2)
        } 
        else if (operaciones == "exponente") {
        document.write(Resultado = num1 ^ num2)
        }
        else{
        document.write(Resultado = "operacion invalida")
        }

}

//console.log(promedio())
console.log(calculadora()); */