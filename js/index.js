fetchPokemonList().then(async (Pokemons) => {
    const CaixaPokemons = document.getElementById("mainPkmGrid");
    const promises = Pokemons.map(async (pokemon) => {
        const resposta = await fetch(pokemon.url);
        const data = await resposta.json();
        return {
            name: data.name,
            sprite: data.sprites.front_default
        };
    });

    const results = await Promise.all(promises);
    results.forEach(pokemon => {
        const article = document.createElement("article");
        const foto = document.createElement("img");
        foto.src = pokemon.sprite;
        const name = document.createElement("p");
        name.textContent = pokemon.name;
        article.appendChild(foto); 
        article.appendChild(name);
        CaixaPokemons.appendChild(article);
    });
});

