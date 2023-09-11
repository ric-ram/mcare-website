'use client';

import { AppointmentsForm } from '@/components/forms';
import { Heading, Stack } from '@chakra-ui/react';

export default function Appointment() {
  return (
    <Stack
      pt={12}
      pb={24}
      px={{ lg: '160px', base: '32px' }}
      position={'relative'}
      minHeight={'650px'}
      width={'full'}
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
  );
}
