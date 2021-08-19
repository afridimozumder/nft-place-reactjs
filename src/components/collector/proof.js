import { useParams } from "react-router";
import { useFetch } from './useFetch';
import {useState, useEffect, Fragment} from 'react';
import { Link } from "react-router-dom";

import './css/proof.css';
import Navbar from './Navber';

const ProofAuth = ()=>{
    const {id:eid} = useParams();

    const url1 = `http://localhost:8000/api/proof-1/${eid}`;
    const [nftBlock, setNftBlock] = useState([]);
    useFetch(url1, setNftBlock);

    const url2 = `http://localhost:8000/api/proof-2/${eid}`;
    const [nftDetails, setNftDetails] = useState([]);
    useFetch(url2, setNftDetails);

    return(
            <>
            <body>
                <Navbar/>

                <div class="g-container">
                    <div class="item2">{/* Menu */}</div>

                    <div class="item3">
                        
                        <h2>Proof of Authenticity</h2>
                            <p>MakersPlace verifies the uniqueness and authenticity of every digital creation</p>
                        <h1 class='title'>
                            {nftDetails.name}
                        </h1>
                        <p class='blockDetails'>
                            Creator: {nftDetails.creator} <br/>
                            Edition: {nftDetails.edition} <br/>
                            Created: {nftDetails.creation_date} <br/>
                        </p>
                        <h1>
                            <i class="fab fa-ethereum">&nbsp; Ethereum</i>
                        </h1>
                        <p class='blockDetails'>
                            Token ID: <b>{nftBlock.token}</b> <br/>
                            Contract ID: <b>{nftBlock.contract_id}</b> <br/>
                            Creator's Blockchain ID: <b>{nftBlock.creators_block}</b> 
                        </p>
                        <h4><a href="#">View Blockchain Details</a></h4><br/>

                        <div>
                            <h2>Ownership History</h2>
                        </div>
                        <table class='table'border='1'width='50%'>
                            <tr>
                                <th>Event</th>
                                <th>Owner</th>
                                <th>Date</th>
                            </tr>
                            <tr>
                                <td>Sold</td>
                                <td>Smith</td>
                                <td>22 May 2021</td>
                            </tr>
                            <tr>
                                <td>Created</td>
                                <td>Jackson</td>
                                <td>05 January 2021</td>
                            </tr>
                        </table>

                        <div>
                            <h2>Editions</h2>
                        
                            <table class='table'border='1'width='50%'>
                            <tr>
                                <th>Edition</th>
                                <th>Owner</th>
                                <th>Date Issued</th>
                            </tr>
                            <tr>
                                <td>#2</td>
                                <td>Jhon</td>
                                <td>22 May 2021</td>
                            </tr>
                            <tr>
                                <td>#1</td>
                                <td>Jackson</td>
                                <td>05 March 2021</td>
                            </tr>
                            </table>
                        </div>

                    </div>
                                
                    <div class="item4">
                        <h2>{nftDetails.name}</h2>
                        <p>{/* {nftDetails.desc} */}</p><br/>
                        <img src={`/image/${nftDetails.image}`} alt="art01" width="500px"></img>
                    </div>

                    <div class="item5">Footer</div>

                </div> 
            </body>
            </>
    );


}

export default ProofAuth;