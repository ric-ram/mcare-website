'use client';

import { CardProps, HowToCardProps } from '@/app/types/componentTypes';
import { AREAS, Area } from '@/data/areas';
import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Favorite } from '@mui/icons-material';

const getArea = (id: string) => {
  return AREAS.find((area: Area) => area.areaId === id);
};

export function AreaCard({ id }: CardProps) {
  const area = getArea(id);

  return (
    <Box
      bg={'pastelBlue'}
      maxW={'100%'}
      height={'100%'}
      rounded='lg'
      shadow='md'
      position='relative'
      mx={8}
    >
      <Stack px={{ base: 6, xl: 12 }} py={12} spacing={{ base: 6, xl: 8 }}>
        <Heading
          as='h2'
          variant='header2'
          textAlign={{ base: 'center', md: 'left' }}
        >
          {area.label}
        </Heading>
        <Flex direction='column' alignItems='flex-start' gap={4}>
          <Text textAlign={'left'} fontSize={'lg'}>
            {area.descriptionParagraphs}
          </Text>
          {area.bullets && (
            <UnorderedList textAlign={'left'}>
              {area.bullets.map((bullet, index) => (
                <ListItem key={index}>{bullet}</ListItem>
              ))}
            </UnorderedList>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}

export default function HowToCard({ label, howToSteps }: HowToCardProps) {
  return (
    <Box
      bg={'pastelBlue'}
      maxW={'100%'}
      height={'100%'}
      rounded='lg'
      shadow='md'
      position='relative'
    >
      <Stack px={{ base: 6, xl: 12 }} py={12} spacing={{ base: 6, xl: 8 }}>
        <Heading
          as='h2'
          variant='header2'
          textAlign={{ base: 'center', md: 'left' }}
        >
          {`A ${label} atua em todas estas áreas através de:`}
        </Heading>
        <List textAlign={'left'} spacing={2} fontSize={'18px'}>
          {howToSteps.map((step, index) => (
            <ListItem key={index}>
              <ListIcon as={Favorite} color={'darkBlue'} />
              {step}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}
