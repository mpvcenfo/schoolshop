

txtCodigoRedimir=document.querySelector("#codFactura");
btnValidar=document.querySelector("#btnValidar");
divBotones=document.querySelector("#botones");

txtSaldo=document.querySelector("#saldo");
txtFecha=document.querySelector("#fecha");
txtCedula=document.querySelector("#cedula");
txtEstatus=document.querySelector("#estatus");

btnRedimir=document.querySelector("#btnRedimir");
btnPagar=document.querySelector("#btnPagar");

btnValidar.addEventListener('click',validarCodigo);

btnRedimir.addEventListener('click',redimirPedido);
btnPagar.addEventListener('click',pagarSaldo);







function validarCodigo() { 
    limpiarEncabezado()

    if(txtCodigoRedimir.value==""){
        txtCodigoRedimir.classList.add("warning");
        divBotones.classList.add("ocultarRegistro");
    }
    else{
        llenarEncabezado(txtCodigoRedimir.value);
        txtCodigoRedimir.classList.remove("warning");
        divBotones.classList.remove("ocultarRegistro");
        
    }
    
}



/********************************************************************************************JS LLENAR TABLA  */
function llenarTabla(pcod){
    let tablaDetalle = obtenerPedidoDetalle()

    let cuerpoTabla=document.querySelector('#tablaDetalle tbody')

    cuerpoTabla.innerHTML='';

    for(let i=0;i<tablaDetalle.length;i++){
        if(tablaDetalle[i][0]==pcod){
       
            let fila=cuerpoTabla.insertRow()
            let columnaCodigoSKU=fila.insertCell();
            let columnaNombre=fila.insertCell();
            let columnaCantidad=fila.insertCell();
            let columnaPrecio=fila.insertCell();
            
            
            columnaCodigoSKU.innerHTML=tablaDetalle[i][3];
            columnaNombre.innerHTML=tablaDetalle[i][4];
            columnaCantidad.innerHTML=tablaDetalle[i][5];
            columnaPrecio.innerHTML=tablaDetalle[i][6];
            
        }
    }
}

function llenarEncabezado(pcod) {
    let encabezado=obtenerPedidoEncabezado();
    for(let i=0;i<encabezado.length;i++){
        if(pcod==encabezado[i][0]){
            txtSaldo.value=encabezado[i][4];
            txtFecha.value=encabezado[i][1];
            txtCedula.value=encabezado[i][2];
            if(!txtSaldo.value==encabezado[i][5]){
                txtEstatus.value="Redimido";
                btnRedimir.disabled=true;
            }
            else{
                txtEstatus.value="Pendiente";
                btnRedimir.disabled=false;
            }
        }
    }
    llenarTabla(pcod);
    
}

/********************************************************************************************JS LLENAR TABLA  */

//redimir el pedido
function redimirPedido() {
    //aqui Falta modificar para poner pedido redimido
    if(txtSaldo.value==0){
        txtSaldo.classList.remove("warning");
        txtEstatus.value="Redimido";
        btnRedimir.disabled=true;
    }
    else{
        txtSaldo.classList.add("warning");
    }
}

function pagarSaldo(){
    txtSaldo.value=0;
    txtSaldo.classList.remove("warning");
    //aqui Falta modificar la base de datos que se ponga el saldo en 0

    
}


function limpiarEncabezado() {
    txtSaldo.value="-";
    txtFecha.value="-";
    txtCedula.value="-";
    txtEstatus.value="-";
    
}





function quitarWarning() {
    for(let i=0;i<elementosForm.length;i++){

        elementosForm[i].classList.remove("warning");
    }

}



















/*Extra Funciones */

//deshabilita los input del formulario
function deshabilitarInput() {
    document.querySelector('#dateFechaProgramada').disabled=true;

    
}   

//habilita los input del formulario
function habilitarInput() {
    document.querySelector('#dateFechaProgramada').disabled=false;
    
}  