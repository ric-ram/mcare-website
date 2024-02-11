'use client';

import AreaCard from '@/components/areaCard';
import { AREAS } from '@/data/areas';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';

export default function AreasPage() {
  return (
    <Stack pt={12} pb={24} px={{ lg: '160px', base: '32px' }} gap={12}>
      <Heading as='h2' variant={'header1'} textAlign={'center'}>
        Áreas
      </Heading>
      <SimpleGrid
        minHeight={'650px'}
        width={'full'}
        columns={{ base: 1, md: 2, lg: 3 }}
        justifyItems={'center'}
        spacing={16}
      >
        {AREAS.map((area) => (
          <AreaCard
            key={area.label}
            name={area.label}
            image={area.image}
            href={'/areas/' + area.areaId}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
