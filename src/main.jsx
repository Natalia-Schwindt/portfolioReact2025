import './i18n';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from './theme';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </ChakraProvider>
);