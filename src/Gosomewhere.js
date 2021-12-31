import React from "react";
function Gosomewhere (props){


 const found=   props.moviedata.find(el=>   el.x==props.match.params.x)   
 console.log(props)
    return(
<div>
   <button onClick={()=> props.history.goBack()} > back</button>
</div>
    )
}
export default Gosomewhere ;