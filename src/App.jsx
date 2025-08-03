// import { useEffect } from 'react';
// import { Box } from "@chakra-ui/react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Presentation from "./pages/Presentation";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// function App() {
//   useEffect(() => {
//     const link = document.createElement('link');
//       link.href = "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400..900&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   return (
//     <Box position="relative" width="100vw" height="100vh" overflow="hidden">
//       <Box
//         position="fixed"
//         top="0"
//         left="0"
//         width={["0", "0", "30%"]}
//         minWidth="300px"
//         height="100vh"
//         bgImage="url('/images/lateral.png')"
//         bgPosition="center"
//         bgSize="cover"
//         bgRepeat="no-repeat"
//         zIndex={1}
//       />

//       <Box
//         marginLeft={["0", "0", "30%"]}
//         width={["100%", "100%", "70%"]}
//         flexDirection="column"
//         minHeight="100vh"
//         flexGrow={1}
//         bgGradient="linear(to-b, #316e8dff, black)"
//         zIndex={0}
//         display="flex"
//       >
//         <Header />

//         <Box flex="1" overflowY="auto">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/presentation" element={<Presentation />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </Box>

//         <Footer />
//       </Box>
//     </Box>
//   );
// }

// export default App;

// import { Box, Flex } from "@chakra-ui/react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Presentation from "./pages/Presentation";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Flex
//       minHeight="100vh" // Asegura que el contenedor ocupe al menos toda la altura de la pantalla
//       width="100%"
//       direction={["column", "column", "row"]} // 👈 En móvil los elementos van en columna, en escritorio en fila
//     >
//       {/* 👈 Contenedor de la imagen lateral (sidebar) */}
//       <Box
//         display={["none", "none", "block"]} // 👈 Se oculta en móvil y se muestra en escritorio
//         width="30%"
//         minWidth="300px"
//         height="100vh"
//         bgImage="url('/images/lateral.png')"
//         bgPosition="center"
//         bgSize="cover"
//         bgRepeat="no-repeat"
//         zIndex={1}
//       />

//       {/* 👈 Contenedor principal de la aplicación */}
//       <Flex
//         flex="1" // 👈 Ocupa el espacio restante
//         direction="column" // 👈 Los elementos de esta caja siempre van en columna (Header, Content, Footer)
//         minHeight="100vh"
//         bgGradient="linear(to-b, #316e8dff, black)"
//         zIndex={0}
//       >
//         <Header />

//         <Box flex="1" overflowY="auto">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/presentation" element={<Presentation />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </Box>

//         <Footer />
//       </Flex>
//     </Flex>
//   );
// }

// export default App;

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
      // La dirección ahora tiene 4 valores, uno para cada punto de quiebre:
      // ["mobile", "mobile-horizontal", "tablet", "desktop"]
      direction={["column", "column", "column", "row"]}
    >
      {/* Contenedor de la imagen lateral (sidebar) */}
      <Box
        // Se muestra solo en la vista de escritorio (lg)
        display={["none", "none", "none", "block"]}
        width="30%"
        minWidth="300px"
        height="100vh"
        bgImage="url('/images/lateral.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex={1}
      />

      {/* Contenedor principal de la aplicación */}
      <Flex
        flex="1"
        direction="column"
        minHeight="100vh"
        bgGradient="linear(to-b, #316e8dff, black)"
        zIndex={0}
        position="relative"
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
          // Se muestra solo en la vista de móvil (base y sm)
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