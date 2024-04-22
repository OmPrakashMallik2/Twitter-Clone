import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Box, Button, Tab } from '@mui/material';
import myPhoto from '../Import/my-photo.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModel from './ProfileModel';

function Profile() {

    const [openProfileModel, setOpenProfileModel] = useState(false);
    const handleProfileModel = () => setOpenProfileModel(true);
    const handleClose = () => setOpenProfileModel(false);

    const [tabValue, setTabValue] = useState("1");

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const handleFollowuser = () => {
        console.log("handle follow model");
    }

    const handleChange = (event, newValue) => {
        setTabValue(newValue)
        console.log("handle Change");
    }

    return (
        <div>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
                < ArrowBackIcon className='cursor-pointer' onClick={handleBack} />
                <p className='py-5 pl-5 text-xl font-bold opacity-95 ml-5'>Om Prakash Mallik</p>
            </section>

            <section>
                <img
                    className='w-[100%] h-[15rem] object-cover bg-neutral-800 rounded'
                    src="https://cdn.pixabay.com/photo/2024/04/14/04/51/ai-generated-8694767_1280.jpg"
                    alt="profileCover"
                />
            </section>

            <section className='pl-4'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        src={myPhoto}
                        alt='userProfile'
                        sx={{ width: "9rem", height: "9rem", border: "2px solid white" }}
                    />
                    {true ?
                        <Button variant='contained' sx={{ borderRadius: "20px" }} onClick={handleProfileModel}>
                            Edit profile
                        </Button>
                        :
                        <Button variant='contained' sx={{ borderRadius: "20px" }} onClick={handleFollowuser}>
                            {true ? "Follow" : "Unfollow"}
                        </Button>
                    }

                </div>

                <div>
                    <div className='flex items-center'>
                        <h1 className='text-xl font-bold pr-2'>Om Prakash MALLIK</h1>
                        {true && <VerifiedIcon fontSize="small" className='text-blue-500' />}
                    </div>
                    <h1 className='text-gray-500 text-base'>@0mprakashmallik</h1>
                </div>

                <div className='mt-2 space-y-3'>
                    <p className='text-lg'>I'm a full stack developer | BTech CSE 2023 | this is the first account that i have created on this platform.</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Softwere Developer</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Darbhanga, Bihar</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Jan 2024</p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>108</span>
                            <span className='text-gray-500'>Followings</span>
                        </div>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>10k</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList className='flex justify-between' onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Posts" value="1" />
                            <Tab label="Replies" value="2" />
                            <Tab label="Media" value="3" />
                            <Tab label="Likes" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {[1, 2, 3, 4, 5].map((post) => <TweetCard />)}
                    </TabPanel>
                    <TabPanel value="2">Replies</TabPanel>
                    <TabPanel value="3">Media</TabPanel>
                    <TabPanel value="4">Likes</TabPanel>
                </TabContext>
            </section>

            <section>
                <ProfileModel handleClose={handleClose} open={openProfileModel} />
            </section>
        </div>
    )
}

export default Profile
