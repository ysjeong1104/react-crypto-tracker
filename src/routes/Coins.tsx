import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api/api";
import { Container, Header,CoinsList,Title,Coin,Loader,Img} from "../style/CoinStyle";
import { Helmet } from "react-helmet";
import { ICoin } from "../interface/CommonInterface";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../states/ThemeAtoms";

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
    //const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom=()=> setDarkAtom((current : boolean) => !current);

    const {isLoading,data} = useQuery<ICoin[]>("allCoins",fetchCoins)
    
    const ImgOnError=(e : React.SyntheticEvent<HTMLImageElement,Event>)=>{        
        e.currentTarget.src = "";

    }
    return(
        <Container>
            <Helmet>
                <title>
                    코인
                </title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDarkAtom}>Toggle Dark Mode</button>
            </Header>
            {isLoading ? <Loader>Loding...</Loader> :
            <CoinsList>
                {data?.slice(0,100).map((coin)=>(
                    <Coin key={coin.id}>
                        <Link to={{
                            pathname : `/${coin.id}/price`,
                            state:{
                                name : coin.name,
                            }
                        }}>
                            <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id.toLowerCase()}.png`} 
                                onError={ImgOnError}
                                alt=''/>
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
