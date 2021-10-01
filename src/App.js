import React, { Component } from 'react'
import Employees from './Components/Employees';


class App extends Component {
  
  state = {
    employees: [],
  }
    
    componentDidMount() {
      fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ employees: data.data})
      })
      .catch(console.log)
     

    }
    
    
    
    render() {
      return (
        <React.Fragment>   
        <Employees employees={this.state.employees} />
        </React.Fragment>
      )
    }
    
  }
  export default App
  
   