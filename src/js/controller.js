import * as model from './model.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import reloadView from './views/reloadView.js';

const controlPokemon = async function () {
  try {
    resultsView.renderSpinner();

    // (1 Loading 8 random pokemon from the model
    await model.loadPokemon();

    // (2 render the 8 random pokemon cards
    resultsView.render(model.state.pokemon);
  } catch (err) {
    console.log(err);
    resultsView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // (1 Get the query from the search
    const query = searchView.getQuery();

    if (!query) throw Error;

    // (2 Load the Pokemon with the query
    await model.loadSearchResults(query);

    // (3 Render the Pokemon that where found
    resultsView.render(model.state.search.result);
  } catch (err) {
    resultsView.renderError();
  }
};


const init = function () {
  resultsView.addHandlerRenderer(controlPokemon);
  searchView.addHandlerSearch(controlSearchResults);
  reloadView.addHandlerRenderer(controlPokemon);
};

init();


