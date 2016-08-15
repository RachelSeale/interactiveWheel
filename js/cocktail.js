//cocktails array, holds all cocktails
var cocktails = [];

//Retrieves additional cocktail info from array and displays it
showCocktail = function (cocktailId) {
    cocktail = cocktails[cocktailId]; //Retrieve cocktail by Id
    title = cocktail.title;
    shortTitle = cocktail.shortTitle;
    instructionOne = cocktail.instructionOne;
    instructionTwo = cocktail.instructionTwo;
    instructionThree = cocktail.instructionThree;
    imgPath = '<img src= "' + cocktail.imgPath + '" alt="">';


    $('.cocktail-title').html(title);
    $('.short-title').html(shortTitle);
    $('.instruction-one').html(instructionOne);
    $('.instruction-two').html(instructionTwo);
    $('.instruction-three').html(instructionThree);
    $('.cocktail-image').html(imgPath);
};


//Simulate JSON Request
data = [{
    'title': 'Belclare',
    'shortTitle': 'Bel',
    'instructionOne': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'instructionTwo': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionThree': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Cosmo',
    'shortTitle': 'Cos',
    'instructionOne': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionTwo': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'instructionThree': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Daquari',
    'shortTitle': 'Daq',
    'instructionOne': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'instructionTwo': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionThree': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Mai Thai',
    'shortTitle': 'Mai',
    'instructionOne': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'instructionTwo': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'instructionThree': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Pina Colada',
    'shortTitle': 'Pin',
    'instructionOne': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionTwo': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionThree': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Mojito',
    'shortTitle': 'Moj',
    'instructionOne': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'instructionTwo': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'instructionThree': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Manhattan',
    'shortTitle': 'Man',
    'instructionOne': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor.',
    'instructionTwo': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionThree': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'imgPath': './images/TheFormula.png'
}, {
    'title': 'Martini',
    'shortTitle': 'Mar',
    'instructionOne': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida volutpat ante ac porttitor.',
    'instructionTwo': 'Praesent pretium ex purus, vel convallis tortor pretium quis. Pellentesque eleifend tristique mauris.',
    'instructionThree': 'Nam at elementum mauris. Pellentesque eleifend tristique mauris. Duis rhoncus cursus auctor. ',
    'imgPath': './images/TheFormula.png'
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
