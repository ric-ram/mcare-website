import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle, extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'] });

type AccessibleColor = {
    bg?: string
    color?: string
    hoverBg?: string
    activeBg?: string
}

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)


const variantRounded = definePartsStyle({
    control: defineStyle({
        borderRadius: '4px',
    })
})

const accessibleColorMap: { [key: string]: AccessibleColor } = {
    yellow: {
        bg: "yellow.400",
        color: "black",
        hoverBg: "yellow.500",
        activeBg: "yellow.600",
    },
    cyan: {
        bg: "cyan.400",
        color: "black",
        hoverBg: "cyan.500",
        activeBg: "cyan.600",
    },
}

const variantDarkSolid = defineStyle((props) => {
    const { colorScheme: c } = props

    if (c === "gray") {
        const bg = mode(`gray.100`, `whiteAlpha.200`)(props)

        return {
            bg,
            color: mode(`gray.800`, `whiteAlpha.900`)(props),
            _hover: {
                bg: mode(`gray.200`, `whiteAlpha.300`)(props),
                _disabled: {
                    bg,
                },
            },
            _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
        }
    }

    const {
        bg = `${c}.800`,
        color = "white",
        hoverBg = `${c}.600`,
        activeBg = `${c}.700`,
    } = accessibleColorMap[c] ?? {}

    const background = mode(bg, `${c}.800`)(props)

    return {
        bg: background,
        color: mode(color, `gray.800`)(props),
        _hover: {
            bg: mode(hoverBg, `${c}.300`)(props),
            _disabled: {
                bg: background,
            },
        },
        _active: { bg: mode(activeBg, `${c}.400`)(props) },
    }
})

const variantLightSolid = defineStyle((props) => {
    const { colorScheme: c } = props

    if (c === "gray") {
        const bg = mode(`gray.100`, `whiteAlpha.200`)(props)

        return {
            bg,
            color: mode(`gray.800`, `whiteAlpha.900`)(props),
            _hover: {
                bg: mode(`gray.200`, `whiteAlpha.300`)(props),
                _disabled: {
                    bg,
                },
            },
            _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
        }
    }

    const {
        bg = `${c}.50`,
        color = "white",
        hoverBg = `${c}.100`,
        activeBg = `${c}.200`,
    } = accessibleColorMap[c] ?? {}

    const background = mode(bg, `${c}.50`)(props)

    return {
        bg: background,
        color: mode(color, `gray.800`)(props),
        _hover: {
            bg: mode(hoverBg, `${c}.300`)(props),
            _disabled: {
                bg: background,
            },
        },
        _active: { bg: mode(activeBg, `${c}.400`)(props) },
    }
})

const buttonRegular = defineStyle({
    fontSize: '16px',
    fontWeight: 'medium',
    lineHeight: '24px',
    px: '6',
    py: '3',
    h: '48px',
    w: '183px',
    borderRadius: '4px',
})

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontSize: '16px',
            },
            'a': {
                fontSize: '16px'
            }
        }
    },
    fonts: {
        heading: quicksand.style.fontFamily,
    },
    colors: {
        pastelBlue: '#EFFBFF',
        pastelBlues:
        {
            50: '#e5f9ff',
            100: '#bbebfb',
            200: '#8fddf9',
            300: '#68d0f7',
            400: '#4ec4f6',
            500: '#41aadc',
            600: '#3285ab',
            700: '#235f7a',
            800: '#113849',
            900: '#00131a',
        },
        lightBlue:
        {
            50: '#e2f7fe',
            100: '#c4e2ec',
            200: '#a2cedc',
            300: '#7fbacd',
            400: '#5da5be',
            500: '#458da5',
            600: '#346e81',
            700: '#234e5d',
            800: '#102f3a',
            900: '#001218',
        },
        darkBlue: '#073F56',
        darkBlues:
        {
            50: '#e1f8ff',
            100: '#b8e6f9',
            200: '#8ed5f3',
            300: '#64c4ef',
            400: '#41b4e9',
            500: '#2f9acf',
            600: '#2278a2',
            700: '#165674',
            800: '#063447',
            900: '#00121b',
        }
    },
    components: {
        Checkbox: {
            defaultProps: {
                size: 'sm',
                color: 'black'
            },
            variants: {
                rounded: variantRounded,
            },
            sizes: {
                md14: definePartsStyle({
                    control: defineStyle({
                        boxSize: "18px"
                    }),
                    label: defineStyle({
                        fontSize: "14px",
                        marginLeft: '4px'
                    })
                })
            }
        },
        Button: {
            sizes: {
                regular: buttonRegular,
            },
            variants: {
                darkSolid: variantDarkSolid,
                lightSolid: variantLightSolid
            }
        },
        Heading: {
            variants: {
                'header1': {
                    color: 'darkBlue',
                    fontWeight: 'bold',
                    fontSize: () => ({ base: '48px', md: '56px' }),
                    lineHeight: '64px',
                },
                'header2': {
                    color: 'darkBlue',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '48px',
                },
                'header3': {
                    color: 'darkBlue',
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '40px',
                },
                'header4': {
                    color: 'darkBlue',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '24px',
                }
            }
        },
        Select: {
            field: {
                background: 'darkBlues.600',
            },
            icon: {
                color: 'darkBlue',
            }
        }
    }
})

export default theme