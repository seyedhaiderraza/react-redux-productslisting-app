
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
   <div className="App">
   <Router>
        <Header/>
      <Routes>
        <Route path="/" exact element={<ProductListing/>}/>
        <Route path="/product/:productId" exact element={<ProductDetail/>}/>
        <Route>404 not found</Route>
      </Routes>
   
    </Router>
   </div>
  );
}

export default App;
