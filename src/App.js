import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./assets/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
