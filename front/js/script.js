
  
function a(){
    var o = document.getElementById('user').value
    var b = document.getElementById('password').value
    console.log(o)
    console.log(b)
}

function addBook(){
    //AQUI TEM Q TER A OPÇÃO DE POPUP, pra o user colocar o .pdf
}

const opeen = document.getElementById("addBook")
const closee = document.getElementById("closee")
const modal = document.getElementById("input-file")

opeen.addEventListener("click", ()=> {
    modal.classList.add("open");
});

closee.addEventListener("click", ()=> {
    modal.classList.remove("open");
    console.log(1)
});
