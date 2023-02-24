import './main.global.sass';
import { dataForPage } from '../assets/data/data';
import { MainMenuItem } from '../components/MainMenuItem';
import { IconsMenuItem } from '../components/IconsMenuItem';
import { Card } from '../components/Card';
import { SocialIconsItem } from '../components/SocialIconsItem';
import { MenuFooterItem } from '../components/MenuFooterItem';
import { MenuFooterSection } from '../components/MenuFooterSection';
import { Section } from '../components/Section';

const menu = Object.values(dataForPage.menu);
const iconsMenu = Object.values(dataForPage.iconsMenu);
const products = Object.values(dataForPage.popularProducts);
const socialIcons = Object.values(dataForPage.socialIcons);
const footerMenu = Object.values(dataForPage.footerMenu);

// create new main menu item
const createMainMenuItem = (itemData) => {
  const menuItem = new MainMenuItem(itemData);
  return menuItem.generateMainMenuItem();
};

// create new icons menu item
const createIconsMenuItem = (itemData) => {
  const menuItem = new IconsMenuItem(itemData);
  return menuItem.generateIconsMenuItem();
};

// create new card
const createCard = (cardData) => {
  const card = new Card(cardData);
  return card.generateCard();
};

// create new social icon
const createSocialIconsItem = (itemData) => {
  const menuItem = new SocialIconsItem(itemData);
  return menuItem.generateSocialIconsItem();
};

// create new footer menu item
const createMenuFooterItem = (itemData) => {
  const menuItem = new MenuFooterItem(itemData);
  return menuItem.generateMenuFooterItem();
};

// create new footer menu section
const createMenuFooterSection = (sectionData, itemsData) => {
  const menuSection = new MenuFooterSection(sectionData, itemsData);
  return menuSection.generateMenuFooterSection();
};

// all main menu items init
const mainMenuItems = new Section(
  {
    renderer: (item) => {
      // create main menu item
      const menuItem = createMainMenuItem(item);
      // add main menu item to the page
      mainMenuItems.addItem(menuItem, 'append');
    }
  },
  '.menu__list'
);

// all icons menu items init
const iconsMenuItems = new Section(
  {
    renderer: (item) => {
      // create icon menu item
      const menuItem = createIconsMenuItem(item);
      // add icon menu item to the page
      iconsMenuItems.addItem(menuItem, 'append');
    }
  },
  '.menu-icons__list'
);

// all cards init
const cards = new Section(
  {
    renderer: (item) => {
      // create card
      const card = createCard(item);
      // add card to the page
      cards.addItem(card, 'append');
    }
  },
  '.popular__list'
);

// all social icons init
const socialIconsItems = new Section(
  {
    renderer: (item) => {
      // create social icon
      const menuItem = createSocialIconsItem(item);
      // add social icon to the page
      socialIconsItems.addItem(menuItem, 'append');
    }
  },
  '.social-links-menu__list'
);

// all footer menu sections init
const footerMenuSection = new Section(
  {
    renderer: (item) => {
      // create footer menu section
      const menuSection = createMenuFooterSection(item, createMenuFooterItem);
      // add footer menu section to the page
      footerMenuSection.addItem(menuSection, 'append');
    }
  },
  '.menu-footer__sections-list'
);

// render all
mainMenuItems.renderItems(menu);
iconsMenuItems.renderItems(iconsMenu);
cards.renderItems(products);
socialIconsItems.renderItems(socialIcons);
footerMenuSection.renderItems(footerMenu);
// FUNCTION END
