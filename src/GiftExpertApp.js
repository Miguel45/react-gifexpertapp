import React from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GiftExpertApp = () => {

    const [categories, setCategories] = React.useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>

           <h2>GiftExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr/>

           <ol>
               {categories.map( ( e ) => <GiftGrid key={ e } category={ e } />) } 
           </ol>
        </>
    )
}
