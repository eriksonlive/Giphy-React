import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import 'animate.css';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            { loading && <p>Cargando...</p> }
            <div className='container'>
                <h3>{ category }</h3>
                <div className='row'>
                        {
                            images.map( img => 
                                <GifGridItem key={ img.id } { ...img } />
                            )
                        }
                </div>
            </div>
        </>
    )
}