'use client';

import { AppointmentsForm } from '@/components/forms';
import { Container, Heading, Stack } from '@chakra-ui/react';

export default function Appointment() {
  return (
    <Container maxWidth={'full'}>
      <Container maxWidth={'1120px'}>
        <Stack
          pt={12}
          pb={24}
          position={'relative'}
          minHeight={'650px'}
          overflow={'hidden'}
          alignItems={'stretch'}
          spacing={16}
        >
          <Heading
            as={'h2'}
            variant={{ base: 'header2', lg: 'header1' }}
            textAlign={'center'}
          >
            Marcações
          </Heading>
          <AppointmentsForm />
        </Stack>
      </Container>
    </Container>
  );
}
