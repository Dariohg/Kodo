import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Technologies from "../components/sections/Technologies";
import Contact from "../components/sections/Contact";
import AboutUs from "@/components/sections/AboutUs.tsx";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <Services />
            <AboutUs />
            <Technologies />
            <Contact />
        </Layout>
    );
};

export default HomePage;