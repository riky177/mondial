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
    href: '/products/i-said-mondial',
    sub_menu: [
      {
        title: 'FEATURED COLLECTIONS',
        detail_menu: [
          {
            title: 'MONDIAL PRECIOUS: FIRE',
            href: '/products/mondial-precious-fire',
          },
          { title: 'MONDIAL PRECIOUS', href: '/products/mondial-precious' },
          {
            title: 'I SAID MONDIAL',
            href: '/products/i-said-mondial',
          },
          {
            title: 'AZURE',
            href: '/products/azure-2',
          },
          {
            title: 'TIMELESS',
            href: '/products/timeless-3',
          },
          {
            title: 'GALA COLLECTION',
            href: '/products/gala-collection',
          },
          {
            title: 'WONDER PALS',
            href: '/products/wonder-pals',
          },
          {
            title: 'MONDIAL DREAMS',
            href: '/products/mondial-dreams',
          },
          {
            title: 'FANTASY',
            href: '/products/fantasy',
          },
        ],
      },
      {
        title: 'ITEM',
        detail_menu: [
          { title: 'EARRINGS', href: '/products/earrings-2' },
          { title: 'PENDANT', href: '/products/pendant-2' },
          { title: 'BRACELET', href: '/products/bracelet-3' },
          { title: 'LADIES RING', href: '/products/ladies-ring' },
          { title: 'NECKLACE', href: '/products/necklace' },
          { title: 'PENDANT & CHAIN', href: '/products/pendant-chain-5' },
          { title: 'BANGLE', href: '/products/bangle-2' },
          { title: "MEN'S JEWELRY", href: '/products/mens-jewelry' },
          { title: 'BROOCH', href: '/products/brooch-2' },
        ],
      },
    ],
  },
  {
    title: 'ENGAGEMENT & BRIDAL',
    href: '/products/i-said-mondial',
    sub_menu: [
      {
        title: 'WEDDINGS & ENGAGEMENTS',
        detail_menu: [
          { title: 'ENGAGEMENT RINGS', href: '/products/engagement-rings' },
          { title: 'WEDDING RINGS', href: '/products/wedding-rings-2' },
        ],
      },
    ],
  },
  {
    title: 'GIFT IDEAS',
    href: '/products/i-said-mondial',
    sub_menu: [
      {
        title: 'GIFT FOR...',
        detail_menu: [
          { title: 'KIDS', href: '/products/kids' },
          { title: 'HER', href: '/products/her' },
          {
            title: 'HIM',
            href: '/products/him',
          },
        ],
      },
    ],
  },
  {
    title: 'ALL ABOUT DIAMONDS',
    href: '/products/i-said-mondial',
    sub_menu: [
      {
        title: 'DIAMOND EDUCATION',
        detail_menu: [
          {
            title: "THE 4 C'S OF DIAMONDS",
            href: '/all-about-diamonds',
          },
          { title: 'RING SIZE GUIDE', href: '/size-guide' },
        ],
      },
    ],
  },
  {
    title: 'STORIES',
    href: '/stories/all',
    sub_menu: [
      {
        detail_menu: [
          { title: 'ARTICLES', href: '/stories/articles' },
          {
            title: 'PRESS RELEASE',
            href: 'https://centralmegakencana.com/news/?category=press%20release',
          },
          {
            title: 'THE TABLE OF BLUE HOUSE',
            href: '/mondial-blue-house',
          },
        ],
      },
    ],
  },
];

export const getTranslatedTitle = (t: any, title: string) => {
  switch (title) {
    case 'HIGH JEWELRY':
      return t('highJewelry');
    case 'JEWELRY':
      return t('jewelry');
    case 'ENGAGEMENT & BRIDAL':
      return t('engagementBridal');
    case 'GIFT IDEAS':
      return t('giftIdeas');
    case 'All About Diamonds':
      return t('allAboutDiamonds');
    case 'STORIES':
      return t('stories');

    default:
      return title;
  }
};

export const getTranslatedSubTitle = (t: any, title: string | undefined) => {
  if (!title) return '';
  switch (title) {
    case 'PRECIOUS STONE & FANCY DIAMOND':
      return t('subMenu.preciousStone');
    case 'BRANDED DIAMOND & PEARL':
      return t('subMenu.brandedDiamond');
    case 'FEATURED COLLECTIONS':
      return t('subMenu.featuredCollections');
    case 'ITEM':
      return t('subMenu.item');
    case 'WEDDINGS & ENGAGEMENTS':
      return t('subMenu.weddingsEngagements');
    case 'GIFT FOR...':
      return t('subMenu.giftFor');
    case 'DIAMOND EDUCATION':
      return t('subMenu.diamondEducation');
    default:
      return title;
  }
};
export const getTranslatedDetailTitle = (t: any, title: string) => {
  switch (title) {
    case 'PRECIOUS STONE':
      return t('subMenu.preciousStoneMenu');
    case 'FANCY DESIGN':
      return t('subMenu.fancyDesign');
    case 'FANCY SHAPE DIAMOND':
      return t('subMenu.fancyShapeDiamond');
    case 'FANCY COLOR DIAMOND':
      return t('subMenu.fancyColorDiamond');
    case 'MAC ULTIMATE':
      return t('subMenu.macUltimate');
    case 'BERLIANT ROSE':
      return t('subMenu.berliantRose');
    case 'FIREMARK':
      return t('subMenu.firemark');
    case 'MONDIAL PRECIOUS: FIRE':
      return t('subMenu.mondialPreciousFire');
    case 'MONDIAL PRECIOUS':
      return t('subMenu.mondialPrecious');
    case 'I SAID MONDIAL':
      return t('subMenu.iSaidMondial');
    case 'AZURE':
      return t('subMenu.azure');
    case 'TIMELESS':
      return t('subMenu.timeless');
    case 'GALA COLLECTION':
      return t('subMenu.galaCollection');
    case 'WONDER PALS':
      return t('subMenu.wonderPals');
    case 'MONDIAL DREAMS':
      return t('subMenu.mondialDreams');
    case 'FANTASY':
      return t('subMenu.fantasy');
    case 'EARRINGS':
      return t('subMenu.earrings');
    case 'PENDANT':
      return t('subMenu.pendant');
    case 'BRACELET':
      return t('subMenu.bracelet');
    case 'LADIES RING':
      return t('subMenu.ladiesRing');
    case 'NECKLACE':
      return t('subMenu.necklace');
    case 'PENDANT & CHAIN':
      return t('subMenu.pendantChain');
    case 'BANGLE':
      return t('subMenu.bangle');
    case "MEN'S JEWELRY":
      return t('subMenu.mensJewelry');
    case 'BROOCH':
      return t('subMenu.brooch');
    case 'ENGAGEMENT RINGS':
      return t('subMenu.engagementRings');
    case 'WEDDING RINGS':
      return t('subMenu.weddingRings');
    case 'KIDS':
      return t('subMenu.kids');
    case 'HER':
      return t('subMenu.her');
    case 'HIM':
      return t('subMenu.him');
    case "THE 4 C'S OF DIAMONDS":
      return t('subMenu.the4CsOfDiamonds');
    case 'RING SIZE GUIDE':
      return t('subMenu.ringSizeGuide');
    case 'ARTICLES':
      return t('subMenu.articles');
    case 'PRESS RELEASE':
      return t('subMenu.pressRelease');
    case 'THE TABLE OF BLUE HOUSE':
      return t('subMenu.theTableOfBlueHouse');
    default:
      return title;
  }
};
