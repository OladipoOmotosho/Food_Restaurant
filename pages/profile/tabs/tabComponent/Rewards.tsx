import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FONTFAMILY, colors } from '../../../../utils';
import History from './component/History';
import { GiftIcon } from '../../../../assets';
import HowItWorks from './component/HowItWorks';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: '24px' }}>
          <main>{children}</main>
        </Box>
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

const Rewards = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex flex-col gap-[0px] mt-[15px] ">
        <span className="flex flex-row gap-4 items-center">
          <GiftIcon className="w-10 h-auto" />
          <h1
            style={{
              fontFamily: FONTFAMILY.bold,
              color: colors.greenDeep,
            }}
          >
            Rewards & Loyalty points
          </h1>
        </span>
        <h3
          style={{
            fontFamily: FONTFAMILY.bold,
            color: colors.green4,
          }}
          className="ml-[58px] mb-[22px]  mt-[-10px]"
        >
          ₦2,220.00
        </h3>
      </div>
      <main>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: '#e0e0e0',
              width: 300,
              fontSize: '16px',
              lineHeight: '16px',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: {
                  backgroundColor: colors.orange,
                  height: 3,
                  //   width: ,
                },
              }}
              sx={{
                '& button:hover': { color: colors.orange },
                // '& button:focus': { color: colors.green },
                '& button:active': { color: colors.gray1 },
                '& button.Mui-selected': { color: colors.orange },
              }}
            >
              <Tab
                label="History"
                {...a11yProps(0)}
                sx={{
                  color: colors.greenDeep,
                  fontFamily: FONTFAMILY.normal,
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '16px',
                  paddingBottom: 0,
                  //   letterSpacing: 0.8,
                  textTransform: 'capitalize',
                }}
              />
              <Tab
                label="How it works"
                {...a11yProps(1)}
                sx={{
                  color: colors.greenDeep,
                  fontFamily: FONTFAMILY.normal,
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '16px',
                  paddingBottom: 0,
                  textTransform: 'capitalize',
                  //   letterSpacing: 0.8,
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <History />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <HowItWorks />
          </TabPanel>
        </Box>
      </main>
    </>
  );
};

export default Rewards;
