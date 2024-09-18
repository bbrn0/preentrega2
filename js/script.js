const neumaticos = [
    { altura: 60, ancho: 185, rodado: 14, nombre: 'Neumático 1' },
    { altura: 60, ancho: 185, rodado: 15, nombre: 'Neumático 2' },
    { altura: 60, ancho: 185, rodado: 16, nombre: 'Neumático 3' },
    { altura: 60, ancho: 195, rodado: 14, nombre: 'Neumático 4' },
    { altura: 60, ancho: 195, rodado: 15, nombre: 'Neumático 5' },
    { altura: 60, ancho: 195, rodado: 16, nombre: 'Neumático 6' },
    { altura: 60, ancho: 205, rodado: 14, nombre: 'Neumático 7' },
    { altura: 60, ancho: 205, rodado: 15, nombre: 'Neumático 8' },
    { altura: 60, ancho: 205, rodado: 16, nombre: 'Neumático 9' },
    { altura: 65, ancho: 185, rodado: 14, nombre: 'Neumático 10' },
    { altura: 65, ancho: 185, rodado: 15, nombre: 'Neumático 11' },
    { altura: 65, ancho: 185, rodado: 16, nombre: 'Neumático 12' },
    { altura: 65, ancho: 195, rodado: 14, nombre: 'Neumático 13' },
    { altura: 65, ancho: 195, rodado: 15, nombre: 'Neumático 14' },
    { altura: 65, ancho: 195, rodado: 16, nombre: 'Neumático 15' },
    { altura: 65, ancho: 205, rodado: 14, nombre: 'Neumático 16' },
    { altura: 65, ancho: 205, rodado: 15, nombre: 'Neumático 17' },
    { altura: 65, ancho: 205, rodado: 16, nombre: 'Neumático 18' },
    { altura: 70, ancho: 185, rodado: 14, nombre: 'Neumático 19' },
    { altura: 70, ancho: 185, rodado: 15, nombre: 'Neumático 20' },
    { altura: 70, ancho: 185, rodado: 16, nombre: 'Neumático 21' },
    { altura: 70, ancho: 195, rodado: 14, nombre: 'Neumático 22' },
    { altura: 70, ancho: 195, rodado: 15, nombre: 'Neumático 23' },
    { altura: 70, ancho: 195, rodado: 16, nombre: 'Neumático 24' },
    { altura: 70, ancho: 205, rodado: 14, nombre: 'Neumático 25' },
    { altura: 70, ancho: 205, rodado: 15, nombre: 'Neumático 26' },
    { altura: 70, ancho: 205, rodado: 16, nombre: 'Neumático 27' },
];

const alturaSelect = document.getElementById('altura');
const anchoSelect = document.getElementById('ancho');
const rodadoSelect = document.getElementById('rodado');
const filtrarBtn = document.getElementById('filtrar-btn');
const resultadosContainer = document.getElementById('resultados');

filtrarBtn.addEventListener('click', filtrarNeumaticos);

function filtrarNeumaticos() {
    const altura = alturaSelect.value;
    const ancho = anchoSelect.value;
    const rodado = rodadoSelect.value;

    const neumaticosFiltrados = neumaticos.filter(neumatico => {
        if (altura && neumatico.altura !== altura) return false;
        if (ancho && neumatico.ancho !== parseInt(ancho)) return false;
        if (rodado && neumatico.rodado !== parseInt(rodado)) return false;
        return true;
});

    if (neumaticosFiltrados.length === 0) {
        resultadosContainer.innerHTML = 'No se encontraron resultados';
    } else {
        mostrarResultados(neumaticosFiltrados);
    }
}

function mostrarResultados(neumaticos) {
    const html = tires.map(tire => `<p>${tire.name}</p>`).join('');
    resultsContainer.innerHTML = html;
}