import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    keyframes,
} from "@chakra-ui/react";
import { FaReact, FaServer, FaMobileAlt, FaMagic } from "react-icons/fa";
import { ReactElement } from "react";

// Animación para los elementos decorativos japoneses
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
`;

// Animación de "tinta que se expande" para efectos de líneas
const inkDraw = keyframes`
    0% { width: 0; opacity: 0; }
    100% { width: 100%; opacity: 0.2; }
`;

// Línea decorativa de transición entre secciones
const fadeInGradually = keyframes`
    0% { opacity: 0; }
    100% { opacity: 0.2; }
`;

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack
            align="start"
            p={6}
            bg="rgba(18, 19, 24, 0.6)"
            rounded="xl"
            borderLeft="4px solid"
            borderColor="kodo.gold"
            transition="all 0.3s ease"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderColor: "kodo.red",
            }}
            position="relative"
            zIndex={1}
        >
            <Flex
                w={16}
                h={16}
                align="center"
                justify="center"
                rounded="full"
                bg="rgba(251, 220, 106, 0.05)"
                mb={1}
            >
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize="lg" mb={2}>
                {title}
            </Text>
            <Text color="gray.400">{text}</Text>
        </Stack>
    );
};

const Services = () => {
    return (
        <Box
            id="services"
            py={20}
            position="relative"
            overflow="hidden"
            borderTop="0"
            mt={-1}
        >
            {/* Elemento decorativo: kanji abstracto (círculos y líneas que sugieren un kanji) */}
            <Box
                position="absolute"
                top="80px"
                right="60px"
                width="80px"
                height="120px"
                zIndex={1}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.5s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    top="0"
                    left="40px"
                    width="2px"
                    height="120px"
                    bg="kodo.red"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="30px"
                    left="0"
                    width="80px"
                    height="2px"
                    bg="kodo.red"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="60px"
                    left="0"
                    width="40px"
                    height="2px"
                    bg="kodo.red"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="15px"
                    left="15px"
                    width="10px"
                    height="10px"
                    borderRadius="full"
                    bg="kodo.red"
                    opacity={0.25}
                />
            </Box>

            {/* Elemento decorativo: onda japonesa simplificada */}
            <Box
                position="absolute"
                bottom="40px"
                left="40px"
                width="100px"
                height="60px"
                zIndex={1}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.8s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                {/* Primera onda */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="20px"
                    height="20px"
                    borderRadius="0 0 10px 0"
                    border="0"
                    borderRight="2px solid"
                    borderBottom="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    bottom="0"
                    left="20px"
                    width="20px"
                    height="20px"
                    borderRadius="0 0 0 10px"
                    border="0"
                    borderLeft="2px solid"
                    borderBottom="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.2}
                />
                {/* Segunda onda */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="50px"
                    width="20px"
                    height="20px"
                    borderRadius="0 0 10px 0"
                    border="0"
                    borderRight="2px solid"
                    borderBottom="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    bottom="0"
                    left="70px"
                    width="20px"
                    height="20px"
                    borderRadius="0 0 0 10px"
                    border="0"
                    borderLeft="2px solid"
                    borderBottom="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.2}
                />
                {/* Tercera onda (un poco más arriba) */}
                <Box
                    position="absolute"
                    bottom="30px"
                    left="10px"
                    width="20px"
                    height="20px"
                    borderRadius="0 0 10px 0"
                    border="0"
                    borderRight="2px solid"
                    borderBottom="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.15}
                />
                <Box
                    position="absolute"
                    bottom="30px"
                    left="30px"
                    width="20px"
                    height="20px"
                    borderRadius="0 0 0 10px"
                    border="0"
                    borderLeft="2px solid"
                    borderBottom="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.15}
                />
            </Box>

            {/* Elemento decorativo: marcos minimalistas (marco cuadrado con esquinas abiertas) */}
            <Box
                position="absolute"
                top="50%"
                right="5%"
                width="150px"
                height="150px"
                zIndex={1}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 1s forwards`}
                display={{ base: "none", xl: "block" }}
            >
                {/* Esquina superior derecha */}
                <Box
                    position="absolute"
                    top="0"
                    right="0"
                    width="30px"
                    height="2px"
                    bg="kodo.gold"
                    opacity={0.15}
                />
                <Box
                    position="absolute"
                    top="0"
                    right="0"
                    width="2px"
                    height="30px"
                    bg="kodo.gold"
                    opacity={0.15}
                />

                {/* Esquina inferior derecha */}
                <Box
                    position="absolute"
                    bottom="0"
                    right="0"
                    width="30px"
                    height="2px"
                    bg="kodo.gold"
                    opacity={0.15}
                />
                <Box
                    position="absolute"
                    bottom="0"
                    right="0"
                    width="2px"
                    height="30px"
                    bg="kodo.gold"
                    opacity={0.15}
                />
            </Box>

            {/* Elemento decorativo de transición en la parte superior */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                height="3px"
                zIndex={1}
                opacity={0}
                animation={`${fadeInGradually} 1.5s ease-out 0.3s forwards`}
            >
                <Box
                    position="absolute"
                    top="0"
                    left="30%"
                    width="40%"
                    height="1px"
                    bg="kodo.gold"
                    opacity={0.15}
                />
                <Box
                    position="absolute"
                    top="2px"
                    left="25%"
                    width="50%"
                    height="1px"
                    bg="kodo.gold"
                    opacity={0.08}
                />
            </Box>

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Stack spacing={4} as={Container} maxW="3xl" textAlign="center" mb={16}>
                    <Heading
                        fontSize="3xl"
                        color="white"
                        position="relative"
                        display="inline-block"
                        mx="auto"
                    >
                        Nuestros <Text as="span" color="kodo.gold">Servicios</Text>
                        {/* Línea decorativa centrada debajo del título */}
                        <Box
                            position="absolute"
                            bottom="-10px"
                            left="0"
                            right="0"
                            margin="0 auto"
                            width="50%"
                            height="2px"
                            bg="kodo.red"
                            opacity={0}
                            animation={`${inkDraw} 1.2s ease-out 0.5s forwards`}
                        />
                    </Heading>
                    <Text color="gray.400" fontSize="lg" mt={6}>
                        Soluciones digitales adaptadas a tus necesidades con un enfoque centrado
                        en la calidad, la eficiencia y el diseño.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    <Feature
                        icon={<Icon as={FaReact} w={10} h={10} color="kodo.gold" />}
                        title="Diseño de Páginas Web"
                        text="Creamos sitios web atractivos y modernos que funcionan perfectamente en cualquier dispositivo, con una experiencia de usuario intuitiva y agradable."
                    />
                    <Feature
                        icon={<Icon as={FaServer} w={10} h={10} color="kodo.gold" />}
                        title="Desarrollo de Sistemas"
                        text="Construimos el motor que hace funcionar tus aplicaciones. Creamos sistemas confiables que procesan datos de forma eficiente y segura."
                    />
                    <Feature
                        icon={<Icon as={FaMobileAlt} w={10} h={10} color="kodo.gold" />}
                        title="Aplicaciones Móviles"
                        text="Desarrollamos aplicaciones para tu teléfono o tablet Android que son rápidas, fáciles de usar y optimizadas para ofrecer la mejor experiencia posible."
                    />
                    <Feature
                        icon={<Icon as={FaMagic} w={10} h={10} color="kodo.gold" />}
                        title="Rediseño Web"
                        text="Renovamos y modernizamos tu sitio web existente para mejorar su imagen, rendimiento y experiencia de usuario, adaptándolo a las tendencias actuales."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Services;