import React from 'react'; 
import { GiftGrid } from './GiftGrid';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs');

describe( 'Pruebas en el archivo GiftGrid.js', () => {

    const category = 'spiderman';

    //Enzyme
    test( 'Debe mostrarse bien el componente en un snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GiftGrid category={category}/> );

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id:'abc',
            url:'https://localhost/cualquiercosa/cosa.jpg',
            title: 'Cualquier cosa '
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GiftGrid category={category}/> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GridItem').length).toBe(gifs.length)

    })

})