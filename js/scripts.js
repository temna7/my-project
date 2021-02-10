let pokemonList = [
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poision'] },
    { name: 'Ivysaur', height: 1, types: ['grass', 'psychic'] },
    { name: 'Blastoise', height: 1.6, types: ['steel', 'water'] }
];

for (let i = 0; i < pokemonList.length; i++) {
    console.log(pokemonList[i].name, pokemonList[i].height)
    if (pokemonList[i].height >= 1) {
        console.log('Wow that is Big')

    }
}

