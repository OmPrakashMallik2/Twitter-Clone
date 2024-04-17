import React from 'react'
import { Avatar } from '@mui/material';
import myPhoto from '../Import/my-photo.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

function HomeSection() {
    const handleSubmit = (values) => {
        console.log("values", values);
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit, validationSchema,
    })

    const handleSelect = () => {

    }
    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
                <div className='flex space-x-5 bg-neutral-100 rounded'>
                    <Avatar alt="userlogo" src={myPhoto} />
                    <div className='w-full'>
                        <form>
                            <div>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder='What is happening...'
                                    className={`border-none outline-none text-xl bg-transparent`}
                                    {...formik.getFieldProps("contents")}
                                />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>
                                        {formik.errors.content}
                                    </span>
                                )}
                            </div>
                            {/* <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div> */}
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center '>
                                    < ImageOutlinedIcon className='text-[#1d8bf0]' />
                                    <input type="file" name="imageFile" className='hidden' onChange={handleSelect} />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSection
