//cocktails array, holds all cocktails
var cocktails = [];

//Retrieves additional cocktail info from array and displays it
showCocktail = function (cocktailId) {
    cocktail = cocktails[cocktailId]; //Retrieve cocktail by Id
    title = "<h3>" + cocktail.title + "</h3>";
    instructionOne = "<i>1. " + cocktail.instructionOne + "</i></br>";
    // details += "<i>2. " + cocktail.instructionTwo + "</i>";
    $('.cocktail-title').html(title);
    $('.instruction-one').html(instructionOne);
};


//Simulate JSON Request
data = [{
    'title': 'Belclare',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Cosmo',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Daquari',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Cosmopolitan',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Pina Colada',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Mojito',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Margarita',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
}, {
    'title': 'Martini',
    'instructionOne': 'drink drink drink drink',
    'instructionTwo': 'drink drink drink drink',
    'instructionThree': 'drink drink drink drink'
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
