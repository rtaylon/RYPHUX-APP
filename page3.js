// function adicionarMateria(materia) {
//     const listaMaterias = document.getElementById('lista-materias');
//     const novaMateria = document.createElement('li');
//     novaMateria.textContent = materia;
//     listaMaterias.appendChild(novaMateria);
// }

function alternarModo(modo) {
    const textoArea = document.getElementById('folha-texto');
    const codigoArea = document.getElementById('folha-codigo');
    
    if (modo === 'texto') {
        textoArea.style.display = 'block';
        codigoArea.style.display = 'none';
    } else if (modo === 'codigo') {
        textoArea.style.display = 'none';
        codigoArea.style.display = 'block';
    }
}

// Seleciona todos os itens de lista (<li>)
const listItems = document.querySelectorAll("li");

// Função para alternar a visibilidade da sublista ou do parágrafo
function toggleVisibility(item) {
  // Encontra a sublista dentro do item
  const sublist = item.querySelector("ul");
  
  // Se a sublista existir, alterna a visibilidade dela
  if (sublist) {
    sublist.classList.toggle("visible");
  }

  // Encontra o parágrafo e adiciona a classe 'visible' quando o item final é clicado
  const paragraph = item.querySelector("p.hidden");
  if (paragraph) {
    paragraph.classList.add("visible");  // Torna o parágrafo visível
  }
}

// Itera sobre todos os itens de lista
listItems.forEach(item => {
  item.addEventListener("click", function (e) {
    e.stopPropagation(); // Evita que o clique afete outros itens

    // Aplica a visibilidade ao item clicado
    toggleVisibility(item);
  });
});
