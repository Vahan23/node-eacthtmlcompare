// React main imports
import React from 'react' ; 
// Header component
import Header from '../home-page/Header/Header';
// CSS
import './about.css'

// About component returns a little information about web-page
const About = () => {
    return(
        <div>
            <Header/>
            <div className="about-content">
            <h2>A little bit info about our website</h2>
                 <p>
                 &nbsp; Hi Dear user:)))))
                 Here we will talk a little bit about our website and will explain you how to use it
                 First of all our web site is intended for users who want to follow all HTML changes in correct view,for all websites.
                 To get HTML code of website you just need to write correct URL in search bar,for example https://www.dataowl.io/
                 Then you can see last and correct version of HTML structure,and save in DataBase.
                 But it's not the only feature you can enjoy.Users can upload and save images,so our website can be something lika a google drive for you.
                </p>
            </div>
        </div>
    )
}
export default About;