// Parcial momento 1

// Realice el siguiente algoritmo utilizando Javascript

// Pida al usuario que ingrese un número entero de cualquier tamaño y el algoritmo debe devolver el mismo número pero invertido.
// Ejemplo: 123456 -> 654321

// Ojo: El usuario ingresa el número completo en una sola entrada por teclado No dígito a dígito

// Restricciones.

// No está permitido usar funciones especiales de javascript, cómo spit, reverse entre otras. Todo se debe hacer usando las estructuras básicas como  if, for, while uso de operaciones matemáticas, lo esencial que se ve en algoritmos.

// Debe enviar el algoritmo al correo: jezabalada@cesde.net con asunto moviles3-G1-momento1



let num = prompt("Ingrese un número: ");
let numReverse = " ";
if(parseInt(num))
{
    for(let i =  num.length-1; i>= 0;  i--){    

        numReverse =  numReverse + num[i];        
    }
    alert("Número Ingresado: " + num + ", número invertido: " + numReverse);
}
else
{
    alert("error en el formato, debe ser un Número");
    location.reload();
}


// num = "123"
// => parseInt num = 123


// i [2] = 3 --- [3]-1
// i [1] = 2 --- [2]-1
// i [0] = 1 --- [1]-1

 

