import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponents';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <Navbar drak color="primary">
//         <div className='container'>
//           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
      
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar drak color="warning">
         <div className='container'>
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
    );
  }
}

export default App;
