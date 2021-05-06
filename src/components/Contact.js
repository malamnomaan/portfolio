import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>

            <div className='contact-wrapper'>
                <div className="container">


                    <div className="details">
                        <h1 className='heading'>Contact Details</h1>
                        <div className='my-list'>
                            <p className='item'> <span className='bold'> Email : </span> <a href="mailto:malamnomaan@gmail.com "> malamnomaan@gmail.com </a></p>
                            <p className='item'> <span className='bold' mail> Phone: </span> <a href="tel:9621267608"> +919621267608 </a></p>
                            <a href='https://drive.google.com/file/d/1_HWuTnbMBA6-xAesAUPPKIVWPshfmMxr/view?usp=sharing' target='_blank' className='dwnld'>Download Resume</a>
                        </div>
                    </div>
                    <div className="row social-media-icon" >
                        <div className="col-3"> <a href="https://www.facebook.com/alam.nomaan/" target='_blank'> <i class="fab fa-facebook-f fb"></i> </a> </div>
                        <div className="col-3"> <a href="https://www.instagram.com/m_alamnomaan_/ " target='_blank'> <i class="fab fa-instagram ig"></i> </a> </div>
                        <div className="col-3"> <a href="https://www.linkedin.com/in/malamnomaan/" target='_blank'> <i class="fab fa-linkedin ld"></i> </a></div>
                        <div className="col-3"> <a href="https://github.com/malamnomaan" target='_blank'>  <i class="fab fa-github gh"></i> </a></div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;
