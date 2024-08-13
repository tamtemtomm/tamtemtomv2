// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// Import theme
import themeConfig from "./config/themeConfig";

// Import Components
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

// Import styling
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={themeConfig}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
