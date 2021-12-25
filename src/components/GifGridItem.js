import React from 'react';
import 'animate.css';

export const GifGridItem = ( { id, title, url } ) => {
    return (
        <>
            <div className='col-md-4 animate__animated animate__fadeIn'>
                <div className="card">
                <img src={ url } alt={ title } className="card-img-top"  />
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}


