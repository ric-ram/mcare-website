import {
  Container,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
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
          Política de Cookies
        </Heading>
        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            O que são cookies?
          </Heading>
          <Text textAlign={'justify'}>
            “Cookies” são pequenas etiquetas de software que são armazenadas nos
            equipamentos de acesso através do navegador (browser), retendo
            apenas informação relacionada com as preferências, não incluindo,
            como tal, os dados pessoais.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Para que servem os Cookies?
          </Heading>
          <Text textAlign={'justify'}>
            Os cookies servem para ajudar a determinar a utilidade, interesse e
            o número de utilizações dos websites, permitindo uma navegação mais
            rápida e eficiente, eliminando a necessidade de introduzir
            repetidamente as mesmas informações.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Os cookies utilizados podem ser:
          </Heading>
          <UnorderedList>
            <ListItem>
              <strong>Cookies Permanentes:</strong> ficam armazenados ao nível
              do navegador de internet (browser) nos seus dispositivos de acesso
              (pc, mobile e tablet) e são utilizados sempre que o utilizador faz
              uma nova visita ao site. Geralmente são utilizados para direcionar
              a navegação de acordo com os interesses do utilizador,
              permitindo-nos prestar um serviço mais personalizado.
            </ListItem>
            <ListItem>
              <strong>Cookies Permanentes:</strong> são temporários, permanecem
              nos cookies do seu navegador de internet (browser) até sair do
              site. A informação obtida permite identificar problemas e fornecer
              uma melhor experiência de navegação.
            </ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Para que se utilizam os cookies no Site da MCare?
          </Heading>
          <Text textAlign={'justify'}>
            Os nossos cookies têm diferentes funções:
          </Text>
          <UnorderedList>
            <ListItem>
              <strong>Cookies Essenciais:</strong> alguns cookies são essenciais
              para aceder a áreas específicas do nosso site. Permitem a
              navegação no site e a utilização das suas aplicações, tal como
              aceder a áreas seguras do site através de login. Sem estes
              cookies, os serviços que o exijam não podem ser prestados.
            </ListItem>
            <ListItem>
              <strong> Cookies Analíticos:</strong> utilizamos estes cookies
              para analisar a forma como os utilizadores usam o site e monitorar
              a performance deste. Isto permite-nos fornecer uma experiência de
              alta qualidade ao personalizar a nossa oferta e rapidamente
              identificar e corrigir quaisquer problemas que surjam. Por
              exemplo, usamos cookies de desempenho para saber quais as páginas
              mais populares, qual o método de ligação entre páginas que é mais
              eficaz, ou para determinar a razão de algumas páginas estarem a
              receber mensagens de erro. Baseado na utilização do site, podemos
              também utilizar estes cookies para destacar artigos ou serviços do
              site que pensamos ser do interesse dos utilizadores. Estes cookies
              são utilizados apenas para efeitos de criação e análise
              estatística, sem nunca recolher informação de caráter pessoal.
            </ListItem>
            <ListItem>
              <strong> Cookies de Funcionalidade:</strong> utilizamos cookies de
              funcionalidade para nos permitir relembrar as preferências do
              utilizador. Por exemplo, os cookies evitam digitar o nome do
              utilizador cada vez que este acede ao site.
            </ListItem>
          </UnorderedList>

          <Text>
            Em resumo, os cookies de funcionalidade guardam as preferências do
            utilizador relativamente à utilização do site, de forma que não seja
            necessário voltar a configurar o site cada vez que o visita.
          </Text>
          <Text>
            Os cookies definidos pelo Google Analytics enviam dados somente para
            o servidor onde está instalado o domínio, o que os torna propriedade
            desse domínio. Estes dados não podem ser alterados ou recuperados
            por nenhum serviço ou por outro domínio. A informação obtida através
            destes meios não permite estabelecer qualquer relacionamento ao
            nível do endereço de IP dos utilizadores com o propósito de
            verificar dados pessoais. Consulta de informações adicionais sobre a
            recolha de dados pelo Google Analytics em
            <Link
              href='www.google.com/policies/privacy/partners/'
              color={'pastelBlues.500'}
              isExternal
            >
              www.google.com/policies/privacy/partners/
            </Link>
            .
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            É possível desativar a utilização de cookies?
          </Heading>
          <Text textAlign={'justify'}>
            A maioria dos programas de navegação está definida para aceitar
            cookies, embora seja possível configurar o navegador para recusar
            todos os cookies (ver abaixo), ou para indicar quando um cookie está
            a ser enviado.
          </Text>
          <Text>
            Se pretende bloquear ou apagar os cookies deste site, pode fazê-lo
            modificando a configuração do seu browser. Embora a parametrização
            de cada um seja diferente, é comum que se configure no menu de
            “Preferências” ou “Ferramentas”. Para mais detalhes sobre a
            configuração dos cookies, consulte o menu “Ajuda” do seu browser.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
