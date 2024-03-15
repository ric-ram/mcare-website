'use client';

import { SpecialtyProps } from '@/app/types/componentTypes';
import { AppointmentsForm } from '@/components/forms';
import { SPECIALTIES, Specialty } from '@/data/specialties';
import { Heading, Stack, Text } from '@chakra-ui/react';

const getSpecialty = (specialtyId: string) => {
  return SPECIALTIES.find(
    (specialty: Specialty) => specialty.specialtyId === specialtyId,
  );
};

export default function SpecialtyPage({ params }: SpecialtyProps) {
  const specialty = getSpecialty(params.specialtyId);

  return (
    <>
      <Heading as='h1' variant={'header1'} textAlign={'center'} mt={16}>
        {specialty.label}
      </Heading>
      <Stack
        maxWidth='full'
        pt={16}
        pb={24}
        px={{ lg: '160px', base: '32px' }}
        spacing={16}
      >
        <Text textAlign={{ base: 'center', md: 'left' }} fontSize={'lg'}>
          {specialty.description}
        </Text>
      </Stack>
      {/* {specialty.areas && (
        <Carousel
          carouselType={'areas'}
          cardIds={specialty.areas}
          bgColor={'pastelBlue'}
        />
      )} */}
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
