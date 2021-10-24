import React from 'react'
import './style.scss'

// @components
import LeftBar from '../../Component/Home/LeftBar/LeftBar'

export default function Home() {
    return (
        <div className="home">
            {/* @column left bar */} 
            <div className="home__leftBar">
                <LeftBar/>
            </div>

            {/* @column posts container */}
            <div className="home__postsContainer">
                This is postbar
            </div>

            {/* @column right bar */}
            <div className="home__rightBar">
                This is right bar
            </div>
        </div>
    )
}
