'use client';

import { RecruitForm } from '@/components/forms';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

export default function Recruit() {
  return (
    <Container maxWidth={'1120px'}>
      <Stack
        pt={12}
        pb={24}
        position={'relative'}
        minHeight={'650px'}
        overflow={'hidden'}
        alignItems={'stretch'}
        spacing={16}
      >
        <Stack spacing={8} alignItems={'center'}>
          <Heading as={'h2'} variant={{ base: 'header2', lg: 'header1' }}>
            Recrutar
          </Heading>
          <Text fontSize={'18px'} lineHeight={'24px'} textAlign={'center'}>
            Gostarias de trabalhar connosco? Preenche o formulario em baixo e
            deixa-nos conhecer-te melhor. Iremos entrar em contacto contigo
            assim que nos for possível.
          </Text>
        </Stack>
        <RecruitForm />
      </Stack>
    </Container>
  );
}
