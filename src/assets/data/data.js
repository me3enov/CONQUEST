import uuid from 'uuid/v4';

export const dataForPage = {
  menu: {
    [uuid()]: {
      linkText: 'Каталог',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Акции',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Доставка',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Контакты',
      link: '#'
    }
  },
  iconsMenu: {
    [uuid()]: {
      imageClass: 'menu-icons__button_search',
      link: '#'
    },
    [uuid()]: {
      imageClass: 'menu-icons__button_likes',
      countClass: 'menu-icons__button_count',
      link: '#',
      number: 1
    },
    [uuid()]: {
      imageClass: 'menu-icons__button_basket',
      link: '#'
    }
  },
  popularProducts: {
    [uuid()]: {
      title: 'RADO',
      price: '65 300',
      imageClass: 'product-image_small-rado-0002',
      linkText: 'Подробнее',
      link: '#'
    },
    [uuid()]: {
      title: 'BVLGARI',
      price: '81 700',
      imageClass: 'product-image_small-bvlgari-0001',
      linkText: 'Подробнее',
      link: '#'
    },
    [uuid()]: {
      title: 'BVLGARI',
      price: '72 700',
      imageClass: 'product-image_small-bvlgari-0002',
      linkText: 'Подробнее',
      link: '#'
    }
  },
  smallSlider: {
    [uuid()]: {
      imageClass: 'small-slider__image-0001',
      title: 'Подлинное качество',
      text: 'Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы — это предмет гордости и престижа.',
      buttonText: 'Смотреть каталог',
      link: '#'
    },
    [uuid()]: {
      imageClass: 'small-slider__image-0001',
      title: 'Еще текст',
      text: 'Еще текст',
      buttonText: 'Кнопка',
      link: '#'
    }
  },
  socialIcons: {
    [uuid()]: {
      imageClass: 'social-links-menu__button_instagram',
      link: 'https://www.instagram.com'
    },
    [uuid()]: {
      imageClass: 'social-links-menu__button_fb',
      link: 'https://www.facebook.com'
    },
    [uuid()]: {
      imageClass: 'social-links-menu__button_twitter',
      link: 'https://twitter.com'
    }
  },
  footerMenu: {
    [uuid()]: {
      title: 'О компании',
      items: {
        [uuid()]: {
          linkText: 'Наши магазины',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Вакансии',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Сертификаты',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Отзывы',
          link: '#'
        }
      }
    },
    [uuid()]: {
      title: 'Покупателям',
      items: {
        [uuid()]: {
          linkText: 'Каталог товаров',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Как заказать?',
          link: '#'
        },
        [uuid()]: {
          linkText: 'FAQ',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Корпоративным клиентам',
          link: '#'
        }
      }
    },
    [uuid()]: {
      title: 'Оплата и доставка',
      items: {
        [uuid()]: {
          linkText: 'Способы оплаты',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Время доставки',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Гарантии и ремонт',
          link: '#'
        },
        [uuid()]: {
          linkText: 'Возврат и компенсация',
          link: '#'
        }
      }
    }
  }
};
