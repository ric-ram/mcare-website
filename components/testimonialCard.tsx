'use client';

import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import {
  StarHalfRounded,
  StarOutlineRounded,
  StarRounded,
} from '@mui/icons-material';

interface RatingProps {
  rating: number;
}

export type TestimonialCardProps = {
  author: string;
  review: string;
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <Box display='flex' alignItems='center' marginLeft={-1}>
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return <Icon key={i} as={StarRounded} color={'yellow'} ml={1} />;
          }
          if (roundedRating - i === 0.5) {
            return (
              <Icon key={i} as={StarHalfRounded} color={'yellow'} ml={1} />
            );
          }
          return (
            <Icon key={i} as={StarOutlineRounded} color={'yellow'} ml={1} />
          );
        })}
    </Box>
  );
}

export default function TestimonialCard({
  author,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <Box
      bg={'lightBlue.200'}
      maxW={{ base: '246px', xl: '396px' }}
      maxH={{ base: '380px', xl: '340px' }}
      rounded='lg'
      shadow='md'
      position='relative'
      mx={8}
    >
      <Stack px={{ base: 3, xl: 6 }} py={8} spacing={{ base: 6, xl: 16 }}>
        <Flex
          justifyContent='space-between'
          align={{ base: 'center', xl: 'flex-start' }}
          direction='column'
          gap={{ base: 4, xl: 6 }}
        >
          <Rating rating={rating} />
          <Text textAlign={{ base: 'center', xl: 'left' }}>{review}</Text>
        </Flex>
        <Flex justifyContent='space-between' alignContent='center'>
          <Box
            fontSize='2xl'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            - {author}
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
