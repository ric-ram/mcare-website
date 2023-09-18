// app/providers.tsx
'use client';

import theme from '@/lib/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, createTheme } from '@mui/material';

const muiTheme = createTheme();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ThemeProvider theme={muiTheme}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
