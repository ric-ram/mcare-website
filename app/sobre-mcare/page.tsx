'use client';

import ContainerWithImage from '@/components/containerImage';
import SimpleContainer from '@/components/simpleContainer';
import { ABOUT, MISSAO, VISAO } from '@/data/info';
import { Container } from '@chakra-ui/react';

export default function AboutUs() {
  return (
    <>
      <Container maxWidth={'full'}>
        <ContainerWithImage info={ABOUT} as={'h1'} variant='header1' />
      </Container>
      <Container maxWidth={'full'} bgColor={'pastelBlue'}>
        <SimpleContainer info={VISAO} />
      </Container>
      <SimpleContainer info={MISSAO} />
    </>
  );
}
