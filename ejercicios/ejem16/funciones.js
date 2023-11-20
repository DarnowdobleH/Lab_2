function saludar(saludarFuncion) {
    saludarFuncion();
}

const saludoInternacional = function();{
    console.log('Hola Mundo');
}

const saludoMexicano = () => {
    console.log('Quihubole!');
}

saludar(saludoInternacional);
saludar(saludoMexicano);