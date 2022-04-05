import { capitilizeFirstLetter } from '../helpers.js';

class ResultsView {
    #parentElement = document.querySelector('main');
    #data;
    #errorMessage = 'Something went wrong loading the Pokemon';
    #message = '';

    render(data) {
      this.#data = data;
      const markup = this.#generateMarkup();
  
      this.#clear();
      this.#insert(markup);
    }
  
    #clear() {
      this.#parentElement.innerHTML = '';
    }

    #insert(markup) {
      this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }
  
    renderSpinner() {
      const markup = `
        <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
        </div
      `;
  
      this.#clear();
      this.#insert(markup);
    };

    renderError() {
      const markup =
      `<div class="error u-margin-top-huge">
        <div>
          <svg>
            <use href="src/img/icons.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${this.#errorMessage}</p>
      </div>`

      this.#clear();
      this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    addHandlerRenderer(handler) {
      window.addEventListener('load', handler);
    }

    #generateMarkup() {
      return `<div class="results">${this.#data.map(this.#generateMarkupCard).join('')}</div>`;
    }

    #generateMarkupCard(pokemon) {
      return `    
      <figure class="card card--${pokemon.type}">
        <div class="card__image-container">
          <img src="${pokemon.image}" alt="${pokemon.name}" class="card__image">   
        </div>
        
        <figcaption class="card__caption">
          <h1 class="card__name">${capitilizeFirstLetter(pokemon.name)}</h1>
      
          <h3 class="card__type">
            ${pokemon.type}
          </h3>
      
          <table class="card__stats">
            <tbody><tr>
              <th>HP</th>
              <td>${pokemon.hp}</td>
            </tr>
            <tr>
              <th>Attack</th>
              <td>${pokemon.attack}</td>
            </tr>
            
            <tr>
              <th>Defense</th>
              <td>${pokemon.defense}</td>
            </tr>
      
            <tr>
              <th>Special Attack</th>
              <td>${pokemon.specialAttack}</td>
            </tr>
            <tr>
              <th>Special Defense</th>
              <td>${pokemon.specialDeffense}</td>
            </tr>
            <tr>
              <th>Speed</th>  
              <td>${pokemon.speed}</td>
            </tr>
          </tbody></table>
          
          <div class="card__abilities">
            <h4 class="card__ability">
              <span class="card__label">Ability</span>
              ${pokemon.ability}
            </h4>
            <h4 class="card__ability">
              <span class="card__label">Hidden Ability</span>
              ${pokemon.hiddenAbility}
            </h4>
          </div>
        </figcaption>
      </figure>`
    }
  }
  
  export default new ResultsView();