import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const gap = {
    marginBottom: '50px',
  };

class NavBar extends Component {
    
    render() { 
        return ( 
                <div style={gap}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                    REACT LOGIN
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
         );
    }
}
 
export default NavBar;