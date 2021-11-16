// import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import Footer from './mycomponents/Footer';

import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
