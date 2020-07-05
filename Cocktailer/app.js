import showDrink from './src/presentDrinks.js';

const proxy = `https://cors-anywhere.herokuapp.com/`;
let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=d`;
const detailID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;

window.addEventListener('DOMContentLoaded', () => {
  showDrink(url);
});
