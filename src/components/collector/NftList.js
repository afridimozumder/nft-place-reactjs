import Nft from './Nft';
import React from 'react';
import './css/home.css';
import Navbar from './Navber';
import { useParams } from 'react-router';
import { useLocation } from "react-router-dom";

const NftList = ({itemList})=>{
    const location = useLocation();
    return(
        <div class='body'>

        <Navbar key={location.state}/>
        <h2>{console.log(location.state)}</h2>
        <div class="grid-cont">
                {
                    itemList.map((u)=>{
                        return <Nft key={u.id} {...u}/>
                    })
                }
                </div>

        </div>
    );
}

export default NftList;