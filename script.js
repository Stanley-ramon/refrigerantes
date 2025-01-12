// Seleciona todos os elementos com a classe "item" e retorna uma NodeList.
let list = document.querySelectorAll(".item:not(.footer)")

// Seleciona o elemento com o ID "next" e o armazena na variável.
let next = document.getElementById("next")

// Seleciona o elemento com o ID "prev" e o armazena na variável.
let prev = document.getElementById("prev")

// Obtém o número total de elementos na NodeList "list" e o armazena na variável "count".
let count = list.length

// Inicializa a variável "active" com o valor 0 para representar o índice do item ativo.
let active = 0

// Define um evento de clique para o botão "next" que avança para o próximo item na lista.
next.onclick = () => {
    let activeOld = document.querySelector(".active") // Seleciona o item atualmente ativo.
    activeOld.classList.remove("active") // Remove a classe "active" do item ativo atual.

    active = active >= count -1 ? 0 : active + 1 // Incrementa o índice "active" ciclicamente: volta para 0 se alcançar o último item, ou avança para o próximo.

    list[active].classList.add("active") // Adiciona a classe "active" ao próximo item na lista.

}

prev.onclick = () => {
    let activeOld = document.querySelector(".active") // Seleciona o item atualmente ativo.
    activeOld.classList.remove("active") // Remove a classe "active" do item ativo atual.

    active = active <= 0 ? count -1 : active -1

    list[active].classList.add("active")
   
}