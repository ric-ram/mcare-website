'use client';

import { SpecialtyProps } from '@/app/types/componentTypes';
import { AppointmentsForm } from '@/components/forms';
import InteractiveTable from '@/components/interactiveTable';
import HowToCard from '@/components/serviceCard';
import { AREAS, Area } from '@/data/areas';
import { SPECIALTIES, Specialty } from '@/data/specialties';
import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const getSpecialty = (specialtyId: string) => {
  return SPECIALTIES.find(
    (specialty: Specialty) => specialty.specialtyId === specialtyId,
  );
};

const getSpecialtyAreas = (specialtyId: string) => {
  return AREAS.filter((area: Area) => area.specialtyId === specialtyId);
};

export default function SpecialtyPage({ params }: SpecialtyProps) {
  const specialty = getSpecialty(params.specialtyId);
  const specialtyAreas = getSpecialtyAreas(params.specialtyId);

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
        {specialty.descriptionParagraphs.map((paragraph: string) => (
          <Text textAlign={{ base: 'center', md: 'left' }} fontSize={'lg'}>
            {paragraph}
          </Text>
        ))}
      </Stack>
      {specialty.areas && (
        <InteractiveTable
          bgColor='pastelBlue'
          title='Áreas de Actuação'
          items={specialtyAreas}
          type='areas'
        />
      )}
      {/* {specialty.areas && (
        <Carousel
          carouselType={'areas'}
          cardIds={['cardiorrespiratoria', 'massagem']}
          bgColor={'pastelBlue'}
        />
      )} */}
      {specialty.howToSteps && (
        <Stack
          maxWidth='full'
          pt={16}
          pb={24}
          px={{ lg: '160px', base: '32px' }}
        >
          <HowToCard
            label={specialty.label}
            howToSteps={specialty.howToSteps}
          />
        </Stack>
      )}
      {specialty.questions && (
        <Stack maxWidth='full' pb={24} px={{ lg: '160px', base: '32px' }}>
          {specialty.questions.map((question, index) => (
            <Stack key={index} maxWidth='full' pb={8}>
              <Heading as={'h3'} variant={'header3'}>
                {question.questionTitle}
              </Heading>
              {question.isBullet && (
                <UnorderedList>
                  {question.description.map((text, index) => (
                    <ListItem key={index}>{text}</ListItem>
                  ))}
                </UnorderedList>
              )}
              {!question.isBullet &&
                question.description.map((text, index) => (
                  <Text key={index}>{text}</Text>
                ))}
            </Stack>
          ))}
        </Stack>
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
        bgColor={(specialty.howToSteps || specialty.questions) && 'pastelBlue'}
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
