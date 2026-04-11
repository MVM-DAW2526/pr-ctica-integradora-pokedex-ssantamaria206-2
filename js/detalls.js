const params = new URLSearchParams(window.location.search);
const name = params.get("name");

function crearFoto(data){
    const MainArticle = document.querySelector(".FotoPokemon");
    const foto = document.createElement("img");
    foto.src = data.sprites.front_default;
    const NombrePokemon = document.createElement("h2");
    NombrePokemon.textContent = data.name;
    MainArticle.appendChild(foto);
    MainArticle.appendChild(NombrePokemon);
}
fetchPokemon(name).then(data => {
    crearFoto(data);
    crearStats(data);
    crearHabilidades(data);
    crearMovimientos(data);
    crearEvoluciones(data);
});
