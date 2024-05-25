'use client';

import ContainerWithImage from '@/components/containerImage';
import { EQUIPA, EXPERIENCIA } from '@/data/info';

export default function Team() {
  return (
    <>
      <ContainerWithImage info={EXPERIENCIA} as={'h1'} variant='header1' />
      <ContainerWithImage
        info={EQUIPA}
        imageRight={true}
        bgColor='pastelBlue'
        as={'h2'}
        variant='header2'
        last={true}
      />
    </>
  );
}
