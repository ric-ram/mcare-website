'use client';

import Carousel from '@/components/carousel';
import { SPECIALTIES } from '@/data/specialties';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  ComponentProps,
  SpecialtyButtonProps,
  SpecialtyDescriptionProps,
  StepCardProps,
} from './types/componentTypes';

export const getTestimonialsIds = () => {
  let ids = [];
  TESTIMONIALS.forEach((testimonial: Testimonial) => {
    if (
      testimonial.accepted &&
      testimonial.visible &&
      !testimonial.highlighted
    ) {
      ids.push(testimonial.testimonialId);
    }
  });
  return ids;
};

const StepCard = ({ image, step, text }: StepCardProps) => {
  return (
    <VStack width={'189px'} height={{ base: 'full', lg: '333px' }} spacing={6}>
      <Image
        src={image}
        boxSize={{ base: '175px', lg: '125px', xl: '175px' }}
        border={'5px solid'}
        borderColor={'darkBlue'}
        borderRadius='full'
        objectFit={'cover'}
        alt={`passo ${step}`}
      />
      <VStack
        spacing={2}
        bg={{ base: 'pastelBlue', lg: 'none' }}
        p={1}
        rounded={'md'}
      >
        <Heading as='h4' variant={'header4'}>
          Passo {step}
        </Heading>
        <Text textAlign={'center'}>{text}</Text>
      </VStack>
    </VStack>
  );
};

const SpecialtyButton = ({
  specialty: Area,
  activeSpecialty: activeArea,
  onClick,
}: SpecialtyButtonProps) => {
  return (
    <Box
      name={Area.label}
      pl={3}
      pr={5}
      py={5}
      as='button'
      borderTop={'1px solid'}
      borderColor={'darkBlue'}
      width={'full'}
      fontSize={'24px'}
      lineHeight={'32px'}
      textAlign={{ base: 'center', lg: 'left' }}
      fontWeight={'500'}
      color={activeArea.label === Area.label ? 'pastelBlue' : 'darkBlue'}
      noOfLines={1}
      bg={activeArea.label === Area.label && 'darkBlue'}
      _hover={{
        lg: {
          bg: 'darkBlues.600',
          color: 'pastelBlue',
        },
      }}
      onClick={onClick}
    >
      {Area.label}
    </Box>
  );
};

const AreaDescription = ({
  activeSpecialty: activeArea,
}: SpecialtyDescriptionProps) => {
  return (
    <VStack
      spacing={8}
      alignItems={'center'}
      py={8}
      display={{ base: 'none', lg: 'flex' }}
    >
      <Heading as={'h3'} variant={'header3'}>
        {activeArea.label}
      </Heading>
      <Flex direction='column' alignItems='flex-start' gap={4}>
        <Text textAlign={'left'}>{activeArea.description}</Text>
        {activeArea.areas && (
          <UnorderedList textAlign={'left'}>
            {activeArea.areas.map((bullet, index) => (
              <ListItem key={index}>{bullet}</ListItem>
            ))}
          </UnorderedList>
        )}
      </Flex>
      <Button
        as={'a'}
        display={{ base: 'none', lg: 'inline-flex' }}
        fontSize={'16px'}
        fontWeight={'medium'}
        lineHeight={'24px'}
        py={'24px'}
        px={'24px'}
        ml={8}
        color={'black'}
        bg={'lightBlue.200'}
        href={'/areas/' + activeArea.specialtyId}
        _hover={{
          bg: 'lightBlue.300',
          fontWeight: 600,
        }}
      >
        Saber mais
      </Button>
    </VStack>
  );
};

const ProcedureSection = ({ bgColor }: ComponentProps) => {
  return (
    <Stack
      py={12}
      px={{ lg: '160px', base: '32px' }}
      alignItems={'center'}
      spacing={{ base: 6, lg: '95px' }}
      bg={bgColor}
    >
      <Heading as={'h2'} variant={{ base: 'header2', lg: 'header1' }}>
        Procedimento
      </Heading>
      <Stack
        gap={{ base: 0, lg: 4, xl: 12 }}
        backgroundImage={{
          base: '/images/stepArrowV.svg',
          lg: '/images/stepArrowH.svg',
        }}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={{ base: 'center', lg: '50% 16%', xl: '50% 25%' }}
        backgroundSize={'contain'}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={'center'}
        alignItems={'center'}
        maxWidth={'1120px'}
        width={'full'}
        height={{ base: '1500px', lg: 'auto' }}
        pt={{ base: 8, lg: 0 }}
      >
        <StepCard
          image='/images/step1.jpg'
          step={1}
          text='Marque a sua sessão'
        />

        <StepCard
          image='/images/step2.jpg'
          step={2}
          text='Irá receber uma chamada para agendar o dia e hora'
        />

        <StepCard
          image='/images/step3.jpg'
          step={3}
          text='Avaliação por parte do profissional de saúde'
        />

        <StepCard
          image='/images/step4.jpg'
          step={4}
          text='Início do plano de intervenção adequado'
        />
      </Stack>
    </Stack>
  );
};

const SpecialtiesSection = ({ bgColor }: ComponentProps) => {
  const [activeSpecialty, setActiveSpecialty] = useState(SPECIALTIES[0]);

  const handleAreaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const activeSpecialty: HTMLButtonElement = e.currentTarget;
    const index = SPECIALTIES.findIndex(
      (Specialty) => Specialty.label === activeSpecialty.name,
    );

    setActiveSpecialty(SPECIALTIES[index]);
  };

  return (
    <Stack
      py={12}
      px={{ lg: '160px', base: '32px' }}
      alignItems={'center'}
      spacing={{ base: 6, lg: 8 }}
      bg={bgColor}
    >
      <Heading as={'h2'} variant={{ base: 'header2', lg: 'header1' }}>
        Especialidades
      </Heading>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
        backgroundImage={{ base: '', lg: '/images/divider.svg' }}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'contain'}
        backgroundPosition={{ md: '45% 50%', xl: '35% 50%' }}
        py={8}
        spacing={'100px'}
        maxWidth={{ md: '700px', xl: '1000px' }}
        minWidth={'680px'}
      >
        <VStack direction={'column'} gap={0} minWidth={'300px'}>
          {SPECIALTIES.map((Area, index) => (
            <SpecialtyButton
              key={index}
              specialty={Area}
              onClick={handleAreaClick}
              activeSpecialty={activeSpecialty}
            />
          ))}
        </VStack>
        <AreaDescription activeSpecialty={activeSpecialty} />
      </Stack>
    </Stack>
  );
};

export default function Home() {
  const testimonialsIds = getTestimonialsIds();

  return (
    <>
      <ProcedureSection />
      <SpecialtiesSection bgColor='pastelBlue' />
      <Carousel carouselType={'testimonials'} cardIds={testimonialsIds} />
    </>
  );
}
