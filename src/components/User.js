import './user.css';
import {Link} from 'react-router-dom';

const Info = ({id, name, dept, callback})=>{
    return(
        <div className='user'>
            <h3>Name : {name}</h3>
            <p>ID : {id}</p>
            <p>Dept : {dept}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link>
        </div>
    );
}

export default Info;