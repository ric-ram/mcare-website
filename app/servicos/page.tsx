'use client';

import ServiceCard from '@/components/seviceCard';
import { SERVICES } from '@/data/services';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';

export default function ServicesPage() {
  return (
    <Stack pt={12} pb={24} px={{ lg: '160px', base: '32px' }} gap={12}>
      <Heading as='h2' variant={'header1'} textAlign={'center'}>
        Serviços
      </Heading>
      <SimpleGrid
        minHeight={'650px'}
        width={'full'}
        columns={{ base: 1, md: 2, lg: 3 }}
        justifyItems={'center'}
        spacing={16}
      >
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.label}
            name={service.label}
            image={service.image}
            href={service.href}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
