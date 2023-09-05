'use client';

import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';

type StepCardProps = {
  image: string;
  step: number;
  text: string;
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
      />
      <VStack
        spacing={2}
        bg={{ base: 'pastelBlue', lg: 'none' }}
        py={1}
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

export default function Home() {
  return (
    <Stack
      py={12}
      px={{ lg: '160px', base: '32px' }}
      alignItems={'center'}
      spacing={{ base: 6, lg: '95px' }}
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
}
