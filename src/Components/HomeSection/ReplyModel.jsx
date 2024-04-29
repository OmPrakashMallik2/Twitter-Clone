import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import myPhoto from '../Import/my-photo.jpg'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Location from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadious: 4
};

export default function ReplyModel({handleClose, open}) {

    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    console.log(uploadingImage, selectedImage);

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log("handle submit", value);
    }

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            tweetId: 4
        },
        onSubmit: handleSubmit
    })



    return (
        <div className=''>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='rounded-lg' sx={style}>
                    <div className='flex space-x-5'>
                        <Avatar onClick={() => navigate(`/profile/${6}`)} className='cursor-pointer' src={myPhoto} alt='user' />
                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center cursor-pointer space-x-2'>
                                    <span className='font-semibold'>Om Prakash Mallik</span>
                                    <span className='text-gray-600'>@0mprakashmallik . 2m</span>
                                    <VerifiedIcon fontSize="small" className='text-blue-500' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div onClick={() => navigate(`/tweet/${3}`)} className='cursor-pointer'>
                                    <p className='mb-2 p-0'>Hello everyone! this is the first post from my account on this platform built by me hope you like it.</p>
                                    {/* <img
                                        src={myPhoto}
                                        alt="post-media"
                                        className='rounded-[4%] w-full'
                                    /> */}
                                </div>

                            </div>

                        </div>
                    </div>

                    <section className={`pb-10`}>
                        <div className='flex space-x-5 pt-8 '>
                            <Avatar alt="userlogo" src={myPhoto} />
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="content"
                                            placeholder='What is happening...'
                                            className={`border-none outline-none text-xl bg-transparent`}
                                            {...formik.getFieldProps("content")}
                                        />
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>
                                                {formik.errors.content}
                                            </span>
                                        )}
                                    </div>
                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex space-x-5 items-center '>
                                            <label htmlFor="imageFile" className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageOutlinedIcon className='text-[#1d9bf0]' />
                                                <input
                                                    type="file"
                                                    id="imageFile"
                                                    name="imageFile"
                                                    className='hidden'
                                                    onChange={handleSelectImage}
                                                />
                                            </label>
                                            <Location className='text-[#1d9bf0]' />
                                            <TagFacesIcon className='text-[#1d9bf0]' />
                                        </div>
                                        <div>
                                            <Button
                                                variant="contained"
                                                type='submit'
                                                className=''
                                            >
                                                Post
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                </Box>
            </Modal>
        </div>
    );
}