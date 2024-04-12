'use client';

import { InfoDescription } from '@/data/info';
import {
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Favorite } from '@mui/icons-material';

type SimpleContainerProps = {
  info: InfoDescription;
  bgColor?: string;
};

export default function SimpleContainer({
  info,
  bgColor,
}: SimpleContainerProps) {
  return (
    <Stack
      maxWidth='full'
      pt={12}
      pb={24}
      px={{ lg: '160px', base: '32px' }}
      bg={bgColor}
      spacing={10}
    >
      <Heading
        as='h2'
        variant='header2'
        textAlign={{ base: 'center', md: 'left' }}
      >
        {info.title}
      </Heading>
      {info.paragraphs.map((paragraph, index) => (
        <Text key={index} textAlign={{ base: 'center', md: 'left' }}>
          {paragraph}
        </Text>
      ))}
      {info.pointDescription && (
        <Heading
          as={'h3'}
          textAlign={{ base: 'center', md: 'left' }}
          variant={info.pointDescription.leadingVariant}
        >
          {info.pointDescription.leading}
        </Heading>
      )}
      {info.pointDescription && (
        <List mt={-6} ml={4} textAlign={'left'} spacing={2} fontSize={'18px'}>
          {info.pointDescription.bullets.map((bullet, index) => (
            <ListItem key={index}>
              <ListIcon as={Favorite} color={'darkBlue'} />
              {bullet}
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}
