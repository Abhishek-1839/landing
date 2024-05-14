// import React from 'react';
import './App.css';
// import Body from './Components/Body';
import Navbaar from './components/Navbaar';
import Foot from './components/Footer';
import Hero from './components/Hero';
import DestinationCards from './components/DestinationCards';

import "./components/Global.css"
import Contact from './components/Contact';
import BlogsAndArticles from './components/BlogsAndArticles';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbaar />
    <Hero />
     <DestinationCards />
     <BlogsAndArticles />
     <Contact />
     <Foot />
    </>
  )
}

export default App
