import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import  ToggleButton from 'react-bootstrap/ToggleButton'
import FilterCheckbox from './Modular/FilterCheckbox'

export default function CheckboxGroupFilterComponent({distinctKeywords, selectedKeywords, setselectedKeywords}) {
    return (

        

        <div className="CheckBoxList">

        <h2>Filter projects</h2>

        <ButtonGroup className="mb-2">

        {distinctKeywords.map( 

            element => {
                
                return ( <FilterCheckbox element={element} selectedKeywords={selectedKeywords} setselectedKeywords={setselectedKeywords}/> )
                
            }

         )}
         </ButtonGroup>
        </div>
    )
}
