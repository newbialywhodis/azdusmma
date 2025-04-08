"use client";

import { Title, Text, Stack, Anchor, Container, Grid, Box, Center } from '@mantine/core';
import CountdownTimer from './CountdownTimer';
import { EventDetails } from '../data/eventData';
import classes from './heroSection.module.css';

interface HeroSectionProps {
  event: EventDetails;
}

export default function HeroSection({ event }: HeroSectionProps) {
  return (
    <Box>
      <Container size="xl" py={{ base: 60, sm: 80, md: 120 }}>
        <Grid gutter={{ base: 40, md: 60 }} align="center">

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Title className={classes.title} order={1}>
                {event.title}
              </Title>

              <Text size="xl" c="dimmed">
                {event.description}
              </Text>

              <Text size="lg" mt="md">
                Transmisja na żywo: {' '}
                <Anchor
                    href={event.streamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    fw={600}
                    underline="hover"
                    c="blue.4"
                  >
                  {event.streamer} na {event.streamPlatform}
                </Anchor>
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Center>
               <Box className={classes.largeCountdown}>
                 <CountdownTimer targetDate={event.date} />
               </Box>
            </Center>
          </Grid.Col>

        </Grid>
      </Container>
    </Box>
  );
}