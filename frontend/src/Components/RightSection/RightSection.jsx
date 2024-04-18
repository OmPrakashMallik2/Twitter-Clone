import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { Button } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function RightSection() {
    const handleChangeTheme = () => {
        console.log("change theme");
    }
    return (
        <div className='sticky top-0 pb-5'>
            <div className='sticky top-0 pt-2 bg-white z-50 flex items-center'>
                <input
                    type="text"
                    placeholder='Search'
                    className='py-3 rounded-full text-gray-500 bg-neutral-200 w-full pl-12'
                />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchOutlinedIcon className='text-gray-500' />
                </div>
                <Brightness4OutlinedIcon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock new features</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", }}>
                    Get verified
                </Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What's happening</h1>
                <div>
                    <p className='text-sm'>FIFA Women's World Cup . Live</p>
                    <p className='font-bold'>philippines vs thailand</p>
                </div>

                {[1, 2, 3, 4, 5].map((trending) => (
                    <div className='flex justify-between w-full'>
                        <div>
                            <p>Entertainment . Trending</p>
                            <p className='font-bold'>#oppenheimer</p>
                            <p >45.8k posts</p>
                        </div>
                        <MoreHorizOutlinedIcon />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default RightSection
