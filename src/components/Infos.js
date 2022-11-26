import React from 'react';
import photo from '../images/photo-de-moi.jpg';
import emailLogo from '../images/email-logo.png';
function Infos(){
    return (
        <div>
            <img src={photo} alt="moi " />
            <h2>Arian Dervishaj</h2>
            <h3>Étudiant</h3>
            <h4><a href="https://ariandervishaj.ch/">ariandervishaj.ch</a></h4>
            <a href="mailto:ariandervishaj@icloud.ch">
                <button>
                    <img src={emailLogo} alt="logo de mail" />
                    Email
                </button></a>

        </div>

    )
}

export default Infos;