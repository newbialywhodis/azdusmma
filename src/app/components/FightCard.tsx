"use client";

import { Card, Grid, Text, Stack, Avatar, Group, useMantineTheme, Anchor, ActionIcon, Indicator, Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandInstagram, IconBrandKick, IconBrandTwitch } from '@tabler/icons-react';
import { Fight, Fighter, FightStatus } from '../data/eventData';

interface FighterDisplayProps {
  fighter: Fighter;
  fightStatus: FightStatus;
  isWinner: boolean;
}

function FighterDisplay({ fighter, fightStatus, isWinner }: FighterDisplayProps) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const avatarSize = isMobile ? 120 : 140;
  const nameTextSize = isMobile ? 'sm' : 'lg';
  const realNameTextSize = isMobile ? 'sm' : 'md';
  const iconSize = isMobile ? 'sm' : 'md';
  const showWinnerIndicator = fightStatus === 'Finished' && isWinner;

  const avatarContent = (
    <Avatar
      src={fighter.image}
      alt={`Zdjęcie ${fighter.name}`}
      size={avatarSize}
      radius="sm"
    >
      {fighter.name.split(' ').map(n => n[0]).join('')}
    </Avatar>
  );

  return (
    <Stack align="center" gap="xs">
      <Indicator
        inline
        size={20}
        offset={7}
        position="bottom-center"
        color="green"
        disabled={!showWinnerIndicator}
        label={showWinnerIndicator ? "ZWYCIĘZCA" : undefined}
        styles={{ indicator: { fontWeight: 700, padding: '2px 6px', fontSize: '0.65rem' } }}
        withBorder={showWinnerIndicator}
      >
        {avatarContent}
      </Indicator>
      <Stack align="center" gap={2} mt="xs">
        <Group justify="center" align="center" gap={4} wrap="nowrap">
          <Text ta="center" fw={700} size={nameTextSize} lh={1.2}>
            {fighter.name}
          </Text>
          {fighter.instagramUrl && (
            <Anchor href={fighter.instagramUrl} target="_blank" rel="noopener noreferrer" display="inline-block" >
              <ActionIcon variant="subtle" color="gray" size={iconSize} radius="md" aria-label={`${fighter.name} Instagram`}>
                <IconBrandInstagram stroke={1.3} />
              </ActionIcon>
            </Anchor>
          )}
          {fighter.streamUrl && (() => {
            let StreamIcon = null;
            let platformName = '';
            let iconColor = 'gray';

            if (fighter.streamUrl.includes('kick.com')) {
              StreamIcon = IconBrandKick;
              platformName = 'Kick';
              iconColor = 'green';
            } else if (fighter.streamUrl.includes('twitch.tv')) {
              StreamIcon = IconBrandTwitch;
              platformName = 'Twitch';
              iconColor = 'violet';
            }

            if (!StreamIcon) return null;

            return (
              <Anchor href={fighter.streamUrl} target="_blank" rel="noopener noreferrer" display="inline-block">
                <ActionIcon variant="subtle" color={iconColor} size={iconSize} radius="md" aria-label={`${fighter.name} ${platformName}`}>
                  <StreamIcon stroke={1.3} />
                </ActionIcon>
              </Anchor>
            );
          })()}
        </Group>
        {fighter.realName && (
          <Text ta="center" fz={realNameTextSize} fw={400}>
            {fighter.realName}
          </Text>
        )}
      </Stack>
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
        <Grid.Col span={4} ta="right"><Text fw={500} fz={valueFontSize}>{displayValue1}</Text></Grid.Col>
        <Grid.Col span={4} ta="center"><Text c="dimmed" fz={labelFontSize} fw={700} tt="uppercase">{label}</Text></Grid.Col>
        <Grid.Col span={4} ta="left"><Text fw={500} fz={valueFontSize}>{displayValue2}</Text></Grid.Col>
        </Grid>
    );
}

export default function FightCard({ fight }: { fight: Fight }) {

  const isFighter1Winner = fight.status === 'Finished' && fight.result === 'Fighter1 Wins';
  const isFighter2Winner = fight.status === 'Finished' && fight.result === 'Fighter2 Wins';
  const isDraw = fight.status === 'Finished' && fight.result === 'Draw';
  const isCancelled = fight.status === 'Cancelled';
  const isInProgress = fight.status === 'In Progress';

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="xs" align="center" mb="lg">
          {isDraw && <Badge color="gray" size="lg" radius="sm">REMIS</Badge>}
          {isCancelled && <Badge color="red" size="lg" radius="sm">ODWOŁANA</Badge>}
          {isInProgress && <Badge color="blue" size="lg" radius="sm">W TRAKCIE</Badge>}

          {fight.category && (
            <Text ta="center" tt="uppercase" fz="sm" fw={700} mt={isDraw || isCancelled || isInProgress ? 'xs' : 0}>
              {fight.category}
            </Text>
          )}
          {fight.details && !fight.category && (
            <Text ta="center" c="dimmed" fz="sm" fw={500} mt={isDraw || isCancelled || isInProgress ? 'xs' : 0}>
              {fight.details}
            </Text>
          )}
      </Stack>

      <Grid align="flex-start">
        <Grid.Col
          span={{ base: 6, sm: 4 }}
          order={{ base: 1, sm: 1 }}
        >
          <FighterDisplay
            fighter={fight.fighter1}
            fightStatus={fight.status}
            isWinner={isFighter1Winner}
          />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 4 }}
          order={{ base: 3, sm: 2 }}
          mt={{ base: 'lg', sm: 'xl' }}
          px={{ base: 0, sm: 'md' }}
        >
          {!isCancelled && (
            <Stack gap="sm" w="100%">
              <StatRow label="WIEK" value1={fight.fighter1.age} value2={fight.fighter2.age} />
              <StatRow label="WZROST" value1={fight.fighter1.height} value2={fight.fighter2.height} unit=" cm" />
              <StatRow label="ZASIĘG" value1={fight.fighter1.reach} value2={fight.fighter2.reach} unit=" cm" />
              <StatRow label="WAGA" value1={fight.fighter1.weight} value2={fight.fighter2.weight} unit=" kg" />
              <StatRow label="REKORD" value1={fight.fighter1.record} value2={fight.fighter2.record} />
            </Stack>
          )}
        </Grid.Col>
        <Grid.Col
          span={{ base: 6, sm: 4 }}
          order={{ base: 2, sm: 3 }}
        >
          <FighterDisplay
            fighter={fight.fighter2}
            fightStatus={fight.status}
            isWinner={isFighter2Winner}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}