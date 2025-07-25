export type DataType = {
  mainImage: string;
  secondImage: string;
  titleKey: string;
  descriptionKeys: string[];
  items: {
    image: string;
    descriptionKey?: string;
  }[];
};

export const DATA: DataType[] = [
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-arc.jpg',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-arc-product.png',
    titleKey: 'collections.arc.title',
    descriptionKeys: [
      'collections.arc.description.0',
      'collections.arc.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/arc-1.png',
        descriptionKey: 'collections.arc.items.ladiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/arc-2.png',
        descriptionKey: 'collections.arc.items.pendantChain',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/arc-3.png',
        descriptionKey: 'collections.arc.items.twistLadiesRing',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-trevale.jpg',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-trevale-product.png',
    titleKey: 'collections.trevale.title',
    descriptionKeys: ['collections.trevale.description.0'],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/trevale-1.png',
        descriptionKey: 'collections.trevale.items.earrings',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/trevale-2.png',
        descriptionKey: 'collections.trevale.items.necklace',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/trevale-3.png',
        descriptionKey: 'collections.trevale.items.ladiesRing',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/eight-image.png',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/eighth-product-image.svg',
    titleKey: 'collections.gradiore.title',
    descriptionKeys: ['collections.gradiore.description.0'],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/gradiore_1.png',
        descriptionKey: 'collections.gradiore.items.chivalryMensRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/gradiore_2.png',
        descriptionKey: 'collections.gradiore.items.ascentRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/gradiore_3.png',
        descriptionKey: 'collections.gradiore.items.diamondMensRing',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/third-image.png',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/third-product-image.svg',
    titleKey: 'collections.lavesa.title',
    descriptionKeys: [
      'collections.lavesa.description.0',
      'collections.lavesa.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lavesa-1.png',
        descriptionKey: 'collections.lavesa.items.necklace',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lavesa-2.png',
        descriptionKey: 'collections.lavesa.items.ladiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lavesa-3.png',
        descriptionKey: 'collections.lavesa.items.earrings',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lavesa-4.png',
        descriptionKey: 'collections.lavesa.items.bangle',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/fourth-image.png',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/fourth-product-image.svg',
    titleKey: 'collections.opulence.title',
    descriptionKeys: [
      'collections.opulence.description.0',
      'collections.opulence.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/opulence-1.png',
        descriptionKey: 'collections.opulence.items.grandNecklace',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/opulence-2.png',
        descriptionKey: 'collections.opulence.items.ladiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/opulence-3.png',
        descriptionKey: 'collections.opulence.items.grandEarrings',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-alinate.webp',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-alinate-product.png',
    titleKey: 'collections.alinate.title',
    descriptionKeys: [
      'collections.alinate.description.0',
      'collections.alinate.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/alinate-1.png',
        descriptionKey: 'collections.alinate.items.ladiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/alinate-2.png',
        descriptionKey: 'collections.alinate.items.trayerLadiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/alinate-3.png',
        descriptionKey: 'collections.alinate.items.earrings',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/alinate-4.png',
        descriptionKey: 'collections.alinate.items.pendantChain',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/fifth-image.png',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/fifth-product-image.svg',
    titleKey: 'collections.fierte.title',
    descriptionKeys: [
      'collections.fierte.description.0',
      'collections.fierte.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/FIERTE-1.png',
        descriptionKey: 'collections.fierte.items.alignedPendantChain',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/FIERTE-2.png',
        descriptionKey: 'collections.fierte.items.pendantChain',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/FIERTE-3.png',
        descriptionKey: 'collections.fierte.items.earrings',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/FIERTE-4.png',
        descriptionKey: 'collections.fierte.items.brooch',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/sixth-image.png',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/sixth-product-image.svg',
    titleKey: 'collections.enchante.title',
    descriptionKeys: [
      'collections.enchante.description.0',
      'collections.enchante.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/ENCHANTE-1.png',
        descriptionKey: 'collections.enchante.items.ladiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/ENCHANTE-2.png',
        descriptionKey: 'collections.enchante.items.trayerLadiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/ENCHANTE-3.png',
        descriptionKey: 'collections.enchante.items.earrings',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/ENCHANTE-4.png',
        descriptionKey: 'collections.enchante.items.pendantChain',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/seventh-image.png',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/seventh-product-image.svg',
    titleKey: 'collections.lune.title',
    descriptionKeys: [
      'collections.lune.description.0',
      'collections.lune.description.1',
    ],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lune-1.png',
        descriptionKey: 'collections.lune.items.pendantChain',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lune-2.png',
        descriptionKey: 'collections.lune.items.aimPendantChain',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/lune-3.png',
        descriptionKey: 'collections.lune.items.chainBracelet',
      },
    ],
  },
  {
    mainImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-pointe.jpg',
    secondImage:
      'https://mondialjeweler.com/static/website/img/anniversary/mondial-pointe-product.png',
    titleKey: 'collections.pointe.title',
    descriptionKeys: ['collections.pointe.description.0'],
    items: [
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/pointe-1.png',
        descriptionKey: 'collections.pointe.items.earrings',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/pointe-2.png',
        descriptionKey: 'collections.pointe.items.pendantChain',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/pointe-3.png',
        descriptionKey: 'collections.pointe.items.ladiesRing',
      },
      {
        image:
          'https://mondialjeweler.com/static/website/img/anniversary/pointe-4.png',
        descriptionKey: 'collections.pointe.items.mensRing',
      },
    ],
  },
];
