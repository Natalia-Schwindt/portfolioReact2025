import {
  Box,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Badge,
  Text,
} from "@chakra-ui/react";

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiChakraui,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiNodedotjs,
  SiSpringboot,
} from "react-icons/si";

import { FaJava, FaBrain } from "react-icons/fa";

const skills = {
  Frontend: [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  ],
  Backend: [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ],
  Herramientas: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ],
};

const softSkills = [
  "Comunicación",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Pensamiento crítico",
  "Adaptabilidad",
  "Gestión del tiempo",
  "Creatividad",
  "Empatía",
  "Liderazgo",
];

const Skills = () => {
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
        Tecnologías & Habilidades Técnicas
      </Heading>

      <Stack spacing={10}>
        {Object.entries(skills).map(([category, items]) => (
          <Box key={category}>
            <Heading
              as="h3"
              fontSize="2xl"
              mb={4}
              color="blue.500"
              textAlign="center"
            >
              {category}
            </Heading>
            <Wrap justify="center" spacing={4}>
              {items.map(({ name, icon, color }) => {
                const IconComponent = icon;
                return (
                  <WrapItem key={name}>
                    <Badge
                      px={4}
                      py={2}
                      fontSize="md"
                      borderRadius="full"
                      color="white"
                      bg="rgba(255, 255, 255, 0.1)"
                      sx={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <IconComponent color={color} size="1.5em" />
                      <Text>{name}</Text>
                    </Badge>
                  </WrapItem>
                );
              })}
            </Wrap>
          </Box>
        ))}

        <Box>
          <Heading
            as="h3"
            fontSize="2xl"
            mb={4}
            color="green.300"
            textAlign="center"
          >
            Habilidades Blandas
          </Heading>
          <Wrap justify="center" spacing={4}>
            {softSkills.map((skill) => (
              <WrapItem key={skill}>
                <Badge
                  px={4}
                  py={2}
                  fontSize="md"
                  borderRadius="full"
                  color="white"
                  bg="rgba(255, 255, 255, 0.3)"
                  sx={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FaBrain color="#68D391" size="1.5em" />
                  <Text>{skill}</Text>
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </Box>
  );
};

export default Skills;
