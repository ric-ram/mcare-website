'use client';

import ContainerWithImage from '@/components/containerImage';
import SimpleContainer from '@/components/simpleContainer';
import { ABOUT, MISSAO, VISAO } from '@/data/info';

export default function AboutUs() {
  return (
    <>
      <ContainerWithImage info={ABOUT} as={'h1'} variant='header1' />
      <SimpleContainer info={VISAO} bgColor={'pastelBlue'} />
      <SimpleContainer info={MISSAO} />
    </>
  );
}
