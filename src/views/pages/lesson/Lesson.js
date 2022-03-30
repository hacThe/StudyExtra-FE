import React from 'react'
import { Box, Grid, Tab, Tabs} from '@mui/material'
import './scss/Lesson.scss';

import TabPanel from './component/TabPanel';
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Lesson = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="lesson-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={8} className="lesson-detail">
                    <iframe 
                        className="lesson-video" 
                        src="https://www.youtube.com/embed/zueyEdRZQlk" 
                        title="YouTube video player" 
                        allowfullscreen
                    ></iframe>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three"{...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Grid>
                <Grid item xs={4} className="lesson-overall">
                    
                </Grid>
            </Grid>
        </div>   
        
    )
}

export default Lesson