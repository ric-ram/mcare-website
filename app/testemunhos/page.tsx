'use client';

import Carousel from '@/components/carousel';
import ContainerWithImage from '@/components/containerImage';
import { TestimonialForm } from '@/components/forms';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { getTestimonialsIds } from '../page';

const getHighlightedTestimonialsIds = () => {
  let testimonials: Testimonial[] = [];
  TESTIMONIALS.forEach((testimonial: Testimonial) => {
    if (
      testimonial.accepted &&
      testimonial.visible &&
      testimonial.highlighted
    ) {
      testimonials.push(testimonial);
    }
  });
  return testimonials;
};

export default function Testimonials() {
  const testimonialsHighlighted = getHighlightedTestimonialsIds();

  const testimonialsIds = getTestimonialsIds();

  return (
    <>
      {testimonialsHighlighted &&
        testimonialsHighlighted.map((testimonial, index) => (
          <ContainerWithImage
            testimonial={testimonial}
            imageRight={index % 2 === 0 ? true : false}
            as={'h1'}
            variant='header1'
            bgColor={index % 2 !== 0 && 'pastelBlue'}
            key={index}
          />
        ))}
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
