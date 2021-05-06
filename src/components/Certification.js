import React from 'react';
import Card from './Card';
import Data from '../Cdata';

// function Ccard(val){
//     return(
//         <Card
//             // // id ={val.id}
//             // imgsrc ={val.imgsrc}
//             // imgalt ={val.imgalt}
//             // title ={val.title}
//             // desc ={val.desc}

//         />
//     )
// }

const Certification = () => {
    return (
        <div className=" certi-wrapper" id='certification'>
            <div className="container text-center">
                <h2 className='head' >Certifications</h2>
                <hr className='line1' />
                <div className="row">


                    {Data.map(
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

export default Certification;
