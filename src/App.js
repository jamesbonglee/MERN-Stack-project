import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import HomeBoardPage from "./components/pages/HomeBoard/HomeBoard";
import LoginPage from "./components/pages/Login/LoginPage";
import RegisterPage from "./components/pages/Register/RegisterPage";
import PageNotFound from "./components/pages/NotFound/NotFound";

function App() {
   return (
      <BrowserRouter>
         <div className="container">
            <h2>MERN-STACK hello</h2>
         </div>
         <Route exact path="/" component={HomeBoardPage} />
         <Route exact path="/login" component={LoginPage} />
         <Route exact path="/register" component={RegisterPage} />
         {/* <Route exact component={PageNotFound} /> */}
      </BrowserRouter>
   );
}

export default App;
