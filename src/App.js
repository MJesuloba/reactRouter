import {useState,useEffect} from 'react';
import AddMovie from "./components/AddMovie";
import "./App.css";
import MovieList from './components/MovieList.js';
import Filtring from './components/Filtring.js';
import Description from './components/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Prison Break',trailer:"https://www.youtube.com/embed/AL9zLctDJaU", img:'https://upload.wikimedia.org/wikipedia/en/3/39/Prison-break-the-final-break-dvd.jpg', description:"An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.", posterURL:"www.prisonbreak.com", rating:8.3 },
  { title:'Roman Empire',trailer:"https://www.youtube.com/embed/aOOKeYQs4w0", img:'https://m.media-amazon.com/images/M/MV5BY2UxYmY0NDktYTk2Mi00ZjI4LWJhYTAtYTEzMzYyNGU3ZTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjMyMTk1OQ@@._V1_.jpg', description:"Chronicles some of the most famous leaders of the Roman Civilization.", posterURL:"www.romanempire.com", rating:6.9 },
  { title:'The Expanse',trailer:"https://www.youtube.com/embed/caLji74IIp4", img:'https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00ZDg2LWFiMGItZjNiNjliZjg2MGEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg', description:"In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.", posterURL:"www.theexpanse.com", rating:8.5 },
  { title:'The Walking Dead',trailer:"https://www.youtube.com/embed/R1v0uFms68U", img:'https://m.media-amazon.com/images/M/MV5BNWIyNThjYWQtM2Y5Yi00ZjNhLTgwZmQtMDUwZTkxMDY5MDI0XkEyXkFqcGdeQXVyOTI3NzkwNzQ@._V1_.jpg', description:"Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL:"www.thewalkingdead.com", rating:8.2 },
  { title:'Voltron',trailer:"https://www.youtube.com/embed/NXW1waqRCb0", img:'https://image.api.playstation.com/cdn/UP2941/CUSA09628_00/yFYDIhjvxX5jBxFZgy6EcZvRLimjdeUn.png', description:"Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.", posterURL:"www.voltron.com", rating:8.1 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
