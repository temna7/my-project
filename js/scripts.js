let pokemonList = [
    { name: 'Bulbasaur', height: 3, types: ['grass', 'poision'] },
    { name: 'Ivysaur', height: 1, types: ['grass', 'psychic'] },
    { name: 'Blastoise', height: 1.6, types: ['steel', 'water'] }
  ];
  
  for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + "</p>" + '</p>');
    if (pokemonList[i].height >= 3) {
      console.log('Wow that is Big!')
      document.write('Wow that is Big!')
  
    }
  }
  
  
  
  
  