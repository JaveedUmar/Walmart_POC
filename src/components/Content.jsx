import React from 'react';
import TvCard from './TvCard';
import { Grid } from '@material-ui/core';


const Content = ({ products }) => {
    return (
        <div className='content'>
            {
                products.map((data, index) => (
                    <Grid key={index} item style={{ padding: '10px', width: '250px'}}>
                        <TvCard data={data}/>
                    </Grid>
                ))
                }
        </div>
    );
};

export default Content;