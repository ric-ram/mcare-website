'use client';

import { DBTestimonial } from '@/app/context/store';
import { InfoDescription } from '@/data/info';
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
  testimonial?: DBTestimonial;
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
      maxWidth='1120px'
      pt={12}
      pb={last ? 24 : 12}
      //px={{ lg: '160px', base: '32px' }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        //px={8}
        alignItems={'center'}
        templateAreas={{ base: `'first' 'second'`, md: `'first second'` }}
      >
        <Flex
          justifyContent={'flex-end'}
          gridArea={imageRight && { base: 'first', md: 'second' }}
        >
          <Image
            rounded={'md'}
            alt={info?.image.alt || testimonial?.altImage}
            src={info?.image.src || testimonial?.urlImagem}
            objectFit={'cover'}
          />
        </Flex>
        <Stack
          spacing={4}
          gridArea={imageRight && { base: 'second', md: 'first' }}
          alignItems={{ base: 'center', md: 'normal' }}
        >
          <Heading as={as} variant={variant}>
            {info?.title || testimonial?.nome}
          </Heading>
          {info?.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              color={'black'}
              //fontSize={'lg'}
              textAlign={{ base: 'center', md: 'justify' }}
            >
              {paragraph}
            </Text>
          ))}
          {testimonial?.testemunho && (
            <Text
              color={'black'}
              //fontSize={'lg'}
              textAlign={{ base: 'center', md: 'justify' }}
            >
              {testimonial.testemunho}
            </Text>
          )}
          {info?.pointDescription && (
            <Text
              color={'black'}
              mb={4}
              //fontSize={'lg'}
              textAlign={{ base: 'center', md: 'justify' }}
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
              fontSize={'16px'}
            >
              {info?.pointDescription.bullets.map((bullet, index) => (
                <ListItem key={index}>
                  <ListIcon
                    as={Favorite}
                    color={'darkBlue'}
                    fontSize={'16px'}
                  />
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
