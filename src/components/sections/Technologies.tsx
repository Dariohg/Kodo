import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    VStack,
    useBreakpointValue,
    keyframes,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJs,
    FaAndroid,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNestjs,
    SiTailwindcss,
    SiGo,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiKotlin,
} from "react-icons/si";

// Animación para los elementos decorativos
const fadeRotateIn = keyframes`
    0% { opacity: 0; transform: rotate(-10deg) translateY(20px); }
    100% { opacity: 1; transform: rotate(0) translateY(0); }
`;

// Animación para el icono en hover
const pulseIcon = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

interface TechIconProps {
    icon: ReactNode;
    name: string;
}

const TechIcon = ({ icon, name }: TechIconProps) => {
    return (
        <VStack
            spacing={4}
            p={5}
            bg="kodo.darkGray"
            rounded="xl"
            borderBottom="3px solid"
            borderColor="kodo.gold"
            transition="all 0.3s ease"
            _hover={{
                transform: "translateY(-5px)",
                borderColor: "kodo.red",
                "& > .icon-container": {
                    animation: `${pulseIcon} 0.6s ease-in-out`
                }
            }}
        >
            <Box fontSize="3xl" className="icon-container">{icon}</Box>
            <Text fontWeight="500">{name}</Text>
        </VStack>
    );
};

const Technologies = () => {
    const columnCount = useBreakpointValue({ base: 2, md: 4 });

    return (
        <Box
            id="technologies"
            py={20}
            position="relative"
            overflow="hidden"
        >
            {/* Elemento decorativo estilo code brackets */}
            <Box
                position="absolute"
                top="80px"
                right="40px"
                height="100px"
                width="50px"
                zIndex={1}
                opacity={0}
                animation={`${fadeRotateIn} 1.5s ease-out 0.5s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    height="80%"
                    width="4px"
                    bg="kodo.gold"
                    opacity={0.3}
                    right="0"
                    borderRadius="2px"
                />
                <Box
                    position="absolute"
                    height="4px"
                    width="20px"
                    bg="kodo.gold"
                    opacity={0.3}
                    top="0"
                    right="0"
                    borderRadius="2px"
                />
                <Box
                    position="absolute"
                    height="4px"
                    width="20px"
                    bg="kodo.gold"
                    opacity={0.3}
                    bottom="0"
                    right="0"
                    borderRadius="2px"
                />
            </Box>

            {/* Elemento decorativo estilo código binario */}
            <Box
                position="absolute"
                bottom="100px"
                left="40px"
                height="150px"
                width="40px"
                zIndex={1}
                opacity={0}
                animation={`${fadeRotateIn} 1.5s ease-out 0.7s forwards`}
                display={{ base: "none", lg: "block" }}
                fontFamily="monospace"
                fontSize="xs"
                color="kodo.gold"
                textAlign="center"
            >
                <Text opacity={0.2}>01</Text>
                <Text opacity={0.3}>10</Text>
                <Text opacity={0.2}>00</Text>
                <Text opacity={0.3}>11</Text>
                <Text opacity={0.2}>01</Text>
                <Text opacity={0.3}>10</Text>
            </Box>

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Box textAlign="center" mb={16}>
                    <Heading fontSize="3xl" mb={4}>
                        Nuestras <Text as="span" color="kodo.gold">Tecnologías</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
                        Utilizamos las herramientas más avanzadas y eficientes para desarrollar
                        soluciones robustas, escalables y de alto rendimiento.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h3" fontSize="xl" mb={8} color="kodo.gold">
                        Frontend
                    </Heading>
                    <SimpleGrid columns={columnCount} spacing={10} mb={16}>
                        <TechIcon icon={<Icon as={FaReact} color="kodo.gold" />} name="React" />
                        <TechIcon icon={<Icon as={SiTypescript} color="kodo.gold" />} name="TypeScript" />
                        <TechIcon icon={<Icon as={FaJs} color="kodo.gold" />} name="JavaScript" />
                        <TechIcon icon={<Icon as={SiTailwindcss} color="kodo.gold" />} name="Tailwind" />
                    </SimpleGrid>

                    <Heading as="h3" fontSize="xl" mb={8} color="kodo.gold">
                        Backend
                    </Heading>
                    <SimpleGrid columns={columnCount} spacing={10} mb={16}>
                        <TechIcon icon={<Icon as={FaNodeJs} color="kodo.gold" />} name="Node.js" />
                        <TechIcon icon={<Icon as={SiNestjs} color="kodo.gold" />} name="NestJS" />
                        <TechIcon icon={<Icon as={FaPython} color="kodo.gold" />} name="Python" />
                        <TechIcon icon={<Icon as={SiGo} color="kodo.gold" />} name="Go" />
                    </SimpleGrid>

                    <Heading as="h3" fontSize="xl" mb={8} color="kodo.gold">
                        Desarrollo Movil
                    </Heading>
                    <SimpleGrid columns={columnCount} spacing={10} mb={16}>
                        <TechIcon icon={<Icon as={SiKotlin} color="kodo.gold" />} name="Kotlin" />
                        <TechIcon icon={<Icon as={FaReact} color="kodo.gold" />} name="React Native" />
                        <TechIcon icon={<Icon as={FaAndroid} color="kodo.gold" />} name="Android SDK" />
                    </SimpleGrid>

                    <Heading as="h3" fontSize="xl" mb={8} color="kodo.gold">
                        Bases de Datos
                    </Heading>
                    <SimpleGrid columns={columnCount} spacing={10}>
                        <TechIcon icon={<Icon as={SiPostgresql} color="kodo.gold" />} name="PostgreSQL" />
                        <TechIcon icon={<Icon as={SiMysql} color="kodo.gold" />} name="MySQL" />
                        <TechIcon icon={<Icon as={SiSqlite} color="kodo.gold" />} name="SQLite" />
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Technologies;