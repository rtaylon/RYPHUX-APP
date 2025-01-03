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
