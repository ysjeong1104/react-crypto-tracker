
import React from "react";
import {HashRouter ,Routes,Route} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import CandleChart from "./routes/CandleChart";


const Router=()=>{
    
    
    return(
        <HashRouter>
            <Routes>       
                <Route path="/" element={<Coins/>} />         
                <Route path="/:coinId" element={<Coin />} >
                    <Route path="price" element={<Price />} /> 
                    <Route path="chart" element={<Chart />} />
                    <Route path="candle" element={<CandleChart/>} />   
                </Route>
                
            </Routes>
        </HashRouter>
    )
}

export default Router