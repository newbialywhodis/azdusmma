import { Title, SimpleGrid, Image, Box, Anchor, Paper } from '@mantine/core';
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
      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 4, lg: 5 }}
        spacing="xl"
        verticalSpacing="xl"
      >
        {partners.map((partner) => {
          const partnerLogo = (
            <Image
              src={partner.logoUrl}
              alt={`Logo ${partner.name}`}
              h={60}
              w="auto"
              fit="contain"
              fallbackSrc="/images/placeholder-logo.png"
            />
          );

          return partner.linkUrl ? (
            <Anchor
              href={partner.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={partner.name}
              display="block"
              style={{ filter: 'grayscale(1)', opacity: 0.7, transition: 'filter 0.2s, opacity 0.2s' }}
              styles={{
                root: { '&:hover': { filter: 'grayscale(0)', opacity: 1 } },
              }}
            >
              {partnerLogo}
            </Anchor>
          ) : (
            <Box key={partner.name} style={{ filter: 'grayscale(1)', opacity: 0.7 }}>{partnerLogo}</Box>
          );
        })}
      </SimpleGrid>
    </Paper>
  );
}