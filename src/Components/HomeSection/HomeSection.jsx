import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { Button } from '@mui/base';
import myPhoto from '../Import/my-photo.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Location from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
});

function HomeSection() {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = (values) => {
        console.log("values", values);
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    };

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
                <div className='flex space-x-5'>
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
                                    <Button type='submit' className='w-full bg-blue-400 hover:bg-blue-500 text-white text-md font-semibold rounded-full py-2 px-5'>
                                        Post
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                {[1, 2, 3, 4, 5, 6, 7].map((post) => (<TweetCard />))}
            </section>
        </div>
    );
}

export default HomeSection;
