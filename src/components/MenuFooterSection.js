export class MenuFooterSection {
  //constructor for the "MenuFooterSection" class
  constructor(item, createMenuFooterItem) {
    //data for the init section
    this.item = item;
    this._title = this.item.title;
    this._items = Object.values(this.item.items);
    this._createItem = createMenuFooterItem;
    // menu items init
    this._renderer = (item) => {
      // create main menu item
      const menuItem = this._createItem(item);
      // add main menu item to the page
      this._listElement.append(menuItem);
    };
  }

  //get template section from page
  _getTemplate() {
    const menuElement = document
      .querySelector('#menu-footer-section-template')
      .content.querySelector('.menu-footer__sections-item')
      .cloneNode(true);
    return menuElement;
  }

  //render all items
  _renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  //generate footer menu section
  generateMenuFooterSection() {
    //get template menu section
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.menu-footer__title');
    this._listElement = this._element.querySelector('.menu-footer__items-list');
    //set variables menu section
    this._titleElement.textContent = this._title;
    this._renderItems();

    return this._element;
  }
}
