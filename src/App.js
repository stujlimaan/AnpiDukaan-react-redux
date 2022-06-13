
import './App.css';
import Header from './Containers/Header';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';
function App() {
  return (
    <>
    
    <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<ProductListing/>}/>
      <Route exact path='/product/:productId' element={<ProductDetails/>}/>
      <Route  element={<h1>404</h1>}/>
      
    </Routes>
    </Router>
    </>
   
  );
}

export default App;
