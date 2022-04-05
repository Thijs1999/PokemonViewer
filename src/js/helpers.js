import { TIMEOUT } from './config.js';
import { AMOUNT_OF_POKEMON } from './config.js';

const timeout = (s) => {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url, {
      method: 'get',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};

export const capitilizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const generatePokemonId = () => {
  return Math.floor(Math.random() * AMOUNT_OF_POKEMON);
}