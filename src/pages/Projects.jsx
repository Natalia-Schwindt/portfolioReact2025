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
    <Box as="section" mt="60px" py={10} px={4} minH="100vh" color="white">
      <Heading
        as="h2"
        fontSize="3xl"
        textAlign="center"
        mb={8}
        fontWeight="bold"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
      >
        {t("projectsTitle")}
      </Heading>

      {projects.map((project, index) => (
        <Flex
          key={project.id}
          direction={{ base: "column", lg: "row" }}
          align="center"
          bg="rgba(255, 255, 255, 0.1)"
          borderRadius="2xl"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
          overflow="hidden"
          mb={10}
          mx="auto"
          w="100%"
          maxW={{
            base: "100%",
            md: "80%",
            lg: "100%",
            xl: "1440px",
          }}
          sx={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Box
            flexBasis={{ base: "100%", lg: "40%" }}
            w="100%"
            sx={{ aspectRatio: { base: "auto", md: "4/3" } }}
          >
            <Image
              src={project.image}
              alt={t(`projects.${index}.title`)}
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>

          <Stack
            flexBasis={{ base: "100%", lg: "60%" }}
            spacing={4}
            p={6}
            textAlign={{ base: "center", lg: "left" }}
            justify="center"
          >
            <Heading as="h3" fontSize="xl" color="white">
              {t(`projects.${index}.title`)}
            </Heading>

            <Text fontSize={["md", "lg", "xl"]} color="whiteAlpha.800">
              {t(`projects.${index}.description`)}
            </Text>

            <Link
              href={project.link}
              isExternal
              rel="noopener noreferrer"
              fontSize={["md", "lg", "xl"]}
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
  );
};

export default Projects;
