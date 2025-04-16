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
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import LogoSvg from "../../assets/images/logo-completo.svg";

const SocialButton = ({
                          children,
                          href,
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
            transition="background 0.3s ease"
            _hover={{
                bg: "rgba(251, 220, 106, 0.2)",
            }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    );
};

const Footer = () => {
    return (
        <Box
            bg="kodo.black"
            color="white"
            borderTop="1px solid"
            borderColor="rgba(251, 220, 106, 0.2)"
        >
            <Container
                as={Stack}
                maxW="container.xl"
                py={10}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Box mb={{ base: 6, md: 0 }}>
                        <Image
                            src={LogoSvg}
                            alt="Kōdo 三 Logo"
                            height="100px"
                            width="auto"
                            mb={2}
                        />
                        <Text fontSize="sm" color="gray.400">
                            Tecnología • Innovación • Colaboración
                        </Text>
                    </Box>

                    <Stack direction="row" spacing={6}>
                        <SocialButton label="Twitter" href="#">
                            <Icon as={FaTwitter} color="gray.400" _hover={{ color: "kodo.gold" }} />
                        </SocialButton>
                        <SocialButton label="LinkedIn" href="#">
                            <Icon as={FaLinkedin} color="gray.400" _hover={{ color: "kodo.gold" }} />
                        </SocialButton>
                        <SocialButton label="GitHub" href="#">
                            <Icon as={FaGithub} color="gray.400" _hover={{ color: "kodo.gold" }} />
                        </SocialButton>
                    </Stack>
                </Flex>

                <Divider my={6} borderColor="rgba(251, 220, 106, 0.1)" />

                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text fontSize="sm" color="gray.400">
                        © {new Date().getFullYear()} Kōdo 三. Todos los derechos reservados.
                    </Text>
                    <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
                        <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "kodo.gold" }}>
                            Política de Privacidad
                        </Link>
                        <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "kodo.gold" }}>
                            Términos de Uso
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;