import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Flex,
    Icon,
    SimpleGrid,
} from "@chakra-ui/react";
import { FaCode, FaHandshake, FaLightbulb } from "react-icons/fa";

interface ValueProps {
    title: string;
    text: string;
    icon: React.ElementType;
}

const Value = ({ title, text, icon }: ValueProps) => {
    return (
        <Stack align="center" textAlign="center">
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
        <Box id="about" py={20} bg="kodo.black">
            <Container maxW="container.xl">
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
                            <Text fontSize={{ base: "md", md: "lg" }} mb={4} fontStyle="italic" color="white">
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