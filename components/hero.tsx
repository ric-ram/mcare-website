'use client';

import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { animated, useTransition } from '@react-spring/web';
import { useState } from 'react';

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
          zIndex={2}
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
