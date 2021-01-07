import React from 'react' 
import { AddCategory } from './AddCategory'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
describe( 'Pruebas en el archivo AddCategory.js', () => {

    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    //Enzyme
    test( 'Debe mostrarse bien el componente en un snapshot', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto', () => {
        
        const value = 'hola mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });

        expect( wrapper.find('input').prop('value') ).toBe(value);

    })

    test('no debe de postear la información on submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        
        expect( setCategories ).not.toHaveBeenCalledWith( expect.any( Function ) );

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'hola mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).toHaveBeenCalled(  );
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( wrapper.find('input').prop('value') ).toBe('');

    })

})