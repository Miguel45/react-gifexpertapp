import React from 'react' 
import { getGift } from './getGifs'

const category="Spiderman";


describe( 'Pruebas en el archivo getGifs.js', () => {

    //Enzyme
    test( 'Debe de traer exactamente 6 elementos si hay categoria', async () => {

        const gifs = await getGift(category)

        expect( gifs.length ).toBe(6);

    })

    //Enzyme
    test( 'Debe de traer exactamente 0 elementos si no hay categoria', async () => {

        const gifs = await getGift('')

        expect( gifs.length ).toBe(0);

    })

})