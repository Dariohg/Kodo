import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    createIcon,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import LogoSvg from "../../assets/images/Logo.svg";

const Hero = () => {
    return (
        <Box
            id="hero"
            position="relative"
            minH={{ base: "auto", md: "100vh" }}
            py={{ base: 16, md: 0 }}
            backgroundImage="linear-gradient(180deg, rgba(9, 10, 14, 0.95) 0%, rgba(9, 10, 14, 1) 100%)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at 20% 30%, rgba(251, 220, 106, 0.05) 0%, transparent 70%)",
                zIndex: 0,
            }}
        >
            <Container maxW="container.xl" h="full">
                <Stack
                    align="center"
                    spacing={{ base: 10, md: 10 }}
                    pt={{ base: "10", md: "28" }}
                    pb={{ base: "10", md: 0 }}
                    direction={{ base: "column", md: "row" }}
                    h="full"
                >
                    <Stack flex={1} spacing={{ base: 8, md: 10 }} zIndex={1}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                        >
                            <Text
                                as="span"
                                position="relative"
                                _after={{
                                    content: "''",
                                    width: "full",
                                    height: "20%",
                                    position: "absolute",
                                    bottom: 1,
                                    left: 0,
                                    bg: "kodo.red",
                                    zIndex: -1,
                                    opacity: 0.3,
                                }}
                            >
                                Kōdo 三 — Donde las ideas
                            </Text>
                            <br />
                            <Text as="span" color="kodo.gold">
                                toman forma digital.
                            </Text>
                        </Heading>
                        <Text color="gray.400" fontSize={{ base: "lg", lg: "xl" }}>
                            En Kōdo 三, combinamos precisión técnica, creatividad y elegancia para construir
                            soluciones digitales limpias, eficientes y diseñadas a medida.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: "column", sm: "row" }}
                            mb={{ base: 6, md: 0 }}
                        >
                            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                                <Button
                                    rounded="md"
                                    size="lg"
                                    fontWeight="normal"
                                    px={6}
                                    variant="primary"
                                    w={{ base: "full", sm: "auto" }}
                                >
                                    Hablemos de tu proyecto
                                </Button>
                            </ScrollLink>
                            <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
                                <Button
                                    rounded="md"
                                    size="lg"
                                    fontWeight="normal"
                                    px={6}
                                    variant="secondary"
                                    w={{ base: "full", sm: "auto" }}
                                >
                                    Descubre nuestros servicios
                                </Button>
                            </ScrollLink>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify="center"
                        align="center"
                        position="relative"
                        w="full"
                        // Mostrar el logo también en dispositivos móviles pero más pequeño
                        display="flex"
                        mb={{ base: 8, md: 0 }}
                    >
                        <Box
                            position="relative"
                            height={{ base: "200px", md: "300px" }}
                            rounded="2xl"
                            width="full"
                            overflow="hidden"
                            zIndex={1}
                        >
                            {/* Logo de Kōdo 三 */}
                            <Image
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                width={{ base: "180px", md: "300px" }}
                                height={{ base: "180px", md: "300px" }}
                                src={LogoSvg}
                                alt="Kōdo 三 Logo"
                            />
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                width={{ base: "200px", md: "400px" }}
                                height={{ base: "200px", md: "400px" }}
                                borderRadius="full"
                                border="2px solid"
                                borderColor="kodo.gold"
                                opacity={0.2}
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
            {/* Flecha hacia abajo, solo visible en md y tamaños mayores */}
            <Box
                position="absolute"
                bottom="10"
                left="0"
                right="0"
                textAlign="center"
                display={{ base: "none", md: "block" }}
            >
                <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
                    <Icon
                        as={ArrowDownIcon}
                        w={10}
                        h={10}
                        color="kodo.gold"
                        cursor="pointer"
                        animation="bounce 2s infinite"
                        _hover={{ transform: "scale(1.2)" }}
                        transition="all 0.3s ease"
                    />
                </ScrollLink>
            </Box>
        </Box>
    );
};

const ArrowDownIcon = createIcon({
    displayName: "ArrowDownIcon",
    viewBox: "0 0 24 24",
    path: (
        <path
            fill="currentColor"
            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        />
    ),
});

export default Hero;