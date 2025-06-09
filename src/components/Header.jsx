import { Link as RouterLink } from "react-router-dom";
import { IconButton, Box, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Box
      as="header"
      position="relative"
      zIndex="1000"
      bg="transparent"
      p={4}
      color="white"
    >
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
          top="30px"
          left="0"
          right="0"
          bg="transparent"
          px={4}
          py={6}
          zIndex="999"
        >
          <VStack align="start" spacing={4}>
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
    </Box>
  );
};

export default Header;
