import View from './View';
import cardView from './cardView';
import icons from 'url:../../img/icons.svg';

class resultsView extends View {
  _parentElement = document.querySelector('main');
  _errorMessage =
    'There was a problem with loading the pokemon! Please try again';
  _message = '';

  _generateMarkup() {
    return `
    <div class="results">
        ${this._data.map((data) => cardView.render(data, false))}
    </div>
      `;
  }
}
