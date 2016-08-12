//cocktails array, holds all cocktails
var cocktails = [];

//Retrieves additional cocktail info from array and displays it
showCocktail = function (cocktailId) {
    cocktail = cocktails[cocktailId]; //Retrieve cocktail by Id
    title = cocktail.title;
    instructionOne = cocktail.instructionOne;
    instructionTwo = cocktail.instructionTwo;
    instructionThree = cocktail.instructionThree;

    $('.cocktail-title').html(title);
    $('.instruction-one').html(instructionOne);
    $('.instruction-two').html(instructionTwo);
    $('.instruction-three').html(instructionThree);
};


//Simulate JSON Request
data = [{
    'title': 'Belclare',
    'instructionOne': '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Cosmo',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Daquari',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Cosmopolitan',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Pina Colada',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Mojito',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Margarita',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}, {
    'title': 'Martini',
    'instructionOne': '1. drink drink drink drink',
    'instructionTwo': '2. drink drink drink drink',
    'instructionThree': '3. drink drink drink drink'
}];


//Array to hold cocktail titles
var cocktailTitles = [];
//Assign cocktails to to cocktails Array and ensure unique
for (i=0; i < data.length; i++) {
  //Look for the current title in the cocktailTitles array
  cocktailIndex = cocktailTitles.indexOf(data[i].title);
  console.log('cocktail index: '+cocktailIndex);
  if ( !cocktailIndex>-1) {
      //Add cocktail to cocktails array
      cocktails.push(data[i]);
      //Add cocktail title to cocktailTitles array
      cocktailTitles.push(data[i].title);
  }
}

showCocktail(0);
