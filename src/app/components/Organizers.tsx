import { Card, SimpleGrid, Text, Title, Stack, Avatar, Box } from '@mantine/core';
import { organizers } from '../data/eventData';

export function Organizers() {
  if (!organizers || organizers.length === 0) {
    return null;
  }

  return (
    <Box mt="xl">
      <Title order={2} ta="center" mb="xl">
        Organizatorzy
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {organizers.map((organizer) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={organizer.name}>
            <Stack align="center" gap="md">
              {organizer.imageUrl && (
                <Avatar src={organizer.imageUrl} size={100} radius="50%" alt={`Zdjęcie ${organizer.name}`} />
              )}
              <Stack gap={0} align="center">
                 <Title order={4} ta="center">
                    {organizer.name} {organizer.alias && `(${organizer.alias})`}
                </Title>
                <Text size="sm" c="dimmed" ta="center">
                    {organizer.title}
                </Text>
              </Stack>
              <Text size="sm" ta="center">
                {organizer.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}