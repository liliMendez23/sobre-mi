// definicion de variables globales
let partidasGanadasCompu=0;
let partidasGanadasUsuario=0;

// valida si el usuario ingreso su nombre y lo carga la pagina de juego 
function validarIngresoNombre(){
  let nombreUsuario;
  nombreUsuario=document.getElementById("nombreJugador").value;
  
  if (nombreUsuario===''){
    window.alert("Debe ingresar su nombre para iniciar el juego");
   } else {
    document.getElementById("ingresoNombre").style.display="none";
    document.getElementById("inicioJuego").style.display="inline";
    document.getElementById("opcionJuego").style.display="inline";
    document.getElementById("mensajeBienvenida").innerHTML ="¡Bienvenida " + nombreUsuario +"!" +" elige una opción para Jugar";

   }
}
  

/* funcion IniciarJuego invoca a la funcion elegirComputadora y determinarGanador, 
y visualiza el resultado parcial del juego*/
function iniciarJuego(opcionJugador){
  let opcionComputadora;  
  let resultadoRonda;
  mostrarEleccionUsuario(opcionJugador);
  opcionComputadora=elegirComputadora();
  resultadoRonda=determinarGanador(opcionJugador,opcionComputadora);
    if (resultadoRonda===1){
      document.getElementById("resultado").innerHTML ="GANASTE!!"
      partidasGanadasUsuario++;
      document.getElementById("totalGanadasUsuario").innerHTML =partidasGanadasUsuario;
      
    }else if(resultadoRonda===2){ 
      document.getElementById("resultado").innerHTML ="PERDISTE!!";
      partidasGanadasCompu++;
      document.getElementById("totalGanadasCompu").innerHTML =partidasGanadasCompu;
      
    }else {
      document.getElementById("resultado").innerHTML ="EMPATE";
    }
 
  evaluarSiHayGanador();
 }
  // fucncion mostrarEleccionUsuario muestra la opcion escogida por el usuario
 function mostrarEleccionUsuario(opcionJugador){
  if (opcionJugador==0){
    document.getElementById("armaUsuario").innerHTML ="Papel";

  }else if(opcionJugador==1){
    document.getElementById("armaUsuario").innerHTML ="Tijera";
  }else{
    document.getElementById("armaUsuario").innerHTML ="Piedra";
  }
 }
 /* la funcion elegirComputadora, devuelve valores 0, 1 o 2, y visualiza el 
arma escogida por la computadora*/
function elegirComputadora(){
  let armaComputadora;
      armaComputadora=Math.floor(Math.random() * 3);
 switch (armaComputadora) {
   case 0:
     document.getElementById("armaCompu").innerHTML ="Papel";
     return 0;
   case 1:
     document.getElementById("armaCompu").innerHTML ="Tijera";
     return 1;
   case 2:
     document.getElementById("armaCompu").innerHTML ="Piedra";
     return 2;
 
 }
 }
 /* funcion determinarGanador evalua las opciones escogidas por el usuario y la 
 computadora y determina el ganador, 0 empate, 1 gana usuario, 2 gana computadora*/
function determinarGanador(opcionJugador, opcionComputadora){
  if (opcionJugador==opcionComputadora){
     return 0;// empate
    }else if(opcionJugador==0){
        switch (opcionComputadora) {
          case 1:
            return 2;// gano computadora
            
          case 2:
            return 1; // gano usuario
        
         }
     }else if (opcionJugador==1){
          switch (opcionComputadora) {
            case 0:
              return 1;
              
            case 2:
              return 2;
           } 
       }else {
            switch (opcionComputadora) {
              case 0:
                return 2;
                
              case 1:
              return 1;
             } 
          }
}

/* funcion evaluarSiHayGanador, evalua si la computadora o el usuario ha alcanzado las 3 rondas ganadas,
haciendo invisible el contenedor opcionJuego y visible el contenedor reinicioJuego */
function evaluarSiHayGanador(){
  
  if (partidasGanadasCompu === 3){
    document.getElementById("resultadoFinal").innerHTML="PERDISTE!! :(";
    document.getElementById("opcionJuego").style.display="none";
    document.getElementById("reinicioJuego").style.display="inline";
     
  }else if(partidasGanadasUsuario===3){
    document.getElementById("resultadoFinal").innerHTML="GANASTE!! :) ";
    document.getElementById("opcionJuego").style.display="none";
    document.getElementById("reinicioJuego").style.display="inline";
  }
 
}

 
/* funcion reinciarjuego, establece las variables globales a 0, 
hace visible el contenedor ingresoNombre e invisble inicioJuegp y reinicioJuego y borra el contenido de los div*/
  function reiniciarJuego(){
    partidasGanadasCompu=0;
    partidasGanadasUsuario=0;
    document.getElementById("ingresoNombre").style.display="inline";
    document.getElementById("inicioJuego").style.display="none";
    document.getElementById("reinicioJuego").style.display="none";

    document.getElementById("armaUsuario").innerHTML =" ";
    document.getElementById("armaCompu").innerHTML = " ";
    document.getElementById("resultado").innerHTML =" ";
    document.getElementById("totalGanadasUsuario").innerHTML =" ";
    document.getElementById("totalGanadasCompu").innerHTML =" ";
    document.getElementById("resultadoFinal").innerHTML =" ";
   

  }
 

 
 
 
