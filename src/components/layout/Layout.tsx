import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box
            position="relative"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at 50% 50%, rgba(251, 220, 106, 0.03) 0%, transparent 70%)",
                zIndex: 0,
            }}
            _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')",
                backgroundRepeat: "repeat",
                opacity: 0.08,
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <Navbar />
            <Box as="main" position="relative" zIndex={1}>{children}</Box>
            <Footer />
        </Box>
    );
};

export default Layout;