'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    console.log('Sotered: ' + storedCookieConsent);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    <Stack
      display={cookieConsent != null ? 'none' : 'flex'}
      bgColor={'lightBlue.300'}
      py={4}
      px={{ base: 4, md: 5 }}
      position={'fixed'}
      left={0}
      bottom={0}
      right={0}
      flexDirection={{ base: 'column', md: 'row' }}
      spacing={{ base: 3, md: 4 }}
      justify='space-between'
      align={{ base: 'start', md: 'center' }}
      mx={'auto'}
      maxWidth={{ base: 'max-content', md: '640px' }}
      my={'2.5rem'}
      borderRadius={'0.5rem'}
      boxShadow={
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      }
      zIndex={110}
    >
      <Box>
        <Text>
          Este site utiliza <Link href='#'>cookies</Link>.
        </Text>
      </Box>

      <Stack direction={'row'} spacing={{ base: 3, md: 4 }}>
        <Button
          display={{ base: 'none', lg: 'inline-flex' }}
          fontSize={'18px'}
          fontWeight={'medium'}
          lineHeight={'24px'}
          py={'24px'}
          px={'24px'}
          color={'black'}
          bg={'lightBlue.50'}
          _hover={{
            bg: 'lightBlue.100',
            fontWeight: 600,
          }}
          boxShadow={
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
          }
          onClick={() => setCookieConsent(false)}
        >
          Rejeitar
        </Button>
        <Button
          display={{ base: 'none', lg: 'inline-flex' }}
          fontSize={'18px'}
          fontWeight={'medium'}
          lineHeight={'24px'}
          py={'24px'}
          px={'24px'}
          color={'white'}
          bg={'lightBlue.500'}
          _hover={{
            bg: 'lightBlue.600',
            fontWeight: 600,
          }}
          boxShadow={
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
          }
          onClick={() => setCookieConsent(true)}
        >
          Aceitar
        </Button>
      </Stack>
    </Stack>
  );
};
