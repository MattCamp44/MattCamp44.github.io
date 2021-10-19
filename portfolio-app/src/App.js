import './App.css';
import ProjectItem from './Components/ProjectItem';
import ProjectList from './Components/ProjectList';

import dualityLogo from './Images/logoDuality.png'
import figaroLogo from './Images/FigaroLogo.png'
import CarPoolingLogo from './Images/Car_pooling.png'
// 


var projectList = [

  {

    "name": "Duality",
    "description": "Game I worked on during game design university course.",
    "image": dualityLogo,
    "linkToGame": "https://ciaosonocampa.itch.io/duality"


  }

  ,

  {

    "name": "Figaro",
    "description": "Game I worked on during Human computer interaction university course",
    "image": figaroLogo



  },

  {

    "name": "Car Pooling Android Application",
    "description": "Android application developed during \"Mobile applications development\" university course",
    "image": CarPoolingLogo


  }



]


function App() {
  return (
    <div className="App">
      
      <h1 className="Title" > Matteo's portfolio </h1>

      <ProjectList projectList={projectList} />

    </div>
  );
}

export default App;
