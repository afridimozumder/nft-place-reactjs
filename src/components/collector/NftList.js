import Nft from './Nft';
import React from 'react';
import './css/home.css';
import Navbar from './Navber';

const NftList = ({itemList})=>{

    return(
        <div class='body'>

        <Navbar/>
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