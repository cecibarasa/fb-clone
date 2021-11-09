import { ExpandMoreOutlined, Storefront } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://image.freepik.com/free-vector/jazz-musical-instruments_81894-3155.jpg" title="Jazz"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>

            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon = {PeopleIcon}title="Friends"/>
            <SidebarRow Icon = {ChatIcon} title = "Messenger"/>
            <SidebarRow Icon = {StorefrontIcon} title= "Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/> 
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

        </div>
    )
}

export default Sidebar
