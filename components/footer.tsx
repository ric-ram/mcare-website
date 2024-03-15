'use client';

import { SPECIALTIES } from '@/data/specialties';
import {
  Box,
  Container,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize={'24px'} lineHeight={'40px'}>
      {children}
    </Text>
  );
};

const FooterLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <Link href={href} fontWeight={'400'} fontSize={'16px'} lineHeight={'24px'}>
      {children}
    </Link>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  label: string;
  href: string;
}) => {
  return (
    <Link href={href ?? '#'} isExternal>
      <IconButton
        icon={children}
        colorScheme={'lightBlue'}
        aria-label={label}
        variant='ghost'
      />
    </Link>
  );
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      bg={'darkBlue'}
      color={'white'}
      py={'50px'}
      position={'relative'}
      bottom={0}
      left={0}
      right={0}
    >
      <Container
        as={Stack}
        maxW={'full'}
        pt={10}
        pb={14}
        px={{ lg: '160px', base: '32px' }}
        align={'space-between'}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          justifyItems={'center'}
        >
          <Stack align={{ base: 'center', md: 'flex-start' }} spacing={'18px'}>
            <ListHeader>A MCare</ListHeader>
            <FooterLink href='/sobre-mcare'>Sobre nós</FooterLink>
            <FooterLink href='/equipa'>Equipa</FooterLink>
            <FooterLink href='/recrutar'>Recrutar</FooterLink>
            <FooterLink href='/testemunhos'>Testemunhos</FooterLink>
          </Stack>

          <Stack align={{ base: 'center', md: 'flex-start' }} spacing={'18px'}>
            <ListHeader>Áreas</ListHeader>
            {SPECIALTIES.map((service, index) => (
              <FooterLink key={index}>{service.label}</FooterLink>
            ))}
          </Stack>

          <Stack align={{ base: 'center', md: 'flex-start' }} spacing={'18px'}>
            <ListHeader>Contactos</ListHeader>
            <Box as='a' href={'#'}>
              geral@mcare.com.pt
            </Box>
            <Box as='a' href={'#'}>
              +351 962 915 285
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/profile.php?id=100085462548094'}
              >
                <Facebook />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://www.instagram.com/mcare.com.pt/'}
              >
                <Instagram />
              </SocialButton>
              <SocialButton
                label={'Linkedin'}
                href={
                  'https://www.linkedin.com/company/mcare-terapias-ao-domic%C3%ADlio/'
                }
              >
                <LinkedIn />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={'white'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={'column'}
          align={'center'}
        >
          <Text>© 2022 - {year} MCare</Text>
        </Container>
      </Box>
    </Box>
  );
}
