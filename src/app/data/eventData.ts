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
  streamUrl?: string;
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
      name: 'Azdus',
      instagramUrl: 'https://www.instagram.com/azdus_/',
      streamUrl: 'https://kick.com/azdus',
      age: 28, height: 173, reach: 184, weight: 71.6, record: '2-2-0',
    },
    fighter2: {
      name: 'Syzmek',
      instagramUrl: 'https://www.instagram.com/szymonpiersiak/',
      streamUrl: 'https://kick.com/syzmek'
    },
    status: 'Upcoming',
  },
  {
    id: 2,
    fighter1: {
      name: 'Pajalock',
      instagramUrl: 'https://www.instagram.com/pajalock/',
      streamUrl: 'https://kick.com/pajalock'
    },
    fighter2: {
      name: 'Aktor',
      instagramUrl: 'https://www.instagram.com/aktor118/',
      streamUrl: 'https://kick.com/aktor'
    },
    status: 'Upcoming',
  },
  {
    id: 3,
    fighter1: {
      name: 'Kyuun',
      instagramUrl: 'https://www.instagram.com/kyuun02/',
      image: '/images/placeholder.png',
      streamUrl: 'https://kick.com/kyuun02'
    },
    fighter2: {
      name: 'Kacpi',
      instagramUrl: 'https://www.instagram.com/notkacpi/',
    },
    status: 'Upcoming',
  },
  {
    id: 4,
    fighter1: {
      name: 'Kosa',
      instagramUrl: 'https://www.instagram.com/koska_emes/',
    },
    fighter2: {
      name: 'Tahlerovsky',
      instagramUrl: 'https://www.instagram.com/tahlerovsky/',
    },
    status: 'Upcoming',
  },
  {
    id: 5,
    fighter1: {
      name: 'Nzq',
      instagramUrl: 'https://www.instagram.com/enzecik/',
      streamUrl: 'https://www.twitch.tv/xnzq'
    },
    fighter2: {
      name: 'Trazer',
      instagramUrl: 'https://www.instagram.com/trazer_aha/',
    },
    status: 'Upcoming',
  },
  {
    id: 6,
    fighter1: {
      name: 'Drusterek',
      instagramUrl: 'https://www.instagram.com/drusterek/',
    },
    fighter2: {
      name: 'Damian',
      instagramUrl: 'https://www.instagram.com/damian_mikolajczyk_/',
    },
    status: 'Upcoming',
  },
  {
    id: 7,
    fighter1: {
      name: 'Kijek',
    },
    fighter2: {
      name: 'MatiBlumert',
    },
    status: 'Upcoming',
  },
  {
    id: 8,
    fighter1: {
      name: 'Zombie',
    },
    fighter2: {
      name: 'Elricko',
    },
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