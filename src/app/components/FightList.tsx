import { Stack, Title } from '@mantine/core';
import FightCard from './FightCard';
import { Fight } from '../data/eventData'; 

interface FightListProps {
  fights: Fight[];
}

export default function FightList({ fights }: FightListProps) {
  return (
    <Stack>
      <Title order={1} ta="center" mb="lg">
        KARTA WALK
      </Title>
      <Stack gap="lg">
        {fights.map((fight) => (
          <FightCard key={fight.id} fight={fight} />
        ))}
      </Stack>
    </Stack>
  );
}