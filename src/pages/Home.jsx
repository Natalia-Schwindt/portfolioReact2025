// import { Box, Heading, Text } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// // Usamos motion.custom() para envolver los componentes de Chakra UI
// const MotionHeading = motion.custom(Heading);
// const MotionText = motion.custom(Text);

// const Home = () => {
//   const { t } = useTranslation();
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const headingVariants = {
//     hidden: { x: -200, opacity: 0 },
//     visible: { x: 0, opacity: 1 },
//   };

//   const textVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <Box
//       height="100%"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="space-around"
//     >
//       <Box
//         textAlign="center"
//         borderRadius="xl"
//         display="flex"
//         flexDirection="column"
//         gap={24}
//       >
//         <MotionHeading
//           as="h1"
//           fontSize={["6xl", "7xl", "8xl"]}
//           color="title.650"
//           mx={{ base: 4, md: 8 }}
//           variants={headingVariants}
//           initial="hidden"
//           animate={hasMounted ? "visible" : "hidden"}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           {t("home.title")}
//         </MotionHeading>
//         <MotionText
//           fontSize={["lg", "xl", "2xl", "2xl", "3xl"]}
//           fontWeight="semibold"
//           color="subtitle.300"
//           mx={{ base: 4, md: 8 }}
//           variants={textVariants}
//           initial="hidden"
//           animate={hasMounted ? "visible" : "hidden"}
//           transition={{ duration: 0.8, delay: 1 }}
//         >
//           {t("home.subtitle")}
//         </MotionText>
//       </Box>
//     </Box>
//   );
// };

// export default Home;
import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Usamos motion.create() para crear los componentes animados
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const Home = () => {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const headingVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box
        textAlign="center"
        borderRadius="xl"
        display="flex"
        flexDirection="column"
        gap={24}
      >
        <MotionHeading
          as="h1"
          fontSize={["6xl", "7xl", "8xl"]}
          color="title.650"
          mx={{ base: 4, md: 8 }}
          variants={headingVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("home.title")}
        </MotionHeading>
        <MotionText
          fontSize={["lg", "xl", "2xl", "2xl", "3xl"]}
          fontWeight="semibold"
          color="subtitle.300"
          mx={{ base: 4, md: 8 }}
          variants={textVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t("home.subtitle")}
        </MotionText>
      </Box>
    </Box>
  );
};

export default Home;