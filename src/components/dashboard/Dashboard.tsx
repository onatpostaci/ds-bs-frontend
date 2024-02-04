"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import DownloadOutlined from '@mui/icons-material/DownloadOutlined';
import { seriesPie, optionsPie, optionsBar, seriesBar, 
  optionsBarVertical, seriesBarVertical, 
  areaBarOptions, seriesAreaBar, createPriceTrendOptions, 
  createPriceTrendSeries, createTradeAnalysisOptions, optionsRSI } from './Chartinfo';
import Image from 'next/image';
import Header from '../Header';
import StatBox from '../StatBox';
import PeopleIcon from '@mui/icons-material/People';
import { ApexOptions } from 'apexcharts';
import ChartComponent from '../ChartComponent';
import SingleSelect from '../single-select/SingleSelect';
import TabsPanel from '../tabs-panel/TabsPanel';

const chartOptions: ApexOptions = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
  },
  fill: {
    opacity: 0.3,
  },
  xaxis: {
    type: 'category',
    labels: {
      show: false, // This will hide the x-axis labels
    },
    axisBorder: {
      show: false, // This will hide the x-axis line
    },
    axisTicks: {
      show: false, // This will hide the x-axis ticks
    },
  },
  yaxis: {
    show: false, // This will hide the y-axis entirely
  },
  grid: {
    show: false, // This will hide the grid lines
  },
  colors: ['#34eb89'], // Use green color for positive trend
  legend: {
    show: false, // This will hide the legend if it's not needed
  },
};

