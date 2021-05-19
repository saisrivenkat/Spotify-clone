import React from 'react'
import './body.css'
import Home from './Components/Home'
import Search from './Components/Search'
import Header from './Components/Header'
import Album from './Components/Album'
import { useStateProviderValue } from '../../StateProvider'

const style = {
    margin: "50px 0 0 30px"
}
const Body = () => {
    const [{ user, active }, dispatch] = useStateProviderValue()
    return (
        <div className="body">
            <Header />
            <div style={style} className="main-content">
                {active === 'Home' ? <Home /> : null}
                {active === 'Search' ? <Search /> : null}
                {active === 'Profile' ? <h1>Profile</h1> : null}
                {active === 'album' ? <Album /> : null}
            </div>
        </div>
    )
}
export default Body