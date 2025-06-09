import { Box, Heading, Image, Text, Link, Stack } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Proyecto Final React",
    description:
      "Aplicación de ecommerce desarrollada con React que simula la experiencia de compra de productos. Permite explorar una base de datos de artículos, aplicar filtros por precio, buscar por nombre, marcar favoritos y gestionar un carrito de compras interactivo. La app simula una compra final mediante una confirmación visual. Utiliza Firebase como backend simulado y está diseñada con Chakra UI para lograr una interfaz accesible y responsive. Incluye navegación dinámica con React Router, formularios optimizados con react-hook-form y animaciones suaves con framer-motion.",
    image: "/images/proyecto1.png",
    link: "https://github.com/Natalia-Schwindt/proyectoFinalReact",
  },
  {
    id: 2,
    title: "Lista de Tareas",
    description:
    "Aplicación desarrollada como proyecto final del Módulo V de ADA ITW. Permite crear y gestionar listas de tareas de forma dinámica, intuitiva y completamente responsiva. El usuario puede añadir tareas, editarlas, filtrarlas por estado (pendientes o realizadas), y eliminarlas según necesidad. El diseño se realizó con React y Chakra UI, asegurando una experiencia de uso fluida desde cualquier dispositivo. Es una herramienta práctica pensada para mejorar la organización personal o laboral. El proyecto utiliza Vite para un entorno de desarrollo rápido y eficiente.",
    image: "/images/proyecto2.png",
    link: "https://github.com/Natalia-Schwindt/todolist",
  },
  {
    id: 3,
    title: "Buscador de Comics",
    description:
      "Aplicación web que permite buscar, filtrar y ordenar cómics y personajes de Marvel usando su API oficial. Cuenta con paginación y muestra resultados en tarjetas responsivas con imágenes y detalles básicos. Desarrollada con HTML, Tailwind CSS y JavaScript puro.",
    image: "/images/proyecto3.png",
    link: "https://github.com/Natalia-Schwindt/buscadorDeComics",
  },
  {
    id: 4,
    title: "AhorrADAs",
    description:
      "Aplicación web desarrollada en equipo con otra estudiante, como parte de una práctica colaborativa, orientada a la gestión de finanzas personales. Permite registrar ingresos y gastos, aplicar filtros por tipo, categoría o fecha, y visualizar reportes personalizados. Proyecto realizado con JavaScript Vanilla, Tailwind CSS y LocalStorage. Incluye una versión traducida completamente al ruso, pensada para ampliar el alcance a otros públicos.",
    image: "/images/proyecto4.png",
    link: "https://github.com/Natalia-Schwindt/proyectoAhorrADAs",
  },
  {
    id: 5,
    title: "Editor de Memes",
    description:
      "Editor de memes desarrollado de forma individual con HTML, CSS y JavaScript Vanilla. La aplicación permite personalizar imágenes agregando texto superior e inferior, con múltiples opciones de edición: fuente, tamaño, alineación, color, contorno, espaciado e interlineado. Incluye además herramientas para modificar la apariencia de la imagen mediante filtros (brillo, contraste, opacidad, desenfoque, entre otros) y una opción para descargar el meme final en formato de imagen. El proyecto se enfocó en la práctica de manipulación del DOM, estilos dinámicos y usabilidad en la edición visual.",
    image: "/images/proyecto5.png",
    link: "https://github.com/Natalia-Schwindt/editordememes",
  },
  {
    id: 6,
    title: "Proyecto QR",
    description:
      "Proyecto de diseño web que simula la carta digital de un restaurante. Fue desarrollado con HTML y CSS puros. Las imágenes fueron creadas con inteligencia artificial (Leonardo AI), lo que permitió dar un estilo visual original y coherente. El sitio presenta secciones navegables de bebidas, comidas y postres, acompañadas de descripciones creativas que refuerzan la identidad del restaurante. La experiencia se completa con un código QR que permite acceder fácilmente a la carta desde dispositivos móviles, simulando su uso en un entorno real. Este proyecto fue uno de los más disfrutados, por su combinación de diseño, narrativa y creatividad visual.",
    image: "/images/proyecto6.png",
    link: "https://github.com/Natalia-Schwindt/proyectoqr",
  },
];

const Projects = () => {
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

          <Stack spacing={3} p={4} textAlign="center">
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
