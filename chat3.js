function enviar_mensagem(event) {
    event.preventDefault();
    
    let texto = document.querySelector("input").value;
    if (texto.trim() === "") return; 
    
    let mensagemDiv = document.createElement("div");
    mensagemDiv.classList.add("mensagem");
    
    let mensagemP = document.createElement("p");
    mensagemP.innerText = texto;
    
    let editarBtn = document.createElement("button");
    editarBtn.innerText = "Editar";
    editarBtn.classList.add("botao-editar");
    editarBtn.addEventListener("click", () => editar_mensagem(mensagemP));
    
    let excluirBtn = document.createElement("button");
    excluirBtn.innerText = "Excluir";
    excluirBtn.classList.add("botao-excluir");
    excluirBtn.addEventListener("click", () => excluir_mensagem(mensagemDiv));
    
    mensagemDiv.append(mensagemP);
    mensagemDiv.append(editarBtn);
    mensagemDiv.append(excluirBtn);
    
    let mensagensDiv = document.querySelector(".mensagens");
    mensagensDiv.append(mensagemDiv);
    
    document.querySelector("input").value = "";
}

function editar_mensagem(mensagemP) {
    let novoTexto = prompt("Edite a mensagem:", mensagemP.innerText);
    if (novoTexto !== null) {
        mensagemP.innerText = novoTexto;
    }
}

function excluir_mensagem(mensagemDiv) {
    mensagemDiv.remove();
}

document.querySelector("form").addEventListener("submit", enviar_mensagem);
