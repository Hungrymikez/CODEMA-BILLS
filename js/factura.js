


const boton_agregar = document.getElementById("agregar");

const input_producto = document.getElementById("inputValorArticulo");

const input_cantidad = document.getElementById("inputValorCantidad");

const input_unitario = document.getElementById("inputValorUnitario");



let nombre_del_producto=[];
let cantidad_del_producto=[];
let valor_unitario_producto=[];


let total_subtotal=[];
let valor_iva=[];
let valor_total_iva=[];

let precio_final=[];


boton_agregar.addEventListener("click",()=>{



    console.log(input_producto.value);
    console.log(input_cantidad.value);
    console.log(input_unitario.value);

    const nombre_producto = String(input_producto.value);
    const cantidades = parseInt(input_cantidad.value);
    const valor_unidad = parseInt(input_unitario.value);
    
    console.log(nombre_producto);
    console.log(cantidades);
    console.log(valor_unidad);


    let subtotal = cantidades * valor_unidad;

    let iva = subtotal*19/100;

    let total_con_iva=subtotal+iva;




    nombre_del_producto.push(input_producto.value);
    cantidad_del_producto.push(input_cantidad.value);
    valor_unitario_producto.push(input_unitario.value);

    console.log();
    console.log();
    console.log();

    total_subtotal.push(subtotal);
    valor_iva.push(iva);
    valor_total_iva.push(total_con_iva);
    
    console.log();
    console.log();
    console.log();

    console.log(nombre_del_producto);
    console.log(cantidad_del_producto);
    console.log(valor_unitario_producto);
    console.log();
    console.log(total_subtotal);
    console.log(valor_iva);
    console.log(valor_total_iva);




    imprimir_los_arreglos();
    imprimir_los_arreglos1();




});


let fila="";
let fila1="";

function imprimir_los_arreglos(){

    const cuerpoTabla = document.getElementById("cuerpo_tabla");
    cuerpoTabla.innerHTML="";


    for(let i=0; i<nombre_del_producto.length; i++){
        const fila = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        td1.textContent= i+1;
        td2.textContent= nombre_del_producto[i];
        td3.textContent= cantidad_del_producto[i];

        fila.appendChild(td1);
        fila.appendChild(td2);
        fila.appendChild(td3);

        cuerpoTabla.appendChild(fila);


    };





};

function imprimir_los_arreglos1(){
    const cuerpoTabla1 = document.getElementById("cuerpo_tabla1");
    cuerpoTabla1.innerHTML="";


    for(let i=0; i<nombre_del_producto.length; i++){
        const fila1 = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        td1.textContent= valor_unitario_producto[i];
        td2.textContent= total_subtotal[i];
        td3.textContent= valor_iva[i];
        td4.textContent= valor_total_iva[i];

        fila1.appendChild(td1);
        fila1.appendChild(td2);
        fila1.appendChild(td3);
        fila1.appendChild(td4);

        cuerpoTabla1.appendChild(fila1);


    };




};