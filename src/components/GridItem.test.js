import React from 'react' 
import { GridItem } from './GridItem'
import { shallow } from 'enzyme'

const image = {
    title: 'Spiderman',
    url: 'https://as.com/meristation/imagenes/2020/09/30/noticias/1601498876_582320_1601498920_noticia_normal.jpg',
    id: '234hj2o3h23uih43'
}

describe( 'Pruebas en el archivo GridItem.js', () => {

    let wrapper = shallow( <GridItem {...image}/> );

    beforeEach( () => {
        wrapper = shallow(<GridItem {...image}/>);
    })

    //Enzyme
    test( 'Debe mostrarse bien el componente en un snapshot', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test( 'debe de tener un texto con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(image.title)
    })

    test( 'debe de tener una src correcta', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(image.url)
    })

    test( 'debe de tener un alt correcto', () => {
        const img = wrapper.find('img');
        expect(img.props().alt).toBe(image.title)
    })

    test( 'debe de tener un alt correcto', () => {
        const div = wrapper.find('div');
        const className = div.props().className;
        expect(className.includes('animate__fadeIn')).toBe(true);
    })

})