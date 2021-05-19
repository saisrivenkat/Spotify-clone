/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { LibraryMusic } from "@material-ui/icons";
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStateProviderValue } from '../../StateProvider'
import Logo from './Components/Logo';
import SidebarItems from './Components/SidebarItems'
import './sidebar.css'

const Sidebar = () => {
    const [{ user_playlists }, dispatch] = useStateProviderValue();
    const items = [
        { name: "Home", icon: <HomeIcon className="icons" />, id: 1 },
        { name: "Search", icon: <SearchIcon className="icons" />, id: 2 },
        { name: "Library", icon: <LibraryMusic className="icons" />, id: 3 }
    ]
    return (
        <div className="sidebar">
            <div className="img text-start p-4">
                <a classname="logo"><Logo /></a>
            </div>
            <div className="dash-items">
                {
                    items.map(item => (
                        <SidebarItems
                        id={item.id}
                        name={item.name}
                        icon ={item.icon}
                         />
                    ))
                }
                <div className="library mb-1" style={{ padding: "10px 20px", margin: "0 10px", borderRadius: "5px" }}>
                    <AddBoxIcon classname="icons" style={{ color: "#B3B3B3" }} /> <span className="text" style={{ color: "#B3B3B3", margin: "0 0 0 10px" }}>Create Playlist</span>
                </div>
                <div className="library mb-1" style={{ padding: "10px 20px", margin: "0 10px", borderRadius: "5px" }}>
                    <FavoriteIcon classname="icons" style={{ color: "#B3B3B3" }} />
                    <span className="text" style={{ color: "#B3B3B3", margin: "0 0 0 10px" }}>Liked Songs</span>
                </div>
            </div>
            {user_playlists.items ?
                user_playlists.items.map((item) => (
                    <p>{item.name}</p>
                ))
                : <h1>Not loaded...</h1>}
        </div>
    )
}

export default Sidebar
