import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import About from './About'
// import Contact from './Contact'

export default function Home() {
    return (
        <>
            <div className="container" id="home">
                {/* <div className="h-[30vh] w-[100%]"> */}
                {/* <img className='h-[30vh] w-[100%]' src={require('../Images/myimg.jpeg')} alt="profile pic" /> */}
                {/* </div> */}
                <div className="contents">
                    <div className="land-content-left">
                        <h1>BUSARI KIRAN KUMAR</h1>
                        <p className='Tag'><strong>FULL-STACK WEB-DEVELOPER</strong></p>
                    </div>
                    <div className="land-content-right">
                        <img src={require('../Images/myimg.jpeg')} alt="" />
                    </div>
                </div>
            </div>
            <Navbar />
            {/* <About /> */}
            {/* <Contact/> */}
        </>
    )
}
