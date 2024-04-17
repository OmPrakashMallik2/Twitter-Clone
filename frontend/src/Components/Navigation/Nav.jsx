import * as React from 'react';
import Logo from '../Import/logo-black.png'
import { NavMenu } from '../Navigation/NavMenu'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/base';
import { Avatar } from '@mui/material';
import myPhoto from '../Import/my-photo.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';

function Nav() {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        console.log("logout");
    }

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-6
                '>
                    <img className='w-8' src={Logo} alt="logo" />
                </div>
                <div className='space-y-6'>
                    {NavMenu.map((item) => (
                        <div key={item.id} onClick={() => item.title === 'Profile' ? navigate(`/profile/${5}`) : navigate(item.title)} className='cursor-pointer flex space-x-3 items-center'>
                            {item.icon}
                            <p className='text-xl'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='py-6'>
                    <Button className='w-full bg-blue-400 hover:bg-blue-500 text-white text-lg font-semibold rounded-full p-3'>
                        Post
                    </Button>
                </div>
            </div>
            <div className='w-full flex items-center justify-around hover:bg-neutral-100 p-2 rounded-full'>
                <div className='text-3xl'>
                    <Avatar alt="userlogo" src={myPhoto} />
                </div>
                <div className=''>
                    <span className='font-bold'>Om Prakash Mallik</span>
                    <br />
                    <span className='opacity-70'>@0mprakashmallik</span>
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
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Nav
