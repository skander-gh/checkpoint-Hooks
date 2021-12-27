import {Card,Button} from 'react-bootstrap' ;
import ReactStars from "react-rating-stars-component";
function MovieCard({el}){
    return(
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.Title}</Card.Title>
    <Card.Text >{el.Description}</Card.Text>
    <ReactStars
    count={5}
    value={el.rate}></ReactStars>
    <Button variant="primary">Go somewhere </Button>
  </Card.Body>
</Card>
    

        </div>
    )}
    export default MovieCard;