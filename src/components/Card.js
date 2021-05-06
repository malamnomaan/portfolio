import React from 'react';

const Card = (props) => {
    return (
        <div className="col-lg-6 col-12">
            <a href={props.link}>
                <div className="card my-card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgalt} />
                    <div className="card-body">
                       <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
                </a>
        </div>

          
    )
}

export default Card
