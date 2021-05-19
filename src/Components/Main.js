import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Main/Body'
import Footer from './footer/Footer'

import './home.css'

function Home({ spotifyApi }) {
    return (
        <div>
            <div className="main-section">
                <div class="main-body">
                    <Sidebar />
                    <Body />
                </div>
                <Footer />



            </div>
        </div>
    )
}

export default Home
