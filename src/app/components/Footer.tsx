import { Container, Text, Box, Group, Divider } from '@mantine/core';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" py="lg">
       <Divider my="md" />
      <Container size="lg">
        <Group justify="center" gap="xs">
          <Text size="sm" c="dimmed">
            © {currentYear} SigMMA. Wszelkie prawa zastrzeżone.
          </Text>
          <Text size="sm" c="dimmed">
            •
          </Text>
          <Text size="sm" c="dimmed">
            Created by Bialymodelu
          </Text>
        </Group>
      </Container>
    </Box>
  );
}