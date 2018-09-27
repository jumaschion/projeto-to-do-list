const button = document.querySelector(".btn__adicionar")
const input = document.querySelector(".adicionar__tarefa")
const div =  document.querySelector(".tabela")
 const ul = document.querySelector("ul");

let c = 0;

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
});

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
  li.setAttribute("dragenter", "dropEnd(e)" )
  li.setAttribute("id", `${c}`)
  li.classList.add("tarefa")
  li.classList.add("tooltip")
  li.innerHTML = `<p onclick="checkItem(this)">${input.value}</p><span class="x" onclick="deletar(this)"> <i class="fas fa-trash"></i></span> `
          
ul.appendChild(li)
input.value = ""
c++

const btnDeletaTudo = document.querySelector(".btn__excluirTudo")
  btnDeletaTudo.addEventListener("click", function (e) {
    e.preventDefault()
    li.remove()
    
  })
})



function checkItem(evento) {
  let row = evento
  
  
  if (row.style.color === "" || row.style.color === "black") {
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
  let checkboxes = document.querySelectorAll("p")
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
    let data = dropevent.dataTransfer.getData("text");

    let dataDrag = document.getElementById(data)
    dataDrag.remove()
    let dataToChange = document.getElementById(dropevent.target.id)
    dataToChange.insertAdjacentHTML('afterEnd', dataDrag.outerHTML)

    console.log("ELEMENTO TARGET :", dataToChange)
    console.log("ELEMENTO DRAG :", dataDrag)
    
   //outerHTML pega o elemento todo = text + atributos + elementos 

}