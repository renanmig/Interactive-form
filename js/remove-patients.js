var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ 
   // var alvoEvento = event.target; // alvo e sempre o menor (filho)
   // var paiDoAlvo = alvoEvento.parentNode; //passando alvo da td para tr
  //  paiDoAlvo.remove(); //remove a linha (tr)
    //event.target.parentNode.remove(); *tudo em uma linha so*
    event.target.parentNode.classList.add("fadeOut");    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
})