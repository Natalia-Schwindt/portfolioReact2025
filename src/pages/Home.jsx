import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
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
  fontSize={["4xl", "5xl", "6xl", "7xl"]} // xs, sm, md, lg+
  color="white"
  lineHeight="short"
  textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
>
  Portfolio Web 2025
</Heading>

<Text
  fontSize={["lg", "xl", "2xl", "3xl"]} // mejor visibilidad en mobile y escalable
  fontWeight="semibold"
  color="white"
  m={2}
  textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)"
>
  Desarrollo Frontend con React & Chakra UI
</Text>
      </Box>
    </Box>
  );
};

export default Home;
