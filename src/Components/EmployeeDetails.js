import React, { Component } from 'react'
import  Details from './Detailsbtn'
import  DetailsView from './DetailsView'

class EmployeeDetails extends Component {
  
  state = {
   
    isSubmitted:false, 
    details:[]
    
  }
   
    handelSubmit=(event)=>
    {        
       
    event.preventDefault()       

    fetch('https://dummy.restapiexample.com/api/v1/employee/'+this.props.employeeId)
    .then(res => res.json())
    .then((d) => {
      console.log(d.data)
      this.setState({ details: d.data})
    })
    .catch(console.log)
    if(this.state.isSubmitted==false){
      this.setState({isSubmitted:true})       
    }
    else{
      this.setState({isSubmitted:false})       

    }
    console.log(this.state.isSubmitted)

    }
    
    render() {
      return (
        <div>   
        <Details handelSubmit={this.handelSubmit} details={this.props.employee_name} />
        <DetailsView Sumbmitted={this.state.isSubmitted} details={this.state.details} />

        </div>
      )
    }
    
  }
  export default EmployeeDetails