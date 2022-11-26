import React from 'react';
import photo from '../images/photo-de-moi.jpg';
import emailLogo from '../images/email-logo.png';
function Infos(){
    return (
        <div className='info'>
            <img src={photo} alt="moi" className='info--photo' />
            <h2 className='info--nom'>Arian Dervishaj</h2>
            <h3 className='info--ocupation'>Étudiant</h3>
            <h4 className='info--site'><a className='info--site' href="https://ariandervishaj.ch/">ariandervishaj.ch</a></h4>
            <a href="mailto:ariandervishaj@icloud.ch">
                <button className='info--btn'>
                    <img src={emailLogo} width='16px' alt="logo de mail" className='info--email-logo'/>
                    <p className='info--mail-text'>Email</p>
                </button></a>

        </div>

    )
}

export default Infos;