import { useState, useEffect } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Container,
    Button,
    Link,
    Image
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import LogoSvg from "../../assets/images/Logo.svg";

const NavLink = ({ children, to }: { children: React.ReactNode, to: string }) => (
    <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
    >
        <Link
            px={2}
            py={1}
            rounded="md"
            _hover={{
                textDecoration: "none",
                color: "kodo.gold",
            }}
            cursor="pointer"
        >
            {children}
        </Link>
    </ScrollLink>
);

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const changeNavbar = () => {
            if (window.scrollY >= 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", changeNavbar);
        return () => {
            window.removeEventListener("scroll", changeNavbar);
        };
    }, []);

    const Links = ["Inicio", "Servicios", "Sobre Nosotros", "Tecnologías", "Contacto"];
    const linkIds = ["hero", "services", "about", "technologies", "contact"];

    return (
        <Box
            position="fixed"
            w="100%"
            zIndex={999}
            bg={scrolled ? "rgba(9, 10, 14, 0.9)" : "transparent"}
            backdropFilter={scrolled ? "blur(10px)" : "none"}
            transition="all 0.3s ease"
            borderBottom={scrolled ? "1px solid" : "none"}
            borderColor={scrolled ? "rgba(251, 220, 106, 0.2)" : "transparent"}
        >
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="md"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                        bg="transparent"
                        color="white"
                        _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                    />
                    <HStack spacing={8} alignItems="center">
                        <Box>
                            <Image
                                src={LogoSvg}
                                alt="Kōdo 三 Logo"
                                height="36px"
                                width="auto"
                            />
                        </Box>
                        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
                            {Links.map((link, index) => (
                                <NavLink key={link} to={linkIds[index]}>
                                    {link}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems="center">
                        <Button
                            variant="primary"
                            size="sm"
                            mr={4}
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            Contáctanos
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }} bg="kodo.black">
                        <Stack as="nav" spacing={4}>
                            {Links.map((link, index) => (
                                <NavLink key={link} to={linkIds[index]}>
                                    {link}
                                </NavLink>
                            ))}
                            <Button variant="primary" size="sm" w="fit-content">
                                Contáctanos
                            </Button>
                        </Stack>
                    </Box>
                ) : null}
            </Container>
        </Box>
    );
};

export default Navbar;