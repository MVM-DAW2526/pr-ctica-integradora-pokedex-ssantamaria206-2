const params = new URLSearchParams(window.location.search);
const name = params.get("name");

function crearFoto(data){
    const ZonaFoto = document.querySelector(".FotoPokemon");
    const foto = document.createElement("img");
    foto.src = data.sprites.front_default;
    const NombrePokemon = document.createElement("h2");
    NombrePokemon.textContent = data.name;
    ZonaFoto.appendChild(foto);
    ZonaFoto.appendChild(NombrePokemon);
}

function crearStats(data){
    const ZonaStats = document.querySelector(".StatsPokemon");
    const missatge = document.createElement("p");
    missatge.textContent = "No configurat";
    ZonaStats.appendChild(missatge)
}

function crearHabilidades(data){
    const ZonaHabilidades = document.querySelector(".HabilidadesPokemon"); 

    data.abilities.forEach(habilitat => {
        const NomHabilitat = document.createElement("p");
        NomHabilitat.textContent = habilitat.ability.name;
        ZonaHabilidades.appendChild(NomHabilitat);
    });
}

function crearMovimientos(data){
    const ZonaMovimientos = document.querySelector(".MovimientosPokemon");
    const missatge = document.createElement("p");
    missatge.textContent = "No configurat";
    ZonaMovimientos.appendChild(missatge)
}

function crearEvoluciones(data){
    const ZonaEvoluciones = document.querySelector(".EvolucionesPokemon");
    const missatge = document.createElement("p");
    missatge.textContent = "No configurat";
    ZonaEvoluciones.appendChild(missatge)
}


fetchPokemon(name).then(data => {
    crearFoto(data);
    crearStats(data);
    crearHabilidades(data);
    crearMovimientos(data);
    crearEvoluciones(data);
});
