import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react';
//import Link from 'next/link';

export default function Privacy() {
  return (
    <Container maxWidth={'1120px'}>
      <Stack
        pt={12}
        pb={24}
        position={'relative'}
        minHeight={'650px'}
        overflow={'hidden'}
        alignItems={'stretch'}
        spacing={12}
      >
        <Heading as={'h1'} variant={'header1'}>
          Política de Privacidade
        </Heading>
        <Stack spacing={6}>
          <Text textAlign={'justify'}>
            A CAREMCG, Lda garante aos Utilizadores deste site o respeito pela
            sua privacidade.
          </Text>

          <Text>
            A visita ao presente site, por si só, não implica o registo, de
            forma automática, de qualquer dado pessoal que identifique o
            Utilizador. No entanto, a utilização de determinados conteúdos ou
            serviços, nomeadamente, a subscrição da newsletter, poderá implicar
            a disponibilização pelos Utilizadores de dados pessoais.
          </Text>
          <Text>
            A presente Política de Privacidade faz parte integrante dos{' '}
            <Link href='termos-utilizacao' color={'pastelBlues.500'}>
              Termos de Utilização
            </Link>{' '}
            do site www.mcare.com.pt e regula a recolha e tratamento dos dados
            pessoais fornecidos pelos Utilizadores, assim como o exercício dos
            seus direitos relativamente a estes dados, nos termos do Regulamento
            Geral de Proteção de Dados Pessoais em vigor.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Recolha e Tratamento de Dados
          </Heading>
          <Text textAlign={'justify'}>
            Os dados pessoais recolhidos serão processados e armazenados
            informaticamente pela CAREMCG, Lda e destinam-se a dar resposta aos
            seus pedidos de marcação de consultas, bem como aos seus
            comentários, pedidos de esclarecimento e sugestões.
          </Text>
          <Text>
            A CAREMCG, Lda assume que os dados recolhidos foram inseridos pelo
            respetivo titular e que a sua inserção foi autorizada pelo mesmo,
            sendo os mesmos verdadeiros e exatos.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Direito de Acesso
          </Heading>
          <Text textAlign={'justify'}>
            Em cumprimento do disposto no Regulamento (UE) 2016/679 do
            Parlamento Europeu e do Conselho de 27 de Abril de 2016 (Regulamento
            Geral sobre a Protecção de Dados), o utilizador poderá, a qualquer
            momento, exercer os direitos de acesso, retificação e cancelamento
            dos seus dados, bem como o direito de oposição ao tratamento dos
            mesmos, mediante pedido escrito dirigido à CAREMCG, Lda - Rua Mário
            Costa N18 Praia da Areia Branca 2530-239 Lourinhã , ou através do
            email geral@mcare.com.pt.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Comunicação de Dados​
          </Heading>
          <Text textAlign={'justify'}>
            A CAREMCG, Lda poderá comunicar os seus dados pessoais a terceiros
            desde que para o efeito tenha obtido de forma inequívoca o
            consentimento dos Utilizadores ou ainda quando a transmissão seja
            efetuada no âmbito do cumprimento de uma obrigação legal, de uma
            deliberação da Comissão Nacional de Proteção de Dados ou de uma
            ordem judicial; ou a comunicação seja levada a cabo para proteger
            interesses vitais dos Utilizadores ou qualquer outra finalidade
            legítima prevista na lei.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Alterações à Política de Privacidade
          </Heading>
          <Text textAlign={'justify'}>
            A CAREMCG, Lda reserva-se o direito de, a todo o momento e sem aviso
            prévio e com efeitos imediatos, alterar, acrescentar ou revogar,
            parcial ou totalmente, a presente Política de Privacidade.
          </Text>
          <Text>
            Quaisquer alterações serão imediatamente divulgadas nesta mesma
            página online.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
