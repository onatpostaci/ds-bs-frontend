// StatBox.tsx
"use client";
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChartComponent from './ChartComponent';
import { ApexOptions } from 'apexcharts';

interface StatBoxProps {
  subtitle: string;
  icon: React.ReactNode;
  title: string;
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chartOptions?: ApexOptions;
  height?: number;
  percentage: string;
  isPositive: boolean;
}

const StatBox: React.FC<StatBoxProps> = ({ subtitle, icon, title, series, chartOptions, height ,percentage, isPositive }) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      bgcolor="linear-gradient(160deg, #00c4a7 0%, #009688 100%)"
      boxShadow="0px 4px 10px rgba(0,0,0,0.05)" // Softer shadow
      borderRadius={2}
      padding={theme.spacing(3)} // More padding
      display="flex"
      flexDirection="column" // Stack items vertically
      justifyContent="space-between" // Space between title and chart
    >
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontWeight="bold" variant='body2' color="gray">
            {subtitle}
          </Typography>
          
        </Box>
        <Box display="flex" alignItems="center" mt={1} gap={'20px'}>
          <Box sx={{ transform: 'scale(0.8)' }}> {/* Smaller icon */}
            {icon}
          </Box>

          <Typography variant='h5' fontWeight="bold" mr={1}>
            {title}
          </Typography>
          
        </Box>
      </Box>
      {
        series && chartOptions && height &&
        <Box mt={2}> {/* More space above the chart */}
          <ChartComponent series={series} chartOptions={chartOptions} height={height} type='line' />
        </Box>
      }
      
    </Box>
  )
}

export default StatBox;
