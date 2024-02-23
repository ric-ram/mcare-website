'use client';

import { CardProps } from '@/app/types/componentTypes';
import { Area, AREAS } from '@/data/areas';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const getArea = (id: string) => {
  return AREAS.find((area: Area) => area.areaId === id);
};

export default function AreaCard({ id }: CardProps) {
  const area = getArea(id);

  return (
    <Box
      bg={'lightBlue.200'}
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
            {area.description}
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
