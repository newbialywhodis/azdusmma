"use client";

import { Container, Group, Button, Box, Image } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import { eventDetails } from '../data/eventData';

export function Header() {
  return (
    <Box component="header">
      <Container fluid p={'md'}>
        <Group justify="space-between">
          <Image
            src="/logo.svg"
            alt="SigMMA Logo"
            h={50}
          />
          <Button
            component="a"
            href={eventDetails.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconPlayerPlay size={20} />}
            variant="outline"
            color="red"
            size='md'
          >
            Obejrzyj galę
          </Button>
        </Group>
      </Container>
    </Box>
  );
}