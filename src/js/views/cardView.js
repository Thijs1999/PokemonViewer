import View from './View';
import icons from 'url:../../img/icons.svg';

class CardView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
      <figure class="card card--normal">
      <div class="card__image-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" alt="Eevee" class="card__image">   
      </div>
      
      <figcaption class="card__caption">
        <h1 class="card__name">Eevee</h1>
        
        <h3 class="card__type">
          normal
        </h3>

        <div class="card__like-button">
          <svg>
            <use href="src/img/icons.svg#icon-bookmark"></use>
          </svg>
        </div>

        <table class="card__stats">
          <tbody><tr>
            <th>HP</th>
            <td>55</td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>55</td>
          </tr>
          
          <tr>
            <th>Defense</th>
            <td>50</td>
          </tr>
    
          <tr>
            <th>Special Attack</th>
            <td>45</td>
          </tr>
          <tr>
            <th>Special Defense</th>
            <td>65</td>
          </tr>
          <tr>
            <th>Speed</th>  
            <td>55</td>
          </tr>
        </tbody></table>
        
        <div class="card__abilities">
          <h4 class="card__ability">
            <span class="card__label">Ability</span>
            Run Away
          </h4>
          <h4 class="card__ability">
            <span class="card__label">Hidden Ability</span>
            Anticipation
          </h4>
        </div>
      </figcaption>
    </figure>
    `;
  }
}
