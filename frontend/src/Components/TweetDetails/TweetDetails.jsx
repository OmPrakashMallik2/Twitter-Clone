import React from 'react'
import TweetCard from '../HomeSection/TweetCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
import { Divider } from '@mui/material';

function TweetDetails() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <React.Fragment>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
                < ArrowBackIcon className='cursor-pointer' onClick={handleBack} />
                <p className='py-5 pl-5 text-xl font-bold opacity-95 ml-5'>Post</p>
            </section>
            <section>
                <TweetCard />
                <Divider sx={{ margin: "2rem 0rem" }} />
            </section>

            <section className='pl-5'>
                {[1, 2, 3, 4].map((reply) => (
                    <TweetCard />
                ))}
            </section>

        </React.Fragment>
    )
}

export default TweetDetails
