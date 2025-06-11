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
        mb={6}
        textShadow="2px 2px 3px rgba(0,0,0,1)"
      >
        Sobre mí
      </Heading>

      <Stack spacing={6} align="center">
        <Box
          maxW="700px"
          px={[4, 6]}
          py={[3, 5]}
          borderRadius="xl"
          bg="radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)"
        >
          <Text fontSize={["sm", "md"]} fontWeight="semibold">
            Mi nombre es <strong>Natalia Schwindt</strong>. Soy desarrolladora frontend especializada en React y Chakra UI.
            Me enfoco en crear experiencias digitales limpias, responsivas y accesibles.
          </Text>
        </Box>

        <Box
          maxW="700px"
          px={[4, 6]}
          py={[3, 5]}
          borderRadius="xl"
          bg="radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)"
        >
          <Text fontSize={["sm", "md"]} fontWeight="semibold">
            Busco combinar diseño atractivo con código funcional, siempre aprendiendo
            nuevas herramientas y tecnologías para crecer profesionalmente.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Presentation;
