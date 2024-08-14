import { extendTheme, } from "@chakra-ui/react";

const themeConfig = extendTheme({
  colors: {
    primary: {
     main: "#353BA7",
   },
   secondary:{
    main: "#698AE8"
   },
   accent:{
    main: "#19D1C1"
   },
   background:{
    light: "#F8F9FE",
    dark: "010309"
   },
   text:{
    light: "#0B0925",
    dark: "#F8F9FE"
   }
 }
});

export default themeConfig