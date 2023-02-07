import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import CandleChart from "./routes/CandleChart";
import Chart from "./routes/Chart";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Coin from "./routes/Coin";

const router = createBrowserRouter([
    
    {   
        path : "/",
        element : <Root />,
        children : [
            {   path : "",
                element : <Coins />
            },
            {
                path : "/:coinId",
                element : <Coin/>,
                children : [
                    {   
                        path : "price",
                        element : <Price />
                    },
                    {
                        path : "chart",
                        element : <Chart />
                    },
                    {
                        path : "candle",
                        element : <CandleChart />
                    },
                ]
            }  
        ]
    }    
] ,
{basename : process.env.PUBLIC_URL}
);

export default router;




