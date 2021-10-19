import './App.css';
import ProjectItem from './Components/ProjectItem';
import ProjectList from './Components/ProjectList';

import dualityLogo from './Images/logoDuality.png'
import dualityGameplay from './Images/DualityGameplay.gif'
import figaroLogo from './Images/FigaroLogo.png'
import CarPoolingLogo from './Images/Car_pooling.png'
import SpiritedToStayImage from './Images/SpiritedToStay.png'
// 


var projectList = [

  // {
  //   "name": "Hi!",
  // }

  // ,

  {

    "name": "Duality",
    "description": "Game I worked on during game design university course.",
    "image": dualityLogo,
    //"image": dualityGameplay,
    "linkToGame": "https://ciaosonocampa.itch.io/duality",
    "linkToSourceCode": "https://github.com/Fede996/Duality" ,
    "linkToTeaserTrailer": "https://www.youtube.com/watch?v=xMN1NHNClaM",
    "linkToGamePitchDocumentCompoment": "https://github.com/MattCamp44/GamePitchDocumentDuality/blob/main/Game%20pitch%20document.pdf",
    "keywords" : [ "C#" , "Unity" , "GameDev" ]

  }

  ,

  {
    "image": SpiritedToStayImage,
    "name": "Spirited to stay",
    "description": "Submission for Nordic Game Jam." + "\n" +  "Theme: Pending",
    "keywords" : [ "C#" , "Unity" , "GameDev" ],
    "linkToGame" : "https://clawmaster.itch.io/hangout-2-pending",

  }

  ,

  {

    "name": "Figaro",
    "description": "Game I worked on during Human computer interaction university course",
    "image": figaroLogo,
    "keywords" : [ "React" , "Human Computer Interaction", "Front End" ],
    "linkToPrototype" : "https://figaro-app.herokuapp.com/exercises",
    "linkToSourceCode" : "https://github.com/MattCamp44/figaro-application"
  },

  {

    "name": "Car Pooling Android Application",
    "description": "Android application developed during \"Mobile applications development\" university course",
    "image": CarPoolingLogo,
    "keywords" : [ "Kotlin" , "Android" , "Mobile", "Firebase" ],
    "linkToSourceCode":"https://github.com/peppep97/wad-group06"
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
