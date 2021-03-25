import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

//sending props title and **component Icon (icon should be capital)** and destrucuting in sidebarrow
function Sidebar() {
    return (
        <div className="Sidebar">


            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <hr />
            <SidebarRow Icon={MusicNoteIcon} title="Music" />
            <SidebarRow Icon={SportsEsportsIcon} title="Sports" />
            <hr />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <hr />
            <SidebarRow Icon={AddCircleIcon} title="Browse Channel" />

        </div>
    )
}



export default Sidebar