import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "system-ui",
  },

  components: {
    // Custom components
    Flex: {
      styleOverrides: {
        root: {
          flexDirection: "row",
        },
        directionColumn: {
          flexDirection: "column",
        },
        spaceBetween: {
          justifyContent: "space-between",
        },
        flexStart: {
          justifyContent: "flex-start",
        },
        flexEnd: {
          justifyContent: "flex-end",
        },
        alignStart: {
          alignItems: "flex-start",
        },
        alignCenter: {
          alignItems: "center",
        },
        alignEnd: {
          alignItems: "flex-end",
        },
      },
    },
  },
});

export default theme;
