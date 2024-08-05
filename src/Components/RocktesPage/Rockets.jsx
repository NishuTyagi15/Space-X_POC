import React from 'react';
import { Grid, Paper } from '@mui/material';
import './Rockets.css';

const Rockets = () => {
  return (
      <Grid className='rocket-grid' container xs={12}>
        <Paper className='paper-item rocket-stack' elevation={3} sx={{ padding: 2 }}>
          <div className='flex'>
            <div className='rocket-image'></div>
            <div></div>
            <div></div>
          </div>
        </Paper>
      </Grid>
  );
}

export default Rockets;
