import { Box, Flex, Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Flex
      minHeight="100vh"
      width="100%"
      direction={["column", "column", "column", "row"]}
    >
      {/* Contenedor de la imagen lateral (sidebar) */}
      <Box
        display={["none", "none", "none", "block"]}
        width="30%"
        minWidth="300px"
        height="100vh"
        bgImage="url('/images/lateral.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex={1}
        position="fixed" // <-- Añadido para que la imagen se quede fija
        top="0" // <-- Añadido para posicionarla en la parte superior
        left="0" // <-- Añadido para posicionarla a la izquierda
      />

      {/* Contenedor principal de la aplicación */}
      <Flex
        flex="1"
        direction="column"
        minHeight="100vh"
        bgGradient="linear(to-b, #316e8dff, black)"
        zIndex={0}
        position="relative"
        ml={["0", "0", "0", "30%"]}
      >
        {/* Banner móvil posicionado de forma absoluta */}
        <Image
          src="./images/bannerMobile.jpg"
          alt="Mobile banner"
          objectFit="cover"
          height="150px"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          display={["block", "block", "none", "none"]}
          zIndex={-1}
        />
        
        <Header position="relative" zIndex={10} />

        <Box flex="1" overflowY="auto" position="relative" zIndex={10}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>

        <Footer position="relative" zIndex={10} />
      </Flex>
    </Flex>
  );
}

export default App;