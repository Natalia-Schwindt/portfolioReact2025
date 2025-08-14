import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const Presentation = () => {
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
        display="flex"
        textAlign="center"
        flexDirection="column"
        gap={8}
        w="80%"
      >
        <MotionHeading
          as="h2"
          fontSize={["5xl", "6xl", "7xl", "8xl"]}
          color="title.500"
          textShadow="5px 5px 12px rgba(0, 0, 0, 0.89)"
          variants={headingVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          {t("presentation.title")}
        </MotionHeading>

        <MotionText
          fontSize={["md", "lg", "lg", "xl"]}
          fontWeight="semibold"
          color="text"
          variants={textVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Trans
            i18nKey="presentation.paragraph1"
            components={{ strong: <strong /> }}
          />
        </MotionText>

        <MotionText
          fontSize={["md", "lg", "lg", "xl", "2xl"]}
          fontWeight="semibold"
          color="text"
          variants={textVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t("presentation.paragraph2")}
        </MotionText>
      </Box>
    </Box>
  );
};

export default Presentation;
