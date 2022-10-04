import logo from './logo.svg';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Navigator from './route/navigator/navigator.route';
import Footerx from './component/footer/footer.component';
import SigninForm from './component/signin-page/sigin-page.component';
import PageNotFound from './component/pagenotfound/pagenofound.component';
import PostPage from './component/poster/poster.component';


const HomePage = () => {
  return (
    <div>
      Im Home Component
      
    </div>
  )
};


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigator/>} >
        <Route index element={<HomePage />} />
        <Route path='sign-in' element={<SigninForm/>}/>
        <Route element={<PageNotFound/>} />
        <Route path='posts' element={<PostPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
