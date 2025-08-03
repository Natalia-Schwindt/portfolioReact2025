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
      <Box textAlign="center" px={[4, 6]} py={[3, 5]} borderRadius="xl">
       <Heading
        as="h1"
        // El padding-top de 180px se aplica en móvil.
        // Se ha ajustado el padding para tablet a 160px.
        // Se ha reducido el padding superior para la vista de escritorio a 120px.
        pt={["180px", "180px", "160px", "120px"]}
        // Se ha reducido el tamaño de la fuente para escritorio (el último valor)
        fontSize={["5xl", "6xl", "7xl", "6xl", "8xl"]}
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
          // Se ha reducido el tamaño de la fuente para escritorio (el último valor)
          fontSize={["lg", "xl", "2xl", "2xl","3xl"]}
          fontWeight="semibold"
          color="teal.500"
          m={[8, 0, 32]}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
        >
          {t("home.subtitle")}
        </Text>
      </Box>
    </Box>
  );
};

export default Home;