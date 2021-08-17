import { useParams } from "react-router";
import { useFetch } from './useFetch';
import {useState, useEffect} from 'react';

import './css/details.css';
import Navbar from './Navber';

const NftDetails = ({itemList}) =>{
    const {id:eid} = useParams();
    
    const url = `http://localhost:8000/api/details/${eid}`;
    const [userList, setUserList] = useState([]);
    useFetch(url, setUserList);
    
/*     const deleteUser = (id)=>{
        const List = userList.filter((user)=>user.id !== id);
        setUserList(List);
      } */


    return(
        <div class='body'>
            <div class="grid-container">
                <div class="Navbar"><Navbar/></div>
                <div class="left">Menu</div>
                
                <div class="main">
                    <div class='photo'>
                        <img src={`/image/${userList.image}`}/>
                    </div>

                    <div class='details'>
                        <h3>
                            {userList.name}

                        </h3>
                    </div>

                </div>  
                
                <div class="rignt">Right</div>            
                <div class="footer">Footer</div>
            </div>
        </div>
    );
}

export default NftDetails;