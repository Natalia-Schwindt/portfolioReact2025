import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      pt="100px"
      px={["8px", "40px"]}
      color="white"
      textAlign="center"
    >
      <Heading
        as="h2"
        fontSize={["2xl", "3xl", "3xl", "4xl", "5xl"]}
        mb={6}
        color="#cc5500"
        textShadow="5px 5px 12px rgba(0, 0, 0, 0.89)"
      >
        {t("presentation.title")}
      </Heading>

      <Stack spacing={6} align="center">
        <Box
          maxW={["90%", "85%", "700px", "60%", "50%"]}
          px={[4, 6]}
          py={[3, 5]}
          borderRadius="xl"
          backdropFilter="blur(8px)"
        >
          <Text
            fontSize={["md", "lg", "lg", "xl", "2xl"]}
            fontWeight="semibold"
            color="teal.400"
          >
            <Trans i18nKey="presentation.paragraph1" components={{ strong: <strong /> }} />
          </Text>
        </Box>

        <Box
          maxW={["90%", "85%", "700px", "60%", "50%"]}
          px={[4, 6]}
          py={[3, 5]}
          borderRadius="xl"
          backdropFilter="blur(8px)"
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
    </Box>
  );
};

export default Presentation;