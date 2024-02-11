'use client';

import Carousel from '@/components/carousel';
import ContainerWithImage from '@/components/containerImage';
import { TestimonialForm } from '@/components/forms';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { getTestimonialsIds } from '../page';

export default function Testimonials() {
  const testimonialContainer = {
    title: 'Testemunho',
    loreumText: [
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    ],
    imagePlaceholder:
      'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'feature image',
  };

  const testimonialsIds = getTestimonialsIds();

  return (
    <>
      <ContainerWithImage
        title={testimonialContainer.title + ' A'}
        texts={testimonialContainer.loreumText}
        imageSrc={testimonialContainer.imagePlaceholder}
        imageAlt={testimonialContainer.imageAlt}
        imageRight={true}
        as={'h1'}
        variant='header1'
      />
      <ContainerWithImage
        title={testimonialContainer.title + ' B'}
        texts={testimonialContainer.loreumText}
        imageSrc={testimonialContainer.imagePlaceholder}
        imageAlt={testimonialContainer.imageAlt}
        bgColor='pastelBlue'
        as={'h1'}
        variant='header1'
      />
      {/* <TestimonialCarousel /> */}
      {testimonialsIds && (
        <Carousel carouselType='testimonials' cardIds={testimonialsIds} />
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
        bg={'pastelBlue'}
      >
        <Heading as={'h1'} variant={'header1'} textAlign={'center'}>
          Insira o seu testemunho
        </Heading>
        <Text textAlign={'center'} fontSize={'18px'} lineHeight={'24px'}>
          Tem algo a acrescentar? Partilhe connosco a sua opinão.
        </Text>
        <TestimonialForm />
      </Stack>
    </>
  );
}
