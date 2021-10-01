import React, { Component } from 'react'
import Contacts from './Components/Contacts';
import EmployeeDetails from './Components/EmployeeDetails';


class App extends Component {
  
  state = {
    contacts: [],
  }
    
    componentDidMount() {
      fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ contacts: data.data})
      })
      .catch(console.log)
     

    }
    
    
    
    render() {
      return (
        <React.Fragment>   
        <Contacts contacts={this.state.contacts} />
        <EmployeeDetails />
        </React.Fragment>
      )
    }
    
  }

  export default App


  import React, { Component } from 'react'
import  Details from './Detailsbtn'

class EmployeeDetails extends Component {
  
  state = {
   
    isSubmitted:false, 
    details:[]
    
  }
    
    componentDidMount() {
     
      fetch('https://dummy.restapiexample.com/api/v1/employee/1')
      .then(res => res.json())
      .then((d) => {
        console.log(d.data)
        this.setState({ details: d.data})
      })
      .catch(console.log)

    }
    handelSubmit=(event)=>
    {        
       
    event.preventDefault()       

    this.componentDidMount()

    this.setState({isSubmitted:true})       

    }
    
   
    render() {
      return (
        <div>   
        <Details handelSubmit={this.handelSubmit} details={this.state.details.id} />
        </div>
      )
    }
    
  }
  export default EmployeeDetails
  
   