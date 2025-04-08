import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from './components/theme';
import Shell from './components/Shell';

export const metadata = {
  title: 'Gala Bokserska Azdusa',
  description: 'Oficjalna strona gali bokserskiej Azdusa transmitowanej na Kick.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}