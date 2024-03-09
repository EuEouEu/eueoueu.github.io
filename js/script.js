const level_name = document.querySelector(".level_name");
const level_num = document.querySelector(".level_num");
const input_num = document.querySelector(".input_num");
const level_content = document.querySelector(".level_content");

const levelNames = {
    "1": {
        name: "Qu4rto",
        description: "A entrada desta estranha dimenção chamada Qu4rto. Um nivel sem nenhum desafio, onde o unico objetivo é pular."
    },
    "2": {
        name: "Gravidade 1.000",
        description: "Neste estranho nivel, a gravidade é forte, sempre te puchando para o chão. O objetivo é simples, alcançar a porta branca andando."
    },
    "3": {
        name: "Atraves dos limites",
        description: "Aqui, nem tudo é oque vê. Aqui, você deve atravessar uma das paredes, e finalmente chegar no proximo quarto."
    },

    "4": {
        name: "Pule mais!",
        description: "Neste nivel, é possivel se agarrar nas paredes e dar pulos mais altos. Para prosseguir, é necessario pular muitas vezes encostado em um dos blocos flutuantes."
    },

    "5": {
        name: "Portas",
        description: "Aqui, existem muitas saidas, mas apenas uma é verdadeira, um invisivel localizada na parede esquerda, e é preciso usar a mesma tecnica utilizada no nivel 4 para o alcançar."
    }
};

function updateLevelInfo(levelNumber) {
    const info = levelNames[levelNumber];
    if (info) {
        level_name.textContent = info.name;
        level_content.textContent = info.description;
    } else {
        level_name.textContent = "Nome indisponivel";
        level_content.textContent = "Descrição indisponivel";
        level_num.textContent = "Numero indisponivel"
    }
}

input_num.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const num = input_num.value;
        level_num.textContent = num;
        updateLevelInfo(num);
    }
});

setInterval(function() {
    const num = level_num.textContent.trim();
    updateLevelInfo(num);
}, 1000);