   /*Aqui devuelvo la lista que esta  en localStorage*/
 function obtenerListaArticulos(){
 let listaArticulos=JSON.parse(localStorage.getItem('listaArticulosLS'))
    if(listaArticulos==null){
       listaArticulos=[
//proveedor,imagen,descripcion,codigo,costo,venta,mercado,nombre
       ['','imgLS/ABACOBACOCHICO50BOLAS.jpg','Abaco Baco pequeño 50 BOLAS','ABA001',3.200,3.944 ,4.900,'Abaco Baco'],
        ['',"imgLS/ABACOBACOGRANDE100 BOLAS.jpg","Abaco Baco grande 100 BOLAS",'ABA002',3.900,4.750 ,5.500,"Abaco Baco"],
      ['','imgLS/ABACO KOALA  50 BOLAS.jpg','Abaco Koala  50 Bolas','ABA004',4.900,5.500 ,5.555,'Abaco Koala '],
      ['','imgLS/ABACOKOALA100 BOLAS.jpg','Abaco Koala 100 BOLAS','ABA003',8.00,7.500 ,10.944,'Abaco Koala'],
      ['','imgLS/ACUARELABACO 12 CARTON.jpg','Acuarela Baco  C/12 carton','ACU000',2.000,2.800,3.375,'Acuarela Baco '],
      ['','imgLS/ACUARELA BOMBIM 12 CARTON.jpg','Acuarela BOMBIM  C/12 carton','ACU001',1.200,6.100 ,7.00,'Acuarela BOMBIM'],
      ['','imgLS/ACUARELA CRAYOLA  8 CAJA PLASTICO.jpg','Acuarela Crayola C/ 8 caja plastico','ACU005',2.000,2.900,3.800,'Acuarela Crayola'],
      ['','imgLS/ACUARELA CRAYOLA 16 CAJA PLASTICO.jpg','Acuarela Crayola C/16 caja plastico','ACU006',2.544,2.904,3.244,'Acuarela Crayola'],
      ['','imgLS/ACUARELA PELIKAN  6 CARTON, INFANTIL.jpg','Acuarela Pelikan C/ 6 carton, infantil','ACU011',1.750,2.900 ,3.200,'Acuarela Pelikan'],
      ['','imgLS/ACUARELA PELIKAN 12 CARTON, INFANTIL.jpg','Acuarela Pelikan C/12 carton, infantil','ACU012',1.750,2.254 ,3.300,'Acuarela Pelikan'], 
      ['','imgLS/BORRADOR CUAD. BARRILITO BM-20 MIGAJON GDE.jpg','Borrador Cuad. Barrilito BM-20 MIGAJON GDE','BOR000',200,310 ,344,'Borrador Barrilito'], 
      ['','imgLS/BORRADOR CUAD. PELIKAN BR-40 AZUL ROJO.jpg','Borrador Cuad. PELIKAN BR-40 AZUL ROJO','BOR004',400,300 ,420,'Borrador  Pelikan'], 
      ['','imgLS/BORRADOR CUAD. PELIKAN MIGAJON M-20.jpg','Borrador Cuad. Pelikan MIGAJON M-20','BOR004',400,350 ,500,'Borrador  Pelikan'], 
      ['','imgLS/BORRADOR CUAD. PELIKAN MIGAJON M-40.jpg','Borrador Cuad. Pelikan MIGAJON M-40','BOR008',8.944,7.944 ,9.944,'Borrador  Pelikan'], 
      ['','imgLS/BORRADOR CUAD. PELIKAN STYRIKE 20.jpg','Borrador Cuad. Pelikan Strike 20','BOR013',8.944,7.944 ,9.944,'Borrador  Pelikan'], 
      ['','imgLS/CALCULADORA ACME DT392, 12 DIGITOS.jpg','Calculadora Acme DT392, 12 DIGITOS.jpg','CAL020',6.050,7.944 ,9.944,'Calculadora Acme'], 
      ['','imgLS/CALCULADORA ACME DT394, 12 DIGITOS.jpg','Calculadora Acme DT394, 12 DIGITOS','CAL021',7.500,7.800 ,9.500,'Calculadora Acme'], 
      ['','imgLS/CALCULADORA CASIO FX-82 MS, CIENTIFICA.jpg','Calculadora casio FX-82 MS, cientifica','CAL022',7.500,8.500 ,10.000,'Calculadora casio'], 
      ['','imgLS/CINTA TRANSPARENTE JANEL 119 12MM X 10M.jpg','Cinta transparente JANEL 119 12MM X 10M','CIN422',700,800,1000,'Cinta Janel'], 
      ['','imgLS/CINTA TRANSPARENTE SCOTH 600 12X65.jpg','Cinta transparente Scoth 600 12X65','CIN423',8.944,7.944 ,9.944,'Cinta scoth'], 
      ['','imgLS/COLOR BIC EVOLUTION CONTE C24 LARGO.jpg','Color Bic evolution conte C24 largo','COL025',8.944,7.944 ,9.944,'Color Bic '], 
       ['','imgLS/COLOR BIC CONTE C18 LARGO.jpg','Color Bic conte C/18 Largos','COL024',8.944,7.944 ,9.944,'Color Bic'], 
    
     ['','imgLS/COLOR BIC KIDS C24 LARGOS.jpg','Color Bic KIDS C/24 Largos','COL003',8.944,7.944 ,9.944,'Color Bic'], 
    
     ['','imgLS/COLOR CRAYOLA 12 LARGOS.jpg','Color Crayola 12 Largos','COL023',2.100,2.00 ,3.00,'Color Crayola'], 
    
     ['','imgLS/COLOR CRAYOLA 36 LARGOS.jpg','Color Crayola 36 Largos','COL032',3.500,3.800 ,4.544,'Color Crayola'], 
    
         ['','imgLS/CORRECTOR DE CINTA BARRILITO MP-508.jpg','Corector De Cinta Barrilito MP-508','COR018',8.944,7.944 ,9.944,'Corector De Cinta'], 

    
           ['','imgLS/CORRECTOR LIQUIDO BIC BASE AGUA.jpg','Corector Liquido Bic base agua','COR038',1.000,1.200 ,1.500,'Corector Bic'], 
    
     ['','imgLS/CORRECTOR LIQUIDO BIC MAXIMA COBERTURA.jpg','Corector liquido Bic maxima cobertura','COR039',800,1.100 ,1.400,'Corector Bic'], 
         ['','imgLS/CORRECTOR LIQUIDO PELIKAN AQUA FLUID.jpg  ','Corector Liquido Pelikan aqua fluid','COR045',800,900 ,1.000,'Corector Pelikan '], 

  
         ['','imgLS/zapato.png','zapato para Hombre','Z0970',16.000,17.000,20.800,'Zapato Hombre'], 
     ['','imgLS/dama.jpg','zapato para Mujer','Z0170',15.900,16.544 ,18.944,'Zapato Mujer'], 
     ['','imgLS/uniforme mujer.jpg','Uniforme para mujer','Uni08',8.800,7.944 ,12.00,'Uniforme para mujer'], 
     ['','imgLS/uniforme hombre.jpg','Uniforme para Hombre','Uni01',8.944,7.944 ,9.944,'Uniforme para Hombre'], 
     ['','imgLS/cuaderno de 50 hojas.jpg','cuaderno de 50 hojas','Cuad019',944,1.200 ,1.300,'Cuaderno'], 

     ['','imgLS/cuaderno de 100 hojas.jpg','cuaderno de 100 hojas','Cuad020',1.200,1.500 ,1.800,'Cuaderno'], 
     ['','imgLS/lapiz mongol.jpg','lapiz Mongol','Lap001',200,250 ,300,'Lapiz'], 
     ['','imgLS/imaglapiz faber castell.jpg','laiz Faber castell','Lap002',200,250 ,300,'Lapiz'], 



          ]; 

  
        
   
   }
    return listaArticulos;
}

