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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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
        <HStack spacing={4} align="start">
            <Icon as={icon} w={6} h={6} color="kodo.gold" />
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
        <Box id="contact" py={20} bg="kodo.black">
            <Container maxW="container.xl">
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