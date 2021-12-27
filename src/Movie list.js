import MovieCard from "./Movie card";

function MovieList({moviedata,search, rate,setmoviedata }){

    return(
        <div>

{moviedata.filter(el=>el.Title.toLowerCase().includes(search.toLowerCase()) && el.rate>=rate).map ((el=><MovieCard el = {el} moviedata={moviedata} setmoviedata={setmoviedata}></MovieCard>))}


        </div>
    )
}
export default MovieList ;