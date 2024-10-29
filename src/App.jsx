import { useState } from 'react'
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from "./components/Nav1"
import NavBar from "./components/NavBar"
import Hero from './components/Hero';
import TrendingDestinations from './components/TrendingDestinations';
import Hotels from './components/Hotels';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav1/>
    <NavBar/>
    <Hero/>
    <TrendingDestinations/>
    <Hotels/>
    <Footer/>
    </>
  )
}

export default App
