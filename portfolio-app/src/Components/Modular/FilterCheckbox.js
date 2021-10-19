import React from 'react'

import { useState } from 'react';


import  ToggleButton from 'react-bootstrap/ToggleButton'


export default function FilterCheckbox({element , selectedKeywords , setselectedKeywords }) {

    const [Checked, setChecked] = useState(false)

    var tempSelectedKeywords;
    var index;

    return (
        <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    variant="secondary"
                    checked={Checked}
                    value="1"
                    
                    onChange={ () => {

                        if(Checked === true){

                            console.log("Checked is true")

                            tempSelectedKeywords = selectedKeywords

                            index = selectedKeywords.indexOf(element)

                            if(index !== -1){


                                tempSelectedKeywords.splice(index,1)
                                setselectedKeywords(tempSelectedKeywords)

                            }
                            


                        }else{

                            

                            setselectedKeywords([ ...selectedKeywords , element] )


                        }

                        

                        setChecked(!Checked)

                    } }
                    
                    >{element}</ToggleButton>
    )
}
