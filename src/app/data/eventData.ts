export interface Fighter {
  name: string;
  realName?: string;
  image?: string;
  age?: number;
  height?: number;
  reach?: number;
  weight?: number;
  record?: string;
  instagramUrl?: string;
}

export type FightStatus = 'Upcoming' | 'In Progress' | 'Finished' | 'Cancelled';
export type FightResult = 'Fighter1 Wins' | 'Fighter2 Wins' | 'Draw' | null;

export interface Fight {
  id: number;
  fighter1: Fighter;
  fighter2: Fighter;
  details?: string;
  category?: string;
  status: FightStatus;
  result?: FightResult;
}

export interface EventDetails {
  title: string;
  date: string;
  streamer: string;
  streamPlatform: string;
  streamUrl: string;
  description: string;
}

export const eventDetails: EventDetails = {
  title: 'SigMMA: Gala streamera Azdusa & Pięściarza Maćka Smokowskiego',
  date: '2025-04-27T21:00:00',
  streamer: 'Azdus',
  streamPlatform: 'Kick',
  streamUrl: 'https://kick.com/azdus',
  description: 'Pierwsza edycja gali SigMMA organizowanej przez streamera Azdusa oraz zawodowego pięściarza Macieja Smokowskiego. Niezapomniane starcia influencerów i przyjaciół, oglądaj na żywo za darmo na Kick!',
};

export interface Partner {
  name: string;
  logoUrl: string;
  linkUrl?: string;
}

export interface Organizer {
  name: string;
  alias?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const fights: Fight[] = [
  {
    id: 1,
    fighter1: {
        name: 'Khalifof',
        realName: 'Kamil G.',
        image: '/images/fighter1.png',
        age: 30, height: 188, reach: 189, weight: 93, record: '8-1-0', instagramUrl: 'https://instagram.com/khalifof'
    },
    fighter2: {
        name: 'Afrykańska Maczeta',
        realName: 'Mateusz Z.',
        image: '/images/fighter2.png',
        age: 31, height: 200, reach: 206, weight: 95, record: '4-3-0'
    },
    details: 'Walka Wieczoru',
    category: 'MAIN EVENT / OPEN MMA',
    status: 'Finished',
    result: 'Fighter1 Wins',
  },
  {
    id: 2,
    fighter1: {
        name: 'Azdus',
        realName: 'Jakub Matowicki',
        image: '/images/fighter3.jpg',
        age: 28, height: 172, reach: 184, weight: 71.6, record: '2-2-0', instagramUrl: 'https://instagram.com/azdus'
    },
    fighter2: {
        name: 'Frani0',
        realName: 'Franciszek Rusiecki',
        image: '/images/fighter4.jpg',
        age: 25, height: 185, reach: 183, weight: 112, record: '1-0-0', instagramUrl: 'https://instagram.com/frani0'
    },
    category: 'CO-MAIN EVENT / CW 81 KG',
    status: 'In Progress',
  },
  {
    id: 3,
    fighter1: {
        name: 'Hejka Tu Lenka',
        image: '/images/fighter5.jpg',
        age: 15, height: 162, reach: 178, weight: 70, record: '3-0-0'
    },
    fighter2: {
        name: 'Healthy14',
        image: '/images/fighter6.jpg',
        age: 15, height: 151, reach: 182, weight: 72, record: '2-1-0', instagramUrl: 'https://instagram.com/healthy14'
    },
    category: 'MMA',
    status: 'Finished',
    result: 'Draw',
  },
    {
    id: 4,
    fighter1: { name: 'Zerox', image: '/images/placeholder.png' },
    fighter2: { name: 'Ambasador Bidula', image: '/images/placeholder.png' },
    category: 'KICKBOXING',
    status: 'Cancelled',
  },
   {
    id: 5,
    fighter1: { name: 'Zawodnik C', image: '/images/placeholder.png' },
    fighter2: { name: 'Zawodnik D', image: '/images/placeholder.png' },
    category: 'BOXING',
    status: 'Upcoming',
  },
];

export const partners: Partner[] = [
  { name: 'FORTUNA', logoUrl: '/images/partners/fortuna-logo.jpg', linkUrl: 'https://www.efortuna.pl/' },
  { name: 'DZIK', logoUrl: '/images/partners/wk-logo.png', linkUrl: 'https://wkdzik.pl/' },
];

export const organizers: Organizer[] = [
  {
    name: 'Jakub Matowicki',
    alias: 'Azdus',
    title: 'Streamer / Organizator',
    description: 'Streamer działający pod pseudonimem "Azdus", główny inicjator i organizator gali SigMMA, gromadzący wokół siebie społeczność zainteresowaną sportami walki.',
    imageUrl: '/images/azdus.jpg'
  },
  {
    name: 'Maciej Smokowski',
    alias: 'Trener',
    title: 'Zawodowy pięściarz / Organizator',
    description: 'Doświadczony pięściarz i Trener Klubu Emes Boxing. Współorganizator gali SigMMA, odpowiedzialny za aspekty sportowe i profesjonalne przygotowanie zawodników.',
    imageUrl: '/images/smokowski.jpg'
  },
];