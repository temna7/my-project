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
  
  function add(a, b) {
    return a+b;
};
console.log(add(6,7))

function subtract(num1, num2) {
    return num2-num1;
};
console.log(subtract(2,9))

function multiply(vol,vol2) {
    return vol*vol;
}
console.log(multiply(4,3))

function divide(dividend, divisor){
    if(divisor === 0){
      return "not allowed."
    }else{
      let result = dividend / divisor;
      return result;
    }
  }
console.log(divide(16,4))
  
  
  