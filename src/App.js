import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Certification from './components/Certification';
import Project from './components/Project';
import Contact from './components/Contact';
import Particals from 'react-particles-js';



function App() {
  return (
    <>
      <Particals
      className='partical-canvas'
       params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:'circle',
            stroke: {
              width:6,
              color : '#f9ab00'
            }
          }
        }
      }}/>
      <Navbar /> 
      <Header />
      <About/>
      <Certification />
      <Project/>
      <Contact/>
    </>

  );
}

export default App;
