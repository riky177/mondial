export type StoreItemType = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

export type StoreType = {
  city: string;
  items: StoreItemType[];
};

export const STORES: StoreType[] = [
  {
    city: 'Surabaya',
    items: [
      {
        name: 'MONDIAL Tunjungan Plaza 4',
        address:
          'Tunjungan Plaza 4, UG No. 54-55, Jl. Basuki Rahmat No.8012, Kedungdoro, Kec. Tegalsari, Surabaya, Jawa Timur 60261',
        phone: '6281119901043',
        email: 'mondial.tp4@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Galaxy Mall',
        address:
          'Galaxy Mall 3, LD No. G-335, Jl. Dharmahusada Indah XVI Blok J No.12, Mulyorejo, Kec. Mulyorejo, Kota SBY, Jawa Timur 60115',
        phone: '6281119901056',
        email: 'mondial.glx@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Tunjungan Plaza 3',
        address:
          'Tunjungan Plaza III, 1st Floor No. 42-43, Jl. Jendral Basuki Rahmat No 8 –12 Surabaya',
        phone: '6281119901050',
        email: 'mondial.tp3@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Bandung',
    items: [
      {
        name: 'MONDIAL Summarecon Mall Bandung',
        address:
          'Summarecon Mall Bandung, GF Floor no. 801, Jl. Sentra Raya Selatan Raya Barat No.838, Rancabolang, Kec. Gedebage, Kota Bandung, Jawa Barat 402',
        phone: '6281110521680',
        email: 'mondial.smbdg@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Trans Studio Mall',
        address:
          'Trans Studio Mall, LT GF-B011, Jl. Trans Studio Batununggal, Kota Bandung, Jawa Barat 40273',
        phone: '6281119901047',
        email: 'mondial.tsmbandung@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Medan',
    items: [
      {
        name: 'MONDIAL Sun Plaza',
        address:
          'Sun Plaza, Area GF Zone B Unit 42-43 & Zone C Unit 33, Jalan KH Zainul Arifin Gedung Sun Plaza No. 7 Medan',
        phone: '6281119901051',
        email: 'mondial.sun@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Makassar',
    items: [
      {
        name: 'MONDIAL Trans Studio Mal Makassar',
        address:
          'G-08 Jalan Hm DG. Patompo Jl. Metro Tj. Bunga, Maccini Sombala, Kec. Tamalate, Kota Makassar, Sulawesi Selatan 90224',
        phone: '081119810858',
        email: 'mondial.tsm@mondialjeweler.com',
      },
    ],
  },
  {
    city: 'Jabodetabek',
    items: [
      {
        name: 'MONDIAL Pondok Indah Mall 2',
        address:
          'Pondok Indah Mall 2, Unit G 20, Jl. Metro Pondok Indah, Kebayoran Lama, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 1231',
        phone: '6281119901116',
        email: 'mondial.pim@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Summarecon Mall Serpong',
        address:
          'Summarecon Mall Serpong, GF No. 223B, Jl. Boulevard Gading Serpong, Sentra Gading Serpong, Pakulonan Bar, Klp. Dua, Tangerang, Banten 15810',
        phone: '6281119901054',
        email: 'mondial.sms@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Plaza Indonesia Level 3',
        address:
          'Plaza Indonesia, Lantai 3 #122A, Jl. M.H. Thamrin Kav. 28-30, Gondangdia, Menteng, Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350',
        phone: '6281119901055',
        email: 'mondial.pi3@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Mall Kelapa Gading',
        address:
          'Mall Kelapa Gading III, Lantai Dasar No. 21, Jl. Boulevard Kelapa Gading blok M Kelapa Gading Permai 14240',
        phone: '6281119901046',
        email: 'mondial.mkg@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Central Park',
        address:
          'Central Park, GF - 215, Jl. Letjen S. Parman No.28, Tanjung Duren Selatan, Grogol Petamburan, Jakarta Barat, Jakarta 11470',
        phone: '6281119901049',
        email: 'mondial.cpjakarta@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Plaza Senayan',
        address:
          'Plaza Senayan, Level 118B & 120B, Jl. Asia Afrika No.8, Senayan',
        phone: '6281119901045',
        email: 'mondial.ps@mondialjeweler.com',
      },
      {
        name: 'MONDIAL Plaza Indonesia Level 1',
        address:
          'Plaza Indonesia, Level 1 No. 15A – 15F, Jl. MH Thamrin no 28-30, Jakarta Pusat',
        phone: '6281119901044',
        email: 'mondial.pi@mondialjeweler.com',
      },
    ],
  },
];

// Utility constants
export const ALL_STORES_KEY = 'all';

// Utility functions
export const getAllStores = (): StoreItemType[] => {
  return STORES.reduce((acc: StoreItemType[], store) => {
    acc.push(...store.items);
    return acc;
  }, []);
};

export const getStoresByCity = (city: string): StoreItemType[] => {
  if (city === ALL_STORES_KEY) {
    return getAllStores();
  }
  return STORES.filter((store) => store.city === city)[0]?.items || [];
};

export const getCities = (): string[] => {
  return STORES.map((store) => store.city);
};
