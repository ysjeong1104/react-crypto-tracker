
import React from "react";
import {HashRouter,Switch,Route} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

const Router=()=>{
    return(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>
                <Route path="/">
                    <Coins/>
                </Route> 
                               
            </Switch>
        </HashRouter>
    )
}

export default Router