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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  const isMobile = useBreakpointValue({ base: true, sm: false });

  const { t } = useTranslation();

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
      {/* 🔤 Selector de idioma siempre visible */}
      <Box position="absolute" top="1rem" right="1rem" zIndex="1001">
        <HStack spacing={2}>
          <ChakraLink
            onClick={() => i18n.changeLanguage("es")}
            fontWeight={i18n.language === "es" ? "bold" : "normal"}
            textDecoration={i18n.language === "es" ? "underline" : "none"}
            cursor="pointer"
            color="white"
            fontSize="sm"
          >
            ES
          </ChakraLink>
          <ChakraLink
            onClick={() => i18n.changeLanguage("en")}
            fontWeight={i18n.language === "en" ? "bold" : "normal"}
            textDecoration={i18n.language === "en" ? "underline" : "none"}
            cursor="pointer"
            color="white"
            fontSize="sm"
          >
            EN
          </ChakraLink>
          <ChakraLink
            onClick={() => i18n.changeLanguage("ru")}
            fontWeight={i18n.language === "ru" ? "bold" : "normal"}
            textDecoration={i18n.language === "ru" ? "underline" : "none"}
            cursor="pointer"
            color="white"
            fontSize="sm"
          >
            RU
          </ChakraLink>
        </HStack>
      </Box>

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
                  {t("nav.home")}
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
                  {t("nav.about")}
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
                  {t("nav.skills")}
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
                  {t("nav.projects")}
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
                  {t("nav.contact")}
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
            { label: t("nav.home"), path: "/" },
            { label: t("nav.about"), path: "/presentation" },
            { label: t("nav.skills"), path: "/skills" },
            { label: t("nav.projects"), path: "/projects" },
            { label: t("nav.contact"), path: "/contact" },
          ].map(({ label, path }) => (
            <ChakraLink
              key={label}
              as={RouterLink}
              to={path}
              color="white"
              fontWeight="bold"
              fontSize={{
                base: "md",
                md: "md",
                lg: "md",
                xl: "xl",
                "2xl": "2xl",
              }}
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
