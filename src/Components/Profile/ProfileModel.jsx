import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import myPhoto from '../Import/my-photo.jpg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none'
};

export default function ProfileModel({ open, handleClose }) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false);


    const handleSubmit = (values) => {
        console.log("Hello", values);
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })

    const handleImageChange = (event) => {
        setUploading(true);
        const { name } = event.target;
        const file = event.target.files[0];
        formik.setFieldValue(name, file);
        setUploading(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-lg'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between y-2 py-3'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label='Delete'>
                                    <CloseIcon />
                                </IconButton>
                                <p className='font-semibold'>Edit Profile</p>
                            </div>
                            <Button variant="contained" type='submit' className=''>Save</Button>
                        </div>
                        <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <React.Fragment >
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img
                                            className='w-full h-[12rem] object-cover object-center rounded'
                                            src="https://cdn.pixabay.com/photo/2024/04/14/04/51/ai-generated-8694767_1280.jpg"
                                            alt="cover"
                                        />

                                        <input
                                            className='absolute top-0 left-0 w-full h-full cursor-pointer opacity-0'
                                            type="file"
                                            name="backgroundImage"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar
                                            sx={{ width: "9rem", height: "9rem", border: "2px solid white" }}
                                            src={myPhoto}
                                            alt='avatar'
                                        />
                                        <input
                                            className='absolute top-0 left-0 w-[9rem] h-full cursor-pointer rounded-full opacity-0'
                                            type="file"
                                            name='image'
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                            <div className='space-y-3'>
                                <TextField
                                    fullWidth
                                    id="fullName"
                                    name='fullName'
                                    label='Full Name'
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="bio"
                                    name='bio'
                                    label='Bio'
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />

                                <TextField
                                    fullWidth
                                    id="website"
                                    name='website'
                                    label='Website'
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                                <TextField
                                    fullWidth
                                    id="location"
                                    name='location'
                                    label='Location'
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />

                                <div className='my-3'>
                                    <p className='text-lg'>Date of birth . Edit</p>
                                    <p className='text-2xl'>December 20, 2000</p>
                                </div>
                                <p className='text-lg py-3'>Edit Profassional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}