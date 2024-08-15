import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("#353BA7", "#353BA7")(props),
      bg: mode("#f8f9fe", "#010309")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const themeConfig = extendTheme({
  styles,
  config,
  components: {
    Button: {
      sizes: {
        xs: {
          fontSize: "8px",
        },
      },
    },
  },
});

export default themeConfig;
