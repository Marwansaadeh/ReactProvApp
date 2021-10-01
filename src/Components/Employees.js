
    import React from 'react'
    import EmployeeDetails from './EmployeeDetails';
    const Employees  = ({ employees }) => {          

      return (
 <div class="content" >
   <div id="product-logistics-block_60478ba4552a0" class="block-product-logistics">

          <center><h1>Employees list</h1></center>
         
            <table class="product-logistics-table">
            <thead>
            <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Employee Details</th>
                  </tr>
                  </thead>
          {employees.map((employees) => (
            <tbody>
            <tr>
              <td>{employees.id}</td>
              <td> {employees.employee_name}</td>
              <td> <EmployeeDetails employeeId={employees.id} employee_name={employees.employee_name}/></td>
            </tr>
            </tbody>
          ))}
          </table>
          </div>
          </div>
      )
    };
    export default Employees