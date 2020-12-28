import React from 'react';
import './SideBar.css';
import SideBarRow from './sideBarRow/SideBarRow';
import { LocalHospital, EmojiFlags, Chat, People, Storefront, VideoLibrary, ExpandMore } from '@material-ui/icons';
import { useStateValue } from '../../../ContextApi/provider';

function SideBar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <div className='sidebar__fixed'>
                <SideBarRow src={user.photoURL} title={user.displayName}/>
                <SideBarRow title='COVID-19 Information center' Icon={LocalHospital}/>
                <SideBarRow title='Pages' Icon={EmojiFlags}/>
                <SideBarRow title='Friends' Icon={People}/>
                <SideBarRow title='Messanger' Icon={Chat}/>
                <SideBarRow title='Marketplace' Icon={Storefront}/>
                <SideBarRow title='Videos' Icon={VideoLibrary}/>
                <SideBarRow title='Marketplace' Icon={ExpandMore}/>
            </div>
        </div>
    )
}

export default SideBar
