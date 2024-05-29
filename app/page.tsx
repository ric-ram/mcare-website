'use client';

import { Carousel } from '@/components/carousel';
import { HeroCarousel } from '@/components/hero';
import InteractiveTable from '@/components/interactiveTable';
import { SPECIALTIES } from '@/data/specialties';
import {
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useGlobalContext } from './context/store';
import { GeneralComponentProps, StepCardProps } from './types/componentTypes';

const StepCard = ({ image, step, text }: StepCardProps) => {
  return (
    <VStack width={'189px'} height={{ base: 'full', lg: '333px' }} spacing={4}>
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
        p={{ base: 4, lg: 1 }}
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

const ProcedureSection = ({ bgColor }: GeneralComponentProps) => {
  return (
    <Container maxWidth={'1120px'}>
      <Stack
        py={12}
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
            base: '/images/home-page/stepArrowV.svg',
            lg: '/images/home-page/stepArrowH.svg',
          }}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={{ base: 'center', lg: '50% 16%', xl: '50% 25%' }}
          backgroundSize={'contain'}
          direction={{ base: 'column', lg: 'row' }}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          //maxWidth={'1120px'}
          width={'full'}
          height={{ base: '1500px', lg: 'auto' }}
          pt={{ base: 8, lg: 0 }}
        >
          <StepCard
            image='/images/home-page/step1.jpg'
            step={1}
            text='Marque a sua sessão'
          />

          <StepCard
            image='/images/home-page/step2.jpg'
            step={2}
            text='Irá receber uma chamada para agendar o dia e hora'
          />

          <StepCard
            image='/images/home-page/step3.jpg'
            step={3}
            text='Avaliação por parte do profissional de saúde'
          />

          <StepCard
            image='/images/home-page/step4.jpg'
            step={4}
            text='Início do plano de intervenção adequado'
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default function Home() {
  const { acceptedTestimonialsIds } = useGlobalContext();

  return (
    <>
      <HeroCarousel />
      <ProcedureSection />
      <Container bgColor='pastelBlue' maxW={'100%'}>
        <InteractiveTable
          bgColor='pastelBlue'
          title='Especialidades'
          items={SPECIALTIES}
        />
      </Container>
      <Container maxWidth={'100%'}>
        <Container maxWidth={'1120px'}>
          <Stack
            py={12}
            alignItems={'center'}
            spacing={{ base: 6, lg: '95px' }}
          >
            <Heading as={'h2'} variant={{ base: 'header2', lg: 'header1' }}>
              Zona de Actuação
            </Heading>
            <Image
              src='/images/home-page/mapa-actuacao.png'
              alt='Mapa de actuação'
            />
          </Stack>
        </Container>
      </Container>
      <Container maxWidth={'100%'} bgColor={'pastelBlue'}>
        <Carousel cardIds={acceptedTestimonialsIds} />
      </Container>
    </>
  );
}
