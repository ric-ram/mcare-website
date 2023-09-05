'use client';

import { Avatar, Box, Button, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

type ServiceCardProps = {
  name: string;
  image: string;
  href: string;
};

export default function ServiceCard({ name, image, href }: ServiceCardProps) {
  return (
    <Box
      minWidth={'255px'}
      minHeight={'350px'}
      bg='pastelBlue'
      rounded='lg'
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap={6}
      py={9}
      shadow={'md'}
    >
      <Avatar
        size={'2xl'}
        src=''
        border={'1px solid'}
        borderColor={'darkBlue'}
      />
      <Heading as='h4' variant={'header4'}>
        {name}
      </Heading>
      <NextLink href={href} passHref>
        <Button colorScheme='darkBlues' variant='darkSolid' size={'lg'}>
          Saber mais
        </Button>
      </NextLink>
    </Box>
  );
}
