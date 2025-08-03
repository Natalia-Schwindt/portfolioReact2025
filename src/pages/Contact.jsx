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
        color="#cc5500"
        textShadow="5px 5px 12px rgba(0, 0, 0, 0.89)"
      >
        {t("contact.title")}
      </Heading>

      <Box
        maxW={{ base: "100%", xl: "80%" }}
        mx="auto"
        px={[4, 6]}
        py={[3, 5]}
        borderRadius="xl"
        backdropFilter="blur(8px)"
      >
        <Text
          fontSize={{ base: "md", md: "lg", lg: "lg", xl: "xl", "2xl": "2xl" }}
          fontWeight="semibold"
          color="teal.400"
        >
          {t("contact.text")}
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;