export class SmallSlide {
  //constructor for the "SmallSlide" class
  constructor(item) {
    //data for the init small slide
    this.item = item;
    this._imageClass = this.item.imageClass;
    this._title = this.item.title;
    this._text = this.item.text;
    this._buttonText = this.item.buttonText;
    this._link = this.item.link;
  }

  //get template small slide from page
  _getTemplate() {
    const sliderElement = document
      .querySelector('#small-slider-template')
      .content.querySelector('.small-slider__item')
      .cloneNode(true);
    return sliderElement;
  }

  //generate slide
  generateSmallSlide() {
    //get template slide
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.small-slider__image');
    this._titleElement = this._element.querySelector('.small-slider__title');
    this._textElement = this._element.querySelector('.small-slider__text');
    this._buttonElement = this._element.querySelector('.button');
    //set variables slide
    this._imageElement.classList.add(this._imageClass);
    this._titleElement.textContent = this._title;
    this._textElement.textContent = this._text;
    this._buttonElement.textContent = this._buttonText;
    this._buttonElement.setAttribute('href', this._link);

    return this._element;
  }
}
