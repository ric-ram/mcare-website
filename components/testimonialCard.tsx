'use client';

import { useGlobalContext } from '@/app/context/store';
import { CardProps } from '@/app/types/componentTypes';
import { getTestimonial } from '@/data/testimonials';
import { Box, Flex, Icon, Stack } from '@chakra-ui/react';
import {
  StarHalfRounded,
  StarOutlineRounded,
  StarRounded,
} from '@mui/icons-material';

interface RatingProps {
  rating: number;
}

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

export default function TestimonialCard({ id }: CardProps) {
  const { testimonials } = useGlobalContext();
  const testimonial = getTestimonial(id, testimonials);

  return (
    <Box
      bg={'lightBlue.200'}
      w={{ base: '246px', xl: '396px' }}
      h={{ base: '420px', xl: '400px' }}
      rounded='lg'
      shadow='md'
      position='relative'
      mx={6}
      key={id}
    >
      <Stack px={{ base: 3, xl: 6 }} py={8} spacing={{ base: 6, xl: 16 }}>
        <Flex
          justifyContent='space-between'
          align={{ base: 'center', xl: 'flex-start' }}
          direction='column'
          gap={{ base: 4, xl: 6 }}
        >
          <Rating rating={testimonial.avaliacao} />
          <Box
            textAlign={{ base: 'center', xl: 'left' }}
            maxH={{ base: '220px', xl: '165px' }}
            overflowY='auto'
          >
            {testimonial.testemunho}
          </Box>
        </Flex>
        <Flex justifyContent='space-between' alignContent='center'>
          <Box
            fontSize='2xl'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            - {testimonial.nome}
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
