let pokemonRepository = (function () {
  let pokemonList = [{ name: 'Bulbasaur', height: 3, types: ['grass', 'poision'] },
  { name: 'Ivysaur', height: 1, types: ['grass', 'psychic'] },
  { name: 'Blastoise', height: 1.6, types: ['steel', 'water'] }];

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    }
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height >= 3) {
    console.log('Wow that is Big!')
    document.write('<p>' + pokemon.name + ' ' + "Wow that is Big" + '</p>')
  }
  else {
    document.write('<p>') + pokemon.name + '</P>'
  }
});



