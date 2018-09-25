const button = document.querySelector(".btn__adicionar")
const input = document.querySelector(".adicionar__tarefa")
const tabela = document.querySelector(".tabela")

button.addEventListener("click", function (e) {
  e.preventDefault()

  //Aqui ele não inputa de tiver vazio, indefinido ou com espaço
  if (input.value === undefined || input.value === "" || input.value === " " || input.value === null) {
    input.focus()
    return false
  }

  // Aqui criamos a linha da coluna
  const linha = document.createElement("tr")

  // Aqui preenchemos as linhas da coluna, usando template strings e innerHTML
  linha.innerHTML = `<span draggable="true" > 
                       <td class="tarefa" onclick="checkItem(this)"> ${input.value} </td> 
                       <td class="x" onclick="deletar(this)"> x </td>
                     </span>`

  // Colocamos a linha dentro da tabela
  tabela.appendChild(linha)

  // Zeramos o valor do Input após o clique
  input.value = ""

  // Criamos o botão que remove todas as linhas/tarefas
  const btnDeletaTudo = document.querySelector(".btn__excluirTudo")
  btnDeletaTudo.addEventListener("click", function (e) {
    e.preventDefault()
    linha.remove()

  })
})

//Aqui criamos a checagem dos itens, quando clica fica como "tarefa feita", e se clica de novo, volta ao normal
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

// Aqui criamos o a checagem conectada com o botão "checkall", que dará "check" em todas as tarefas, e se clicar novamente, volta ao normal
function checkAll() {

  let checkboxes = document.querySelectorAll(".tarefa")

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].style.color == "black") {
      checkboxes[i].style.textDecoration = "line-through"
      checkboxes[i].style.color = "grey"
    }
    else {
      checkboxes[i].style.textDecoration = "none"
      checkboxes[i].style.color = "black"

    }
  }
}

// Criamos o botão deletar tarefa no "X"
function deletar(r) {
  let item = r.parentNode
  item.remove()
}



