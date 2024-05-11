'use client';

import AreaCard from '@/components/areaCard';
import { AppointmentsForm } from '@/components/forms';
import { SPECIALTIES } from '@/data/specialties';
import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';

export default function SpecialtiesPage() {
  return (
    <>
      <Container maxWidth={'1120px'}>
        <Stack pt={12} pb={24} gap={12}>
          <Heading as='h2' variant={'header1'} textAlign={'center'}>
            Especialidades
          </Heading>
          <SimpleGrid
            minHeight={{ base: '650px', xl: '100%' }}
            width={'full'}
            columns={{ base: 1, sm: 2, xl: 4 }}
            justifyItems={'center'}
            alignContent={'space-between'}
            spacing={16}
          >
            {SPECIALTIES.map((specialty) => (
              <AreaCard
                key={specialty.label}
                name={specialty.label}
                image={specialty.image}
                href={'/especialidades/' + specialty.specialtyId}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
      <Container maxWidth={'full'} bgColor={'pastelBlue'}>
        <Container maxWidth={'1120px'}>
          <Stack
            pt={12}
            pb={24}
            minHeight={'650px'}
            overflow={'hidden'}
            alignItems={'stretch'}
            spacing={16}
          >
            <Heading as={'h1'} variant={'header1'} textAlign={'center'}>
              Faça a sua marcação
            </Heading>
            {/* <Text textAlign={'center'} fontSize={'18px'} lineHeight={'24px'}>
          Tem algo a acrescentar? Partilhe connosco a sua opinão.
        </Text> */}
            <AppointmentsForm />
          </Stack>
        </Container>
      </Container>
    </>
  );
}
