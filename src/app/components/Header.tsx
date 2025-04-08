"use client";

import { Container, Group, Button, Text, Box } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import { eventDetails } from '../data/eventData';

export function Header() {
  return (
    <Box component="header">
      <Container fluid p={'md'}>
        <Group justify="space-between">
          <Text size="xl" fw={700} >
            AZDUSMMA
          </Text>
          <Button
            component="a"
            href={eventDetails.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconPlayerPlay size={18} />}
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