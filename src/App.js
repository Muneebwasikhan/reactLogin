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
        loginS: 'not logedin',
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
    this.login = this.login.bind(this);
}


updateEmail(e){
    this.setState({email : e.target.value});
}
updatePass(e){
    this.setState({pass : e.target.value});
}

login(){
    const { email,pass,loginS } = this.state;
    (email == 'admin@domain.com' && pass=='admin') ? this.setState({loginS :'logedin'}) : swal("Wrong Credentials"); 
}

  render() {
    return (
      
     <div class="container">
     <NavBar></NavBar>
     <withStyles></withStyles>
        <div class="form-row">
             <input type="email" class="form-control form-group col-md-4" placeholder="Enter email" onChange={this.updateEmail} value={this.state.email}></input>
            <input type="password" class="form-control form-group col-md-4" placeholder="Password" onChange={this.updatePass} value={this.state.pass}></input>
             <button type="submit" class="btn btn-primary form-group col-md-4" onClick={this.login}>Submit</button>
             <h1>{this.state.loginS}</h1>
            </div>
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
      </tr>
    </thead>
    <tbody>
      
     {
       this.state.employ.map((value,index) => {
        //  const val = index;
        return <tr>
          <td>{value.firstname}</td>
          <td>{value.lastname}</td>
          <td>{value.email}</td>
          <td>{value.salary}</td>
          <td>{value.startDate}</td>
        </tr>
       })
     }
    </tbody>
  </table>
            </div>
            
      
     </div>
     
    );
  }
}

export default App;
 