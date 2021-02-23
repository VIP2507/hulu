import React from 'react'
import "./Header.css"

import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import SearchIcon from "@material-ui/icons/Search"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
function Header() {
    return (
        <div className="header">
            <div className="header__icons">
            
                <div className="icon icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>

                <div className="icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>

                <div className="icon">
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>

                <div className="icon">
                    <VideoLibraryIcon/>
                    <p>Collection</p>
                </div>

                <div className="icon">
                    <SearchIcon/>
                    <p>Search</p>
                </div>

                <div className="icon">
                    <PersonOutlineIcon/>
                    <p>Account</p>
                </div>

            </div>

            <img src="Movie.png" alt=""/>  
        </div>
    )
}

export default Header
