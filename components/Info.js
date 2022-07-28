import React from 'react';

const Info = () => {
    return (
        <div className='info'>
            <img 
                src='../images/photo.jpg' 
                className='info-image'
            />
            <h3>
                Hassan Tanveer
            </h3>
            <h4>Fullstack Developer</h4>
            <h5>hassan.tanveer@arbisoft.com</h5>
            
            <div className='info-buttons'>
                <button className='button-email'>
                    <img src='../images/Mail.png' className='button-img' />
                    Email
                </button>
                <button className='button-linkedin'>
                    <img src='../images/linkedin.png' className='button-img' />                
                    LinkedIn
                </button>
            </div>
        </div>        
    )
}

export default Info;