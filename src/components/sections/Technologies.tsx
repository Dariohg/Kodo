import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    VStack,
    useBreakpointValue,
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
            }}
        >
            <Box fontSize="3xl">{icon}</Box>
            <Text fontWeight="500">{name}</Text>
        </VStack>
    );
};

const Technologies = () => {
    const columnCount = useBreakpointValue({ base: 2, md: 4 });

    return (
        <Box id="technologies" py={20} bg="kodo.black">
            <Container maxW="container.xl">
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
                        Desarrollo Android
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