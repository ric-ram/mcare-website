// And react-slick as our Carousel Lib
import { CarouselProps, SlideProps } from '@/app/types/componentTypes';
import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Stack,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import Slider from 'react-slick';

import { animated, useTransition } from '@react-spring/web';
import { AreaCard } from './serviceCard';
import TestimonialCard from './testimonialCard';

// Settings for the Services slider
const settingsArea = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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

const getSettings = (slideType: string) => {
  if (slideType === 'areas') {
    return settingsArea;
  } else {
    return settingsTestimonials;
  }
};

export function Carousel({ carouselType, cardIds, bgColor }: CarouselProps) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '40%', md: '40%' });
  const side = useBreakpointValue({ base: '0', md: '0px' });

  const Slide = ({ key, slideType, id }: SlideProps) => {
    return (
      <HStack
        key={key}
        w='100%'
        h='100%'
        alignContent='center'
        justifyContent='center'
      >
        {slideType === 'areas' && <AreaCard id={id} />}
        {slideType === 'testimonials' && <TestimonialCard id={id} />}
      </HStack>
    );
  };

  const settings = getSettings(carouselType);

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
        {carouselType === 'areas' ? 'Áreas' : 'Testemunhos'}
      </Heading>
      <Box
        position={'relative'}
        height={'full'}
        width={'full'}
        //overflow={"hidden"}
        px={carouselType === 'areas' ? { base: 12 } : { base: 4, xl: '97px' }}
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
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cardIds.map((cardId, index) => (
            <Slide key={index} slideType={carouselType} id={cardId} />
          ))}
        </Slider>
      </Box>
    </Stack>
  );
}

export function HeroCarousel() {
  //const [slider, setSlider] = React.useState<Slider | null>(null);.
  const [photoIndex, setPhotoIndex] = useState(0);

  const IMAGES = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg',
  ];

  const transitions = useTransition(photoIndex, {
    key: photoIndex,
    from: { opacity: 1 },
    enter: { opacity: 0 },
    leave: { opacity: 1 },
    config: { duration: 4000 },
    onRest: (_a, _b, item) => {
      if (photoIndex === item) {
        setPhotoIndex(photoIndex === IMAGES.length - 1 ? 0 : photoIndex + 1);
      }
    },
    exitBeforeEnter: true,
  });

  // const slogans = [
  //   'Ser Terapeuta é ter duas mãos e um coração entre elas!',
  //   'Cuidados especializados no seu lar!',
  //   'Levamos a saúde até si!',
  // ];

  return (
    <Box
      position={'relative'}
      height={'100%'}
      width={'100%'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      {/* <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      /> */}
      <Box
        position='relative'
        boxShadow={'inset 0 0 0 2000px rgba(7, 63, 86, 1)'}
        //h={'6xl'}
        // backgroundPosition='center'
        // backgroundRepeat='no-repeat'
        // backgroundSize='cover'
        // backgroundImage={`url(${images[photoIndex]})`}
        // backgroundColor={'rgba(7, 63, 86, 0.45)'}
        // backgroundBlendMode={'multiply'}
      >
        <VStack
          zIndex={10}
          position={'absolute'}
          width={'full'}
          height={'full'}
          justifyContent={'center'}
        >
          <Heading
            as={'h1'}
            variant={'header1'}
            color={{ base: 'pastelBlue' }}
            textAlign={'center'}
          >
            Cuidados especializados no seu lar!
          </Heading>
          <Button
            as={'a'}
            size='lg'
            display={'inline-flex'}
            fontSize={'24px'}
            fontWeight={'medium'}
            lineHeight={'24px'}
            py={'24px'}
            px={'24px'}
            mt={{ base: 4, md: 8 }}
            color={'black'}
            bg={'lightBlue.200'}
            href={'/marcacao'}
            _hover={{
              bg: 'lightBlue.300',
              fontWeight: 600,
            }}
          >
            Faça a sua marcação
          </Button>
        </VStack>
        {transitions((style, i) => (
          <animated.img
            style={{
              ...style,
              width: '100vw',
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'opacity',
              backgroundImage: `url(${IMAGES[photoIndex]})`,
              backgroundColor: 'rgba(7, 63, 86, 0.45)',
              backgroundBlendMode: 'multiply',
            }}
          />
        ))}

        {/* Slider */}
        {/* <Slider {...settingsHero} ref={(slider) => setSlider(slider)}>
          {images.map((url, index) => (
            <Box
              key={index}
              height={'6xl'}
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              backgroundImage={`url(${url})`}
              backgroundColor={'rgba(7, 63, 86, 0.45)'}
              backgroundBlendMode={'multiply'}
            >
              <Center
                position='relative'
                textAlign='center'
                display='flex'
                z-index={2}
                justifyContent='center'
                height={'100%'}
                width={'100%'}
              >
                <HStack
                  h={'650px'}
                  alignItems={'center'}
                  w={'800px'}
                  spacing={0}
                >
                  <Image
                    src='/images/hero/M-Care-logo.png'
                    alt='mcare logo'
                    boxSize='350px'
                    objectFit='cover'
                  />
                  <Heading
                    as={'h1'}
                    variant={'header1'}
                    color={'pastelBlue'}
                    ml={-10}
                    textAlign={'left'}
                  >
                    {slogans[index]}
                  </Heading>
                </HStack>
              </Center>
            </Box>
          ))}
        </Slider> */}
      </Box>
    </Box>
  );
}
