import { Component } from 'react';
import Main from './component/MainComponents';
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
    <div>
      <Main />
    </div>
    );
  }
}

export default App;
