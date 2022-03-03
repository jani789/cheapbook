import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // main: "#556cd6",
      main:"#141A46"
    },
    secondary: {
      //main: "#19857b",
      main:"#e35309"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
