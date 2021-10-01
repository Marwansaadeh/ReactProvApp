import React from 'react'

function Detailsbtn (props) 
{
        
        return(
            
        <a onClick={props.handelSubmit} href="#"><b>{props.details}</b></a>
        )
   
}
export default Detailsbtn