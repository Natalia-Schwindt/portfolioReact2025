import { Box, Grid, ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        minH="100vh"
        templateRows="auto 1fr auto"
        backgroundColor="background.800"
      >
        <Header />

        <Box overflowY="auto" position="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>

        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

export default App;