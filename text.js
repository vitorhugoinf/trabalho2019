const modal=document.querySelector(".modal");

document.querySelector("#meclica").addEventListener("click",function () {
  modal.classList.remove("oculto");
});

function fecha(){
  modal.classList.add("oculto");
}
document.querySelector(".fechar").addEventListener("click",fecha);

modal.addEventListener("click",function (e) {
  if(e.target==modal){

    fecha();
  }
});