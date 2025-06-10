import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const Presentation = () => {
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
        fontSize={["3xl", "4xl"]}
        mb={4}
        textShadow="2px 2px 3px rgba(0,0,0,1)"
      >
        Sobre mí
      </Heading>

      <Stack spacing={4}>
        <Text fontSize={["sm", "md"]} fontWeight="semibold" textShadow="2px 2px 3px rgba(0,0,0,1)">
          Soy desarrolladora frontend especializada en React y Chakra UI.
          Me enfoco en crear experiencias digitales limpias, responsivas y accesibles.
        </Text>
        <Text fontSize={["sm", "md"]} fontWeight="semibold" textShadow="2px 2px 3px rgba(0,0,0,1)">
          Busco combinar diseño atractivo con código funcional, siempre aprendiendo
          nuevas herramientas y tecnologías para crecer profesionalmente.
        </Text>
      </Stack>
    </Box>
  );
};

export default Presentation;
