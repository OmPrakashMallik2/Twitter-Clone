import React from 'react'
import { Grid } from '@mui/material'
import Nav from '../Navigation/Nav'
import HomeSection from '../HomeSection/HomeSection'
import RightSection from '../RightSection/RightSection'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import TweetDetails from '../TweetDetails/TweetDetails'

function Home() {
  return (
    < Grid container item xs={12} className='px-5 lg:px-36 justify-between'>

      < Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        < Nav />
      </Grid>
      < Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <Routes>
          <Route path='/' element={<HomeSection />} />
          <Route path='/home' element={<HomeSection />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/tweet/:id' element={<TweetDetails />} />
        </Routes>
      </Grid>
      < Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <RightSection />
      </Grid>

    </Grid>
  )
}

export default Home
