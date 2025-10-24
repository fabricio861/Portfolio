let conta = 0;




document.getElementById("acrescentar").onclick = function(){
  
    document.getElementById("h1").innerText = conta++;
}

document.getElementById("descontar").onclick = function(){
    document.getElementById("h1").innerText =conta--;
}

document.getElementById("resetar").onclick =function(){
  document.getElementById("h1").innerText = conta =0;
}