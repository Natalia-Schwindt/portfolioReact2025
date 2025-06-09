import { Link as RouterLink } from "react-router-dom";
import { IconButton, Box, HStack, VStack, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  // Determinamos si estamos en móvil (<=425px)
  const isMobile = useBreakpointValue({ base: true, sm: false }); 
  // base = 0 - 480px, sm = desde 480px en adelante. Para 425px exacto hay que personalizar el theme,
  // pero sm es lo más cercano. Si necesitás exacto, hay que usar window.innerWidth con useEffect.

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      bg="transparent"
      p={4}
      color="white"
      // Para que el menú horizontal tenga fondo con esmerilado
      style={{
        backdropFilter: !isMobile ? "blur(10px)" : "none",
        WebkitBackdropFilter: !isMobile ? "blur(10px)" : "none",
      }}
    >
      {/* Menú hamburguesa solo en móvil */}
      {isMobile && (
        <>
          <IconButton
            aria-label="Abrir o cerrar menú"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            bg="transparent"
            color="white"
            _hover={{ bg: "whiteAlpha.300" }}
            _active={{ bg: "whiteAlpha.400" }}
            border="none"
            isRound
          />
          {isOpen && (
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bg="transparent"
              backdropFilter="blur(10px)"
              px={4}
              py={6}
              zIndex="999"
            >
              <VStack align="start" spacing={1}>
                <ChakraLink
                  as={RouterLink}
                  to="/"
                  onClick={() => setIsOpen(false)}
                  color="white"
                  fontWeight="bold"
                  textDecoration="none"
                  pl={4}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  Inicio
                </ChakraLink>
                <ChakraLink
                  as={RouterLink}
                  to="/presentation"
                  onClick={() => setIsOpen(false)}
                  color="white"
                  fontWeight="bold"
                  textDecoration="none"
                  pl={4}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  Sobre mí
                </ChakraLink>
                <ChakraLink
                  as={RouterLink}
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  color="white"
                  fontWeight="bold"
                  textDecoration="none"
                  pl={4}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  Proyectos
                </ChakraLink>
                <ChakraLink
                  as={RouterLink}
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  color="white"
                  fontWeight="bold"
                  textDecoration="none"
                  pl={4}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  Contacto
                </ChakraLink>
              </VStack>
            </Box>
          )}
        </>
      )}

      {/* Menú horizontal solo en pantallas > 425px */}
      {!isMobile && (
        <HStack
          spacing={8}
          justify="center"
          // Menú fijo y transparente con esmerilado
          bg="transparent"
          // backdropFilter aplicado en el Box padre
          pt={2}
          pb={2}
          userSelect="none"
        >
          {[
            { label: "Inicio", path: "/" },
            { label: "Sobre mí", path: "/presentation" },
            { label: "Proyectos", path: "/projects" },
            { label: "Contacto", path: "/contact" },
          ].map(({ label, path }) => (
            <ChakraLink
              key={label}
              as={RouterLink}
              to={path}
              color="white"
              fontWeight="bold"
              textDecoration="none"
              position="relative"
              px={2}
              py={1}
              _hover={{
                color: "teal.300",
                textDecoration: "none",
                // fondo esmerilado debajo del texto con blur y transparencia
                _after: {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  bg: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "md",
                  zIndex: -1,
                },
              }}
            >
              {label}
            </ChakraLink>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default Header;
