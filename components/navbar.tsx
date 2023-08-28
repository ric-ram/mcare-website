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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

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
                <CloseIcon w={"32px"} h={"32px"} color={"darkCustomBlue"} />
              ) : (
                <HamburgerIcon w={"32px"} h={"32px"} color={"darkCustomBlue"} />
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
          {NAV_ITEMS.map((navItem) => (
            navItem.options !== 'mobile-only' && 
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
                      fontWeight: 600
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
          ))}
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
              fontWeight: 600
            }}
          >
            Marcações
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, options}: NavItem) => {
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
          color={"darkCustomBlue"}
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
            color={"darkCustomBlue"}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(90deg)" : ""}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important", width: '100%' }}>
        <Stack align={"center"} spacing={0} width={'inherit'}>
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                width={'inherit'}
                href={child.href}
                _hover={{
                    bg: 'darkCustomBlue',
                  }}
              >
                <Text
                  fontWeight={!isOpen ? 400 : 600}
                  fontSize={"18px"}
                  lineHeight={"24px"}
                  color={"darkCustomBlue"}
                  textAlign={"center"}
                  py={3}
                  px={6}
                  _hover={{
                    color: 'white',
                    bg: 'darkCustomBlue'
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
    options: 'mobile-only',
    href: "#",
  },
];