const series = [
  {
    name: 'Active Users',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];

interface PriceTrendDataItem {
  'Open time': string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
}

interface DataSummaryItem {
  mean: number;
  std: number;
  min: number;
  '25%': number;
  '50%': number;
  '75%': number;
  max: number
}

interface TradeAnalysisItem {
  "YearMonth": string;
  "Number of trades": number;
}

interface RSItem {
    "Open time": number;
    "Close": number;
    "RSI": number;
};

interface SeriesData {
  x: Date;
  y: number;
}

const Dashboard = () => {
  const [coinType, setCoinType] = useState<string>('');
  const [priceTrend, setPriceTrend] = useState<Array<{ x: string; y: number[] }>>([]);
  const [chartOptions, setChartOptions] = useState<ApexOptions>({});
  const [ptSeries, setPtSeries] = useState<ApexAxisChartSeries>([]);
  const [dsSeries, setDsSeries] = useState<ApexAxisChartSeries[]>([]);
  const [areaOptions, setAreaOptions] = useState<ApexOptions>({});
  const [areaChartSeries, setAreaChartSeries] = useState<ApexAxisChartSeries>([]);
  const [series, setSeries] = useState<{ name: string; data: SeriesData[] }[]>([
    { name: 'RSI', data: [] },
  ]);

  useEffect(() => {
    const fetchPriceTrendData = async () => {
      try {
        // Assuming your endpoint returns an array of PriceTrendDataItem
        const response = await axios.get<PriceTrendDataItem[]>('https://x9smxw8f1a.execute-api.eu-north-1.amazonaws.com/prod/price-trends');
        const categories = response.data.map(item => item['Open time']);
        const formattedData = response.data.map((item: PriceTrendDataItem) => ({
          x: item['Open time'], // Use the date string directly
          y: [item.Open, item.High, item.Low, item.Close]
        }));
        setPriceTrend(formattedData);
        // Assuming createPriceTrendOptions is a function that accepts categories and returns chart options
        //console.log(createPriceTrendOptions(categories, ['blue', 'orange', 'red', 'green']))
        setChartOptions(createPriceTrendOptions(categories, ['blue', 'orange', 'red', 'green']));
        setPtSeries(createPriceTrendSeries(formattedData));
      } catch (error) {
        console.error('Error fetching price trend data:', error);
      }
    };

    const fetchDataSummmary = async () => {
      try {
        // Assuming your endpoint returns an array of PriceTrendDataItem
        const response = await axios.get<DataSummaryItem[]>('https://x9smxw8f1a.execute-api.eu-north-1.amazonaws.com/prod/data-summary');
        const formattedData = response.data.map((item: DataSummaryItem) => ([{
          data: [item.mean, item.std, item.min, item['25%'], item['50%'], item['75%'], item.max]
        }]));
        console.log(formattedData);
        setDsSeries(formattedData);
      } catch (error) {
        console.error('Error fetching price trend data:', error);
      }
    };

    const fetchTradeAnalysis = async () => {
      try {
        // Assuming your endpoint returns an array of PriceTrendDataItem
        const response = await axios.get<TradeAnalysisItem[]>('https://x9smxw8f1a.execute-api.eu-north-1.amazonaws.com/prod/trade-analysis');
        const categories = response.data.map(item => item['YearMonth']);
        const areaSeries = [{data:response.data.map(item => item['Number of trades'])}];
        setAreaOptions(createTradeAnalysisOptions(categories));
        setAreaChartSeries(areaSeries);

      } catch (error) {
        console.error('Error fetching price trend data:', error);
      }
    };

    const fetchRSI = async () => {
      try {
        // Assuming your endpoint returns an array of PriceTrendDataItem
        const response = await axios.get<RSItem[]>('https://x9smxw8f1a.execute-api.eu-north-1.amazonaws.com/prod/calculate-rsi');
        setSeries([
          { 
            name: 'RSI', 
            data: response.data.map(item => ({ 
              x: new Date(item['Open time']), 
              y: item.RSI 
            })) 
          }
        ]);

      } catch (error) {
        console.error('Error fetching price trend data:', error);
      }
    };

    fetchPriceTrendData();
    fetchDataSummmary();
    fetchTradeAnalysis();
    fetchRSI();
  }, []);

  const charts = [
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[1]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[2]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[3]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[4]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[5]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[7]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[8]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[9]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
    {
      node: (
        <Box
          flexGrow={1}
          height={'80%'}
        >
          <ChartComponent series={dsSeries[10]} chartOptions={optionsBar} height={90} type='bar' />
        </Box>
      ),
    },
  ];
  

  return (
    <Box  m="20px" height="auto">
        {/* HEADER */}
        <Box display="flex" flexDirection={'row'} justifyContent="space-between" alignItems="center" >
            <Header
            title="Dashboard"
            subtitle={`Welcome to the Coin Data Analysis Dashboard`}
            />
            <SingleSelect labelInput='Coin' items={['Ripple', 'Bitcoin']}/>
        </Box>
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="auto"
            gap="20px"  
        >
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
              <Box
                py="20px" 
                px="30px" 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                 <Typography
                    variant="subtitle1"
                    color="gray"
                    fontWeight="bold"
                  >
                    Price Trends Over Time
                  </Typography>
                  <IconButton>
                    <Image src={'/xrp-logo-removebg.png'} alt="call-image" width={20} height={20}/>
                  </IconButton>
                  
              </Box>
              <Box
                flexGrow={1} // Make sure it's allowed to grow
              >
                <ChartComponent series={ptSeries} chartOptions={chartOptions} height={90} type='line' />
              </Box>
            </Box>
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
              
              <Box
                py="20px" 
                px="30px" 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                 <Typography
                    variant="subtitle1"
                    color="gray"
                    fontWeight="bold"
                  >
                    Data Summary According to Type
                  </Typography>
                  <IconButton>
                    <Image src={'/xrp-logo-removebg.png'} alt="call-image" width={20} height={20}/>
                  </IconButton>
              </Box>
              <TabsPanel>
                {charts.map((chart, index) => (
                  { node: <div key={index} style={{height:'100%'}}>{chart.node}</div> }
                ))}
              </TabsPanel>


              
            </Box>
            {/* ROW 3 */}
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
                <Box
                  py="20px" 
                  px="30px" 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                      variant="subtitle1"
                      color="gray"
                      fontWeight="bold"
                    >
                      RSI for Ripple
                    </Typography>
                    <IconButton>
                      <Image src={'/xrp-logo-removebg.png'} alt="call-image" width={20} height={20}/>
                    </IconButton>
                </Box>
                <Box
                    flexGrow={1} // Make sure it's allowed to grow
                >
                  <ChartComponent series={series} chartOptions={optionsRSI} height={90} type='line' />
                </Box>
            </Box>
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
              <Box
                  py="20px" 
                  px="30px" 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                      variant="subtitle1"
                      color="gray"
                      fontWeight="bold"
                    >
                      Trade Count per Month
                    </Typography>
                    <IconButton>
                      <DownloadOutlined
                        sx={{ fontSize: "26px", color: "green" }}
                      />
                    </IconButton>
                </Box>
                <Box
                    flexGrow={1} // Make sure it's allowed to grow
                >
                  <ChartComponent series={areaChartSeries} chartOptions={areaOptions} height={90} type='area' />
                </Box>
            </Box>
            
        </Box>
    </Box>
  )
}

export default Dashboard;