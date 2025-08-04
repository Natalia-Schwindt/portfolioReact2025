import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box textAlign="center" px={[4, 5]} py={3} borderRadius="xl">
       <Heading
        as="h1"
        pt={["180px", "130px", "120px"]}
        fontSize={["5xl", "6xl", "7xl"]}
        bgGradient="linear(to-r, #fb0707ff, #0db781ff)"
        bgClip="text"
        lineHeight="short"
        fontFamily="heading"
        fontWeight="900"
        textShadow="4px 4px 10px rgba(43, 42, 42, 0.34), 6px 6px 14px rgba(0, 0, 0, 0.46)"
      >
        {t("home.title")}
      </Heading>
        <Text
          fontSize={["lg", "xl", "2xl", "2xl","3xl"]}
          fontWeight="semibold"
          color="teal.500"
          m={[8, 0, 24]}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
        >
          {t("home.subtitle")}
        </Text>
      </Box>
    </Box>
  );
};

export default Home;