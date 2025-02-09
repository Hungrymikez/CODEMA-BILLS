//console.log(botonsito);

//Funcion normal
/**function nombre(){

}; */

//Funcion anonima se usa bajo los parametros de otra funcion 
//function(){};

//Funcion flecha
//()=>{
//};
//botonsito.addEventListener("click",function(){});   //Dentro de los corchetes no se puede poner codigo, por eso se hace una funcion sin nombre




const botonsito = document.getElementById("button-addon2");




const inputValor = document.getElementById("inputValorHora");


let valor_hora= 0;


let nombres=[];
let horas_trabajadas=[];
let sueldo_basico=[];
let salud=[];
let aux_transporte=[];
let total_pago=[];


botonsito.addEventListener("click",()=>{
    console.log(inputValor.value); //Coger el dato de lo asignado 
    valor_hora= parseFloat(inputValor.value);  // Guardando el dinero digitado convertido a numero ya que viene tipo texto y toca ocnvertirlo 
    document.getElementById("Valor").innerHTML= inputValor.value;
});



inputValor.addEventListener("keyup",()=>{
    document.getElementById("Valor").innerHTML= inputValor.value;  //METODO PARA QUE CUANDO ESTE DIGITANDO ALGO SE MUESTRE EN PANTALLA 
    valor_hora= parseFloat(inputValor.value);  // Guardando el dinero digitado convertido a numero ya que viene tipo texto y toca ocnvertirlo 

});




const btnAgregar = document.getElementById("agregar");
const inputNombre = document.getElementById("nombre");
const inputHoras = document.getElementById("horasTrabajadas");




btnAgregar.addEventListener("click",()=>{

    nombres.push(inputNombre.value);
    let horas = parseInt(inputHoras.value);  //Convierte a entero esto que se recibe que es tipo texto
    horas_trabajadas.push(horas);


    let sueldo_base= valor_hora*horas;
    sueldo_basico.push(sueldo_base);



    let valor_salud=sueldo_base * 4/100;
    salud.push(valor_salud);


    let aux_t =0;

    if(sueldo_base<=2000000){

        aux_t=sueldo_base * 8/100; // 0.08
        aux_transporte.push(aux_t);
    };

    let total_pagar= sueldo_base -valor_salud+ aux_t;
    total_pago.push(total_pagar);
    
    
    console.log(nombres);
    console.log(horas_trabajadas);
    console.log(sueldo_basico);
    console.log(aux_transporte);
    console.log(total_pago);
    console.log(valor_hora);



    imprimirArreglos();





});

let fila="";


function imprimirArreglos(){


    const cuerpoTabla= document.getElementById("datos");
    cuerpoTabla.innerHTML="";

    for(let i=0; i<nombres.length; i++){


        const fila = document.createElement("tr");   //ESTO CREA LA FILA PARA CAMELLARLO
        const td1 = document.createElement("td");//ESTO CREA LAS COLUMNAS VACIAS
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        td1.textContent=nombres[i];        //AQUI SE LLENAN LOS DATOS A LAS COLUMNAS
        td2.textContent=horas_trabajadas[i];
        td3.textContent=sueldo_basico[i];
        td4.textContent=salud[i];
        td5.textContent=aux_transporte[i];
        td6.textContent=total_pago[i];

        fila.appendChild(td1);   //Esto es para agregar las columnas a la fila hecha (AL tr)
        fila.appendChild(td2);
        fila.appendChild(td3);
        fila.appendChild(td4);
        fila.appendChild(td5);
        fila.appendChild(td6);
        cuerpoTabla.appendChild(fila);  //ESO VA AGREGANDO Y AGREGANDO LAS FILAS 










    };



};