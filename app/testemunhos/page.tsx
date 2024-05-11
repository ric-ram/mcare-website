'use client';

import { Carousel } from '@/components/carousel';
import ContainerWithImage from '@/components/containerImage';
import { TestimonialForm } from '@/components/forms';

import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { useGlobalContext } from '../context/store';

export default function Testimonials() {
  const { acceptedTestimonialsIds, highlightedTestimonials } =
    useGlobalContext();

  return (
    <>
      {highlightedTestimonials.length > 0 &&
        highlightedTestimonials.map((testimonial, index) => (
          <ContainerWithImage
            testimonial={testimonial}
            imageRight={index % 2 === 0 ? true : false}
            as={'h1'}
            variant='header1'
            bgColor={index % 2 !== 0 && 'pastelBlue'}
            key={index}
          />
        ))}
      {acceptedTestimonialsIds && (
        <Carousel cardIds={acceptedTestimonialsIds} />
      )}
      <Container maxWidth={'full'} bgColor={'pastelBlue'}>
        <Container maxWidth={'1120px'}>
          <Stack
            pt={12}
            pb={24}
            minHeight={'650px'}
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
        </Container>
      </Container>
    </>
  );
}
