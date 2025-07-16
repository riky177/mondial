export type SubMenuType = {
  title?: string;
  detail_menu: {
    title: string;
    href: string;
  }[];
};

export type MenuType = {
  title: string;
  href: string;
  sub_menu: SubMenuType[];
};

export const MENU: MenuType[] = [
  {
    title: 'HIGH JEWELRY',
    href: '/high-jewelry',
    sub_menu: [
      {
        title: 'Precious Stone & Fancy Diamond',
        detail_menu: [
          { title: 'PRECIOUS STONE', href: '/products/precious-stone-2' },
          { title: 'FANCY DESIGN', href: '/products/fancy-design' },
          {
            title: 'FANCY SHAPE DIAMOND',
            href: '/products/fancy-shape-diamond',
          },
          {
            title: 'FANCY COLOR DIAMOND',
            href: '/products/fancy-color-diamond',
          },
        ],
      },
      {
        title: 'Branded Diamond & Pearl',
        detail_menu: [
          { title: 'MAC ULTIMATE', href: '/products/mac-ultimate' },
          { title: 'BERLIANT ROSE', href: '/products/berliant-rose' },
          { title: 'FIREMARK', href: '/products/firemark' },
        ],
      },
    ],
  },
  {
    title: 'JEWELRY',
    href: '/high-jewelry',
    sub_menu: [
      {
        title: 'Precious Stone & Fancy Diamonds',
        detail_menu: [
          { title: 'PRECIOUS STONE', href: '/products/precious-stone-2' },
          { title: 'FANCY DESIGN', href: '/products/fancy-design' },
          {
            title: 'FANCY SHAPE DIAMOND',
            href: '/products/fancy-shape-diamond',
          },
          {
            title: 'FANCY COLOR DIAMOND',
            href: '/products/fancy-color-diamond',
          },
        ],
      },
      {
        title: 'Branded Diamond & Pearldf',
        detail_menu: [
          { title: 'MAC ULTIMATE', href: '/products/mac-ultimate' },
          { title: 'BERLIANT ROSE', href: '/products/berliant-rose' },
          { title: 'FIREMARK', href: '/products/firemark' },
        ],
      },
    ],
  },
  {
    title: 'ENGAGEMENT & BRIDAL',
    href: '/high-jewelry',
    sub_menu: [
      {
        title: 'Precious Stone & Fancy Diamonds',
        detail_menu: [
          { title: 'PRECIOUS STONE', href: '/products/precious-stone-2' },
          { title: 'FANCY DESIGN', href: '/products/fancy-design' },
          {
            title: 'FANCY SHAPE DIAMOND',
            href: '/products/fancy-shape-diamond',
          },
          {
            title: 'FANCY COLOR DIAMOND',
            href: '/products/fancy-color-diamond',
          },
        ],
      },
      {
        title: 'Branded Diamond & Pearldf',
        detail_menu: [
          { title: 'MAC ULTIMATE', href: '/products/mac-ultimate' },
          { title: 'BERLIANT ROSE', href: '/products/berliant-rose' },
          { title: 'FIREMARK', href: '/products/firemark' },
        ],
      },
    ],
  },
  {
    title: 'GIFT IDEAS',
    href: '/high-jewelry',
    sub_menu: [
      {
        title: 'Precious Stone & Fancy Diamonds',
        detail_menu: [
          { title: 'PRECIOUS STONE', href: '/products/precious-stone-2' },
          { title: 'FANCY DESIGN', href: '/products/fancy-design' },
          {
            title: 'FANCY SHAPE DIAMOND',
            href: '/products/fancy-shape-diamond',
          },
          {
            title: 'FANCY COLOR DIAMOND',
            href: '/products/fancy-color-diamond',
          },
        ],
      },
      {
        title: 'Branded Diamond & Pearldf',
        detail_menu: [
          { title: 'MAC ULTIMATE', href: '/products/mac-ultimate' },
          { title: 'BERLIANT ROSE', href: '/products/berliant-rose' },
          { title: 'FIREMARK', href: '/products/firemark' },
        ],
      },
    ],
  },
  {
    title: 'All About Diamonds',
    href: '/high-jewelry',
    sub_menu: [
      {
        title: 'Precious Stone & Fancy Diamonds',
        detail_menu: [
          { title: 'PRECIOUS STONE', href: '/products/precious-stone-2' },
          { title: 'FANCY DESIGN', href: '/products/fancy-design' },
          {
            title: 'FANCY SHAPE DIAMOND',
            href: '/products/fancy-shape-diamond',
          },
          {
            title: 'FANCY COLOR DIAMOND',
            href: '/products/fancy-color-diamond',
          },
        ],
      },
      {
        title: 'Branded Diamond & Pearldf',
        detail_menu: [
          { title: 'MAC ULTIMATE', href: '/products/mac-ultimate' },
          { title: 'BERLIANT ROSE', href: '/products/berliant-rose' },
          { title: 'FIREMARK', href: '/products/firemark' },
        ],
      },
    ],
  },
  {
    title: 'STORIES',
    href: '/high-jewelry',
    sub_menu: [
      {
        title: 'Precious Stone & Fancy Diamonds',
        detail_menu: [
          { title: 'PRECIOUS STONE', href: '/products/precious-stone-2' },
          { title: 'FANCY DESIGN', href: '/products/fancy-design' },
          {
            title: 'FANCY SHAPE DIAMOND',
            href: '/products/fancy-shape-diamond',
          },
          {
            title: 'FANCY COLOR DIAMOND',
            href: '/products/fancy-color-diamond',
          },
        ],
      },
      {
        title: 'Branded Diamond & Pearldf',
        detail_menu: [
          { title: 'MAC ULTIMATE', href: '/products/mac-ultimate' },
          { title: 'BERLIANT ROSE', href: '/products/berliant-rose' },
          { title: 'FIREMARK', href: '/products/firemark' },
        ],
      },
    ],
  },
];
