function calcular() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var select = document.getElementById("operacion");
    var oper = select.options[select.selectedIndex].value;
    if (isNaN(n1)||isNaN(n2)|| n1=="" || n2==""){
        window.alert("debe ingresar valores numericos");
    }else
    {
     switch (oper) {
      case "sumar":
        document.getElementById("resultado").innerHTML = parseInt(n1) + parseInt(n2);
        break;
      case "restar":
        document.getElementById("resultado").innerHTML =n1 - n2;
        break;
      case "multiplicar":
        document.getElementById("resultado").innerHTML =n1 * n2;
        break;
      case "dividir":
        if (parseInt(n2) === 0) {
            document.getElementById("resultado").innerHTML ="ERROR, DIVISION POR CERO";
            
        }else
        {
            document.getElementById("resultado").innerHTML =n1 / n2;
        }
        
        break;
   
     }
    }

}

function borrar(){
    document.getElementById("num1").value ="";
    document.getElementById("num2").value ="";
}