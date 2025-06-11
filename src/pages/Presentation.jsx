import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      pt="200px"
      px={["8px", "40px"]}
      color="white"
      textAlign="center"
    >
      <Heading
        as="h2"
        fontSize={["2xl", "3xl", "3xl", "4xl", "5xl"]}
        mb={6}
        textShadow="2px 2px 3px rgba(0,0,0,1)"
      >
        {t("presentation.title")}
      </Heading>

      <Stack spacing={6} align="center">
        <Box
          maxW={["90%", "85%", "700px", "60%", "50%"]}
          px={[4, 6]}
          py={[3, 5]}
          borderRadius="xl"
          bg="radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)"
        >
          <Text
            fontSize={["md", "lg", "lg", "xl", "2xl"]}
            fontWeight="semibold"
          >
            <Trans i18nKey="presentation.paragraph1" components={{ strong: <strong /> }} />
          </Text>
        </Box>

        <Box
          maxW={["90%", "85%", "700px", "60%", "50%"]}
          px={[4, 6]}
          py={[3, 5]}
          borderRadius="xl"
          bg="radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)"
        >
          <Text
            fontSize={["md", "lg", "lg", "xl", "2xl"]}
            fontWeight="semibold"
          >
            {t("presentation.paragraph2")}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Presentation;
