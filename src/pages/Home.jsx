import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box flex="1" display="flex" alignItems="center" justifyContent="center" px={4}>
      <Box textAlign="center">
        <Heading
          as="h1"
          pt={250}
          fontSize={["3xl", "4xl", "5xl"]}
          color="white"
          lineHeight="short"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          Portfolio Web 2025
        </Heading>
        <Text
          fontSize={["md", "lg"]}
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
