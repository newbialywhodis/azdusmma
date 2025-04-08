import { Stack, Divider } from '@mantine/core';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import FightList from './components/FightList';
import { Partners } from './components/Partners';
import { eventDetails, fights } from './data/eventData';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${eventDetails.title} - Karta Walk i Informacje`,
    description: eventDetails.description,
    openGraph: {
      title: eventDetails.title,
      description: eventDetails.description,
      url: 'https://twoja-domena.pl',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: eventDetails.title,
      description: eventDetails.description,
    },
  };
}

export default function GalaPage() {
  return (
    <Stack gap="xl">
      <HeroSection event={eventDetails} />
      <Divider my="md" />
      <FightList fights={fights} />
      <Divider my="md" />
      <Partners />
    </Stack>
  );
}