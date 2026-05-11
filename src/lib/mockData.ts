import { NewsPost, Reel, Business, Poll, Ad } from '../types';

export const MOCK_NEWS: NewsPost[] = [
  {
    id: '1',
    title: 'Yangiyo\'lda yangi IT markaz ochilishi kutilmoqda',
    content: 'Yangiyul shahri markazida yoshlar uchun zamonaviy IT-park va o\'quv markazi barpo etilishi rejalashtirilgan. Bu erda dasturlash, dizayn va robototexnika yo\'nalishlarida darslar beriladi.',
    category: 'Jamiyat',
    views: 1240,
    imageUrl: 'https://picsum.photos/seed/itcenter/800/600',
    createdAt: new Date(),
    tags: ['IT', 'Yoshlar', 'Yangiyo\'l']
  },
  {
    id: '2',
    title: 'Mahalliy bozor narxlari o\'rganildi',
    content: 'Oziq-ovqat mahsulotlari narxlari tahlil qilindi. Kartoshka va piyoz narxlarida biroz pasayish kuzatilmoqda, go\'sht mahsulotlari esa barqaror bo\'lib qolmoqda.',
    category: 'Iqtisodiyot',
    views: 890,
    imageUrl: 'https://picsum.photos/seed/market/800/600',
    createdAt: new Date(Date.now() - 86400000),
    tags: ['Bozor', 'Narx-navo']
  },
  {
    id: '3',
    title: 'Sport majmuasida ta\'mirlash ishlari yakunlandi',
    content: 'Tuman markaziy sport majmuasi to\'liq rekonstruksiya qilindi. Endi bu erda suzish havzasi va yopiq futbol maydoni ham mavjud.',
    category: 'Sport',
    views: 2100,
    imageUrl: 'https://picsum.photos/seed/sport/800/600',
    createdAt: new Date(Date.now() - 172800000),
  }
];

export const MOCK_REELS: Reel[] = [
  {
    id: 'r1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-10-large.mp4',
    title: 'Yangiyul tunlari',
    views: 5400,
    likes: 420,
    createdAt: new Date()
  },
  {
    id: 'r2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-resort-1182-large.mp4',
    title: 'Bahor tarovati',
    views: 3200,
    likes: 150,
    createdAt: new Date()
  }
];

export const MOCK_BUSINESSES: Business[] = [
  {
    id: 'b1',
    name: '"Orom" Restorani',
    category: 'Restoran',
    address: 'Amir Temur ko\'chasi, 24-uy',
    phone: '+998 90 123 45 67',
    workingHours: '09:00 - 23:00',
    description: 'Eng mazali milliy va evropa taomlari.',
    imageUrl: 'https://picsum.photos/seed/restaurant/800/600',
    rating: 4.8
  },
  {
    id: 'b2',
    name: '"Yulduz" go\'zallik saloni',
    category: 'Xizmatlar',
    address: 'Mustaqillik ko\'chasi, 12-uy',
    phone: '+998 94 987 65 43',
    workingHours: '08:00 - 20:00',
    description: 'Professional vizajist va sartaroshlar xizmati.',
    imageUrl: 'https://picsum.photos/seed/salon/800/600',
    rating: 4.5
  }
];

export const MOCK_POLL: Poll = {
  id: 'p1',
  question: 'Sizningcha, Yangiyulda qaysi sohani rivojlantirish kerak?',
  options: [
    { label: 'Sanoat', votes: 45 },
    { label: 'IT va Texnologiya', votes: 120 },
    { label: 'Turizm', votes: 30 },
    { label: 'Qishloq xo\'jaligi', votes: 65 }
  ],
  totalVotes: 260,
  createdAt: new Date()
};
