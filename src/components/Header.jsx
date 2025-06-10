import { Link as RouterLink } from "react-router-dom";
import { IconButton, Box, HStack, VStack, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  const isMobile = useBreakpointValue({ base: true, sm: false }); 

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
      style={{
        backdropFilter: !isMobile ? "blur(10px)" : "none",
        WebkitBackdropFilter: !isMobile ? "blur(10px)" : "none",
      }}
    >
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
                  to="/Skills"
                  onClick={() => setIsOpen(false)}
                  color="white"
                  fontWeight="bold"
                  textDecoration="none"
                  pl={4}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  Habilidades
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

      {!isMobile && (
        <HStack
          spacing={8}
          justify="center"
          bg="transparent"
          pt={2}
          pb={2}
          userSelect="none"
        >
          {[
            { label: "Inicio", path: "/" },
            { label: "Sobre mí", path: "/presentation" },
            { label: "Habilidades", path: "/skills" },
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
