
const BASE_URL = 'https://api.coinpaprika.com/v1';
export const fetchCoins= ()=>{

    return fetch(`${BASE_URL}/coins`)
        .then((response)=> response.json());
    //const result = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
    //return result;
}

export const fetchCoinInfo=(coinId : string | undefined)=>{
    return fetch(`${BASE_URL}/coins/${coinId}`)
        .then((response)=> response.json());
}

export const fetchCoinTickers=(coinId : string| undefined)=>{
    return fetch(`${BASE_URL}/tickers/${coinId}`)
        .then((response)=> response.json());
}

export const fetchCoinHistory=(coinId:string| undefined)=>{    
 /*   const endDate= Math.floor( Date.now() / 1000);
    const startDate = endDate - 60*60*23; //무료이기 때문에 24시간 이전까지 자료만 가져올수있음 
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
        .then((response)=> response.json());*/

        
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
        .then((response)=> response.json());

}