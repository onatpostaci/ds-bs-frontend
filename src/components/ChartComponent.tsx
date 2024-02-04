// ChartComponent.tsx
"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import CircularProgress from '@mui/material/CircularProgress';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartComponentProps {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chartOptions: ApexOptions;
  height?: number;
  type: "area" | "line" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
}

const ChartComponent: React.FC<ChartComponentProps> = ({ series, chartOptions, height ,type }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !series) {
   
    return <CircularProgress />; // Return null or loading spinner if not on client or series is not available
  }

  

  return (
    <Chart options={chartOptions} series={series} type={type} height={`${height}%` || `50%`} width="100%" />
  );
};

export default ChartComponent;
