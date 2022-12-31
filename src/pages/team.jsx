import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './team.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  height: '20rem',
  padding: theme.spacing(2),
  margin:'10px',
  textAlign: 'bottom',
  color: theme.palette.text.secondary,
}));

const Team = () => {

  return (
    <div id="heading">
      <div className="heading" >
        <h1 className="team">Team</h1>
      </div>
      <div>
        <div className="container">
          <select className="custom-select">
            <option value="4th year">4th year</option>
            <option value="3rd year">3rd year</option>
            <option value="2nd year">2nd year</option>
          </select>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={3.5} sm={2} md={3} key={index}>
              <Item> 
                <div className='dark'></div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div className="end"><h3> Creativity Inspires Our Implementation</h3>
        <p class="end1">We at BDCOE, are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.</p>
      </div>

    </div>


  )
}

export default Team