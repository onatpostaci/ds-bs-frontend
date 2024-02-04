import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Height } from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabPanelContentProps {
  children?: {node: React.ReactNode}[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{height:'100%'}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel( {children} : TabPanelContentProps ) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box height={'100%'}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      
      >
        <Tab label="Open" />
        <Tab label="High" />
        <Tab label="Low" />
        <Tab label="Close" />
        <Tab label="Volume" />
        <Tab label="Quote Asset Volume" />
        <Tab label="Number of Trades" />
        <Tab label="Taker Buy Base Asset Volume" />
        <Tab label="Taker Buy Quote Asset Volume" />
      </Tabs>
      {children?.map((child, index)=>(
          <CustomTabPanel value={value} index={index}>
              {child.node}
          </CustomTabPanel>
      ))}
    </Box>
  );
}
