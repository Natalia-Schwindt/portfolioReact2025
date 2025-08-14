import { Box, Link, Icon, Text, HStack, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  // Array para definir los enlaces de redes sociales
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/natalia-schwindt-3a3438115/",
      ariaLabel: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/Natalia-Schwindt",
      ariaLabel: "GitHub",
      icon: FaGithub,
    },
    {
      href: "mailto:naty8014l@gmail.com",
      ariaLabel: "Correo",
      icon: FaEnvelope,
    },
  ];

  return (
    <Box
      as="footer"
      py={{ base: 6, lg: 2 }}
      mt={{ base: 4, lg: 2 }}
      mb={{ base: 4, lg: 2 }}
      color="subtitle.300"
      bg="transparent"
    >
      <VStack spacing={4}>
        <HStack spacing={6}>
          {/* Mapeamos el array para renderizar los enlaces */}
          {socialLinks.map((link) => (
            <Link
              key={link.ariaLabel}
              href={link.href}
              isExternal={link.href.startsWith("http")}
              aria-label={link.ariaLabel}
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 15px 5px rgba(209, 206, 196, 0.5)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Icon as={link.icon} boxSize={{ base: 6, lg: 7 }} />
            </Link>
          ))}
        </HStack>

        <Text
          fontSize={{ base: "md", lg: "lg" }}
          fontWeight="bold"
          textAlign="center"
        >
          {t("footer.createdBy")}
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;