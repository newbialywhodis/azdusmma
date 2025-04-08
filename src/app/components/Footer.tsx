import { Container, Text, Box, Group } from '@mantine/core';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" mt="xl" py="lg">
      <Container size="lg">
        <Group justify="center">
          <Text size="sm" c="dimmed">
            © {currentYear} AzdusMMA. Wszelkie prawa zastrzeżone.
          </Text>
        </Group>
      </Container>
    </Box>
  );
}