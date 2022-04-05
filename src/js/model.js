import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
import { RES_PER_PAGE } from './config.js';
import { generatePokemonId } from './helpers.js';

export const state = {
  pokemon: [],
  search: {
    query: '',
    result: [],
  },
  lastId: 8,
  firstId: 1,
  totalResults: 0
};

const buildPokemonData = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    specialAttack: pokemon.stats[3].base_stat,
    specialDeffense: pokemon.stats[4].base_stat,
    speed: pokemon.stats[5].base_stat,
    type: pokemon.types[0].type.name,
    ability: pokemon.abilities[0].ability.name,
    hiddenAbility: pokemon.abilities[pokemon.abilities.length - 1].ability.name,
    image: pokemon.sprites.other.home.front_default,
  }
}

export const loadPokemon = async function () {
  try {
    state.pokemon = [];
    const data = [];
    
    for (let i = 1;  i <= RES_PER_PAGE; i++) {
      data.push(await getJSON(`${API_URL}${generatePokemonId()}`));
    }

    state.pokemon = data.map((pokemon) => buildPokemonData(pokemon));
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.result = [];
    state.search.query = query;
    const data = await getJSON(`${API_URL}${query}`);

    state.search.result.push(buildPokemonData(data));
  } catch (err) {
    throw err;
  }
};

