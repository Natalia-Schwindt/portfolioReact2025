import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      pt="200px"
      px={["8px", "40px"]}
      textAlign="center"
      color="white"
      h="70vh"
    >
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl", lg: "4xl", xl: "5xl", "2xl": "6xl" }}
        mb={6}
        fontWeight="semibold"
        textShadow="2px 2px 3px rgba(0,0,0,1)"
      >
        {t("contact.title")}
      </Heading>

      <Box
        maxW={{ base: "100%", xl: "80%" }}
        mx="auto"
        px={[4, 6]}
        py={[3, 5]}
        borderRadius="xl"
        bg="radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)"
      >
        <Text
          fontSize={{ base: "md", md: "lg", lg: "lg", xl: "xl", "2xl": "2xl" }}
          fontWeight="semibold"
          textShadow="2px 2px 3px rgba(0,0,0,1)"
        >
          {t("contact.text")}
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
