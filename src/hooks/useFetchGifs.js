import React from 'react'
import { getGift } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setstate] = React.useState({
        data: [],
        loading: true
    });

    React.useEffect(() => {
        getGift(category).then(gifts => setstate({
            data: gifts,
            loading: false
        }))
    }, [category])
    
    return state
}