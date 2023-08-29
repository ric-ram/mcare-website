"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  PopoverArrow,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormHelperText,
  Textarea,
  Checkbox,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Person, Email, Phone } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface NavItem {
  label: string;
  options?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "A MCare",
    children: [
      {
        label: "Sobre nós",
        href: "#",
      },
      {
        label: "Equipa",
        href: "#",
      },
    ],
  },
  {
    label: "Serviços",
    children: [
      {
        label: "Neurologia",
        href: "#",
      },
      {
        label: "Músculo-esquelética",
        href: "#",
      },
      {
        label: "Cardiorrespiratória",
        href: "#",
      },
      {
        label: "Drenagem Linfática",
        href: "#",
      },
      {
        label: "Massagem Terapêutica",
        href: "#",
      },
    ],
  },
  {
    label: "Testemunhos",
    href: "#",
  },
  {
    label: "Marcações",
    options: "mobile-only",
    href: "#",
  },
];

type appointmentsInputs = {
  name: string;
  email: string;
  phone: number;
  message: string;
  agree: boolean;
};

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"pastelBlue"}
        color={useColorModeValue("gray.600", "white")}
        maxH={"97px"}
        py={{ md: 2, base: "28px" }}
        px={{ md: "160px", base: "32px" }}
        borderBottom={1}
        borderStyle={!isOpen ? "solid" : "none"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
          justify={"space-between"}
          align={"center"}
        >
          <Image objectFit="cover" src="/images/LogoMobile.svg" alt="Logo" />
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={"32px"} h={"32px"} color={"darkBlue"} />
              ) : (
                <HamburgerIcon w={"32px"} h={"32px"} color={"darkBlue"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <DesktopNav />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "black";
  const linkHoverColor = "black";
  const popoverContentBgColor = "lightBlue.200";

  return (
    <Flex
      flex={{ base: 1 }}
      justify={"space-between"}
      align={"center"}
      display={{ base: "none", md: "flex" }}
    >
      <Image objectFit="cover" src="/images/LogoDesktop.svg" alt="Logo" />
      <Flex display={{ base: "none", md: "flex" }}>
        <Stack direction={"row"} spacing={3} align={"center"}>
          {NAV_ITEMS.map(
            (navItem) =>
              navItem.options !== "mobile-only" && (
                <Box key={navItem.label}>
                  <Popover trigger={"hover"} placement={"bottom"}>
                    <PopoverTrigger>
                      <Box
                        as="a"
                        p={2}
                        href={navItem.href ?? "#"}
                        fontSize={"16px"}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                          textDecoration: "none",
                          color: linkHoverColor,
                          fontWeight: 600,
                        }}
                      >
                        {navItem.label}
                      </Box>
                    </PopoverTrigger>

                    {navItem.children && (
                      <PopoverContent
                        border={0}
                        boxShadow={"xl"}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={"xl"}
                        width={"auto"}
                      >
                        <PopoverArrow bg={popoverContentBgColor} />
                        <Stack align={"center"}>
                          {navItem.children.map((child) => (
                            <DesktopSubNav key={child.label} {...child} />
                          ))}
                        </Stack>
                      </PopoverContent>
                    )}
                  </Popover>
                </Box>
              )
          )}
          <Popover trigger={"click"} placement={"bottom"}>
            <PopoverTrigger>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"16px"}
                fontWeight={"medium"}
                lineHeight={"24px"}
                py={"24px"}
                px={"24px"}
                ml={8}
                color={"black"}
                bg={"lightBlue.200"}
                href={"#"}
                _hover={{
                  bg: "lightBlue.300",
                  fontWeight: 600,
                }}
              >
                Marcações
              </Button>
            </PopoverTrigger>

            <PopoverContent
              border={0}
              boxShadow={"xl"}
              bg={popoverContentBgColor}
              px={10}
              py={6}
              rounded={"xl"}
              width={"auto"}
            >
              <PopoverArrow bg={popoverContentBgColor} />
              <AppointmentsForm />
            </PopoverContent>
          </Popover>
        </Stack>
      </Flex>
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, options }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      py={2}
      px={4}
      rounded={"md"}
      color="black"
      _hover={{ bg: "lightBlue.400", width: "100%", textAlign: "center" }}
    >
      <Box>
        <Text
          transition={"all .3s ease"}
          _groupHover={{ color: "black" }}
          fontWeight={600}
        >
          {label}
        </Text>
      </Box>
    </Box>
  );
};

