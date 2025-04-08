import { Title, Flex, Image, Box, Anchor, Paper } from '@mantine/core';
import { partners } from '../data/eventData';

export function Partners() {
  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <Paper withBorder shadow="md" p="xl" mt="xl" radius="md">
      <Title order={2} ta="center" mb="xl">
        Partnerzy Wydarzenia
      </Title>
      <Flex
        gap="xl"
        justify="center"
        align="center"
        wrap="wrap"
      >
        {partners.map((partner) => {
          const partnerLogo = (
            <Image
              src={partner.logoUrl}
              alt={`Logo ${partner.name}`}
              h={60}
              mah={60}
              w="auto"
              maw="150px"
              fit="contain"
              fallbackSrc="/images/placeholder-logo.png"
            />
          );

          const containerStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '120px',
            padding: 'var(--mantine-spacing-sm)',
            filter: 'grayscale(1)',
            opacity: 0.7,
            transition: 'filter 0.2s, opacity 0.2s',
          };

          const hoverStyles = {
             '&:hover': { filter: 'grayscale(0)', opacity: 1 }
          }

          return partner.linkUrl ? (
            <Anchor
              href={partner.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={partner.name}
              style={containerStyles}
              styles={{ root: hoverStyles }}
            >
              {partnerLogo}
            </Anchor>
          ) : (
            <Box key={partner.name} style={containerStyles}>
              {partnerLogo}
            </Box>
          );
        })}
      </Flex>
    </Paper>
  );
}