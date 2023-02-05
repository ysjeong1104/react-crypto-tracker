
import React from "react";
import {HashRouter,Switch,Route} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps{
    toggleDark : ()=>void;
    isDark : boolean;
}
const Router=({toggleDark,isDark}:IRouterProps)=>{
    return(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                
                <Route path="/:coinId">
                    <Coin isDark={isDark}></Coin>
                </Route>
                <Route path="/">
                    <Coins toggleDark={toggleDark}/>
                </Route> 
                               
            </Switch>
        </HashRouter>
    )
}

export default Router