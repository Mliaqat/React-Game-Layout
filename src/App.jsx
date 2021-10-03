import { ThemeProvider } from "styled-components";
import THEMES from "./style/theme";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import Account from './Pages/Account/Account'
import Cat1 from './Pages/Cat1/Cat1'
import Cs1 from "./Pages/Cs1/Cs1";
import Category from "./Pages/Category/Category";
import Subcategory from "./Pages/Subcategory/Subcategory";


function App() {
  return (
    <>
      <Router>

        <ThemeProvider theme={THEMES}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Account} />
            <Route path="/cat1" exact component={Cat1} />
            <Route path="/cs1" exact component={Cs1} />
            <Route path="/category" exact component={Category} />
            <Route path="/subcategory" exact component={Subcategory} />
          </Switch>


        </ThemeProvider>
      </Router>


    </>

  );
}

export default App;
