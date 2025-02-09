const boton_agregar = document.getElementById("agregar");

const input_articulo = document.getElementById("inputValorArticulo");

const input_cantidad = document.getElementById("inputValorCantidad");

const input_unitario = document.getElementById("inputValorUnitario");


let articulos=[];
let cantidades=[];
let precio_unitario=[];



let valor_total=[];
let subtotal=[];
let descuento=[];
let iva19=[];
let total_final=[];


let productos = [];






boton_agregar.addEventListener("click",()=>{

    const nombre_producto = input_articulo.value.trim();
    const cantidad = parseInt(input_cantidad.value);
    const valor_unitario = parseFloat(input_unitario.value);

    if (nombre_producto ===""|| isNaN(cantidad)|| cantidad<= 0 || isNaN(valor_unitario <=0) ){
        alert("Calidoso digite por favor datos validos");
    return;
    }

    const total_producto = cantidad*valor_unitario;

    productos.push({
        nombre: nombre_producto,
        cantidad: cantidad,
        valorUnitario: valor_unitario,
        total: total_producto

    });

    imprimir_productos();

    //Limpiar los campos de entrada

    input_articulo.value = "";
    input_cantidad.value = "";
    input_unitario.value = "";





});

function imprimir_productos(){
    //Limpiar la tabla antes de actualizar
    //cuerpo_tabla.innerHTML = "";

    //reiniciar el total de la factura
    //total_factura_final = 0;

    productos.forEach((productos) =>{

        const fila = document.createElement("tr");

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        td1.textContent = productos.nombre;
        td2.textContent = productos.cantidad;
        td3.textContent = productos.valorUnitario.tofixed(2);
        td4.textContent = productos.total.tofixed(2);

        fila.appendChild(td1);
        fila.appendChild(td2);
        fila.appendChild(td3);
        fila.appendChild(td4);

        cuerpo_tabla.appendChild(fila);


        total_factura_final += productos.total;



    });


    




}



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