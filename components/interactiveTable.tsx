'use client';

import {
  AreaDescriptionProps,
  HighlightedItemButtonProps,
  InteractiveTableProps,
  SpecialtyDescriptionProps,
} from '@/app/types/componentTypes';
import { Area } from '@/data/areas';
import { Specialty } from '@/data/specialties';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HighlightButton = ({
  item,
  activeItem,
  onClick,
}: HighlightedItemButtonProps) => {
  return (
    <Box
      key={item.label}
      name={item.label}
      pl={3}
      pr={5}
      py={5}
      as='button'
      borderTop={'1px solid'}
      borderColor={'darkBlue'}
      width={'100%'}
      fontSize={'24px'}
      lineHeight={'32px'}
      textAlign={{ base: 'center', lg: 'left' }}
      fontWeight={'500'}
      color={activeItem.label === item.label ? 'pastelBlue' : 'darkBlue'}
      noOfLines={1}
      bg={activeItem.label === item.label && 'darkBlue'}
      _hover={{
        lg: {
          bg: 'darkBlues.600',
          color: 'pastelBlue',
        },
      }}
      onClick={onClick}
    >
      {item.label}
    </Box>
  );
};

const SelectedSpecialtyDescription = ({
  activeSpecialty,
}: SpecialtyDescriptionProps) => {
  return (
    <VStack
      spacing={8}
      alignItems={'center'}
      py={8}
      display={{ base: 'none', lg: 'flex' }}
    >
      <Heading as={'h3'} variant={'header3'}>
        {activeSpecialty.label}
      </Heading>
      <Flex direction='column' alignItems='flex-start' gap={4}>
        <Text textAlign={'left'}>{activeSpecialty.summary}</Text>
        {activeSpecialty.areas && (
          <UnorderedList textAlign={'left'}>
            {activeSpecialty.areas.map((bullet, index) => (
              <ListItem key={index}>{bullet}</ListItem>
            ))}
          </UnorderedList>
        )}
      </Flex>
      <Button
        as={'a'}
        display={{ base: 'none', lg: 'inline-flex' }}
        fontSize={'18px'}
        fontWeight={'medium'}
        lineHeight={'24px'}
        py={'24px'}
        px={'24px'}
        ml={8}
        color={'black'}
        bg={'lightBlue.200'}
        href={'/especialidades/' + activeSpecialty.specialtyId}
        _hover={{
          bg: 'lightBlue.300',
          fontWeight: 600,
        }}
      >
        Saber mais
      </Button>
    </VStack>
  );
};

const SubAreaSection = ({ subArea, index }) => {
  return (
    <Stack key={index}>
      <Heading as={'h4'} variant={'header4'}>
        {subArea.title}
      </Heading>
      <UnorderedList>
        {subArea.description.map((description, index) => (
          <ListItem key={index}>{description} </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};

const SelectedAreaDescription = ({ activeArea }: AreaDescriptionProps) => {
  return (
    <VStack
      spacing={8}
      alignItems={'center'}
      py={8}
      display={{ base: 'none', lg: 'flex' }}
    >
      <Heading as={'h3'} variant={'header3'}>
        {activeArea.label}
      </Heading>
      <Flex direction='column' alignItems='flex-start' gap={4}>
        <Text textAlign={'left'}>{activeArea.descriptionParagraphs}</Text>
        {activeArea.bullets && (
          <UnorderedList textAlign={'left'}>
            {activeArea.bullets.map((bullet, index) => (
              <ListItem key={index}>{bullet}</ListItem>
            ))}
          </UnorderedList>
        )}
        {activeArea.subAreas &&
          activeArea.subAreas.map((subArea, index) => (
            <SubAreaSection subArea={subArea} index={index} />
          ))}
        {activeArea.areaNotes &&
          activeArea.areaNotes.map((note) => (
            <Text textAlign={'left'}>{note}</Text>
          ))}
      </Flex>
    </VStack>
  );
};

export default function InteractiveTable({
  bgColor,
  items,
  title,
  type = 'specialty',
}: InteractiveTableProps) {
  const [activeItem, setActiveItem] = useState(items[0]);
  const router = useRouter();

  const handleItemClickDesktop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const activeItemButton: HTMLButtonElement = e.currentTarget;
    const index = items.findIndex(
      (item) => item.label === activeItemButton.name,
    );

    setActiveItem(items[index]);
  };

  const handleItemClickMobile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const activeItemButton: HTMLButtonElement = e.currentTarget;
    const index = items.findIndex(
      (item) => item.label === activeItemButton.name,
    );

    setActiveItem(items[index]);
    router.push(`/especialidades/${items[index].specialtyId}`);
  };

  return (
    <Stack
      py={12}
      px={{ lg: '160px', base: '32px' }}
      alignItems={'center'}
      spacing={{ base: 6, lg: 8 }}
      bg={bgColor}
    >
      <Heading as={'h2'} variant={{ base: 'header2', lg: 'header1' }}>
        {title}
      </Heading>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
        py={8}
        spacing={'100px'}
        maxWidth={'100%'}
        minWidth={{ base: '100%', lg: '680px' }}
      >
        <VStack
          direction={'column'}
          gap={0}
          minWidth={'300px'}
          display={{ base: 'none', lg: 'block' }}
        >
          {items.map((item, index) => (
            <HighlightButton
              key={index}
              item={item}
              onClick={handleItemClickDesktop}
              activeItem={activeItem}
            />
          ))}
        </VStack>
        <VStack
          direction={'column'}
          gap={0}
          minWidth={'300px'}
          display={{ base: 'block', lg: 'none' }}
        >
          {items.map((item, index) => (
            <HighlightButton
              key={index}
              item={item}
              onClick={
                type === 'specialty'
                  ? handleItemClickMobile
                  : handleItemClickDesktop
              }
              activeItem={activeItem}
            />
          ))}
        </VStack>
        <Image
          src='/images/divider.svg'
          display={{ base: 'none', lg: 'block' }}
        />
        {type === 'specialty' ? (
          <SelectedSpecialtyDescription
            activeSpecialty={activeItem as Specialty}
          />
        ) : (
          <SelectedAreaDescription activeArea={activeItem as Area} />
        )}
      </Stack>
    </Stack>
  );
}
