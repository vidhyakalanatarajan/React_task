import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menu/menu';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Helloworld } from './components/helloworld/helloworld';
import { Congratscard } from './components/Task2/congratscard';
import { Superoverleague } from './components/superoverleague/superoverleague';
import { Socialbutton } from './components/socialbutton/socialbutton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Notification } from './components/notification/notification';
import { Technologycards } from './components/technologycards/technologycards';
import { Login } from './components/login/login';
import {Details} from './components/products/products';
import { Productpage } from './components/productpage/productpage';
import { Counter } from './components/usestate/counter';
import { Fruitscounter } from './components/fruitscounter/fruitscounter';
import { Feedback } from './components/feedback/feedback';
import { Feed } from './components/feedback/feed';
import { Datajson } from './components/datajson/datajson';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>}></Route>
      <Route path='/helloworld' element={[<Menu/>,<Helloworld/>]}></Route>
        <Route path='/congratscard' element={[<Menu/>,<Congratscard/>]}></Route>
        <Route path='/superoverleague' element={[<Menu/>,<Superoverleague/>]}></Route>
        <Route path='/socialbutton' element={[<Menu/>,<Socialbutton/>]}></Route>
        <Route path='/notification' element={[<Menu/>,<Notification/>]}></Route>
        <Route path='/notification' element={[<Menu/>,<Notification/>]}></Route>
        <Route path='/login' element={[<Menu/>,<Login/>]}></Route>
        <Route path='/technologycards' element={[<Menu/>,<Technologycards/>]}></Route>
        <Route path='/productpage' element={[<Menu/>,<Productpage/>]}></Route>
        <Route path='/details/:id' element={[<Menu/>,<Details/>]}></Route>
        <Route path='/counter' element={[<Menu/>,<Counter/>]}></Route>
        <Route path='/fruitscounter' element={[<Menu/>,<Fruitscounter/>]}></Route>
        <Route path='/feedback' element={[<Menu/>,<Feedback/>]}></Route>
        <Route path='/feed' element={[<Menu/>,<Feed/>]}></Route>
        <Route path='/datajson' element={[<Menu/>,<Datajson/>]}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
