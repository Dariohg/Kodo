import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Flex,
    Icon,
    SimpleGrid,
    keyframes,
} from "@chakra-ui/react";
import { FaCode, FaHandshake, FaLightbulb } from "react-icons/fa";

// Animación sutil para los elementos decorativos
const fadeSlideIn = keyframes`
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 0.4; transform: translateY(0); }
`;

// Animación sutil para destacar el texto
const highlightText = keyframes`
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
`;

interface ValueProps {
    title: string;
    text: string;
    icon: React.ElementType;
}

const Value = ({ title, text, icon }: ValueProps) => {
    return (
        <Stack
            align="center"
            textAlign="center"
            p={6}
            bg="kodo.darkGray"
            rounded="xl"
            borderTop="3px solid"
            borderColor="kodo.gold"
            transition="all 0.3s ease"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
                borderColor: "kodo.red",
            }}
        >
            <Flex
                w={16}
                h={16}
                align="center"
                justify="center"
                rounded="full"
                bg="rgba(251, 220, 106, 0.1)"
                mb={1}
            >
                <Icon as={icon} w={10} h={10} color="kodo.gold" />
            </Flex>
            <Text fontWeight={600} fontSize="lg" mb={2}>
                {title}
            </Text>
            <Text color="gray.400">{text}</Text>
        </Stack>
    );
};

const AboutUs = () => {
    return (
        <Box
            id="about"
            py={20}
            bg="kodo.black"
            position="relative"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at 80% 20%, rgba(177, 43, 36, 0.05) 0%, transparent 70%)",
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
            {/* Elemento decorativo estilo caligrafía vertical */}
            <Box
                position="absolute"
                top="60px"
                left="5%"
                height="200px"
                width="20px"
                zIndex={0}
                opacity={0}
                animation={`${fadeSlideIn} 1.5s ease-out 0.5s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    height="100%"
                    width="3px"
                    bg="kodo.red"
                    opacity={0.2}
                    left="8px"
                />
                <Box
                    position="absolute"
                    height="3px"
                    width="20px"
                    bg="kodo.red"
                    opacity={0.2}
                    top="20px"
                    transform="rotate(30deg)"
                />
                <Box
                    position="absolute"
                    height="3px"
                    width="20px"
                    bg="kodo.red"
                    opacity={0.2}
                    top="60px"
                    transform="rotate(-30deg)"
                />
                <Box
                    position="absolute"
                    height="3px"
                    width="20px"
                    bg="kodo.red"
                    opacity={0.2}
                    top="100px"
                    transform="rotate(30deg)"
                />
                <Box
                    position="absolute"
                    height="3px"
                    width="20px"
                    bg="kodo.red"
                    opacity={0.2}
                    top="140px"
                    transform="rotate(-30deg)"
                />
            </Box>

            {/* Elemento decorativo tipo sello japonés */}
            <Box
                position="absolute"
                bottom="60px"
                right="5%"
                height="80px"
                width="80px"
                border="2px solid"
                borderColor="kodo.gold"
                opacity={0}
                animation={`${fadeSlideIn} 1.5s ease-out 0.8s forwards`}
                display={{ base: "none", lg: "block" }}
                _before={{
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "40px",
                    width: "40px",
                    border: "2px solid",
                    borderColor: "kodo.gold",
                    opacity: 0.3,
                }}
                _after={{
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "15px",
                    width: "15px",
                    bg: "kodo.gold",
                    opacity: 0.3,
                }}
            />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Stack spacing={8} as={Container} maxW="4xl" textAlign="center" mb={16}>
                    <Heading fontSize="3xl">
                        Sobre <Text as="span" color="kodo.gold">Nosotros</Text>
                    </Heading>
                </Stack>

                <Stack
                    direction={{ base: "column", lg: "row" }}
                    spacing={{ base: 10, lg: 20 }}
                    align="center"
                    mb={16}
                >
                    <Box flex={1}>
                        <Box
                            bg="kodo.darkGray"
                            p={8}
                            rounded="xl"
                            borderLeft="4px solid"
                            borderColor="kodo.red"
                            boxShadow="lg"
                            position="relative"
                        >
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                mb={4}
                                fontStyle="italic"
                                color="white"
                                position="relative"
                                display="inline-block"
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    height: "2px",
                                    width: "50%",
                                    background: "linear-gradient(90deg, rgba(251, 220, 106, 0.5), transparent)",
                                    animation: `${highlightText} 3s ease-in-out infinite`
                                }}
                            >
                                Somos kōdo. Un equipo de tres amigos que empezaron a tirar líneas de código entre risas, debates y uno que otro rage quit.
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} mb={4} color="gray.300">
                                No tenemos oficinas con sillones caros ni discursos de "cambiar el mundo con tecnología". Tenemos algo mejor: confianza, franqueza y las ganas de construir software útil, sólido y sin rodeos.
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} mb={4} color="gray.300">
                                Nos tiramos hate cuando algo está mal, y nos celebramos cuando sale bien. Porque así trabajamos: con crítica real y cero ego. Cada proyecto lo abordamos con la cabeza fría y el corazón puesto.
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
                                En kōdo creemos que la amistad no está peleada con la exigencia. Por eso, más allá del stack, de los frameworks o del hype, lo que nos define es que nunca soltamos algo que no nos guste usar a nosotros mismos.
                            </Text>
                        </Box>
                    </Box>
                </Stack>

                <Heading
                    as="h3"
                    fontSize="xl"
                    mb={12}
                    textAlign="center"
                    color="kodo.gold"
                >
                    Nuestros Valores
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={{ base: 0, md: 10 }}>
                    <Value
                        icon={FaCode}
                        title="Excelencia Técnica"
                        text="Construimos código limpio y mantenible porque sabemos que la calidad no es negociable. No entregamos algo que no usaríamos nosotros mismos."
                    />
                    <Value
                        icon={FaHandshake}
                        title="Honestidad Brutal"
                        text="Preferimos la verdad incómoda antes que la mentira cómoda. Nuestra comunicación es directa y transparente, sin filtros ni palabrería corporativa."
                    />
                    <Value
                        icon={FaLightbulb}
                        title="Soluciones Prácticas"
                        text="Nos enfocamos en resolver problemas reales con soluciones efectivas. Sin complicaciones innecesarias ni tecnologías que no aporten valor."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default AboutUs;