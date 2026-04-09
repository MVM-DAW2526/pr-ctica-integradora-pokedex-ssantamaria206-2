fetchPokemonList().then(Pokemons => {
    const CaixaPokemons = document.getElementById("mainPkmGrid");

    for (let pokemon of Pokemons) {
        const article = document.createElement("article");
        article.textContent = pokemon.name;
        CaixaPokemons.appendChild(article);
    }
});