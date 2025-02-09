


const boton_agregar = document.getElementById("agregar");


const input_producto = document.getElementById("inputValorArticulo");

const input_cantidad = document.getElementById("inputValorCantidad");

const input_unitario = document.getElementById("inputValorUnitario");


const input_descuento = document.getElementById("valor_descuento")
const boton_descuento = document.getElementById("descuento");


const input_formulario = document.getElementById("formulario");




let nombre_del_producto=[];
let cantidad_del_producto=[];
let valor_unitario_producto=[];


let total_subtotal=[];
let valor_iva=[];
let valor_total_iva=[];

let precio_final=[];

let total_pagar=[];

let final_descuento=[];
let pagar_descuento=[];


let total_a_pagar=0;

input_formulario.addEventListener("submit",(event)=>{

    event.preventDefault();
    input_formulario.reset();
});

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

    total_a_pagar=total_a_pagar+total_con_iva;
    total_pagar.push(total_a_pagar);



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
let fila2="";

function imprimir_los_arreglos(){

    const cuerpoTabla = document.getElementById("cuerpo_tabla");
    cuerpoTabla.innerHTML="";

    for(let i=0; i<nombre_del_producto.length; i++){
        const fila = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");

        td1.textContent= i+1;
        td2.textContent= nombre_del_producto[i];
        td3.textContent= cantidad_del_producto[i];

        td4.textContent= valor_unitario_producto[i];
        td5.textContent= total_subtotal[i];
        td6.textContent= valor_iva[i];
        td7.textContent= valor_total_iva[i];

        fila.appendChild(td1);
        fila.appendChild(td2);
        fila.appendChild(td3);

        fila.appendChild(td4);
        fila.appendChild(td5);
        fila.appendChild(td6);
        fila.appendChild(td7);

        cuerpoTabla.appendChild(fila);

    };

};

function imprimir_los_arreglos1(){

    const cuerpoTabla1 = document.getElementById("cuerpo_tabla1");
    cuerpoTabla1.innerHTML="";

    for(let i=0; i<nombre_del_producto.length; i++){
        const fila1 = document.createElement("tr");
        const td1 = document.createElement("td");

        cuerpoTabla1.innerHTML="";
        td1.textContent= total_pagar[i];

        fila1.appendChild(td1);

        cuerpoTabla1.appendChild(fila1);
};
};


boton_descuento.addEventListener("click",()=>{

    const cantidad_descuento = parseFloat(input_descuento.value);

    final_descuento.push(cantidad_descuento);

    const pagar_con_descuento =total_a_pagar-cantidad_descuento;
    pagar_descuento.push(pagar_con_descuento);

    imprimir_los_arreglos2();
});


function imprimir_los_arreglos2(){

    const cuerpoTabla2 = document.getElementById("cuerpo_tabla2");
    cuerpoTabla2.innerHTML="";


    for(let i=0; i<nombre_del_producto.length; i++){
        const fila2 = document.createElement("tr");
        const td1 = document.createElement("td");


        cuerpoTabla2.innerHTML="";
        td1.textContent= pagar_descuento[i];


        fila2.appendChild(td1);


        cuerpoTabla2.appendChild(fila2);

    };

    const cuerpoTabla3 = document.getElementById("cuerpo_tabla3");
    cuerpoTabla3.innerHTML="";

    for(let i=0; i<nombre_del_producto.length; i++){
        const fila3 = document.createElement("tr");
        const td1 = document.createElement("td");

        cuerpoTabla3.innerHTML="";
        td1.textContent= final_descuento[i];

        fila3.appendChild(td1);

        cuerpoTabla3.appendChild(fila3);

    };

};



