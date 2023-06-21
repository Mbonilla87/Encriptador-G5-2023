const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btn = document.querySelector(".btn-copiar");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
  
}

function encriptar(StringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"],["o", "ober"], ["u", "ufat"]]; 
    StringEncriptada = StringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        
        }

    }
    return StringEncriptada    
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    }
function desencriptar(StringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"],["o", "ober"], ["u", "ufat"]]; 
    StringDesencriptada = StringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(StringDesencriptada.includes(matrizCodigo[i][1])){
            StringDesencriptada = StringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        
        }

    }
    return StringDesencriptada

    }


    function btnCopiar() {
        btn.style.display = "none";
        btn.style.display = "inline-block";
        var mensajeCopiado = desencriptar(btn.value);
        mensaje.innerHTML = mensajeCopiado;
        btn.value = "";
      }
      
      function copy() {
        mensaje.select();
        document.execCommand("copy");
        alert("El texto fue copiado");
}  
