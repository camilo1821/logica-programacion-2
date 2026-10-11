const celsius = document.getElementById('celsius');
const boton = document.getElementById('boton');
const resultado = document.getElementById('resultado');

function agregarResultados(nuevasTemperaturas) {
    const li = document.createElement('li');
    li.className = ` list-group-item text-center text-dark resultado`;
    li.textContent = nuevasTemperaturas;
    resultado.appendChild(li);
}

boton.addEventListener('click', () => {

// Borrar resultados anteriores para evitar que se acumulen

    document.querySelectorAll('.resultado').forEach(li => li.remove());

    const temperaturaIngresada = celsius.value;
    const grados = Number(temperaturaIngresada)

    if (temperaturaIngresada === "" || isNaN(grados)) {
        agregarResultados("Ingrese una Temperatura válida");
        return;
    }

    const fahrenheit = grados * (9/5) + 32;
    const kelvin = grados + 273.15;

    agregarResultados(`Grados Fahrenheit: ${fahrenheit} °F`);
    agregarResultados(`Grados Kelvin: ${kelvin} K`);
});

