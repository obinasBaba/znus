import React from 'react';
import s from './donationcard.module.scss';
import {
  Box,
  Button,
  Card,
  Chip,
  SvgIcon,
  Tab,
  Typography,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  CheckCircleTwoTone,
  VolunteerActivismTwoTone,
} from '@mui/icons-material';

const amounts = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  {
    value: 100,
    label: '100',
  },
  { value: 200, label: '200' },
  { value: 500, label: '500' },
];

const DonationCard = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={s.container}>
      <Card className={s.wrapper}>
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            component="header"
            className={s.header}
          >
            <div className={s.icon}>
              <SvgIcon fontSize="large" color="primary">
                <VolunteerActivismTwoTone />
              </SvgIcon>
            </div>

            <Typography variant="h6">Make Your Donation Now.</Typography>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label={
                  <Button
                    disableRipple
                    endIcon={value === '1' && <CheckCircleTwoTone />}
                  >
                    ONE TIME
                  </Button>
                }
                value="1"
              />
              <Tab
                label={
                  <Button
                    disableRipple
                    endIcon={value === '2' && <CheckCircleTwoTone />}
                  >
                    MONTHLY
                  </Button>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1" className={s.panel}>
            <div className={s.amounts}>
              {amounts.map((amount) => (
                <Chip
                  label={
                    <Typography variant="body1">{amount.label}</Typography>
                  }
                  key={value}
                  className={s.amount}
                  clickable
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2" className={s.panel}>
            Item Two
          </TabPanel>
        </TabContext>
      </Card>
    </div>
  );
};

export default DonationCard;
