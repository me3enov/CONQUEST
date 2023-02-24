export class MenuFooterItem {
    //constructor for the "MenuFooterItem" class
    constructor(item) {
        //data for the init menu item
        this.item = item;
        this._linkText = this.item.linkText;
        this._link = this.item.link;
    }

    //get template menu item from page
    _getTemplate() {
        const menuElement = document
            .querySelector('#menu-footer-item-template')
            .content
            .querySelector('.menu-footer__item')
            .cloneNode(true);
        return menuElement;
    }

    //upper first letter
    _toUpperCase(text) {
        return text.slice(0, 1).toUpperCase() + text.slice(1);
    }

    //generate footer menu item
    generateMenuFooterItem() {
        //get template menu item
        this._element = this._getTemplate();
        this._linkElement = this._element.querySelector('.menu-footer__link');
        //set variables menu item
        this._linkElement.textContent = this._linkText;
        this._linkElement.setAttribute('href', this._link);

        return this._element;
    }
}
