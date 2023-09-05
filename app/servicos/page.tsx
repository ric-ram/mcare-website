'use client';

import ServiceCard from '@/components/seviceCard';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';

type Service = {
  label: string;
  href: string;
  image: string;
};

const SERVICES: Array<Service> = [
  {
    label: 'Neurologia',
    href: '/marcacao',
    image: '',
  },
  {
    label: 'Músculo-esquelética',
    href: '/marcacao',
    image: '',
  },
  {
    label: 'Cardiorrespiratória',
    href: '/marcacao',
    image: '',
  },
  {
    label: 'Drenagem Linfática',
    href: '/marcacao',
    image: '',
  },
  {
    label: 'Massagem Terapêutica',
    href: '/marcacao',
    image: '',
  },
  {
    label: 'Geriatria',
    href: '/marcacao',
    image: '',
  },
];

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
            name={service.label}
            image={service.image}
            href={service.href}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
