type STORE_LOCATION_TYPE = {
  city: string;
  store: {
    name: string;
    email?: string;
  }[];
};

export const STORE_LOCATIONS: STORE_LOCATION_TYPE[] = [
  {
    city: 'Surabaya',
    store: [
      {
        name: 'MONDIAL Tunjungan Plaza 4',
        email: 'mondial.tp4@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Tunjungan Plaza 3',
        email: 'mondial.tp3@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Galaxy Mall',
        email: 'mondial.glx@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Jabodetabek',
    store: [
      {
        name: 'MONDIAL Plaza Indonesia Level 1',
        email: 'mondial.pi@mondialjeweler.com',
      },
      { name: 'MONDIAL Plaza Senayan', email: 'mondial.ps@mondialjeweler.com' },
      {
        name: 'MONDIAL Mall Kelapa Gading',
        email: 'mondial.mkg@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Pondok Indah Mall 2',
        email: 'mondial.pim@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Summarecon Mall Serpong',
        email: 'mondial.sms@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Plaza Indonesia Level 3',
        email: 'mondial.pi3@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Central Park',
        email: 'mondial.cpjakarta@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Bandung',
    store: [
      {
        name: 'MONDIAL Trans Studio Mall',
        email: 'mondial.tsmbandung@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Summarecon Mall Bandung',
        email: 'mondial.smbdg@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Medan',
    store: [
      { name: 'MONDIAL Sun Plaza', email: 'mondial.sun@mondialjeweler.com' },
    ],
  },
  {
    city: 'Makassar',
    store: [{ name: 'MONDIAL Trans Studio Mal Makassar' }],
  },
];
