
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
        gh-pages 배포는 spa지원을 하지 않기 때문에 보통 hashRoute 하지만
        index.html수정, 404.html 페이지 추가로 해결 가능

        react router dom v6 에서는 하위 라우터 아래와 같이 중첩처리 
    */}
    return(      
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
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