import './App.css';
import ProjectItem from './Components/ProjectItem';
import ProjectList from './Components/ProjectList';

import dualityLogo from './Images/logoDuality.png'

var projectList = [

  {

    "name": "Duality",
    "description": "Game I worked on during game design university course",
    "image": dualityLogo



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
