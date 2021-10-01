import React from 'react'
function DetailsView (props) 
{
   
        
        if(props.Sumbmitted===true)
    { 
           return(
            <div class="test">  

<p>{props.details.id}</p>
<p>{props.details.employee_name}</p>
<p>{props.details.employee_age}</p>
<p>{props.details.employee_salary}</p>
           </div> 

           ) 
    }
   

else{
  return null
}

 
   }
   
export default DetailsView