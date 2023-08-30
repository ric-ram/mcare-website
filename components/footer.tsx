"use client";

import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Link,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Facebook, Instagram } from "@mui/icons-material";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"600"} fontSize={"24px"} lineHeight={'40px'}>
      {children}
    </Text>
  );
};

const FooterLink = ({ children }: { children: ReactNode }) => {
    return (
      <Link href='#' fontWeight={"400"} fontSize={"16px"} lineHeight={'24px'}>
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
    <Link href="#">
        <IconButton icon={children} colorScheme={'lightBlue'} aria-label={label} variant='ghost'/>
    </Link>
  );
};

export default function Footer() {
  return (
    <Box bg={"darkBlue"} color={"white"} py={"50px"} position={'relative'} bottom={0} left={0} right={0}>
      <Container as={Stack} maxW={"full"} pt={10} pb={14} px={{ md: "160px", base: "32px" }} align={"space-between"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} justifyItems={'center'}>
          <Stack align={{ base: 'center', md: "flex-start"}} spacing={'18px'}>
            <ListHeader>A MCare</ListHeader>
            <FooterLink>
              Sobre nós
            </FooterLink>
            <FooterLink>
              Equipa
            </FooterLink>
            <FooterLink>
              Recrutar
            </FooterLink>
            <FooterLink>
              Testemunhos
            </FooterLink>
          </Stack>

          <Stack align={{ base: 'center', md: "flex-start"}} spacing={'18px'}>
            <ListHeader>Serviços</ListHeader>
            <FooterLink>
              Cardiorrespiratório
            </FooterLink>
            <FooterLink>
              Drenagem Linfática
            </FooterLink>
            <FooterLink>
              Massagem Terapêutica
            </FooterLink>
            <FooterLink>
              Músculo-esquelética
            </FooterLink>
            <FooterLink>
              Neurologia
            </FooterLink>
          </Stack>

          <Stack align={{ base: 'center', md: "flex-start"}} spacing={'18px'}>
            <ListHeader>Contactos</ListHeader>
            <Box as="a" href={"#"}>
              geral@mcare.com.pt
            </Box>
            <Box as="a" href={"#"}>
              +351 962 915 285
            </Box>
            <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"}>
              <Facebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <Instagram />
            </SocialButton>
          </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={'white'}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={"column"}
          align={"center"}
        >
          <Text>© 2023 MCare</Text>
        </Container>
      </Box>
    </Box>
  );
}
