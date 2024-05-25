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

export default function Util() {
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
          Política De Utilização
        </Heading>
        <Stack spacing={6}>
          <Text textAlign={'justify'}>
            O Utilizador do site reconhece que ao usar este site está a aceitar
            os presentes Termos de Utilização sem praticar qualquer ato que
            possa ser considerado ilícito ou ilegal e que possa afetar os
            direitos da CAREMCG, Lda ou de terceiros, ou que possa atentar
            contra a moral ou os bons costumes.
          </Text>

          <Text>
            O Utilizador obriga-se expressamente a não praticar qualquer dos
            seguintes atos:.
          </Text>
          <UnorderedList>
            <ListItem>
              Destruir, alterar, inutilizar ou de qualquer outra forma provocar
              danos nos dados, programas ou documentos eletrónicos da CAREMCG,
              Lda ou de terceiros incluídos nesta página web. A prática destes
              atos pode constituir um crime de dano, previsto e punido pelos
              artigos 212.º e seguintes do Código Penal;
            </ListItem>
            <ListItem>
              Impedir ou dificultar o acesso por parte de outros Utilizadores à
              página web da CAREMCG, Lda através do uso do recurso excessivo a
              meios informáticos que causem danos, interrompam ou provoquem
              erros ou distorções no acesso à página web;
            </ListItem>
            <ListItem>
              Enviar correio electrónico excessivo, para fins comerciais ou
              publicitários, sem conhecimento do destinatário;
            </ListItem>
            <ListItem>
              Ler, eliminar, copiar ou alterar as mensagens de correio
              electrónico de outros Utilizadores ou tentar praticar algum desses
              atos. A prática destes atos pode constituir o crime de violação de
              telecomunicações, previsto e punido pelo artigo 194.º do Código
              Penal;
            </ListItem>
            <ListItem>
              Utilizar a página web para tentar aceder a áreas restritas dos
              sistemas informáticos da CAREMCG, Lda ou de terceiros;
            </ListItem>
            <ListItem>
              Introduzir programas, vírus, macros, applets, controlos ActiveX ou
              qualquer outro dispositivo lógico ou sequência de caracteres que
              causem ou possam causar qualquer tipo de alteração na página web
              ou nos sistemas informáticos da CAREMCG, Lda ou de terceiros.
            </ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Alteração dos Termos de Utilização
          </Heading>
          <Text textAlign={'justify'}>
            A CAREMCG, Lda reserva-se o direito de, a qualquer momento, sem
            necessidade de aviso prévio e com efeitos imediatos, alterar,
            adicionar, atualizar ou eliminar, parcial ou totalmente os presentes
            Termos de Utilização.
          </Text>
          <Text>
            O Utilizador deve consultar periodicamente a página destes Termos de
            Utilização para verificar se ocorreram quaisquer atualizações ou
            modificações.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Acesso ao Site
          </Heading>
          <Text textAlign={'justify'}>
            A CAREMCG, Lda tem o direito exclusivo de a qualquer momento,
            suspender, parcial ou totalmente, o acesso ao site, em especial nas
            operações de gestão, manutenção, reparação, alteração ou
            modernização e encerrar, definitiva ou temporariamente, parcial ou
            totalmente, a qualquer momento, de acordo com a sua vontade, o site
            ou qualquer um dos serviços, sem aviso prévio.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Direitos de Propriedade Intelectual
          </Heading>
          <Text textAlign={'justify'}>
            O Utilizador reconhece que os conteúdos deste site estão protegidos
            por direitos de propriedade intelectual e obriga-se a respeitar tais
            direitos.
          </Text>
          <Text>
            Os direitos sobre textos, imagens, gráficos, som e animação e todas
            as outras informações, bem como o modo como são representadas
            graficamente no site, incluindo as marcas, logótipos, símbolos e a
            disposição e estrutura do site são da titularidade da CAREMCG, Lda.
          </Text>
          <Text>
            O Utilizador não está autorizado a transmitir, publicar, modificar,
            copiar, vender, utilizar ou distribuir, por qualquer forma, os
            textos, imagens ou outras informações contidas neste site ou parte
            do site sem autorização prévia, por escrito, da CAREMCG, Lda. A
            utilização de marcas e logótipos neste site assim como a
            disponibilização dos materiais existentes no site, não concedem, nem
            podem ser interpretados como concedendo, permissão aos Utilizadores
            para utilizar, direta ou indiretamente, tais marcas, logótipos ou
            materiais.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Dados Pessoais
          </Heading>
          <Text textAlign={'justify'}>
            A utilização deste site não implica necessariamente o fornecimento
            de dados pessoais. No entanto, caso pretenda solicitar pedidos de
            esclarecimento, sugestões ou proceder à marcação de consultas deverá
            indicar-nos alguns dados, incluindo o seu nome, endereço de e-mail e
            número de telefone, sendo os mesmos tratados nos termos definidos na
            Política de Privacidade, disponível neste site.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Informações
          </Heading>
          <Text textAlign={'justify'}>
            A informação disponibilizada no site visa essencialmente esclarecer
            e informar os Utilizadores sobre aspetos relativos à atividade e aos
            serviços prestados pela CAREMCG, Lda.
          </Text>
          <Text>
            As informações disponibilizadas foram objeto de análise minuciosa.
            No entanto, tais informações têm um carácter meramente indicativo,
            podendo conter erros ou imprecisões, e não dispensando, por exemplo,
            a consulta aos serviços médicos.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Responsabilidade
          </Heading>
          <Text textAlign={'justify'}>
            O site{' '}
            <Link
              href='https://mcare.com.pt/'
              color={'pastelBlues.500'}
              isExternal
            >
              https://mcare.com.pt/
            </Link>{' '}
            poderá disponibilizar links para páginas de outras entidades. Estes
            sites não pertencem, nem são operados ou controlados pela CAREMCG,
            Lda, pelo que não se responsabiliza, aprova ou por qualquer forma
            apoia ou subscreve o conteúdo desses sites, nem dos sites com ele
            ligados ou neles referidos. A utilização destes links é da inteira
            responsabilidade dos Utilizadores.
          </Text>
          <Text>
            A criação de links para o site{' '}
            <Link
              href='https://mcare.com.pt/'
              color={'pastelBlues.500'}
              isExternal
            >
              https://mcare.com.pt/
            </Link>{' '}
            carece de autorização prévia, por escrito.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Validade dos Termos e Condições de Utilização
          </Heading>
          <Text textAlign={'justify'}>
            Se alguma parte ou disposição dos presentes Termos de Utilização não
            for executável ou estiver em conflito com a lei aplicável, a
            validade das restantes partes ou disposições não será afetada.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Lei Aplicável
          </Heading>
          <Text textAlign={'justify'}>
            À gestão, administração, utilização e aplicação dos Termos de
            Utilização do site é aplicável a Lei Portuguesa.
          </Text>
        </Stack>

        <Stack spacing={6}>
          <Heading as={'h3'} variant={'header3'}>
            Foro Competente
          </Heading>
          <Text textAlign={'justify'}>
            Para dirimir, todas as questões e litígios que possam surgir,
            inerentes aos presentes Termos e Condições, é competente em
            exclusivo o foro da Comarca de Lisboa, com expressa renúncia de
            qualquer outro.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
