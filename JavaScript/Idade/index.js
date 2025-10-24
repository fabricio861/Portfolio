




 document.getElementById("button").onclick = function(){
    let idade = document.getElementById("input").value;
    let idadeNumero =Number(idade);

  if(idadeNumero <= 10){
     document.getElementById("h1").innerText = "Sua idade é infantil"
    
} else if (idadeNumero >10 && idadeNumero <18){
    document.getElementById("h1").innerText = "Você está na fase aborrecente" 
}

   else{
    
     document.getElementById("h1").innerText = "Vá trabalhar vc é um adulto" 
  }


}
