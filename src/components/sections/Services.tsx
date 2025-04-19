import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
} from "@chakra-ui/react";
import { FaReact, FaServer, FaMobileAlt, FaMagic } from "react-icons/fa";
import { ReactElement } from "react";

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
            bg="kodo.darkGray"
            rounded="xl"
            borderLeft="4px solid"
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
        <Box id="services" py={20} bg="kodo.black">
            <Container maxW="container.xl">
                <Stack spacing={4} as={Container} maxW="3xl" textAlign="center" mb={16}>
                    <Heading fontSize="3xl" color="white">
                        Nuestros <Text as="span" color="kodo.gold">Servicios</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg">
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