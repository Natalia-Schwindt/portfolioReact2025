import ReactCountryFlag from "react-country-flag";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  Box,
  HStack,
  VStack,
  Link as ChakraLink,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", labelKey: "nav.home" },
    { path: "/presentation", labelKey: "nav.about" },
    { path: "/skills", labelKey: "nav.skills" },
    { path: "/projects", labelKey: "nav.projects" },
    { path: "/contact", labelKey: "nav.contact" },
  ];

  const languageOptions = [
    { countryCode: "ES", langCode: "es", title: "Spanish" },
    { countryCode: "GB", langCode: "en", title: "English" },
    { countryCode: "RU", langCode: "ru", title: "Russian" },
  ];

  return (
    <Box
      as="header"
      p={4}
      pl={{ base: 4, md: 8, lg: 12 }}
      color="subtitle.300"
      bg="transparent"
      position="relative"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center" width="100%">
        {isMobile && (
          <IconButton
            aria-label="Abrir o cerrar menú"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            bg="transparent"
            color="subtitle.300"
            _hover={{ bg: "red.50" }}
            _active={{ bg: "red.100" }}
            border="none"
            isRound
          />
        )}

        {!isMobile && (
          <HStack
            spacing={{ md: 2, lg: 4, "2xl": 8 }}
            bg="transparent"
            pt={2}
            pb={2}
            userSelect="none"
          >
            {navLinks.map(({ labelKey, path }) => (
              <Box
                key={path}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.4)"
                borderRadius="md"
                _hover={{
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                <ChakraLink
                  as={RouterLink}
                  to={path}
                  color="subtitle.300"
                  fontWeight="bold"
                  fontSize={{ md: "sm", lg: "md", "2xl": "lg" }}
                  textDecoration="none"
                  px={2}
                  py={1}
                >
                  {t(labelKey)}
                </ChakraLink>
              </Box>
            ))}
          </HStack>
        )}

        <HStack spacing={1}>
          {languageOptions.map((lang) => (
            <ChakraLink
              key={lang.langCode}
              onClick={() => i18n.changeLanguage(lang.langCode)}
              cursor="pointer"
              position="relative"
              px={2}
              py={1}
              _hover={{
                _after: {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  bg: "rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "md",
                  zIndex: -1,
                },
              }}
            >
              <Box boxShadow="0 4px 6px rgba(0, 0, 0, 0.4)" borderRadius="4px">
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                    borderRadius: "4px",
                  }}
                  title={lang.title}
                />
              </Box>
            </ChakraLink>
          ))}
        </HStack>
      </Flex>
      {isMobile && isOpen && (
        <Box
          position="absolute"
          top="0"
          left="0"
          bg="transparent"
          backdropFilter="blur(10px)"
          px={4}
          py={6}
          zIndex="999"
          width="fit-content" // <-- Cambio clave: el ancho se ajusta al contenido
        >
          <VStack align="start" spacing={1}>
            {navLinks.map(({ labelKey, path }) => (
              <ChakraLink
                key={path}
                as={RouterLink}
                to={path}
                onClick={() => setIsOpen(false)}
                color="subtitle.300"
                fontWeight="bold"
                textDecoration="none"
                pl={4}
                _hover={{ textDecoration: "none", color: "text.400" }}
              >
                {t(labelKey)}
              </ChakraLink>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;