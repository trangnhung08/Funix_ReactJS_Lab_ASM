import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import { Component } from 'react';
import Staffs from './StaffList/StaffListComponent';
import './App.css';

   class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        staffs: STAFFS
      };
    }

    render(){
      return (
        <div>
          <Navbar dark color="primary">
              <div className='container'>
                <NavbarBrand href="/" text-white>ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0</NavbarBrand>
              </div>
          </Navbar>
          <Staffs staffs = {this.state.staffs} />
        </div>
      );
    }
   }

export default App;
