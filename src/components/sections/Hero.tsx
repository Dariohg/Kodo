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
    keyframes,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import LogoSvg from "../../assets/images/Logo.svg";

// Animación de "tinta que se expande" para efecto caligráfico japonés
const inkSpread = keyframes`
    0% { width: 0; opacity: 0.7; }
    100% { width: 100%; opacity: 0.3; }
`;

// Animación suave para el logo, como una respiración
const softPulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
`;

// Animación más suave para el bounce de la flecha
const subtleBounce = keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
`;

// Animación para los elementos decorativos japoneses
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 0.4; transform: translateY(0); }
`;

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
            // Añadir patrón de fondo sutil con opacidad baja
            _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')",
                backgroundRepeat: "repeat",
                opacity: 0.1,
                zIndex: 0,
                pointerEvents: "none",
            }}
            overflow="hidden"
        >
            {/* Elemento decorativo japonés (torii simplificado) en esquina superior derecha */}
            <Box
                position="absolute"
                top="40px"
                right="40px"
                width="100px"
                height="60px"
                zIndex={0}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.5s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    top="0"
                    left="10px"
                    width="80px"
                    height="5px"
                    bg="kodo.red"
                    opacity={0.3}
                />
                <Box
                    position="absolute"
                    top="10px"
                    left="10px"
                    width="80px"
                    height="3px"
                    bg="kodo.red"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="0"
                    left="15px"
                    width="5px"
                    height="60px"
                    bg="kodo.red"
                    opacity={0.3}
                />
                <Box
                    position="absolute"
                    top="0"
                    right="15px"
                    width="5px"
                    height="60px"
                    bg="kodo.red"
                    opacity={0.3}
                />
            </Box>

            {/* Elemento decorativo japonés (caligrafía abstracta) en esquina inferior izquierda */}
            <Box
                position="absolute"
                bottom="40px"
                left="40px"
                width="60px"
                height="120px"
                zIndex={0}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.8s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    top="0"
                    left="20px"
                    width="5px"
                    height="120px"
                    bg="kodo.gold"
                    opacity={0.3}
                    transform="rotate(15deg)"
                    transformOrigin="top"
                />
                <Box
                    position="absolute"
                    top="40px"
                    left="0"
                    width="40px"
                    height="5px"
                    bg="kodo.gold"
                    opacity={0.3}
                    transform="rotate(-10deg)"
                />
                <Box
                    position="absolute"
                    bottom="30px"
                    left="10px"
                    width="30px"
                    height="5px"
                    bg="kodo.gold"
                    opacity={0.3}
                />
            </Box>

            <Container maxW="container.xl" h="full" position="relative">
                {/* Elemento decorativo japonés (punto y línea) - sello kanji abstracto */}
                <Box
                    position="absolute"
                    top="80px"
                    left="40px"
                    width="30px"
                    height="30px"
                    borderRadius="sm"
                    border="2px solid"
                    borderColor="kodo.red"
                    opacity={0}
                    animation={`${fadeIn} 1.5s ease-out 1s forwards`}
                    display={{ base: "none", md: "block" }}
                    _before={{
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "10px",
                        height: "10px",
                        bg: "kodo.red",
                        opacity: 0.5,
                    }}
                />

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
                                    animation: `${inkSpread} 1.5s ease-out forwards`,
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
                                    rounded="none" // Bordes rectos, estilo japonés minimalista
                                    size="lg"
                                    fontWeight="normal"
                                    px={6}
                                    variant="primary"
                                    w={{ base: "full", sm: "auto" }}
                                    position="relative"
                                    overflow="hidden"
                                    _hover={{
                                        bg: "kodo.gold",
                                        opacity: 0.9,
                                        transform: "translateY(-2px)",
                                        boxShadow: "md",
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    Hablemos de tu proyecto
                                </Button>
                            </ScrollLink>
                            <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
                                <Button
                                    rounded="none" // Bordes rectos, estilo japonés minimalista
                                    size="lg"
                                    fontWeight="normal"
                                    px={6}
                                    variant="secondary"
                                    w={{ base: "full", sm: "auto" }}
                                    _hover={{
                                        bg: "rgba(251, 220, 106, 0.1)",
                                        transform: "translateY(-2px)",
                                    }}
                                    transition="all 0.3s ease"
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
                            {/* Contenedor para el logo y los círculos */}
                            <Flex
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                width={{ base: "200px", md: "400px" }}
                                height={{ base: "200px", md: "400px" }}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {/* Círculo exterior con estilo japonés */}
                                <Box
                                    position="absolute"
                                    width="100%"
                                    height="100%"
                                    borderRadius="full"
                                    border="1px solid"
                                    borderColor="kodo.gold"
                                    opacity={0.2}
                                />

                                {/* Elemento decorativo: círculo ensō incompleto */}
                                <Box
                                    position="absolute"
                                    width="110%"
                                    height="110%"
                                    borderRadius="full"
                                    borderTop="1px solid"
                                    borderLeft="1px solid"
                                    borderRight="1px solid"
                                    borderBottom="0"
                                    borderColor="kodo.red"
                                    opacity={0.15}
                                    transform="rotate(-45deg)"
                                />

                                {/* Logo de Kōdo 三 con animación suave */}
                                <Image
                                    width={{ base: "180px", md: "300px" }}
                                    height={{ base: "180px", md: "300px" }}
                                    src={LogoSvg}
                                    alt="Kōdo 三 Logo"
                                    animation={`${softPulse} 5s ease-in-out infinite`}
                                    zIndex={2}
                                />
                            </Flex>
                        </Box>
                    </Flex>
                </Stack>
            </Container>

            {/* Elemento decorativo japonés (líneas horizontales) - tipo bambú simplificado */}
            <Box
                position="absolute"
                bottom="80px"
                right="60px"
                width="4px"
                height="120px"
                zIndex={0}
                display={{ base: "none", lg: "block" }}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 1.2s forwards`}
            >
                <Box position="absolute" top="0" left="0" width="4px" height="4px" bg="kodo.gold" borderRadius="full" />
                <Box position="absolute" top="0" left="0" width="4px" height="120px" bg="kodo.gold" opacity={0.2} />
                <Box position="absolute" top="30px" left="-8px" width="20px" height="1px" bg="kodo.gold" opacity={0.3} />
                <Box position="absolute" top="60px" left="-8px" width="20px" height="1px" bg="kodo.gold" opacity={0.3} />
                <Box position="absolute" top="90px" left="-8px" width="20px" height="1px" bg="kodo.gold" opacity={0.3} />
            </Box>

            {/* Flecha hacia abajo con animación más sutil */}
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
                        sx={{
                            animation: `${subtleBounce} 3s ease-in-out infinite`,
                        }}
                        _hover={{ transform: "scale(1.1)" }}
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