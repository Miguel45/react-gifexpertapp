import React from 'react' 
import { useFetchGifs } from './useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe( 'Pruebas en el archivo useFetchGifs.js', () => {

    test('debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate  } = renderHook( () => useFetchGifs('spiderman') )
        
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([])

        expect( loading ).toBe(true)

    })

    test('should return an image`s array and loading equal to false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('spiderman') )
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(6)

        expect( loading ).toBe(false)

    })

})