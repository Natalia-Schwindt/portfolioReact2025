import { Box, Flex, Link, Icon, Text, HStack, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="transparent" color="white" py={6} mt={8}>
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link href="https://www.linkedin.com/in/natalia-schwindt-3a3438115/" isExternal aria-label="LinkedIn">
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://github.com/Natalia-Schwindt" isExternal aria-label="GitHub">
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="mailto:naty8014l@gmail.com" aria-label="Correo">
            <Icon as={FaEnvelope} boxSize={6} />
          </Link>
        </HStack>

        <Text fontSize="sm" textAlign="center">
          Creado por Natalia Schwindt © 2025
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
