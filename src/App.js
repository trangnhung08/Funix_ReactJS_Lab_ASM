import { Component } from 'react';
import Main from './component/MainComponents';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


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
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
