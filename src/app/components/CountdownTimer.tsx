"use client";

import React, { useState, useEffect } from 'react';
import { Text, Group, Box, Stack, Title } from '@mantine/core';
import dayjs from 'dayjs';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = dayjs(targetDate).diff(dayjs());
    let timeLeft: TimeLeft | null = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
     return <Text>Ładowanie odliczania...</Text>;
  }

  if (!timeLeft) {
    return (
        <Title order={2} c="teal">Gala trwa lub już się odbyła!</Title>
    );
  }

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <Stack align="center" gap="xs" mt="lg">
       <Title order={3} c="red">Start za:</Title>
        <Group gap="xs" justify="center">
            <Box ta="center">
                <Text fz={32} fw={700}>{formatTime(timeLeft.days)}</Text>
                <Text fz="xs" c="dimmed">DNI</Text>
            </Box>
             <Text fz={32} fw={700}>:</Text>
            <Box ta="center">
                <Text fz={32} fw={700}>{formatTime(timeLeft.hours)}</Text>
                <Text fz="xs" c="dimmed">GODZ</Text>
            </Box>
             <Text fz={32} fw={700}>:</Text>
            <Box ta="center">
                <Text fz={32} fw={700}>{formatTime(timeLeft.minutes)}</Text>
                <Text fz="xs" c="dimmed">MIN</Text>
            </Box>
             <Text fz={32} fw={700}>:</Text>
            <Box ta="center">
                <Text fz={32} fw={700}>{formatTime(timeLeft.seconds)}</Text>
                <Text fz="xs" c="dimmed">SEK</Text>
            </Box>
        </Group>
    </Stack>
  );
}