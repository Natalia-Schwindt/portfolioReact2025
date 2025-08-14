import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      direction={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      flex="1"
      p={{ base: "1rem", md: "2rem", lg: "3rem" }}
    >
      {/* Contenedor del título (columna 1) */}
      <Box
        flexShrink={0}
        flexBasis={{ base: "100%", lg: "40%" }}
        textAlign={{ base: "center", lg: "left" }}
        mb={{ base: "2rem", lg: 0 }}
        mr={{ lg: "2rem" }}
      >
        <Heading
          as="h2"
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          color="#cc5500"
          textShadow="5px 5px 12px rgba(0, 0, 0, 0.89)"
        >
          {t("presentation.title")}
        </Heading>
      </Box>

      {/* Contenedor de los párrafos (columna 2) */}
      <Stack
        spacing="1.5rem"
        flexGrow={1}
        flexBasis={{ base: "100%", lg: "60%" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Box
          borderRadius="xl"
          backdropFilter="blur(8px)"
          p={{ base: "1rem", md: "1.5rem" }}
          w="100%"
        >
          <Text
            fontSize={["md", "lg", "lg", "xl"]}
            fontWeight="semibold"
            color="teal.400"
          >
            <Trans
              i18nKey="presentation.paragraph1"
              components={{ strong: <strong /> }}
            />
          </Text>
        </Box>

        <Box
          borderRadius="xl"
          backdropFilter="blur(8px)"
          p={{ base: "1rem", md: "1.5rem" }}
          w="100%"
        >
          <Text
            fontSize={["md", "lg", "lg", "xl", "2xl"]}
            fontWeight="semibold"
            color="teal.400"
          >
            {t("presentation.paragraph2")}
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Presentation;