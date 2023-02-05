import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { IHistorical } from "../interface/CommonInterface";

interface IChartProps{
    coinId : string
}

const CandleChart=({coinId}:IChartProps)=>{
    const {isLoading, data : validData} = useQuery<IHistorical[]>(["ohlcv",coinId],()=>fetchCoinHistory(coinId),{refetchInterval:10000})   

    return (
        <div>
        {
            isLoading ? "Loading Chart..." : 
            <ApexChart
						type="candlestick"
						series={[
							{
								name: "시세",
								data: validData?.map((price) => ({
									x: price.time_close ,
									y: [price.open, price.high, price.low, price.close],
								})) ?? [],
							},
						]}
						width="100%"
						height="160px"
						options={{
							noData: {
								text: "",
							},
                            theme: {
                                mode: "dark",
                            },
							plotOptions: {
								candlestick: {									
									wick: {
										useFillColor: true,
									},
								},
							},												
							chart: {
								toolbar: {
									show: false,
								},
								background: "transparent",
								fontFamily: '"Pretendard", sans-serif',
								width: 500,
								height: 300,
							},
							colors: ["black"],
							grid: {
								show: false,
							},
							tooltip: {
								y: {
									formatter: (value) => `$${value.toFixed(2)}`,
								},
							},
							xaxis: {
								labels: {
									show: false,
								},
								type: "datetime",
								categories: validData?.map((price) => price.time_close),
								axisTicks: {
									show: false,
								},
								axisBorder: {
									show: false,
								},
								tooltip: {
									enabled: false,
								},
							},
							yaxis: {
								labels: {
									show: false,
								},
							},
						
						}}
					/>
        }
        </div>
    );
}

export default CandleChart;