import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

function Add (   { moviedata , setmoviedata} ){
const [Title, setTitle] = useState('');
const [Photo, setPhoto] = useState('');
const [Description, setDescription] = useState('');
const [Rate, setrate] = useState('');
const newMovie=()=>{ setmoviedata(   [...moviedata, {Title: Title,posterUrl:Photo ,rate:Rate ,description:Description }]   )};
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
    return(

        <div>

    <Button variant="primary" onClick={handleShow}>
Add new movie    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
         <label> Title </label> <input type = 'text' onChange ={(event)=> setTitle(event.target.value)}></input>
         <label> Description </label> <input type = 'text' onChange={(event) =>setDescription(event.target.value)}></input>
         <label> Photo </label> <input type = 'text' onChange={(event) =>setPhoto(event.target.value)}></input>
         <label>Rate</label><input onChange={(event)=>setrate(event.target.value)}value={Rate} ></input>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={newMovie}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

        </div>
    )
}
export default Add ;