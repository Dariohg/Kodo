import { extendTheme } from "@chakra-ui/react";

const colors = {
    kodo: {
        black: "#090A0E",
        gold: "#FBDC6A",
        red: "#B12B24",
        darkGray: "#121318",
        lightGray: "#8A8F98",
    },
};

const fonts = {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
};

const styles = {
    global: {
        body: {
            bg: "kodo.black",
            color: "white",
        },
    },
};

const components = {
    Button: {
        baseStyle: {
            borderRadius: "0",
            fontWeight: "400",
            letterSpacing: "1px",
        },
        variants: {
            primary: {
                bg: "kodo.gold",
                color: "kodo.black",
                _hover: {
                    bg: "kodo.gold",
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                },
                transition: "all 0.3s ease",
            },
            secondary: {
                bg: "transparent",
                color: "kodo.gold",
                border: "1px solid",
                borderColor: "kodo.gold",
                _hover: {
                    bg: "rgba(251, 220, 106, 0.1)",
                    transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
            },
            accent: {
                bg: "kodo.red",
                color: "white",
                _hover: {
                    bg: "kodo.red",
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                },
                transition: "all 0.3s ease",
            },
        },
    },
    Heading: {
        baseStyle: {
            color: "white",
            fontWeight: "500",
            letterSpacing: "wider",
        },
    },
    Link: {
        baseStyle: {
            color: "kodo.gold",
            _hover: {
                textDecoration: "none",
                color: "kodo.gold",
                opacity: 0.8,
            },
        },
    },
    Input: {
        baseStyle: {
            field: {
                borderRadius: "0",
                _focus: {
                    boxShadow: "0 0 0 1px rgba(251, 220, 106, 0.6)",
                },
            },
        },
        variants: {
            outline: {
                field: {
                    border: "1px solid",
                    borderColor: "rgba(251, 220, 106, 0.2)",
                    _hover: {
                        borderColor: "rgba(251, 220, 106, 0.4)",
                    },
                    _focus: {
                        borderColor: "kodo.gold",
                        boxShadow: "0 0 0 1px rgba(251, 220, 106, 0.6)",
                    },
                },
            },
        },
    },
    Icon: {
        baseStyle: {
            transition: "all 0.3s ease",
        },
    },
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    colors,
    fonts,
    styles,
    components,
    config,
});

export default theme;