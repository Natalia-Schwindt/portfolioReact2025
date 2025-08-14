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
    primary: {
      50: "#e5f0f3",
      100: "#b5dce4",
      200: "#84c6d4",
      300: "#52b0c4",
      400: "#2199b4",
      500: "#0081a7", // <-- Tu color original
      600: "#006785",
      700: "#004d63",
      800: "#003442",
      850: "#002731",
      900: "#001a21",
    },
    secondary: {
      50: "#e5f0f0",
      100: "#b5dcdb",
      200: "#84c7c6",
      300: "#52b2b1",
      400: "#219d9b",
      500: "#00afb9", // <-- Tu color original
      600: "#008c90",
      700: "#006869",
      800: "#004445",
      900: "#002021",
    },
    title: {
      50: "#fdf0ef",
      100: "#f9ccc9",
      200: "#f5a7a1",
      300: "#f07f7a",
      400: "#f07167", // <-- Tu color original
      500: "#df493e",
      600: "#b33a30",
      650: "#9b3329",
      700: "#872b22",
      800: "#5b1d16",
      900: "#2f0f0a",
    },
    subtitle: {
      50: "#fff9f4",
      100: "#fef3e8",
      200: "#fed9b7", // <-- Tu color original, ahora en 200
      300: "#fcc08e",
      400: "#f8a867",
      500: "#f69040",
      600: "#c77330",
      700: "#995723",
      800: "#6b3c16",
      900: "#3d2109",
    },
    text: {
      50: "#ffffff",
      100: "#ffffff",
      200: "#ffffff",
      300: "#fefdfd",
      400: "#fefdfd",
      500: "#fdfcdc", // <-- Tu color original
      600: "#cacaa0",
      700: "#9b9772",
      800: "#696446",
      900: "#37311d",
    },
  },
});

export default theme;