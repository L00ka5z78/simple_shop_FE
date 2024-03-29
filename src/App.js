import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Private } from './components/Private';
import { AddProduct } from './components/AddProduct';
import { ProductsList } from './components/ProductList';
import { UpdateProduct } from './components/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Private />}>
            <Route path='/' element={<ProductsList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>logout component</h1>} />
            <Route path='/profile' element={<h1>profile component</h1>} />

          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
