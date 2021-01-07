import React from 'react' 
import { GiftExpertApp } from './GiftExpertApp'
import { shallow } from 'enzyme'

const categories = ['One punch', 'Hunter X Hunter']

describe( 'Pruebas en el archivo GiftExpertApp.js', () => {

    let wrapper = shallow( <GiftExpertApp defaultCategories={categories}/> );

    beforeEach( () => {
        wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);
    })

    //Enzyme
    test( 'Debe mostrarse bien el componente en un snapshot', () => {

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('GiftGrid').length ).toBe(categories.length)

    })

})