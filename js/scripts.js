let pokemonList = [
  { name: 'Bulbasur', height: 3, types: ['grass', 'poison'] },
  { name: 'Ivysaur', height: 1, types: ['grass', 'psychic'] },
  { name: 'Blastoise', height: 1.6, types: ['steel', 'water'] }, 
];

let pokemonRepository = (function () {
   return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
  })();

      (function () {
        pokemonList.forEach(function(pokemon) {
            let pokemonName = pokemon.name
            let pokemonHeight = pokemon.height
            if(pokemonHeight >=3) {
                document.write(pokemonName + ' (height : ' + pokemonHeight + ')' + ' - "Wow, that is big!"'); 
            } else {
                document.write(pokemonName + ' (height : ' + pokemonHeight + ')'); 
            }
                document.write('<br>', '<br>');
            });
    })();