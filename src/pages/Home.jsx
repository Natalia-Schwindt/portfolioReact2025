import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box flex="1" display="flex" alignItems="center" justifyContent="center" px={4}>
      <Box
        textAlign="center"
        px={[4, 6]}
        py={[3, 5]}
        borderRadius="xl"
        bg="radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)"
      >
        <Heading
          as="h1"
          pt={250}
          fontSize={["4xl", "5xl", "6xl", "7xl"]}
          color="white"
          lineHeight="short"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          {t("home.title")}
        </Heading>

        <Text
          fontSize={["lg", "xl", "2xl", "3xl"]}
          fontWeight="semibold"
          color="white"
          m={2}
          textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)"
        >
          {t("home.subtitle")}
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
