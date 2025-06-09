import {
  Box,
  Heading,
  Text,
  Button
} from "@chakra-ui/react";

const Contact = () => {

  return (
    <Box
      as="section"
      p="200px 8px 0"
      textAlign="center"
      color="white"
      h="70vh"
    >
      <Heading
        as="h2"
        fontSize={["3xl", "4xl"]}
        mb={6}
        fontWeight="semibold"
      >
        Contacto
      </Heading>

      <Text
        fontSize={["sm", "md"]} fontWeight="semibold" textShadow="2px 2px 3px rgba(0,0,0,1)"
      >
        ¿Te gustaría colaborar conmigo, tienes alguna consulta o simplemente quieres saber más sobre mi trabajo? Estoy aquí para ayudarte y encantada de conectar contigo. No dudes en escribirme; siempre respondo con ganas de dialogar y explorar nuevas oportunidades. ¡Será un placer recibir tu mensaje!
      </Text>
    </Box>
  );
};

export default Contact;