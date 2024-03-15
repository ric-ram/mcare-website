import { ComponentProps, SpecialtyButtonProps, SpecialtyDescriptionProps } from '@/app/types/componentTypes';
import { SPECIALTIES } from '@/data/specialties';
import { Box, Button, Flex, Heading, Image, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const HighlightButton = ({
  specialty: Area,
  activeSpecialty: activeArea,
  onClick,
}: SpecialtyButtonProps) => {
  return (
    <Box
      name={Area.label}
      pl={3}
      pr={5}
      py={5}
      as='button'
      borderTop={'1px solid'}
      borderColor={'darkBlue'}
      width={'full'}
      fontSize={'24px'}
      lineHeight={'32px'}
      textAlign={{ base: 'center', lg: 'left' }}
      fontWeight={'500'}
      color={activeArea.label === Area.label ? 'pastelBlue' : 'darkBlue'}
      noOfLines={1}
      bg={activeArea.label === Area.label && 'darkBlue'}
      _hover={{
        lg: {
          bg: 'darkBlues.600',
          color: 'pastelBlue',
        },
      }}
      onClick={onClick}
    >
      {Area.label}
    </Box>
  );
};

const SelectedDescription = ({
  activeSpecialty: activeArea,
}: SpecialtyDescriptionProps) => {
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
        <Text textAlign={'left'}>{activeArea.description}</Text>
        {activeArea.areas && (
          <UnorderedList textAlign={'left'}>
            {activeArea.areas.map((bullet, index) => (
              <ListItem key={index}>{bullet}</ListItem>
            ))}
          </UnorderedList>
        )}
      </Flex>
      <Button
        as={'a'}
        display={{ base: 'none', lg: 'inline-flex' }}
        fontSize={'16px'}
        fontWeight={'medium'}
        lineHeight={'24px'}
        py={'24px'}
        px={'24px'}
        ml={8}
        color={'black'}
        bg={'lightBlue.200'}
        href={'/areas/' + activeArea.specialtyId}
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

export default function InteractiveTable({ bgColor }: ComponentProps) {
  const [activeSpecialty, setActiveSpecialty] = useState(SPECIALTIES[0]);

  const handleAreaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const activeSpecialty: HTMLButtonElement = e.currentTarget;
    const index = SPECIALTIES.findIndex(
      (Specialty) => Specialty.label === activeSpecialty.name,
    );

    setActiveSpecialty(SPECIALTIES[index]);
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
        Especialidades
      </Heading>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
        // backgroundImage={{ base: '', lg: '/images/divider.svg' }}
        // backgroundRepeat={'no-repeat'}
        // backgroundSize={'contain'}
        // backgroundPosition={{ md: '45% 50%', xl: '35% 50%' }}
        py={8}
        spacing={'100px'}
        maxWidth={'100%'}
        minWidth={'680px'}
      >
        <VStack direction={'column'} gap={0} minWidth={'300px'}>
          {SPECIALTIES.map((Area, index) => (
            <HighlightButton
              key={index}
              specialty={Area}
              onClick={handleAreaClick}
              activeSpecialty={activeSpecialty}
            />
          ))}
        </VStack>
        <Image
          src='/images/divider.svg'
          display={{ base: 'none', lg: 'block' }}
        />
        <SelectedDescription activeSpecialty={activeSpecialty} />
      </Stack>
    </Stack>
  );
}
