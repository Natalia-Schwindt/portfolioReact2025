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
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  const isMobile = useBreakpointValue({ base: true, sm: false });
  const { t } = useTranslation();

  return (
    <Box
      as="header"
      p={4}
      pl={{ base: 4, md: 8, lg: 12 }}
      color="#cc5500"
      bg="transparent"
      position="relative"
      zIndex="1000"
    >
      {!isMobile && (
        <Flex justify="space-between" align="center">
          <HStack spacing={8} bg="transparent" pt={2} pb={2} userSelect="none">
            {[
              { label: t("nav.home"), path: "/" },
              { label: t("nav.about"), path: "/presentation" },
              { label: t("nav.skills"), path: "/skills" },
              { label: t("nav.projects"), path: "/projects" },
              { label: t("nav.contact"), path: "/contact" },
            ].map(({ label, path }) => (
              <Box
                key={label}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.4)"
                borderRadius="md"
                _hover={{
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                <ChakraLink
                  as={RouterLink}
                  to={path}
                  color="#d46414ff"
                  fontWeight="bold"
                  fontSize="lg"
                  textDecoration="none"
                  px={2}
                  py={1}
                >
                  {label}
                </ChakraLink>
              </Box>
            ))}
          </HStack>

          <HStack spacing={2}>
            <ChakraLink
              onClick={() => i18n.changeLanguage("es")}
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
                  countryCode="ES"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "4px",
                  }}
                  title="Spanish"
                />
              </Box>
            </ChakraLink>
            <ChakraLink
              onClick={() => i18n.changeLanguage("en")}
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
                  countryCode="GB"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "4px",
                  }}
                  title="English"
                />
              </Box>
            </ChakraLink>
            <ChakraLink
              onClick={() => i18n.changeLanguage("ru")}
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
                  countryCode="RU"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "4px",
                  }}
                  title="Russian"
                />
              </Box>
            </ChakraLink>
          </HStack>
        </Flex>
      )}

      {isMobile && (
        <>
          <IconButton
            aria-label="Abrir o cerrar menú"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            bg="transparent"
            color="#cc5500"
            _hover={{ bg: "red.50" }}
            _active={{ bg: "red.100" }}
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
                  color="#cc5500"
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
                  color="#cc5500"
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
                  color="#cc5500"
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
                  color="#cc5500"
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
                  color="#cc5500"
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
    </Box>
  );
};

export default Header;
