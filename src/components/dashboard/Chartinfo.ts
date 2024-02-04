import { ApexOptions } from "apexcharts";

interface PriceTrendDataItem {
  x: string;
  y: number[];
}

export const seriesPie: number[] = [44, 55, 41, 17, 15]; // Example data for the doughnut chart

export const optionsPie: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: ['Sales', 'Complain', 'Security Issue', 'Emergency', 'Panic Button'], // Corresponding labels for the data
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
  legend: {
    position: 'right', // Position of the legend
    offsetY: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total',

          },
        },
      },
    },
  },
};

export const optionsBar: ApexOptions = {
  
  chart: {
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
    distributed: true,
    barHeight: '30%',
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Mean', 'Std. Dev.', 'Min', 'First Quartile', 'Second Quartile', 'Third Quartile', 'Max'],
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
    show: true, // This will hide the y-axis entirely
  },
  grid: {
    show: false, // This will hide the grid lines
  },
  legend: {
    show: false, // This will hide the legend if it's not needed
  },
  colors: ['#00E396','#008FFB', '#FF4560', '#FEB019', '#6952B7', '#53B8A6', '#757575'],
};

export const seriesBar: ApexAxisChartSeries = [
  {
    data: [400, 430, 448]
  }
];


export const optionsBarVertical: ApexOptions = {
  
  chart: {
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: false,
    distributed: true,
    barHeight: '30%',
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Sales', 'Complain', 'Security Issue', 'Emergency', 'Panic Button'],
  labels: {
    show: true, // This will hide the x-axis labels
  },
  axisBorder: {
    show: false, // This will hide the x-axis line
  },
  axisTicks: {
    show: false, // This will hide the x-axis ticks
  },

  },
  yaxis: {
    show: true, // This will hide the y-axis entirely
  },
  grid: {
    show: false, // This will hide the grid lines
  },
  legend: {
    show: false, // This will hide the legend if it's not needed
  },
  colors: ['#00E396','#008FFB', '#FF4560', "#FEB019", "#6952B7"],
};

export const seriesBarVertical: ApexAxisChartSeries = [
  {
    data: [0.5, 0.7, 1.5, 2.5, 3]
  }
];


function getLastSixMonths() {
  const months = [];
  let date = new Date();

  // Starting from the previous month and going back 6 months
  for (let i = 1; i <= 6; i++) {
      date.setMonth(date.getMonth() - 1);
      const monthName = date.toLocaleString('default', { month: 'short' });
      months.unshift(monthName);
  }

  return months;
}

export const areaBarOptions: ApexOptions = {
  chart: {
    height: 280,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: getLastSixMonths()
  }
};

export const seriesAreaBar: ApexAxisChartSeries = [
  {
    data: [45, 52, 38, 45, 19, 23, 2]
  }
];


export function createPriceTrendOptions(categories: string[], colors: string[]): ApexOptions {
    const priceTrendOptions: ApexOptions = {
      chart: {
        type: 'line',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 2 // Set this to a smaller number for thinner lines
        },
        xaxis: {
          type: 'datetime'
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
    }

    return priceTrendOptions;
};

export function createPriceTrendSeries(priceTrendData: PriceTrendDataItem[]): ApexAxisChartSeries {
  return [
    {
      name: 'Open',
      data: priceTrendData.map(item => ({ x: item.x, y: item.y[0] }))
    },
    {
      name: 'High',
      data: priceTrendData.map(item => ({ x: item.x, y: item.y[1] }))
    },
    {
      name: 'Low',
      data: priceTrendData.map(item => ({ x: item.x, y: item.y[2] }))
    },
    {
      name: 'Close',
      data: priceTrendData.map(item => ({ x: item.x, y: item.y[3] }))
    },
  ];
}

export function createTradeAnalysisOptions(categories: string[]): ApexOptions {
   const areaBarOptions: ApexOptions = {
    chart: {
      height: 280,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    fill: {
 
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: categories
    }
  };
  return areaBarOptions;
}

export const optionsRSI: ApexOptions = {
  chart: {
    type: 'line',  // Explicitly set as 'line'
  },
  stroke: {
    curve: 'straight',
    width: 2 // Set this to a smaller number for thinner lines
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    max: 100,
    min: 0,
    tickAmount: 10,
    labels: {
      formatter: (value: number) => `${value.toFixed(0)}`
    }
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  }
};
