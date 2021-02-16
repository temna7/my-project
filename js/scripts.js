let pokemonList = [
  { name: 'Bulbasaur', height: 3, types: ['grass', 'poision'] },
  { name: 'Ivysaur', height: 1, types: ['grass', 'psychic'] },
  { name: 'Blastoise', height: 1.6, types: ['steel', 'water'] }
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 3) {
    console.log('Wow that is Big!')
    document.write('<p>' + pokemonList[i].name + ' ' + "Wow that is Big" + '</p>')
  }
  else {
    document.write('<p>' + pokemonList[i].name + '</p>')

  }
}

