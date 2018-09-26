const button = document.querySelector(".btn__adicionar")
const input = document.querySelector(".adicionar__tarefa")
const div =  document.querySelector(".tabela")
 const ul = document.querySelector("ul");

let c = 0;

button.addEventListener("click", function (e) {
  e.preventDefault()
  const regex = /\w+/ig
  //Aqui ele não inpu+ta de tiver vazio, indefinido ou com espaço
  if (!regex.test(input.value)) {
    input.focus()
    return false
  }

  const li = document.createElement("li")

  li.setAttribute("draggable", "true")
  li.setAttribute("ondragstart", "drag(event)")
  li.setAttribute("ondragover", "allowDrop(event)")
  li.setAttribute("ondrop", "drop(event)")
  li.setAttribute("onclick", "checkItem(this)")
  li.setAttribute("id", `drag${c}`)
  li.classList.add("tarefa")
  li.innerHTML = `${input.value} <span class="x" onclick="deletar(this)"> x </span>`
          
ul.appendChild(li)
input.value = ""
c++

const btnDeletaTudo = document.querySelector(".btn__excluirTudo")
  btnDeletaTudo.addEventListener("click", function (e) {
    e.preventDefault()
    li.remove()
    

  })
})


function checkItem(td) {
  let row = td
  if (row.style.color == "black") {
    row.style.textDecoration = "line-through"
    row.style.color = "grey"
    
  }
  else {
    row.style.textDecoration = "none"
    row.style.color = "black"


  }
}

const checkedAllBtn = document.querySelector(".btn__checkAll");
let contador = 0;

function checkAll() {
  let checkboxes = document.querySelectorAll(".tarefa")
  for (let i = 0; i < checkboxes.length; i++) {
    if (contador % 2 === 0) {
      checkboxes[i].style.textDecoration = "line-through"
      checkboxes[i].style.color = "grey"
      checkedAllBtn.innerHTML = "Uncheck all"
    }
    else {
      checkboxes[i].style.textDecoration = "none"
      checkboxes[i].style.color = "black"
      checkedAllBtn.innerHTML = "Check all"
    }
  }
  contador++
}

function deletar(r) {
  let item = r.parentNode
  item.remove()
}

const buttonTOP = document.getElementById("arrowTop")

buttonTOP.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0);
})

window.addEventListener("scroll", function(){
  console.log(buttonTOP)
    if(pageYOffset > 100){
        buttonTOP.hidden = false;
        return false;
    }
    buttonTOP.hidden = true;
})

//drop FUCNTION
function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}
function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}
function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    console.log(dropevent.target)
    dropevent.target.parentNode.appendChild(document.getElementById(data));
}