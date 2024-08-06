// window.alert("oi") Criar um popup com uma mensagem

 /* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1.1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 1.2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 1.3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 2.1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2.2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 2.3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/

//Passo 1.1
const botoes = document.querySelectorAll(".botao"); 
//Passo 2.1
const personagens = document.querySelectorAll(".personagem");

/* 
- 'const' não pode reatribuir um valor a uma variavel; 
- 'let' pode reatribuir um valor a uma variavel;

- 'queryselector' seleciona uma função atraves de sua classe
- 'querySelectorAll' seleciona todas as funções de mesma classe;
*/

botoes.forEach((botao, indice) => { // Para cada funçao com definiçao (classe, id, indice/index) realiza os metodos {}.
	botao.addEventListener("click", () => { //Adiciona uma notificação de que um botão foi selecionado.
        
        // Passo 1.3
		desselecionarBotao(); 
        // Passo 2.3
		desselecionarPersonagem(); 

        // Passo 1.2
		botao.classList.add("selecionado"); //Adiciona uma classe 
        // Passo 2.2
		personagens[indice].classList.add("selecionado"); // Remove uma classe
	});
});

// Passo 1.3
function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");

	botaoSelecionado.classList.remove("selecionado"); //remove a classe
}

// Passo 2.3
function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");

	personagemSelecionado.classList.remove("selecionado"); //remove a classe
}