'use client';

import { InfoDescription } from '@/data/info';
import { Testimonial } from '@/data/testimonials';
import {
  As,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Favorite } from '@mui/icons-material';

interface ImageContainerProps {
  as: As;
  variant: string;
  info?: InfoDescription;
  testimonial?: Testimonial;
  imageRight?: boolean;
  bgColor?: string;
  last?: boolean;
}

export default function ContainerWithImage({
  info,
  testimonial,
  as,
  variant,
  imageRight = false,
  bgColor,
  last = false,
}: ImageContainerProps) {
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
            alt={info?.image.alt || testimonial?.imageAlt}
            src={info?.image.src || testimonial?.image}
            objectFit={'cover'}
          />
        </Flex>
        <Stack
          spacing={8}
          gridArea={imageRight && { base: 'second', md: 'first' }}
          alignItems={{ base: 'center', md: 'normal' }}
        >
          <Heading as={as} variant={variant}>
            {info?.title || testimonial?.author}
          </Heading>
          {info?.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              color={'black'}
              fontSize={'lg'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              {paragraph}
            </Text>
          ))}
          {testimonial?.review && (
            <Text
              color={'black'}
              fontSize={'lg'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              {testimonial.review}
            </Text>
          )}
          {info?.pointDescription && (
            <Text
              color={'black'}
              fontSize={'lg'}
              textAlign={{ base: 'center', md: 'left' }}
              variant={
                info.pointDescription.leadingVariant &&
                info.pointDescription.leadingVariant
              }
            >
              {info?.pointDescription.leading}
            </Text>
          )}
          {info?.pointDescription && (
            <List
              mt={-6}
              ml={4}
              textAlign={'left'}
              spacing={2}
              fontSize={'18px'}
            >
              {info?.pointDescription.bullets.map((bullet, index) => (
                <ListItem key={index}>
                  <ListIcon as={Favorite} color={'darkBlue'} />
                  {bullet}
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
