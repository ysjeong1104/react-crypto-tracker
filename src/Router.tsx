
import React from "react";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import CandleChart from "./routes/CandleChart";


const Router=()=>{
    
    {/*  <BrowserRouter basename={process.env.PUBLIC_URL}>  
        배포 시 위 라인으로 수정
    */}
    return(      
        <BrowserRouter>
            <Routes>       
                <Route path="/" element={<Coins/>} />         
                <Route path="/:coinId" element={<Coin />} >
                    <Route path="price" element={<Price />} /> 
                    <Route path="chart" element={<Chart />} />
                    <Route path="candle" element={<CandleChart/>} />   
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router