'use client';

import { SpecialtyProps } from '@/app/types/componentTypes';
import { AppointmentsForm } from '@/components/forms';
import InteractiveTable from '@/components/interactiveTable';
import HowToCard from '@/components/serviceCard';
import { AREAS, Area } from '@/data/areas';
import { SPECIALTIES, Specialty } from '@/data/specialties';
import {
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
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

const SpecialtyHero = (props: {
  label: string;
  paragraphs: string[];
  hasQuestions?: Boolean | false;
}) => {
  return (
    <>
      <Container maxWidth={'1120px'}>
        <Heading as='h1' variant={'header1'} textAlign={'center'} mt={16}>
          {specialty.label}
        </Heading>
        <Stack
          //maxWidth='full'
          pt={16}
          pb={24}
          //px={{ lg: '160px', base: '32px' }}
          spacing={16}
        >
          {specialty.descriptionParagraphs.map(
            (paragraph: string, index: number) => (
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                fontSize={'lg'}
                key={index}
              >
                {paragraph}
              </Text>
            ),
          )}
        </Stack>
      </Container>
      <Container maxWidth={'100%'} bgColor={'pastelBlue'}>
        {specialty.areas && (
          <InteractiveTable
            title='Áreas de Actuação'
            items={specialtyAreas}
            type='areas'
          />
        )}
      </Container>
      <Container maxWidth={'1120px'}>
        {specialty.howToSteps && (
          <Stack
            //maxWidth={'1120px'}
            pt={16}
            pb={24}
            //px={{ lg: '160px', base: '32px' }}
          >
            <HowToCard
              label={specialty.label}
              howToSteps={specialty.howToSteps}
            />
          </Stack>
        )}
      </Container>
      <Container maxWidth={'1120px'}>
        {specialty.questions && (
          <Stack maxWidth='full' pb={24}>
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
            bgColor={
              (specialty.howToSteps || specialty.questions) && 'pastelBlue'
            }
          >
            <Heading as={'h1'} variant={'header1'} textAlign={'center'}>
              Faça a sua marcação
            </Heading>
            <AppointmentsForm />
          </Stack>
        </Container>
      </Container>
      <Heading
        as='h1'
        variant={'header1'}
        textAlign={'center'}
        mt={props.hasQuestions && 16}
      >
        {props.label}
      </Heading>
      <Stack
        maxWidth='full'
        pt={props.hasQuestions && 16}
        pb={props.hasQuestions && 24}
        px={props.hasQuestions && { lg: '160px', base: '32px' }}
        spacing={props.hasQuestions ? 16 : 10}
      >
        {props.paragraphs.map((paragraph: string, index: number) => (
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={'lg'}
            key={index}
          >
            {paragraph}
          </Text>
        ))}
      </Stack>
    </>
  );
};

export default function SpecialtyPage({ params }: SpecialtyProps) {
  const specialty = getSpecialty(params.specialtyId);
  const specialtyAreas = getSpecialtyAreas(params.specialtyId);

  return (
    <>
      {!specialty.questions && (
        <>
          <Container
            maxWidth={'full'}
            pt={'100px'}
            pb={12}
            px={{ lg: '160px', base: '32px' }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={20}
              //px={8}
              alignItems={'center'}
              templateAreas={{ base: `'first' 'second'`, md: `'first second'` }}
            >
              <Flex
                justifyContent={'flex-end'}
                gridArea={{ base: 'first', md: 'second' }}
              >
                <Image
                  rounded={'md'}
                  alt={specialty.label}
                  src={specialty.image}
                  objectFit={'cover'}
                />
              </Flex>
              <Stack
                spacing={8}
                gridArea={{ base: 'second', md: 'first' }}
                alignItems={{ base: 'center', md: 'normal' }}
              >
                <SpecialtyHero
                  label={specialty.label}
                  paragraphs={specialty.descriptionParagraphs}
                />
              </Stack>
            </SimpleGrid>
          </Container>
          {specialty.areas && (
            <InteractiveTable
              bgColor='pastelBlue'
              title='Áreas de Actuação'
              items={specialtyAreas}
              type='areas'
            />
          )}
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
        </>
      )}
      {specialty.questions && (
        <>
          <SpecialtyHero
            label={specialty.label}
            paragraphs={specialty.descriptionParagraphs}
            hasQuestions={true}
          />
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
        </>
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
