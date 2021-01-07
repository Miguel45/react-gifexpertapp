import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GridItem } from './GridItem'

export const GiftGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>

            <h4 className="animate__animated animate__flash">{ loading && 'Cargando...' }</h4>
        
            <div className='card-grid'>
                {
                    images.map((img) => <GridItem key={img.id} {...img} />)
                }
            </div>
        
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}
