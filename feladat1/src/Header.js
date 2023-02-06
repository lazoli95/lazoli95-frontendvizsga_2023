import React from 'react'

import "./Header.css"

const Header = () => {
    return (

        <div className='header'>

            <div className="headerLeft">
                <img src="feladat1-logo.svg" alt="Antikvárium logó" />
            </div>
            <div className='headerRight'>
                <h1>Antikvárium</h1>
            </div>
        </div>

    )
}

export default Header