import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    useToast,
    VStack,
    HStack,
    Icon,
    FormErrorMessage,
    keyframes,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaTimes } from "react-icons/fa";

// Animación para los elementos decorativos
const fadeIn = keyframes`
    0% { opacity: 0; transform: scale(0.9) translateY(10px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
`;

// Animación sutil para el borde del formulario
const borderPulse = keyframes`
    0% { border-color: rgba(251, 220, 106, 0.2); }
    50% { border-color: rgba(251, 220, 106, 0.5); }
    100% { border-color: rgba(251, 220, 106, 0.2); }
`;

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const ContactInfo = ({ icon, title, content }: { icon: React.ElementType; title: string; content: string }) => {
    return (
        <HStack
            spacing={4}
            align="start"
            transition="all 0.3s ease"
            _hover={{
                transform: "translateX(5px)",
                "& svg": {
                    color: "kodo.red"
                }
            }}
        >
            <Icon as={icon} w={6} h={6} color="kodo.gold" transition="all 0.3s ease" />
            <Box>
                <Text fontWeight="bold" fontSize="md">
                    {title}
                </Text>
                <Text color="gray.400">{content}</Text>
            </Box>
        </HStack>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name) newErrors.name = "El nombre es requerido";
        if (!formData.email) {
            newErrors.email = "El email es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.subject) newErrors.subject = "El asunto es requerido";
        if (!formData.message) newErrors.message = "El mensaje es requerido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);

            // Simulación de envío
            setTimeout(() => {
                toast({
                    title: "Mensaje enviado.",
                    description: "Nos pondremos en contacto contigo pronto.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom-right",
                    render: ({ onClose }) => (
                        <Box
                            color="white"
                            p={4}
                            bg="kodo.darkGray"
                            borderLeft="4px solid"
                            borderColor="kodo.gold"
                            borderRadius="md"
                            display="flex"
                            alignItems="center"
                            boxShadow="lg"
                        >
                            <Icon as={FaCheckCircle} color="kodo.gold" mr={3} />
                            <Box flex="1">
                                <Text fontWeight="bold">Mensaje enviado.</Text>
                                <Text fontSize="sm">Nos pondremos en contacto contigo pronto.</Text>
                            </Box>
                            <Icon
                                as={FaTimes}
                                cursor="pointer"
                                onClick={onClose}
                                color="gray.400"
                                _hover={{ color: "white" }}
                            />
                        </Box>
                    )
                });

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                setIsSubmitting(false);
            }, 1500);
        }
    };

    return (
        <Box
            id="contact"
            py={20}
            position="relative"
            overflow="hidden"
        >
            {/* Elemento decorativo estilo sobre/mensaje */}
            <Box
                position="absolute"
                top="80px"
                left="60px"
                height="60px"
                width="80px"
                zIndex={1}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.5s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    height="100%"
                    width="100%"
                    border="2px solid"
                    borderColor="kodo.gold"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="15px"
                    left="15px"
                    height="2px"
                    width="50px"
                    bg="kodo.gold"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="25px"
                    left="15px"
                    height="2px"
                    width="50px"
                    bg="kodo.gold"
                    opacity={0.2}
                />
                <Box
                    position="absolute"
                    top="35px"
                    left="15px"
                    height="2px"
                    width="30px"
                    bg="kodo.gold"
                    opacity={0.2}
                />
            </Box>

            {/* Elemento decorativo estilo teléfono/comunicación */}
            <Box
                position="absolute"
                bottom="80px"
                right="60px"
                height="100px"
                width="100px"
                borderRadius="full"
                zIndex={1}
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.7s forwards`}
                display={{ base: "none", lg: "block" }}
            >
                <Box
                    position="absolute"
                    height="100%"
                    width="100%"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="kodo.red"
                    opacity={0.15}
                />
                <Box
                    position="absolute"
                    height="80%"
                    width="80%"
                    top="10%"
                    left="10%"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="kodo.red"
                    opacity={0.12}
                />
                <Box
                    position="absolute"
                    height="60%"
                    width="60%"
                    top="20%"
                    left="20%"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="kodo.red"
                    opacity={0.09}
                />
            </Box>

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Box textAlign="center" mb={16}>
                    <Heading fontSize="3xl" mb={4}>
                        <Text as="span" color="kodo.gold">Contáctanos</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
                        ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos hacerlo realidad.
                    </Text>
                </Box>

                <Stack
                    direction={{ base: "column", lg: "row" }}
                    spacing={{ base: 10, lg: 20 }}
                    align="start"
                >
                    <VStack spacing={10} align="start" w={{ base: "100%", lg: "33%" }}>
                        <Text fontSize="lg" fontWeight="medium">
                            Información de contacto
                        </Text>

                        <VStack spacing={6} align="start">
                            <ContactInfo
                                icon={FaMapMarkerAlt}
                                title="Dirección"
                                content="Calle Tecnología 123, Ciudad Innovación"
                            />
                            <ContactInfo
                                icon={FaPhoneAlt}
                                title="Teléfono"
                                content="+1 234 567 890"
                            />
                            <ContactInfo
                                icon={FaEnvelope}
                                title="Email"
                                content="info@kodo.com"
                            />
                        </VStack>

                        <Box
                            mt={10}
                            p={6}
                            bg="kodo.darkGray"
                            borderLeft="4px solid"
                            borderColor="kodo.red"
                            rounded="md"
                            transition="transform 0.3s ease"
                            _hover={{
                                transform: "translateY(-5px)",
                                boxShadow: "lg"
                            }}
                        >
                            <Text fontSize="md" fontWeight="medium" mb={2}>
                                Horario de atención
                            </Text>
                            <Text color="gray.400">
                                Lunes a Viernes: 9:00 AM - 6:00 PM
                            </Text>
                            <Text color="gray.400">
                                Sábados: 10:00 AM - 2:00 PM
                            </Text>
                        </Box>
                    </VStack>

                    <Box
                        bg="kodo.darkGray"
                        rounded="xl"
                        p={8}
                        w={{ base: "100%", lg: "67%" }}
                        borderTop="4px solid"
                        borderColor="kodo.gold"
                        position="relative"
                        _hover={{
                            boxShadow: "0 0 20px rgba(251, 220, 106, 0.1)"
                        }}
                        sx={{
                            animation: `${borderPulse} 3s infinite`
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={5}>
                                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                                    <FormControl isRequired isInvalid={!!errors.name}>
                                        <FormLabel>Nombre</FormLabel>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            bg="rgba(9, 10, 14, 0.5)"
                                            border="1px solid rgba(251, 220, 106, 0.2)"
                                            _focus={{
                                                borderColor: "kodo.gold",
                                                boxShadow: "0 0 0 1px rgba(251, 220, 106, 0.2)",
                                            }}
                                            transition="all 0.3s ease"
                                            _hover={{
                                                borderColor: "rgba(251, 220, 106, 0.4)"
                                            }}
                                        />
                                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.email}>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Tu email"
                                            bg="rgba(9, 10, 14, 0.5)"
                                            border="1px solid rgba(251, 220, 106, 0.2)"
                                            _focus={{
                                                borderColor: "kodo.gold",
                                                boxShadow: "0 0 0 1px rgba(251, 220, 106, 0.2)",
                                            }}
                                            transition="all 0.3s ease"
                                            _hover={{
                                                borderColor: "rgba(251, 220, 106, 0.4)"
                                            }}
                                        />
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    </FormControl>
                                </Stack>

                                <FormControl isRequired isInvalid={!!errors.subject}>
                                    <FormLabel>Asunto</FormLabel>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Asunto de tu mensaje"
                                        bg="rgba(9, 10, 14, 0.5)"
                                        border="1px solid rgba(251, 220, 106, 0.2)"
                                        _focus={{
                                            borderColor: "kodo.gold",
                                            boxShadow: "0 0 0 1px rgba(251, 220, 106, 0.2)",
                                        }}
                                        transition="all 0.3s ease"
                                        _hover={{
                                            borderColor: "rgba(251, 220, 106, 0.4)"
                                        }}
                                    />
                                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired isInvalid={!!errors.message}>
                                    <FormLabel>Mensaje</FormLabel>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Escribe tu mensaje aquí"
                                        rows={6}
                                        bg="rgba(9, 10, 14, 0.5)"
                                        border="1px solid rgba(251, 220, 106, 0.2)"
                                        _focus={{
                                            borderColor: "kodo.gold",
                                            boxShadow: "0 0 0 1px rgba(251, 220, 106, 0.2)",
                                        }}
                                        transition="all 0.3s ease"
                                        _hover={{
                                            borderColor: "rgba(251, 220, 106, 0.4)"
                                        }}
                                    />
                                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                                </FormControl>

                                <Box>
                                    <Button
                                        mt={4}
                                        variant="primary"
                                        type="submit"
                                        isLoading={isSubmitting}
                                        loadingText="Enviando"
                                        size="lg"
                                        position="relative"
                                        overflow="hidden"
                                        _before={{
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: "-100%",
                                            width: "100%",
                                            height: "100%",
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                                            transition: "all 0.5s ease",
                                        }}
                                        _hover={{
                                            _before: {
                                                left: "100%"
                                            }
                                        }}
                                    >
                                        Enviar mensaje
                                    </Button>
                                </Box>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;