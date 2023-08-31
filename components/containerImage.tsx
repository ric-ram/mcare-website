"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ImageSearchRounded } from "@mui/icons-material";
import { ReactElement } from "react";

interface ContainerProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
  bgColor?: string;
}

export default function ContainerWithImage({
  title,
  text,
  imageSrc,
  imageAlt,
  imageRight = false,
  bgColor,
}: 
ContainerProps) {
  return (
    <Container
      maxWidth="full"
      py={12}
      px={{ lg: "160px", base: "32px" }}
      bg={bgColor}
    >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} px={8} alignItems={'center'} templateAreas={{base: `'first' 'second'`, md:`'first second'`}} >
           <Flex justifyContent={'flex-end'} gridArea={imageRight && {base: 'first', md: 'second'}}>
            <Image
              rounded={"md"}
              alt={imageAlt}
              src={imageSrc}
              objectFit={"cover"}
              
            />
          </Flex>
          <Stack spacing={8} gridArea={imageRight && {base: 'second', md: 'first'}} alignItems={{base: 'center', md: 'normal'}}>
            <Heading as="h1" variant="header1">
              {title}
            </Heading>
            <Text color={"black"} fontSize={"lg"} textAlign={{base: 'center', md: 'left'}}>
              {text}
            </Text>
          </Stack>
        </SimpleGrid>
    </Container>
  );
}
