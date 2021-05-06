import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper' id='home'>
        
            <div className='main-info'>
                <h1>Hi My Name is Mohd Nomaan Alam</h1>
                <Typed className='typed-text' strings={['Web Devlopment and SEO','Facebook Ads and SMM','Google Ads and SEM', 'UX/UI Prototyping','Wordpress']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='#contact' className='btn-main-offer'>contact me</a>
            </div>
        </div>
    )
}

export default Header
