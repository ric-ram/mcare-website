'use client';

import ContainerWithImage from '@/components/containerImage';
import { Heading, Stack, Text } from '@chakra-ui/react';

export default function AboutUs() {
  const imgContainer = {
    loreumText: [
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    ],
    imagePlaceholder:
      'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'feature image',
  };

  return (
    <>
      <ContainerWithImage
        title={'A MCare'}
        texts={imgContainer.loreumText}
        imageSrc={imgContainer.imagePlaceholder}
        imageAlt={imgContainer.imageAlt}
        as={'h1'}
        variant='header1'
      />
      <Stack
        maxWidth='full'
        pt={12}
        pb={24}
        px={{ lg: '160px', base: '32px' }}
        bg={'pastelBlue'}
        spacing={10}
      >
        <Heading
          as='h2'
          variant='header2'
          textAlign={{ base: 'center', md: 'left' }}
        >
          Missão, Valores, etc
        </Heading>
        <Text textAlign={{ base: 'center', md: 'left' }}>
          Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Curabitur
          tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a
          convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum
          venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
          vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu
          mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula
          vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam
          eget mi in purus lobortis eleifend. Sed nec ante dictum sem
          condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
          nisi, ac posuere leo.
        </Text>
      </Stack>
    </>
  );
}
