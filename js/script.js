const neumaticos = [
    { marca: 'Michelin', tamaño: '205/55 R16' },
    { marca: 'Bridgestone', tamaño: '225/45 R17' },
    { marca: 'Pirelli', tamaño: '195/65 R15' },
    { marca: 'Continental', tamaño: '215/60 R16' }
];

function buscarNeumatico() {
    let tamanoBuscado = prompt("Introduce el tamaño del neumático (ej. 205/55 R16):");
    
    let resultado = neumaticos.find(neumatico => neumatico.tamaño === tamanoBuscado);
    
    let mensaje = resultado ? `Neumático encontrado: ${resultado.marca} ${resultado.tamaño}` : 'Neumático no encontrado.';
    document.getElementById('resultado').textContent = mensaje;
}

document.getElementById('buscar').addEventListener('click', buscarNeumatico);