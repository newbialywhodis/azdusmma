"use client";

import { Title, Text, Stack, Anchor, Paper, Center } from '@mantine/core';
import CountdownTimer from './CountdownTimer';
import { EventDetails } from '../data/eventData';

interface HeroSectionProps {
  event: EventDetails;
}

export default function HeroSection({ event }: HeroSectionProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" withBorder>
      <Stack align="center" gap="md">
        <Title order={1} ta="center">
          {event.title}
        </Title>
        <Text c="dimmed" ta="center">
          {event.description}
        </Text>
        <Text ta="center">
          Transmisja na żywo i za darmo na kanale{' '}
          <Anchor href={event.streamUrl} target="_blank" rel="noopener noreferrer">
            {event.streamer} na {event.streamPlatform}
          </Anchor>
        </Text>

        <Center>
         <CountdownTimer targetDate={event.date} />
        </Center>
      </Stack>
    </Paper>
  );
}