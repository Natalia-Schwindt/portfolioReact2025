import { Box, Heading, Image, Text, Link, Stack } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Proyecto Final React",
    description:
      "Este proyecto es una aplicación para mostrar productos de una base de datos, con funcionalidades de búsqueda, filtrado por precio y favoritos, utilizando Firebase como backend y Chakra UI para la interfaz.",
    image: "/images/proyecto1.png",
    link: "https://github.com/Natalia-Schwindt/proyectoFinalReact",
  },
  {
    id: 2,
    title: "Lista de Tareas",
    description:
      "Este proyecto es para crear listas de tareas, realizado con React y módulos de Chakra UI. Es un diseño totalmente responsivo, para ser utilizado desde cualquier dispositivo.",
    image: "/images/proyecto2.png",
    link: "https://github.com/Natalia-Schwindt/todolist",
  },
  {
    id: 3,
    title: "Buscador de Comics",
    description:
      "Este proyecto es un buscador de comics, utilizando la API de Marvel para obtener los datos. Se puede buscar por nombre, filtrar por personaje y ordenar por fecha de publicación.",
    image: "/images/proyecto3.png",
    link: "https://github.com/Natalia-Schwindt/buscadorDeComics",
  },
  {
    id: 4,
    title: "AhorrADAs",
    description:
      "Proyecto colaborativo para llevar control de gastos e ingresos, con la posibilidad de ver estadísticas y gráficos de los movimientos realizados.",
    image: "/images/proyecto4.png",
    link: "https://github.com/Natalia-Schwindt/proyectoAhorrADAs",
  },
  {
    id: 5,
    title: "Editor de Memes",
    description:
      "Este proyecto sirve para crear memes personalizados, con texto editable y una variedad de filtros aplicables sobre la imagen.",
    image: "/images/proyecto5.png",
    link: "https://github.com/Natalia-Schwindt/editordememes",
  },
  {
    id: 6,
    title: "Proyecto QR",
    description:
      "En este proyecto se genera un código QR asociado a una página web, permitiendo configurar accesos y opciones de uso específicas.",
    image: "/images/proyecto6.png",
    link: "https://github.com/Natalia-Schwindt/proyectoqr",
  },
];

const Projects = () => {
  return (
    <Box
      as="section"
      py={10}
      px={4}
      minH="100vh"
      color="white"
    >
      <Heading
        as="h2"
        fontSize="3xl"
        textAlign="center"
        mb={8}
        fontWeight="bold"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
      >
        Mis Proyectos
      </Heading>

      {projects.map((project) => (
        <Box
          key={project.id}
          bg="rgba(255, 255, 255, 0.1)"
          borderRadius="2xl"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
          overflow="hidden"
          mb={10}
          sx={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width="100%"
            objectFit="contain"
          />

          <Stack spacing={3} p={4}>
            <Heading as="h3" fontSize="xl" color="white">
              {project.title}
            </Heading>
            <Text fontSize="sm" color="whiteAlpha.800">
              {project.description}
            </Text>
            <Link
              href={project.link}
              isExternal
              color="blue.300"
              fontWeight="medium"
              _hover={{ color: "blue.500" }}
            >
              Ver más →
            </Link>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
