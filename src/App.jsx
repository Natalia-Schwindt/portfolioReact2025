import { useEffect } from 'react';
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
  useEffect(() => {
    const link = document.createElement('link');
      link.href = "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400..900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <Box position="relative" width="100vw" height="100vh" overflow="hidden">
      <Box
        position="fixed"
        top="0"
        left="0"
        width={["0", "0", "30%"]}
        minWidth="300px"
        height="100vh"
        bgImage="url('/images/lateral.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex={1}
      />

      <Box
        marginLeft={["0", "0", "30%"]}
        width={["100%", "100%", "70%"]}
        flexDirection="column"
        minHeight="100vh"
        flexGrow={1}
        bgGradient="linear(to-b, #316e8dff, black)"
        zIndex={0}
        display="flex"
      >
        <Header />

        <Box flex="1" overflowY="auto">
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