import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Container, Header,CoinsList,Title,Coin,Loader,Img} from "../style/coinStyle";
import { Helmet } from "react-helmet";
import { ICoin } from "../interface/CommonInterface";

const Coins=()=>{
    //https://coinicons-api.vercel.app/api/icon/
/*    const [coins,setCoins] = useState<CoinInterface[]>([]);
    const [loding, setLoding] = useState(true);
   useEffect(()=>{
        (async()=>{
            const result = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
            setCoins(result.slice(0,100));
            setTimeout(()=>setLoding(current => !current),2000);
        })()
    },[])*/
    const {isLoading,data} = useQuery<ICoin[]>("allCoins",fetchCoins)
    return(
        <Container>
            <Helmet>
                <title>
                    코인
                </title>
            </Helmet>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? <Loader>Loding...</Loader> :
            <CoinsList>
                {data?.slice(0,100).map((coin)=>(
                    <Coin key={coin.id}>
                        <Link to={{
                            pathname : `/${coin.id}`,
                            state:{
                                name : coin.name,
                            }
                        }}>
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt=''/>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                )) }
            </CoinsList>
            }
        </Container>
    );
}

export default Coins;