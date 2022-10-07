import logo from './logo.svg';
import './App.css';

import { Route , Routes } from 'react-router-dom';
import Home from './routes/home/home.routes';
import Navigation from './routes/navigation/navigation.routes';
import Authentication from './routes/authentication/authentication.routes';


const App = () => {
  const Shop = () => {
    return (
      <h1>I am the Shop Page</h1>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='authentication' element={<Authentication/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export default App;
