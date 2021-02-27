let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bulbasur', height: 3, types: ['grass', 'poison'] },
    { name: 'Ivysaur', height: 1, types: ['grass', 'psychic'] },
    { name: 'Blastoise', height: 1.6, types: ['steel', 'water'] }];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll(pokemon) {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height >= 3) {
    console.log('Wow that is Big!')
    document.write('<p>' + pokemon.name + '  (height: ' + pokemon.height + ') ' + " - Wow that is Big!" + '</p>')
  }
  else {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') </p>')
  }
});


