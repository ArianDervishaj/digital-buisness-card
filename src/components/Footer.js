import React from "react";
import twitterLogo from '../images/twitter-logo.png';
import githubLogo from '../images/github-logo.png';

function Footer(){
    return (
        <footer>
            <a href='https://twitter.com/NuggetsLess'><img className="footer--logo" src={twitterLogo} alt="logo twitter"/></a>
            <a href='https://github.com/ArianDervishaj'><img className="footer--logo" src={githubLogo} alt="logo twitter"/></a>
        </footer>
        
    )
}

export default Footer;