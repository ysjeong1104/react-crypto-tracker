import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { IPrice } from "../interface/CommonInterface";


const Label = styled.div`
	font-size: 0.9rem;
	font-weight: 700;
	opacity: 0.6;
`;

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
  margin: 25px 0px;
  gap: 10px;
`;

const PricePenel = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	padding: 1rem;
	background-color: ${(props) => props.theme.cardBgColor};
	border-radius: 0.7rem;
	box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
`

const LargePanel = styled.div`
    display: flex;
	align-items: center;
	flex-direction: row;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	padding: 1.2rem;
	justify-content: space-between;
	background-color: ${(props) => props.theme.cardBgColor};
	border-radius: 0.7rem;
	box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
	& > ${Label} {
		line-height: 1.5;
	}
	& > div:last-child {
		font-size: 2rem;
		font-weight: 300;
	}
`

interface IPriceParams {    
    priceInfo : IPrice
}
const Price=()=>{

    const { priceInfo :{quotes}} = useOutletContext<IPriceParams>();
    
    const athDate = new Date(quotes?.USD.ath_date ?? "");
    const athDateString = athDate.toLocaleDateString("ko-KR");
	const athTimeString = athDate.toLocaleTimeString("ko-KR");

    return (
        
        <PriceGrid>
            <LargePanel>
                <Label>
					{athDateString} {athTimeString}
					<br />
					최고가 달성
				</Label>
				<div>{quotes?.USD.ath_price.toFixed(3)}</div>
            </LargePanel>
            <PricePenel>
                <Label>1시간 전보다</Label>
				<span>
                    {quotes?.USD.percent_change_1h}% 
                    {quotes?.USD.percent_change_1h ? 
                        quotes?.USD.percent_change_1h > 0 ? 
                            <span style={{color:"tomato", marginLeft:"10px"}}>up</span> : <span style={{color:"skyblue", marginLeft:"10px"}}>down</span> : ""}
                </span>
            </PricePenel>
            <PricePenel>
                <Label>6시간 전보다</Label>
				<span>
                    {quotes?.USD.percent_change_6h}% 
                    {quotes?.USD.percent_change_6h ? 
                        quotes?.USD.percent_change_6h > 0 ? 
                            <span style={{color:"tomato", marginLeft:"10px"}}>up</span> : <span style={{color:"skyblue", marginLeft:"10px"}}>down</span> : ""}
                </span>
            </PricePenel>

            <PricePenel>
                <Label>12시간 전보다</Label>
				<span>
                    {quotes?.USD.percent_change_12h}% 
                    {quotes?.USD.percent_change_12h ? 
                        quotes?.USD.percent_change_12h > 0 ? 
                            <span style={{color:"red", marginLeft:"10px"}}>up</span> : <span style={{color:"skyblue", marginLeft:"10px"}}>down</span> : ""}
                    </span>
            </PricePenel>
            <PricePenel>
                <Label>24시간 전보다</Label>
				<span>
                    {quotes?.USD.percent_change_24h}% 
                    {quotes?.USD.percent_change_24h ? 
                        quotes?.USD.percent_change_24h > 0 ? 
                            <span style={{color:"tomato", marginLeft:"10px"}}>up</span> : <span style={{color:"skyblue", marginLeft:"10px"}}>down</span> : ""}
                </span>
            </PricePenel>

            <PricePenel>
                <Label>7일 전보다</Label>
				<span>
                    {quotes?.USD.percent_change_7d}% 
                    {quotes?.USD.percent_change_7d ? 
                        quotes?.USD.percent_change_7d > 0 ? 
                            <span style={{color:"tomato", marginLeft:"10px"}}>up</span> : <span style={{color:"blue", marginLeft:"10px"}}>down</span> : ""}
                </span>
            </PricePenel>
            <PricePenel>
                <Label>30일 전보다</Label>
				<span>
                    {quotes?.USD.percent_change_30d}% 
                    {quotes?.USD.percent_change_30d ? 
                        quotes?.USD.percent_change_30d > 0 ? 
                            <span style={{color:"tomato", marginLeft:"10px"}}>up</span> : <span style={{color:"skyblue", marginLeft:"10px"}}>down</span> : ""}
                </span>
            </PricePenel>
        </PriceGrid>
    )
}

export default Price;