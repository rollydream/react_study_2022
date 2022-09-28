import React from 'react';
import './login.scss';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function TabPanel(props) {

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [mail, setMail] = React.useState('');

  const handleChange02 = (event) => {
    setMail(event.target.value);
  };
  

  return (
    
    <Box sx={{ width: '100%' }}>
      <div>
        <Typography variant="h3" gutterBottom>
          ID / PW 찾기 
        </Typography>
      </div>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ID 찾기" {...a11yProps(0)} />
          <Tab label="PW 찾기" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input01">ID</InputLabel>
                <Input id="input01" value=""  />
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input03">이메일</InputLabel>
                <Input id="input03" value=""  />
              </FormControl>
            </Grid>
            <Grid item xs={1}>
                @
            </Grid>
            <Grid item xs={5}>
              <FormControl variant="standard"  fullWidth>
                <InputLabel id="demo-simple-select-standard-label">도메인 선택</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={mail}
                  label="Mail"
                  onChange={handleChange02}
                >
                  <MenuItem value={20}>직접 입력</MenuItem>
                  <MenuItem value={30}>gmail.com</MenuItem>
                  <MenuItem value={40}>hanmail.net</MenuItem>
                </Select>
              </FormControl>
              <Grid item >
                <FormControl variant="standard" fullWidth>
                  <InputLabel htmlFor="input04">직접 입력</InputLabel>
                  <Input id="input04" value=""  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            인증 하기
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input03">이메일</InputLabel>
                <Input id="input03" value=""  />
              </FormControl>
            </Grid>
            <Grid item xs={1}>
                @
            </Grid>
            <Grid item xs={5}>
              <FormControl variant="standard"  fullWidth>
                <InputLabel id="demo-simple-select-standard-label">도메인 선택</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={mail}
                  label="Mail"
                  onChange={handleChange02}
                >
                  <MenuItem value={20}>직접 입력</MenuItem>
                  <MenuItem value={30}>gmail.com</MenuItem>
                  <MenuItem value={40}>hanmail.net</MenuItem>
                </Select>
              </FormControl>
              <Grid item >
                <FormControl variant="standard" fullWidth>
                  <InputLabel htmlFor="input04">직접 입력</InputLabel>
                  <Input id="input04" value=""  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            인증 하기
          </Button>
        </div>
      </TabPanel>
    </Box>
  );
}
