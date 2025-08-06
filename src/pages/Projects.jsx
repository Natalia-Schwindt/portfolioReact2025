import { Box, Heading, Image, Text, Link, Stack, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    image: "/images/proyecto1.png",
    link: "https://github.com/Natalia-Schwindt/proyectoFinalReact",
  },
  {
    id: 2,
    image: "/images/proyecto2.png",
    link: "https://github.com/Natalia-Schwindt/todolist",
  },
  {
    id: 3,
    image: "/images/proyecto3.png",
    link: "https://github.com/Natalia-Schwindt/buscadorDeComics",
  },
  {
    id: 4,
    image: "/images/proyecto4.png",
    link: "https://github.com/Natalia-Schwindt/proyectoAhorrADAs",
  },
  {
    id: 5,
    image: "/images/proyecto5.png",
    link: "https://github.com/Natalia-Schwindt/editordememes",
  },
  {
    id: 6,
    image: "/images/proyecto6.png",
    link: "https://github.com/Natalia-Schwindt/proyectoqr",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      mt={{ base: "90px", md: "0px" }}
      px={4}
      color="white"
      direction="column"
    >
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl", lg: "4xl", xl: "5xl", "2xl": "6xl" }}
        textAlign="center"
        mb={{ base: 8, xl: 4 }}
        fontWeight="semibold"
        color="#cc5500"
        textShadow="5px 5px 12px rgba(0, 0, 0, 0.89)"
      >
        {t("projectsTitle")}
      </Heading>

      <Box
        flex="1"
      >
        {projects.map((project, index) => (
          <Flex
            key={project.id}
            direction={{ base: "column", xl: "row" }}
            align="center"
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="2xl"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
            overflow="hidden"
            mb={10}
            mx="auto"
            maxW={{
              base: "100%",
              md: "90%",
              lg: "90%",
              xl: "90%",
              "2xl": "80%",
            }}
            sx={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <Box
              flexBasis={{ base: "100%", lg: "45%" }}
              w="100%"
              position="relative"
            >
              <Image
                src={project.image}
                alt={t(`projects.${index}.title`)}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>

            <Stack
              flexBasis={{ base: "100%", lg: "55%" }}
              spacing={4}
              p={6}
              textAlign={{ base: "center", lg: "left" }}
              justify="center"
            >
              <Heading as="h3" fontSize="xl" color="white">
                {t(`projects.${index}.title`)}
              </Heading>

              <Text fontSize={{ base: "md", md: "lg", lg: "md", "2xl": "lg" }} color="whiteAlpha.800">
                {t(`projects.${index}.description`)}
              </Text>

              <Link
                href={project.link}
                isExternal
                rel="noopener noreferrer"
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                color="blue.300"
                fontWeight="medium"
                _hover={{ color: "blue.500" }}
              >
                {t("seeMore")}
              </Link>
            </Stack>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};

export default Projects;