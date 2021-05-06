import React from 'react';
import Card from './Card';
import Pdata from '../Pdata';

const Project = () => {
    return (
        <div className="project-wrapper" id='projects'>
            <div className="container text-center">
                <h2 className='head' >Projects</h2>
                <hr className='line1' />
                <div className="row">
                    
                {Pdata.map(
                        (val) => {
                            return(
                                <Card
                                    id ={val.id}
                                    imgsrc={val.imgsrc}
                                    imgalt={val.imgalt}
                                    title={val.title}
                                    desc={val.desc}
                                    link={val.link}
                                />
                            )             
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project
