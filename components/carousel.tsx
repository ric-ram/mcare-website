// And react-slick as our Carousel Lib
import { CarouselProps, SlideProps } from '@/app/types/componentTypes';
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import React from 'react';
import Slider from 'react-slick';

import TestimonialCard from './testimonialCard';

// Settings for the Testimonials slider
const settingsTestimonials = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Settings for Hero slider
const settingsHero = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 4000,
  fade: true,
  waitForAnimate: false,
};

export function Carousel({ cardIds, bgColor }: CarouselProps) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '40%', md: '40%' });
  const side = useBreakpointValue({ base: '0', md: '0px' });

  const Slide = ({ key, id }: SlideProps) => {
    return (
      <HStack
        key={key}
        w='100%'
        h='100%'
        alignContent='center'
        justifyContent='center'
      >
        <TestimonialCard id={id} />
      </HStack>
    );
  };

  return (
    <Stack
      py={12}
      pb={32}
      px={{ lg: '160px', base: '32px' }}
      position={'relative'}
      height={'full'}
      width={'full'}
      overflow={'hidden'}
      alignItems={'center'}
      spacing={'78px'}
      bg={bgColor}
    >
      <Heading as={'h2'} variant={{ base: 'header2', lg: 'header1' }}>
        {'Testemunhos'}
      </Heading>
      <Box
        position={'relative'}
        height={'full'}
        width={'full'}
        //overflow={"hidden"}
        px={{ base: 4, xl: '97px' }}
        sx={{
          '.slick-dots': {
            transform: { base: 'translateY(12px)', xl: 'translateY(36px)' },
          },
          '.slick-dots li': {
            width: '16px',
            height: '16px',
          },
          '.slick-dots li button': {
            _before: {
              transition: '0.2s',
              content: "''",
              borderRadius: '100%',
              background: 'darkBlues.800',
              width: '14px',
              height: '14px',
              top: '7%',
              left: '7%',
            },
          },
          '.slick-dots li.slick-active button': {
            _before: {
              width: '16px',
              height: '16px',
              top: '0',
              left: '0',
            },
          },
          '.slick-track': {
            display: 'flex',
          },
          '.slick-slide': {
            height: 'inherit',
          },
          '.slick-slide > div': {
            height: '100%',
          },
        }}
      >
        {/* CSS files for react-slick */}
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        {/* Left Icon */}
        <IconButton
          aria-label='left-arrow'
          variant='ghost'
          position='absolute'
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <ChevronLeftRounded />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label='right-arrow'
          variant='ghost'
          position='absolute'
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <ChevronRightRounded />
        </IconButton>
        {/* Slider */}
        {cardIds.length > 0 && (
          <Slider {...settingsTestimonials} ref={(slider) => setSlider(slider)}>
            {cardIds.map((cardId, index) => (
              <Slide key={index} id={cardId} />
            ))}
          </Slider>
        )}
      </Box>
    </Stack>
  );
}
