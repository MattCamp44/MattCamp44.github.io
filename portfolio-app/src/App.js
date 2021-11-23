import './App.css';

import React, { useState, useEffect } from 'react';


import ProjectItem from './Components/ProjectItem';
import ProjectList from './Components/ProjectList';

import dualityLogo from './Images/logoDuality.png'
import dualityGameplay from './Images/DualityGameplay.gif'
import figaroLogo from './Images/FigaroLogo.png'
import CarPoolingLogo from './Images/Car_pooling.png'
import SpiritedToStayImage from './Images/SpiritedToStay.png'
import CheckboxGroupFilterComponent from './Components/CheckboxGroupFilterComponent';
import LowerVolumeModal from './Components/LowerVolumeModal';
import profilePic from './Images/linkedinphoto.jpg'
// 





var projectList = [

  // {
  //   "image": profilePic,
  //   "name": "Hi!",
  // }

  // ,

  {

    "name": "Duality",
    "description": "Duality is an online multiplayer fps game, where two players control the same character",
    "line2" : "Submission for \"Game Design\" university course",
    "image": dualityLogo,
    //"image": dualityGameplay,
    "linkToGame": "https://ciaosonocampa.itch.io/duality",
    "linkToSourceCode": "https://github.com/Fede996/Duality" ,
    "linkToTeaserTrailer": "https://www.youtube.com/watch?v=xMN1NHNClaM",
    "linkToGamePitchDocumentCompoment": "https://github.com/MattCamp44/GamePitchDocumentDuality/blob/main/Game%20pitch%20document.pdf",
    "keywords" : [ "C#" , "Unity" , "Game" ]

  }

  ,

  {
    "image": SpiritedToStayImage,
    "name": "Spirited to stay",
    "description": "Submission for Nordic Game Jam",
    "line2" :  "Jam Theme: Pending",
    "keywords" : [ "C#" , "Unity" , "Game" ],
    "linkToGame" : "https://clawmaster.itch.io/hangout-2-pending",

  }

  ,
  {

    "name": "Game AI by example",
    "description": "A collection of small personal projects, based on the book \"Game AI by example\" by Mat Buckland.",
    "line2" :  "",
    "linkToProject" : { "linkToProject": "https://github.com/MattCamp44/GameAIByExample_Exercise1", "linkText":"State-driven agent design" }

  },
  {

    "name": "Figaro",
    "description": "Figaro is a web application that helps singers practising at home",
    "line2": "Submission for \"Human computer Interaction\" university course",
    "image": figaroLogo,
    "keywords" : [ "React" , "Human Computer Interaction", "Front End" ],
    "linkToPrototype" : "https://figaro-app.herokuapp.com/",
    "linkToSourceCode" : "https://github.com/MattCamp44/figaro-application",
    "linkToDesignDocuments" : "https://github.com/MattCamp44/figaro-design-process"
  },

 

  {

    "name" : "Software fault injector",
    "line2": "Submission for \"System and Device Programming\" university course",
    "description": "A software fault injector written in C++",
    "linkToSourceCode":"https://github.com/MattCamp44/C-C-fault-injector",
    "keywords" : [ "C" , "C++"  ],



  }

  ,

  {

    "name": "Carpooling  Android Application",
    "description": "A Carpooling android application",
    "line2": "Submission for \"Mobile Applications Development\" university course",
    "image": CarPoolingLogo,
    "keywords" : [ "Kotlin" , "Android" , "Mobile", "Firebase" ],
    "linkToSourceCode":"https://github.com/peppep97/wad-group06"
  }

  ,

  {

    "name": "Wallet service REST API",
    "description": "A REST API developed with SpringBoot",
    "line2": "Submission for \"Web applications 2\" university course",
    "keywords" : [ "Kotlin" , "Spring Boot" , "Back End" ],
    "linkToSourceCode" : "https://github.com/mosTavassoli/WA2-Group12"

  }

  


]

var distinctKeywords = [];

projectList.forEach(

  element => {

    distinctKeywords = distinctKeywords.concat( element.keywords );


  }

)

distinctKeywords = distinctKeywords.filter(

  (value, index, self) => self.indexOf(value) === index

)



function App() {


  const [selectedKeywords, setselectedKeywords] = useState([]);


  useEffect(() => {
    
    return () => {
    }
  }, [selectedKeywords])


  return (
    <div className="App">
      
      <h1 className="Title" > Matteo Campanini - Software Developer </h1>
      <a className="Link" href={"mailto:mcampanini44@gmail.com"}>mcampanini44@gmail.com</a> <br/> <br/>
      <a className="Link" href={"https://github.com/MattCamp44"} target="_blank" >GitHub Profile</a> <br/> <br/>
      <a className="Link" href={"https://ciaosonocampa.itch.io/"} target="_blank" >Itch.io profile</a> <br/> <br/>
      <a className="Link" href={"https://www.linkedin.com/in/matteo-campanini-5ab05b177/"} target="_blank" >Linkedin</a>
      {/* <CheckboxGroupFilterComponent distinctKeywords={distinctKeywords} selectedKeywords={selectedKeywords} setselectedKeywords={setselectedKeywords} /> */}

      <ProjectList projectList={projectList} selectedKeywords={selectedKeywords} />

      

    </div>
  );
}

export default App;
