'use client';

import { SERVICES, Service } from '@/data/services';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export type CardProps = {
  id: string;
};

const getService = (id: string) => {
  return SERVICES.find((service: Service) => service.serviceId === id);
};

export default function ServiceCard({ id }: CardProps) {
  const service = getService(id);

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
          {service.label}
        </Heading>
        <Flex direction='column' alignItems='flex-start' gap={4}>
          <Text textAlign={'left'} fontSize={'lg'}>
            {service.description}
          </Text>
          {service.bullets && (
            <UnorderedList textAlign={'left'}>
              {service.bullets.map((bullet, index) => (
                <ListItem key={index}>{bullet}</ListItem>
              ))}
            </UnorderedList>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}
