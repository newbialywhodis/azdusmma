"use client";

import { Container, Box } from '@mantine/core';
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" style={{ flexGrow: 1 }}>
        <Container size="lg" py="md">
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}