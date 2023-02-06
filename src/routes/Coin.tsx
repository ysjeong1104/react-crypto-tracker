//import React, { useEffect } from "react";
///import { useState } from "react";
import { useLocation, useParams, useMatch, Outlet} from "react-router";
import { Container,
    Title,Loader,GridHeader,Tabs,Tab,
    Overview,OverviewItem,LinkStyleBtn,Description} from "../style/CoinStyle";

import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api/api";
import {Helmet} from "react-helmet";
import { ICoinInfo,IPrice } from "../interface/CommonInterface";


/*
interface RouteState{
  name :string;
}
*/


const Coin=()=>{
    const { coinId } = useParams<string>();
    //console.log(coinid);
  //  const [loding, setLoding] = useState(true);
    const { state  }  = useLocation();

  //  const [coinInfo, setCoinInfo] = useState<ICoinInfoData>();
   // const [priceInfo, setPriceInfo] = useState<IPriceData>();

    const priceMatch = useMatch(`/:coinId/price`);
    const chartMatch = useMatch(`/:coinId/chart`);
    const candletMatch = useMatch(`/:coinId/candle`);

    /*useEffect(()=>{
        (async()=>{
            const coinData = await( await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await( 
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
            
            console.log(coinData);
            console.log(priceData);
            setCoinInfo(coinData);
            setPriceInfo(priceData);
            setLoding(current=>!current);
        })()
    },[coinId]);
    */

    const {isLoading : infoLoading, data:coinInfo} = useQuery<ICoinInfo>(["info",coinId],()=>fetchCoinInfo(coinId))
    const {isLoading : tickersLoading, data : priceInfo} 
        = useQuery<IPrice>(["ticker",coinId],
            ()=>fetchCoinTickers(coinId),
            {refetchInterval: 5000})    
    const loading = infoLoading || tickersLoading;
    return(
        <Container>
            <Helmet>
                <title>                    
                    { state?.name ? state?.name : loading ? "Loding..." : coinInfo?.name }
                </title>
            </Helmet>
            <GridHeader>
                <LinkStyleBtn>
                  <Link to={'/'}>Home</Link>
                </LinkStyleBtn>
                <Title>                   
                    { state?.name ? state?.name : loading ? "Loding..." : coinInfo?.name }
                </Title>
            </GridHeader>
            {loading ? <Loader>Loding...</Loader> : 
                <>
                <Overview>
                  <OverviewItem>
                    <span>Rank:</span>
                    <span>{coinInfo?.rank}</span>
                  </OverviewItem>
                  <OverviewItem>
                    <span>Symbol:</span>
                    <span>${coinInfo?.symbol}</span>
                  </OverviewItem>
                  <OverviewItem>
                    <span>Price:</span>
                    <span>{priceInfo?.quotes?.USD?.price.toFixed(2)}</span>
                  </OverviewItem>
                </Overview>
                <Description>{coinInfo?.description}</Description>
                <Overview>
                  <OverviewItem>
                    <span>Total Suply:</span>
                    <span>{priceInfo?.total_supply}</span>
                  </OverviewItem>
                  <OverviewItem>
                    <span>Max Supply:</span>
                    <span>{priceInfo?.max_supply}</span>
                  </OverviewItem>
                </Overview>
                <Tabs>
                    <Tab isActive={priceMatch !== null || candletMatch !== null}>
                        <Link to={{ pathname : `/${coinId}/chart`}}>chart</Link>
                    </Tab>
                    <Tab isActive={chartMatch !== null || priceMatch !== null}>
                        <Link to={{ pathname : `/${coinId}/candle`}}>Candle Chart</Link>
                    </Tab>
                    <Tab isActive={chartMatch !== null || candletMatch !== null}>
                        <Link to={{ pathname : `/${coinId}/price`}}>price</Link>                
                    </Tab>
                </Tabs>
                <Outlet context={{coinId, priceInfo}}/>
              {/*}  <Routes>
                    <Route path={`/:coinId/price`} element={<Price quotes={priceInfo?.quotes }>} />                       
                    <Route path={`/:coinId/chart`} element={<Chart coinId={coinId}>} />
                    <Route path={`/:coinId/candle`} element={<CandleChart coinId={coinId}>} />                    
    </Routes>               */}
              </>
            }
        </Container>
    );
}

export default Coin;
