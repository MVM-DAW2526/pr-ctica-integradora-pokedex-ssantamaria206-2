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
    const vida = document.createElement("p");
    vida.textContent = "Vida: " + data.stats[0].base_stat;
    ZonaStats.appendChild(vida);
    const dany = document.createElement("p");
    dany.textContent = "Dany: " + data.stats[1].base_stat;
    ZonaStats.appendChild(dany);
    const altura = document.createElement("p");
    altura.textContent = "Alçada: " + data.height;
    ZonaStats.appendChild(altura);
    const pes = document.createElement("p");
    pes.textContent = "Pes: " + data.weight;
    ZonaStats.appendChild(pes);
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

    data.moves.forEach(move => {
        const p = document.createElement("p");
        p.textContent = move.move.name;
        ZonaMovimientos.appendChild(p);
    });
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
