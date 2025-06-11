import { Box } from "@chakra-ui/react";
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
    <Box
      as="main"
      m={0}
      p={0}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bgImage="url('/images/fondo.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      overflowX="hidden"
      position="relative"
    >
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.15)"
        zIndex={0}
        pointerEvents="none"
      />

      <Box
        zIndex={1}
        position="relative"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Header />

        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default App;
