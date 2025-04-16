import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <Navbar />
            <Box as="main">{children}</Box>
            <Footer />
        </Box>
    );
};

export default Layout;