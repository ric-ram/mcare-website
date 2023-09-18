'use client';

import {
  As,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

interface ContainerProps {
  title: string;
  texts: string[];
  imageSrc: string;
  imageAlt: string;
  as: As;
  variant: string;
  imageRight?: boolean;
  bgColor?: string;
  last?: boolean;
}

export default function ContainerWithImage({
  title,
  texts,
  imageSrc,
  imageAlt,
  as,
  variant,
  imageRight = false,
  bgColor,
  last = false,
}: ContainerProps) {
  return (
    <Container
      maxWidth='full'
      pt={12}
      pb={last ? 24 : 12}
      px={{ lg: '160px', base: '32px' }}
      bg={bgColor}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        px={8}
        alignItems={'center'}
        templateAreas={{ base: `'first' 'second'`, md: `'first second'` }}
      >
        <Flex
          justifyContent={'flex-end'}
          gridArea={imageRight && { base: 'first', md: 'second' }}
        >
          <Image
            rounded={'md'}
            alt={imageAlt}
            src={imageSrc}
            objectFit={'cover'}
          />
        </Flex>
        <Stack
          spacing={8}
          gridArea={imageRight && { base: 'second', md: 'first' }}
          alignItems={{ base: 'center', md: 'normal' }}
        >
          <Heading as={as} variant={variant}>
            {title}
          </Heading>
          {texts.map((text, index) => (
            <Text
              key={index}
              color={'black'}
              fontSize={'lg'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              {text}
            </Text>
          ))}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
