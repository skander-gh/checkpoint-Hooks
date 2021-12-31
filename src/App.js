import './App.css';
import MovieList from './Movie list';
import Nave from './Navbar';
import Add from './Add';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Gosomewhere from './Gosomewhere';


function App(){
  const [moviedata,setmoviedata]  = useState([
   {
      id: 4,
      Title: "Prison Break",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
      rate: 4.2,
      Description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
    },
    {
      id: 7,
      Title: "Lethal Weapon",
      posterUrl:"https://vignette.wikia.nocookie.net/lethalweapon/images/2/2e/Lethal_Weapon_TV_series_poster.jpg/revision/latest/scale-to-width-down/340?cb=20160819024657",
      rate: 3.8,
      Description:"A slightly unhinged cop is partnered with a veteran detective trying to maintain a low stress level in his life.",
    },
    
    
    {
      id: 11,
      Title: "The Walking deads",
      posterUrl: "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
      rate: 4.1,
      Description:
"Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
     
    },
    {
      id:12,
      Title: "Vis A Vis",
      posterUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
      rate: 2,
      Description: "Locked Up, originally titled in Spanish as Vis A Vis , is a Spanish serial drama television series produced by Globomedia, initially for Spanish Network Antena 3 and later on for Fox Spain. It premiered on 20 April 2015.[2] The series begins by focusing on a young woman who is sent to prison and then goes on to depict the image of prison and law enforcement systems.",
      
    },
    
    
    {
      id: 15,
      Title: "SHERLOCK",
      posterUrl:"https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
      rate: 5,
      Description:"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    },
  ])
  const [search , setsearch] = useState('')
  const [rate, setrate] = useState(0)
  return (
    <div className="App">
    <Nave setsearch={setsearch} rate={rate} setrate={setrate}> </Nave>
    <Add  moviedata={moviedata} setmoviedata={setmoviedata} > </Add>
  <Route  path='/' exact  >   <MovieList   moviedata={moviedata} search={search} rate={rate} setmoviedata={setmoviedata} > </MovieList> </Route> 
    
    <Route path='/Go/:x'  render={(props)=> <Gosomewhere moviedata={moviedata} {...props} >  </Gosomewhere>} />  
  
   </div>
  );
}

export default App ;