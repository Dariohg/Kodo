import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    Flex,
    Icon,
    Divider,
    Image,
    keyframes,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import LogoSvg from "../../assets/images/logo-completo.svg";

// Animación para el logo
const softGlow = keyframes`
    0% { filter: drop-shadow(0 0 1px rgba(251, 220, 106, 0)); }
    50% { filter: drop-shadow(0 0 5px rgba(251, 220, 106, 0.3)); }
    100% { filter: drop-shadow(0 0 1px rgba(251, 220, 106, 0)); }
`;

// Animación para los elementos decorativos
const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const SocialButton = ({
                          children,
                          href,
                          label,
                      }: {
    children: React.ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <Link
            rounded="full"
            w={8}
            h={8}
            cursor="pointer"
            as="a"
            href={href}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            _hover={{
                bg: "rgba(251, 220, 106, 0.2)",
                transform: "translateY(-2px)",
                boxShadow: "0 2px 6px rgba(251, 220, 106, 0.2)"
            }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            {children}
        </Link>
    );
};

const Footer = () => {
    return (
        <Box
            color="white"
            borderTop="1px solid"
            borderColor="rgba(251, 220, 106, 0.2)"
            position="relative"
            overflow="hidden"
        >

            {/* Elemento decorativo estilo kanji/símbolo en la esquina derecha */}
            <Box
                position="absolute"
                bottom="40px"
                right="10%"
                width="40px"
                height="40px"
                opacity={0}
                animation={`${fadeIn} 1.5s ease-out 0.6s forwards`}
                display={{ base: "none", lg: "block" }}
                zIndex={1}
            >
                <Box
                    position="absolute"
                    width="30px"
                    height="30px"
                    border="2px solid"
                    borderColor="kodo.red"
                    opacity={0.2}
                    transform="rotate(45deg)"
                />
                <Box
                    position="absolute"
                    top="15px"
                    left="15px"
                    width="10px"
                    height="10px"
                    bg="kodo.red"
                    opacity={0.2}
                    transform="rotate(45deg)"
                />
            </Box>

            <Container
                as={Stack}
                maxW="container.xl"
                py={10}
                position="relative"
                zIndex={1}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Box
                        mb={{ base: 6, md: 0 }}
                        transition="transform 0.3s ease"
                        _hover={{
                            transform: "translateY(-5px)"
                        }}
                    >
                        <Image
                            src={LogoSvg}
                            alt="Kōdo 三 Logo"
                            height="100px"
                            width="auto"
                            mb={2}
                            animation={`${softGlow} 3s infinite ease-in-out`}
                        />
                        <Text
                            fontSize="sm"
                            color="gray.400"
                            letterSpacing="wider"
                        >
                            Tecnología • Innovación • Colaboración
                        </Text>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={6}
                        position="relative"
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: "-15px",
                            left: "-15px",
                            width: "calc(100% + 30px)",
                            height: "calc(100% + 30px)",
                            border: "1px solid",
                            borderColor: "rgba(251, 220, 106, 0.1)",
                            borderRadius: "full",
                            opacity: 0.5,
                            display: { base: "none", lg: "block" }
                        }}
                    >
                        <SocialButton label="Twitter" href="#">
                            <Icon as={FaTwitter} color="gray.400" _hover={{ color: "kodo.gold" }} transition="color 0.3s ease" />
                        </SocialButton>
                        <SocialButton label="LinkedIn" href="#">
                            <Icon as={FaLinkedin} color="gray.400" _hover={{ color: "kodo.gold" }} transition="color 0.3s ease" />
                        </SocialButton>
                        <SocialButton label="GitHub" href="#">
                            <Icon as={FaGithub} color="gray.400" _hover={{ color: "kodo.gold" }} transition="color 0.3s ease" />
                        </SocialButton>
                    </Stack>
                </Flex>

                <Divider
                    my={6}
                    borderColor="rgba(251, 220, 106, 0.1)"
                    position="relative"
                    _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "1px",
                        bg: "kodo.gold",
                        opacity: 0.3,
                    }}
                />

                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text fontSize="sm" color="gray.400">
                        © {new Date().getFullYear()} Kōdo 三. Todos los derechos reservados.
                    </Text>
                    <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
                        <Link
                            href="#"
                            fontSize="sm"
                            color="gray.400"
                            _hover={{
                                color: "kodo.gold",
                                textDecoration: "none",
                                transform: "translateX(2px)"
                            }}
                            transition="all 0.3s ease"
                            display="inline-block"
                        >
                            Política de Privacidad
                        </Link>
                        <Link
                            href="#"
                            fontSize="sm"
                            color="gray.400"
                            _hover={{
                                color: "kodo.gold",
                                textDecoration: "none",
                                transform: "translateX(2px)"
                            }}
                            transition="all 0.3s ease"
                            display="inline-block"
                        >
                            Términos de Uso
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;