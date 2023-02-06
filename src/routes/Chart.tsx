import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api/api";
import ApexChart from "react-apexcharts";
import { IHistorical } from "../interface/CommonInterface";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../states/ThemeAtoms";
import { useOutletContext } from "react-router-dom";

interface IChartProps {
	coinId: string;
}

const Chart=()=>{

    const {coinId} = useOutletContext<IChartProps>();
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading,data} = useQuery<IHistorical[]>(["ohlcv",coinId],()=>fetchCoinHistory(coinId),{refetchInterval:10000})
    return (
        <div>
            {
                isLoading? "Loading Chart..." : 

                data?.length ? data?.length > 0 &&
                <ApexChart type="line" 
                    series={[                       
                        {
                            name:"price",
                            data: data?.map(price=> Number(price.close)) ?? []
                        }
                    ]}                   

                    options={{
                        theme : {
                            mode:  isDark ? "dark" : "light" 
                        },
                        chart:{
                            height:300,
                            width:500,
                            toolbar:{
                                show:false
                            },
                            background:"transparent"
                            
                        },
                        grid:{
                            show:false
                        },
                        stroke:{
                            curve:"smooth",
                            width:4,
                        },   
                        yaxis:{
                            show : false
                        },
                        xaxis:{
                            labels:{
                                show: false
                            },
                            axisTicks:{
                                show : false
                            },
                            axisBorder:{
                                show : false
                            },                            
                            categories: data?.map(price=> (new Date(price.time_close))) ?? [],
                            
                        },
                        fill:{
                            type:"gradient",
                            gradient : {gradientToColors:["#0be881"],stops:[0,100]}
                        },
                        colors:["#0fbcf9"],
                        tooltip : {
                            y : {
                                formatter : (value) => `${value.toFixed(3)}`
                            }
                        }
                    }}
                /> : <div>차트데이터가 없습니다.</div>
            }
        </div>
    )
}

export default Chart;