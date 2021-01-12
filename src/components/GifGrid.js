import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                { loading && <p>Loading...</p>}
                {data && data.map(gif => (
                    <GifGridItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    )
}

export default GifGrid
