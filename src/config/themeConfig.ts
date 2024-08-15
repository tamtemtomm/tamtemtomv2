import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("#353BA7", "#353BA7")(props),
      bg: mode("#010309", "#f8f9fe")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const themeConfig = extendTheme({
  styles,
  config,
});

export default themeConfig;
