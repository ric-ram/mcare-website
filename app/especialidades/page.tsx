'use client';

import AreaCard from '@/components/areaCard';
import { SPECIALTIES } from '@/data/specialties';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';

export default function SpecialtiesPage() {
  return (
    <Stack pt={12} pb={24} px={{ lg: '160px', base: '32px' }} gap={12}>
      <Heading as='h2' variant={'header1'} textAlign={'center'}>
        Especialidades
      </Heading>
      <SimpleGrid
        minHeight={'650px'}
        width={'full'}
        columns={{ base: 1, md: 2, lg: 3 }}
        justifyItems={'center'}
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
  );
}
