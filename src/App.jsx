import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
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
      bgAttachment="fixed"  // <-- Aquí está el cambio clave
      overflowX="hidden"
    >
      <Header />

      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
