import React from 'react';
import Profile from '../Profile1.jpeg'

const About = () => {
    return (
        <section id='about'>

            <div className='about-wrapper' >
                <div className="container">


                    <h2 className='head'>About Me</h2>
                    <hr className='line1' />
                    <div className="row">


                        <div className="col-md-6 col-12">
                            <div className="col1">
                                <div class="text-center ">
                                    <img src={Profile} class="rounded-circle profile" alt="img" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className='col2'>
                                <p>I am dedicated individual who believes in getting the work done in quick manner. I love to learning new skills and excited to work with people. Self-driven, Quick learner, flexible are my key strengths</p>
                                <p>Intimate with Web Development and User Interface design using ReactJS and jQuery. Well versed with Wordpress CMS.</p>
                                <p>Believe in AIDA model workflow in Digital Marketing. Well versed with Lead Generation and Email Marketing, Audience Targeting and Optimization of targeted audience, Ads Marketing and Campaign Design, Social Media Marketing, Video and Content Marketing</p>
                                <p>Well versed with Facebook Business, Facebook ads, Instagram Ads, Linkedin ads, Google Adwords and Google Anaylitics, Youtube and Youtube SEO, Pinterest, Periscope and Other Social Media Platform.</p>
                                <p>Comprehend with Search Engine Optimization.</p>
                            </div>
                        </div>
                    </div>
                    {/* icons */}
                    <div className="row my-icons">
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="HTML 5"><i className="fab fa-html5"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="CSS 3"><i className="fab fa-css3-alt"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="JavaScript"><i className="fab fa-js"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="Python3"><i className="fab fa-python"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="ReactJS"><i className="fab fa-react"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="Digital Marketing"><i className="fas fa-mail-bulk"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="Facebook Marketing"><i className="fab fa-facebook-square"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="Database MySQL"><i className="fas fa-database"></i></div>
                        <div className="col-4" data-toggle="tooltip" data-placement="top" title="Bootstrap 4"><i className="fab fa-bootstrap"></i></div>
                       


                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;
