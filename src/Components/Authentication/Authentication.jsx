import { Grid } from '@mui/material'
import React from 'react'
import xlogo from '../Import/logo-white.png'

function Authentication() {
    return (
        <div className=''>
            <Grid className='overflow-y-hidden' container>
                <Grid className='hidden lg:block'>
                    <img className='w-full h-screen' src="https://i.pinimg.com/564x/2b/8c/db/2b8cdb0c33ccd8082c1d9accb0a601ee.jpg" alt="" />
                    <div className='absolute top-[27%] left-[18%]'>
                        <img className='w-1/5' src={xlogo} alt="logo" />
                    </div>
                </Grid>

                <Grid className='px-10' lg={5} xs={12}>
                    <h1 className='font-bold text-7xl'>Happening Now</h1>
                    <h1 className='font-bold text-3xl py-16'>Happening Now</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default Authentication
