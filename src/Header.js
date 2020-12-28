import { Search, Home, Flag, SubscriptionsOutlined, SupervisedUserCircleOutlined, StorefrontOutlined, Add, ExpandMore, Forum, NotificationsActive } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Header.css';
import { useStateValue } from './ContextApi/provider';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://i.pinimg.com/originals/9b/2e/f7/9b2ef7de24a01b39bac66bdc943884d0.png' alt='logo'/>
                <div className='header__input'>
                    <Search />
                    <input type='text' placeholder='Search Facebook'/>
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__options header__options--active'>
                    <Home fontSize='large'/> 
                </div>
                <div className='header__options'>
                    <Flag fontSize='large'/>
                </div>
                <div className='header__options'>
                    <SubscriptionsOutlined fontSize='large'/>
                </div>
                <div className='header__options'>
                    <SupervisedUserCircleOutlined fontSize='large'/>
                </div>
                <div className='header__options'> 
                    <StorefrontOutlined fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                    <IconButton>
                        <Add />
                    </IconButton>
                    <IconButton>
                        <Forum />
                    </IconButton>
                    <IconButton>
                        <NotificationsActive />
                    </IconButton>
                    <IconButton>
                        <ExpandMore />
                    </IconButton>
            </div>
        </div>
    )
}

export default Header;
