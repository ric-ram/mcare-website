'use client';

import { AreaProps } from '@/app/types/componentTypes';
import Carousel from '@/components/carousel';
import { AppointmentsForm } from '@/components/forms';
import { AREAS, Area } from '@/data/areas';
import { Heading, Stack, Text } from '@chakra-ui/react';

const getArea = (areaId: string) => {
  return AREAS.find((area: Area) => area.areaId === areaId);
};

export default function AreaPage({ params }: AreaProps) {
  const area = getArea(params.areaId);

  return (
    <>
      <Heading as='h1' variant={'header1'} textAlign={'center'} mt={16}>
        {area.label}
      </Heading>
      <Stack
        maxWidth='full'
        pt={16}
        pb={24}
        px={{ lg: '160px', base: '32px' }}
        spacing={16}
      >
        <Text textAlign={{ base: 'center', md: 'left' }} fontSize={'lg'}>
          {area.description}
        </Text>
      </Stack>
      {area.services && (
        <Carousel
          carouselType={'services'}
          cardIds={area.services}
          bgColor={'pastelBlue'}
        />
      )}
      <Stack
        pt={12}
        pb={24}
        px={{ lg: '160px', base: '32px' }}
        minHeight={'650px'}
        width={'full'}
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
    </>
  );
}