const AppointmentsForm = () => {
  const NAME_REGEX = /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]{0,1}$/

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<appointmentsInputs>();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(values);
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel color={"darkBlue"} fontSize={"18px"}>
            Nome
          </FormLabel>

          <InputGroup>
            <InputLeftElement>
              <Icon as={Person} color={"darkBlue"} />
            </InputLeftElement>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Nome"
              bg={"white"}
              width={"320px"}
              height={"44px"}
              focusBorderColor="darkBlue"
              {...register("name", {
                required: "Este campo é obrigatório",
                pattern: { value: NAME_REGEX, message: "Por favor insira um nome válido"},
                minLength: {
                  value: 3,
                  message: "Deve ter pelo menos 3 caracteres",
                },
              })}
            />
          </InputGroup>
          {!errors.name ? (
            <FormHelperText>O seu primeiro e último nome</FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.name.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel color={"darkBlue"} fontSize={"18px"}>
            Email
          </FormLabel>

          <InputGroup>
            <InputLeftElement>
              <Icon as={Email} color={"darkBlue"} />
            </InputLeftElement>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              bg={"white"}
              width={"320px"}
              height={"44px"}
              focusBorderColor="darkBlue"
              {...register("email", {
                required: "Este campo é obrigatório",
              })}
            />
          </InputGroup>
          {!errors.email ? (
            <FormHelperText>O seu email de contacto</FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.email.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.phone)}>
          <FormLabel color={"darkBlue"} fontSize={"18px"}>
            Contacto telefónico
          </FormLabel>

          <InputGroup>
            <InputLeftElement>
              <Icon as={Phone} color={"darkBlue"} />
            </InputLeftElement>
            <Input
              id="phone"
              type="number"
              name="phone"
              placeholder="Telefone"
              bg={"white"}
              width={"320px"}
              height={"44px"}
              focusBorderColor="darkBlue"
              {...register("phone", {
                required: "Este campo é obrigatório",
                minLength: { value: 9, message: "O número deve ter 9 digitos" },
                maxLength: { value: 9, message: "O número deve ter 9 digitos" },
              })}
            />
          </InputGroup>
          {!errors.phone ? (
            <FormHelperText>O seu número de telemóvel</FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.phone.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.message)}>
          <FormLabel color={"darkBlue"} fontSize={"18px"}>
            Mensagem
          </FormLabel>

          <InputGroup>
            <Textarea
              //value={message}
              id="message"
              name="message"
              placeholder="Mensagem..."
              bg={"white"}
              width={"320px"}
              minHeight={"120px"}
              focusBorderColor="darkBlue"
              //onChange={handleMessageInputChange}
              {...register("message", {
                required: "Este campo é obrigatório",
              })}
            />
          </InputGroup>
          {!errors.message ? (
            <FormHelperText width={"320px"}>
              Por favor deixe-nos uma mensagem para que possa ser contactada
              mais tarde
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              {errors.message.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.agree)}>
          <Checkbox
          id="agree"
          name='agree'
            size="md14"
            iconSize={"10px"}
            borderColor={"darkBlue"}
            variant={"rounded"}
            _hover={{
              "& .chakra-checkbox__control": {
                background: "grey",
                borderColor: "darkBlue",
              },
            }}
            _checked={{
              "& .chakra-checkbox__control": {
                background: "darkBlue",
                borderColor: "darkBlue",
              },
            }}
            {...register("agree", {
              required: {value: true, message: "Este campo é obrigatório"},
            })}
          >
            <Text color={"black"}>
              Li e aceito os termos da{" "}
              <Link href="#" color={"darkBlue"}>
                política de privacidade.
              </Link>
            </Text>
          </Checkbox>
          <FormErrorMessage>
              {errors.agree && errors.agree.message?.toString()}
            </FormErrorMessage>
        </FormControl>

        <Button
          mt={6}
          colorScheme="darkBlues"
          type="submit"
          variant="customSolid"
          size={"regular"}
          isLoading={isSubmitting}
        >
          Enviar Mensagem
        </Button>
      </VStack>
    </form>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"pastelBlue"} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={0}
      onClick={children && onToggle}
      align={"center"}
      _hover={{
        bg: "lightBlue.200",
      }}
    >
      <Flex
        gap={1}
        as="a"
        href={href ?? "#"}
        justifyContent="center"
        alignItems="center"
        _hover={{
          bg: "lightBlue.200",
          width: "100%",
        }}
      >
        <Text
          fontWeight={!isOpen ? 400 : 600}
          fontSize={"18px"}
          lineHeight={"24px"}
          color={"darkBlue"}
          textAlign={"center"}
          py={3}
          px={6}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronRightIcon}
            w={6}
            h={6}
            color={"darkBlue"}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(90deg)" : ""}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important", width: "100%" }}
      >
        <Stack align={"center"} spacing={0} width={"inherit"}>
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                width={"inherit"}
                href={child.href}
                _hover={{
                  bg: "darkBlue",
                }}
              >
                <Text
                  fontWeight={!isOpen ? 400 : 600}
                  fontSize={"18px"}
                  lineHeight={"24px"}
                  color={"darkBlue"}
                  textAlign={"center"}
                  py={3}
                  px={6}
                  _hover={{
                    color: "white",
                    bg: "darkBlue",
                  }}
                >
                  {child.label}
                </Text>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

