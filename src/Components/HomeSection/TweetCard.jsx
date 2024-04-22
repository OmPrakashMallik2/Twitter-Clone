import React, { useState } from 'react'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import myPhoto from '../Import/my-photo.jpg'
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ReplyModel from './ReplyModel';

function TweetCard() {

    const [openReplyModel, setOpenReplyModel] = useState(false);
    const handleReplyModel = () => setOpenReplyModel(true);
    const handleCloseReply = () => setOpenReplyModel(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    const handleDeleteTwit = () => {
        console.log("delete twit");
        handleClose();
    }

    const handleEditTwit = () => {
        console.log("Edit twit");
        handleClose();
    }

    const handleRetweetModel = () => {
        console.log("clicked Retweet Model");
    }

    const handleLikeTweet = () => {
        console.log("handle Like Tweet");
    }

    const handleTweetStats = () => {
        console.log("clicked Tweet Stats");
    }

    return (
        <React.Fragment>
            {/* <div>
                <RepeatIcon />
            </div> */}
            <div className='flex space-x-5'>
                <Avatar onClick={() => navigate(`/profile/${6}`)} className='cursor-pointer' src={myPhoto} alt='user' />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center cursor-pointer space-x-2'>
                            <span className='font-semibold'>Om Prakash Mallik</span>
                            <span className='text-gray-600'>@0mprakashmallik . 2m</span>
                            <VerifiedIcon fontSize="small" className='text-blue-500' />
                        </div>
                        <div>

                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTwit}>Delete</MenuItem>
                                <MenuItem onClick={handleEditTwit}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate(`/tweet/${3}`)} className='cursor-pointer'>
                            <p className='mb-2 p-0'>Hello everyone! this is the first post from my account on this platform built by me hope you like it.</p>
                            <img
                                src={myPhoto}
                                alt="post-media"
                                className='rounded-[4%] w-full'
                            />
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ModeCommentOutlinedIcon className='cursor-pointer' onClick={handleReplyModel} />
                                <p>24</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"}  space-x-3 flex items-center`}>
                                <RepeatOutlinedIcon className='cursor-pointer' onClick={handleRetweetModel} />
                                <p>14</p>
                            </div>

                            <div className='text-gray-600"  space-x-3 flex items-center'>
                                {true ? <FavoriteOutlinedIcon className='text-pink-600 cursor-pointer' onClick={handleRetweetModel} />
                                    : <FavoriteBorderOutlinedIcon className='cursor-pointer' onClick={handleLikeTweet} />}
                                <p>21</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <EqualizerOutlinedIcon className='cursor-pointer' onClick={handleTweetStats} />
                                <p>100</p>
                            </div>

                            <div className='text-gray-600"  space-x-3 flex items-center'>
                                {true ? <BookmarkOutlinedIcon className='cursor-pointer' onClick={handleRetweetModel} />
                                    : <BookmarkBorderOutlinedIcon className='cursor-pointer' onClick={handleLikeTweet} />
                                }
                                < FileUploadOutlinedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <ReplyModel open={openReplyModel} handleClose={handleCloseReply} />
            </section>
        </React.Fragment>
    )
}

export default TweetCard
