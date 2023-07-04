const RegistroAutos = {
    autos: [],



    agregarAuto: function(marca, modelo, año) {
        const auto = {
            marca: marca,
            modelo: modelo,
            año: año
        };
        this.autos.push(auto);
    },
    
    
    obtenerAutos: function() {
        return this.autos;
    },
    
    
    filtrarAutos: function(criterio) {
        return this.autos.filter(criterio);
    }
};


    const numAutos = parseInt(prompt("Ingrese el número de autos que desea registrar:"));

    for (let i = 0; i < numAutos; i++) {
        const marca = prompt(`Ingrese la marca para el auto ${i + 1}:`);
        const modelo = prompt(`Ingrese el modelo para el auto ${i + 1}:`);
        const año = parseInt(prompt(`Ingrese el año para el auto ${i + 1}:`));
    
    RegistroAutos.agregarAuto(marca, modelo, año);
}


    const todosLosAutos = RegistroAutos.obtenerAutos();
    console.log("Todos los autos:", todosLosAutos);

    const marcaSeleccionada = prompt("Ingrese la marca de autos que desea filtrar:");
    const autosFiltrados = RegistroAutos.filtrarAutos(function(auto) {
    return auto.marca.toLowerCase() === marcaSeleccionada.toLowerCase();
});
    console.log("Autos filtrados:", autosFiltrados);