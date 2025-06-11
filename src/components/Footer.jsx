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
      color="white"
      bg={{ base: "transparent", lg: "rgba(0, 0, 0, 0.4)" }}
      sx={{
        backdropFilter: { lg: "blur(6px)" },
        WebkitBackdropFilter: { lg: "blur(6px)" },
        boxShadow: { lg: "0 2px 10px rgba(0, 0, 0, 0.3)" },
        borderTop: { lg: "1px solid rgba(255, 255, 255, 0.2)" },
      }}
    >
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link
            href="https://www.linkedin.com/in/natalia-schwindt-3a3438115/"
            isExternal
            aria-label="LinkedIn"
          >
            <Icon as={FaLinkedin} boxSize={{ base: 6, lg: 7 }} />
          </Link>
          <Link
            href="https://github.com/Natalia-Schwindt"
            isExternal
            aria-label="GitHub"
          >
            <Icon as={FaGithub} boxSize={{ base: 6, lg: 7 }} />
          </Link>
          <Link href="mailto:naty8014l@gmail.com" aria-label="Correo">
            <Icon as={FaEnvelope} boxSize={{ base: 6, lg: 7 }} />
          </Link>
        </HStack>

        <Text fontSize={{ base: "sm", lg: "md" }} textAlign="center">
          {t("footer.createdBy")}
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
