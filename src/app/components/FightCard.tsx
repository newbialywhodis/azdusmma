"use client";

import { Card, Grid, Text, Stack, Avatar, Group, useMantineTheme, Anchor, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandInstagram } from '@tabler/icons-react';
import { Fight, Fighter } from '../data/eventData';

interface FightCardProps {
  fight: Fight;
}

function FighterDisplay({ fighter }: { fighter: Fighter }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const avatarSize = isMobile ? 120 : 140;
  const nameTextSize = isMobile ? 'md' : 'xl';
  const iconSize = isMobile ? 'md' : 'lg';

  return (
    <Stack align="center" gap="xs">
      <Avatar
        src={fighter.image}
        alt={`Zdjęcie ${fighter.name}`}
        size={avatarSize}
        radius="sm"
      >
        {fighter.name.split(' ').map(n => n[0]).join('')}
      </Avatar>
      <Group justify="center" align="center" gap={4} mt="sm" wrap="nowrap">
        <Text
          ta="center"
          fw={700}
          size={nameTextSize}
        >
          {fighter.name}
        </Text>
        {fighter.instagramUrl && (
          <Anchor href={fighter.instagramUrl} target="_blank" rel="noopener noreferrer" display="inline-block" >
            <ActionIcon variant="subtle" color="gray" size={iconSize} radius="md" aria-label={`${fighter.name} Instagram`}>
              <IconBrandInstagram stroke={1.3} />
            </ActionIcon>
          </Anchor>
        )}
      </Group>
    </Stack>
  );
}

function StatRow({ label, value1, value2, unit = '' }: { label: string; value1?: string | number; value2?: string | number; unit?: string }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const valueFontSize = isMobile ? 'xs' : 'sm';
  const labelFontSize = isMobile ? 'xxs' : 'xs';

  const displayValue1 = value1 !== undefined && value1 !== null ? `${value1}${unit}` : '-';
  const displayValue2 = value2 !== undefined && value2 !== null ? `${value2}${unit}` : '-';

  return (
    <Grid align="center" gutter={5}>
      <Grid.Col span={4} ta="right">
        <Text fw={500} fz={valueFontSize}>{displayValue1}</Text>
      </Grid.Col>
      <Grid.Col span={4} ta="center">
        <Text c="dimmed" fz={labelFontSize} fw={700} tt="uppercase">{label}</Text>
      </Grid.Col>
      <Grid.Col span={4} ta="left">
        <Text fw={500} fz={valueFontSize}>{displayValue2}</Text>
      </Grid.Col>
    </Grid>
  );
}

export default function FightCard({ fight }: FightCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {fight.category && (
        <Text ta="center"  tt="uppercase" fz="sm" fw={700} mb="lg">
          {fight.category}
        </Text>
      )}
      {fight.details && !fight.category && (
        <Text ta="center" c="dimmed" fz="sm" fw={500} mb="lg">
          {fight.details}
        </Text>
      )}

      <Grid align="center">
        <Grid.Col
          span={{ base: 6, sm: 4 }}
          order={{ base: 1, sm: 1 }}
        >
          <FighterDisplay fighter={fight.fighter1} />
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, sm: 4 }}
          order={{ base: 3, sm: 2 }}
          mt={{ base: 'lg', sm: 0 }}
          px={{ base: 0, sm: 'md' }}
        >
          <Stack gap="sm" w="100%">
            <StatRow label="WIEK" value1={fight.fighter1.age} value2={fight.fighter2.age} />
            <StatRow label="WZROST [CM]" value1={fight.fighter1.height} value2={fight.fighter2.height} unit=" cm" />
            <StatRow label="ZASIĘG [CM]" value1={fight.fighter1.reach} value2={fight.fighter2.reach} unit=" cm" />
            <StatRow label="WAGA [KG]" value1={fight.fighter1.weight} value2={fight.fighter2.weight} unit=" kg" />
            <StatRow label="STATYSTYKA" value1={fight.fighter1.record} value2={fight.fighter2.record} />
          </Stack>
        </Grid.Col>

        <Grid.Col
          span={{ base: 6, sm: 4 }}
          order={{ base: 2, sm: 3 }}
        >
          <FighterDisplay fighter={fight.fighter2} />
        </Grid.Col>
      </Grid>
    </Card>
  );
}