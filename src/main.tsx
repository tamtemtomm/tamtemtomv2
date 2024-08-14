import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import themeConfig from "./config/themeConfig.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={themeConfig}>
      <ColorModeScript initialColorMode={themeConfig.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
