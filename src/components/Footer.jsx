import { Box, Link, Icon, Text, HStack, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      py={6}
      mt={8}
      color="#d46c22ff"
      bg="transparent"
    >
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link
            href="https://www.linkedin.com/in/natalia-schwindt-3a3438115/"
            isExternal
            aria-label="LinkedIn"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 15px 5px rgba(209, 206, 196, 0.5)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Icon as={FaLinkedin} boxSize={{ base: 6, lg: 7 }} />
          </Link>
          <Link
            href="https://github.com/Natalia-Schwindt"
            isExternal
            aria-label="GitHub"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 15px 5px rgba(209, 206, 196, 0.5)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Icon as={FaGithub} boxSize={{ base: 6, lg: 7 }} />
          </Link>
          <Link href="mailto:naty8014l@gmail.com" aria-label="Correo" _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 15px 5px rgba(209, 206, 196, 0.5)",
              transition: "all 0.2s ease-in-out",
            }}>
            <Icon as={FaEnvelope} boxSize={{ base: 6, lg: 7 }} />
          </Link>
        </HStack>

        <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold" textAlign="center">
  {t("footer.createdBy")}
</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
