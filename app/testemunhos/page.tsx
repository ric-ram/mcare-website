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
        <Container maxWidth={'100%'} bgColor={'pastelBlue'}>
          <Carousel cardIds={acceptedTestimonialsIds} />
        </Container>
      )}
      <Container
        maxWidth={'full'}
        bgColor={!acceptedTestimonialsIds && 'pastelBlue'}
      >
        <Container maxWidth={'1120px'}>
          <Stack
            pt={12}
            pb={24}
            minHeight={'650px'}
            overflow={'hidden'}
            alignItems={'stretch'}
            spacing={16}
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
