export class Card {
    //constructor for the "MenuItem" class
    constructor(item) {
        //data for the init card
        this.item = item;
        this._title = this.item.title;
        this._price = this.item.price;
        this._imageClass = this.item.imageClass;
        this._linkText = this.item.linkText;
        this._link = this.item.link;
    }

    //get template card from page
    _getTemplate() {
        const cardElement = document
            .querySelector('#card-template')
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }

    //upper first letter
    _toUpperCase(text) {
        return text.slice(0, 1).toUpperCase() + text.slice(1);
    }

    //generate menu
    generateCard() {
        //get template card
        this._element = this._getTemplate();
        this._titleElement = this._element.querySelector('.card__title');
        this._priceElement = this._element.querySelector('.card__price');
        this._imageElement = this._element.querySelector('.card__image');
        this._linkElement = this._element.querySelector('.card__link');
        //set variables card
        this._titleElement.textContent = this._title;
        this._priceElement.textContent = this._price;
        this._imageElement.classList.add(this._imageClass)
        this._linkElement.textContent = this._toUpperCase(this._linkText);
        this._linkElement.setAttribute('href', this._link);

        return this._element;
    }
}
