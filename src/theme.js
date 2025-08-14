// import { extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//   fonts: {
//     heading: "'Noto Serif', serif",
//   },
//   colors: {
//     primary: "#0081a7",
//     secondary: "#00afb9",
//     title: "#f07167",
//     subtitle: "#fed9b7",
//     text: "#fdfcdc",
//   },
// });

// export default theme;
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Noto Serif', serif",
  },
  colors: {
    background: {
      100: "#a6c5c3",
      200: "#80a3a1",
      300: "#5c817e",
      400: "#3b5e5b",
      500: "#224643",
      600: "#143532",
      700: "#0a2725",
      800: "#003331", // <-- Tu color original
      900: "#001a18",
    },
    title: {
      100: "#fcf8f5",
      200: "#e8d6c7",
      300: "#d8bfab",
      400: "#c9b093",
      500: "#c2a080", // <-- Tu color original
      600: "#b18d6e",
      700: "#9c7a5c",
      800: "#85664b",
      900: "#6b5238",
    },
    subtitle: {
      100: "#fff4e8",
      200: "#ffe6c5",
      300: "#ffc89b",
      400: "#ffb885",
      500: "#ffb173", // <-- Tu color original
      600: "#e19864",
      700: "#b87a4c",
      800: "#8e5c33",
      900: "#65421c",
    },
    text:"#e0e0e0", // <-- Tu color original
      // 50: "#ffffff",
      // 100: "#ffffff",
      // 200: "#ffffff",
      // 300: "#fefdfd",
      // 400: "#fefdfd",
      // 500: "#fdfcdc",
      // 600: "#cacaa0",
      // 700: "#9b9772",
      // 800: "#696446",
      // 900: "#37311d",
  },
});

export default theme;