function guardarvariable(pid){
 let lista=obtenerListaArticulos(); 
     let variable=[];
    for(let i=0;i<lista.length;i++){
        if(pid==lista[i][3]){
          variable=lista[i];
  localStorage.setItem('variableLS',JSON.stringify(variable));
  
    }

  }

}  


function obtenervariable(){
  
 let varableguardada=JSON.parse(localStorage.getItem('variableLS'));
 if (varableguardada==null){
       varableguardada=[];
   }
     return varableguardada;
}

function registrarArticulo(pdatosArticulos){
		let listaArticulos=obtenerListaArticulos();

       listaArticulos.push(pdatosArticulos);
  localStorage.setItem('listaArticulosLS',JSON.stringify(listaArticulos));

}
 function obtenerlistaArticulosFiltrada(pFiltro){
 let ListaOriginal=obtenerListaArticulos();
    let  ListaFiltrada=[];

    for (let i=0;i<ListaOriginal.length;i++){
    	if(ListaOriginal[i][7].toLowerCase().includes(pFiltro) ){
           ListaFiltrada.push(ListaOriginal[i]);
    	}
    }
      return ListaFiltrada; 
}
function obtenerListaArticulosCodigo(pid){
	      let articuloEncontrado=[];
      let listaArticulos=obtenerListaArticulos();
      for(let i=0 ;i <listaArticulos.length;i++){
       if( pid==listaArticulos[i][3]){
        articuloEncontrado=listaArticulos[i];
         }

      }

      return articuloEncontrado;
}

function actualizarListaArticulo(pArticulo){
  let articulosactualizados=obtenerListaArticulos();

  for (let i = 0;i <articulosactualizados.length; i++) {
      if (pArticulo[3]==articulosactualizados[i][3]) {
        articulosactualizados[i]=pArticulo;
        localStorage.setItem('listaArticulosLS',JSON.stringify(articulosactualizados));

      }
  }
}
