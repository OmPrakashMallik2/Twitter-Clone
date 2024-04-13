import React from 'react'
import { Grid } from '@mui/material'
import Nav from '../Navigation/Nav'

function Home() {
  return (
    < Grid container item xs={12} className='px-5 lg:px-36 justify-between'>

      < Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        < Nav />
      </Grid>
      < Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
        <p className='text-center'>Middle part</p>
      </Grid>
      < Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <p className='text-center'>Right part</p>
      </Grid>

    </Grid>
  )
}

export default Home
