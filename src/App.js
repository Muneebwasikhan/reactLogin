import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import withStyles from './components/buttons'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';



class App extends Component {
  constructor(){
    super();
    this.state = {
      user: false,
      addForm: false,
      addFName:'',addLName:'',addEmail:'',addSalary:'',addJobDate:'',
        employ: [
        {
          firstname: 'Ashad',
          lastname: 'kahn',
          email: 'ashad@gmail.com',
          salary: '35000',
          startDate: '12 / 3 / 2018',

        },
        {
          firstname: 'Ashad',
          lastname: 'kahn',
          email: 'ashad@gmail.com',
          salary: '35000',
          startDate: '12 / 3 / 2018',

        },
        {
          firstname: 'Ashad',
          lastname: 'kahn',
          email: 'ashad@gmail.com',
          salary: '35000',
          startDate: '12 / 3 / 2018',

        }
      ]
    }

    
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.addFName = this.addFName.bind(this);
    this.addLName = this.addLName.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.addSalary = this.addSalary.bind(this);
    this.addJobDate = this.addJobDate.bind(this);
    this.login = this.login.bind(this);
    this.add = this.add.bind(this);
}


updateEmail(e){
    this.setState({email : e.target.value});
}
updatePass(e){
    this.setState({pass : e.target.value});
}
addFName(e){
  this.setState({addFName : e.target.value});
}
addLName(e){
  this.setState({addLName : e.target.value});
}
addEmail(e){
  this.setState({addEmail : e.target.value});
}
addSalary(e){
  this.setState({addSalary : e.target.value});
}
addJobDate(e){
  this.setState({addJobDate : e.target.value});
}

login(){
    const { email,pass,loginS } = this.state;
    (email == 'admin@domain.com' && pass=='admin') ? this.setState({user :true}) : swal("Wrong Credentials"); 
}

add(){
  const{ addFName,addLName,addEmail,addSalary,addJobDate,employ,addForm } = this.state;
  const obj = {
    firstname : addFName,
  lastname :addLName,
  email : addEmail,
  salary : addSalary,
  startDate : addJobDate
  }
employ.push(obj);
this.setState({employ,addForm: false});
}

remove(index){
  const { employ } = this.state;
  employ.splice(index,1);
  this.setState({employ});
}
edit(index){
  const { employ } = this.state;
  var edFName = prompt("Enter First Name");
  var edLName = prompt("Enter Last Name");
  var edEmail = prompt("Enter Email");
  var edSalary = prompt("Enter Salary");
  var edJobDate = prompt("Enter Job Started Date");
  const obj = {
    firstname : edFName,
  lastname :edLName,
  email : edEmail,
  salary : edSalary,
  startDate : edJobDate
  }
employ[index] = obj;
this.setState({employ});
  
}
logout(){
  const { user } = this.state;
  this.setState({
    user: false,
    addForm: false
  })
}

render(){
  const { user, addForm } = this.state;
  
  return(
    <div>
      <NavBar></NavBar>
  {!user && this.renderLogin()}
  {user && !addForm && this.showTable()}
  {user && addForm && this.addEmployeeForm()}
  <div class="container m-5">
      {user && <button onClick={() => this.logout()} class="btn btn-success btn-lg center">LOGOUT</button>}
  </div>
  
  </div>
  )
  }

  renderLogin(){
    return(
    <div class="container gap">
    <form>
      <label>Email*</label>
    <input type="email" class="form-control form-group m-2" placeholder="Enter email" onChange={this.updateEmail} value={this.state.email}></input>
    <label>Password*</label>
   <input type="password" class="form-control form-group m-2" placeholder="Password" onChange={this.updatePass} value={this.state.pass}></input>
    <button type="submit" class="btn btn-primary form-group m-2" onClick={this.login} >LOGIN</button>
    </form>
   </div>

    );
    
  }

  addEmployeeForm(){
    return(
      <div class="container gap">
    <form>
    <label>First Name*</label>
    <input type="text" class="form-control form-group m-2" placeholder="Enter First Name" onChange={this.addFName}></input>
    <label>Last Name*</label>
    <input type="text" class="form-control form-group m-2" placeholder="Enter Last Name" onChange={this.addLName}></input>
    <label>Email*</label>
    <input type="text" class="form-control form-group m-2" placeholder="Enter Current Email" onChange={this.addEmail}></input>
    <label>Salary*</label>
    <input type="text" class="form-control form-group m-2" placeholder="Enter Current Salary" onChange={this.addSalary}></input>
    <label>Job Start Date*</label>
   <input type="text" class="form-control form-group m-2" placeholder="Enter Date When Employ Started Job" onChange={this.addJobDate}></input>
    <button type="submit" class="btn btn-primary form-group m-2" onClick={this.add} >ADD</button>
    </form>
    </div>
    );
  }


  showTable() {
    const { employ } = this.state;
    return (
      
     <div class="container">
     
       
            <hr />
            <div>
            <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Job Start Date</th>
        <th>Edit / Remove</th>
      </tr>
    </thead>
    <tbody>
      
     {
       employ.map((value,index) => {
        //  const val = index;
        return <tr>
          <td>{value.firstname}</td>
          <td>{value.lastname}</td>
          <td>{value.email}</td>
          <td>{value.salary}</td>
          <td>{value.startDate}</td>
          <td>
            <button onClick={this.edit.bind(this,index)}>EDIT</button> | <button onClick={this.remove.bind(this,index)}>Remove</button>
          </td>
        </tr>
       })
     }
    </tbody>
  </table>
            </div>
            
            <button onClick={()=>this.setState({addForm:true})}>+ </button>
     </div>
     
     
    );
  }
}

export default App;
 