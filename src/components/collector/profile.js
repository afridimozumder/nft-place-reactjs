import { useFetch } from './useFetch';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Navbar from './Navber';
import './css/profile.css';

const Profile=()=>{

    const url = `http://localhost:8000/api/profile/${sessionStorage.getItem("userid")}`;
    const [user, setUser] = useState([]);
    useFetch(url, setUser);
    
return(
    <>
    <Navbar/>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <div class="card">

		<img src={`/image/${user.profileImage}`} alt="John" class="profile-img"/>
		<h1>{user.name}</h1>
		<h3 class="title">{user.usertype}</h3>
		<div class="info"><i class="fas fa-envelope-open-text"></i>&nbsp;&nbsp;{user.email}</div>
		<div class="info"><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;{user.phone}</div>
		<div class="info"><i class="fas fa-birthday-cake"></i>&nbsp;&nbsp;{user.dob}</div>
		<div class="info"><i class="fas fa-venus-mars"></i>&nbsp;&nbsp;{user.gender}</div>
		<div class="info"><i class="fas fa-map-marked"></i>&nbsp;&nbsp;{user.address}</div>
		<div class="info"><i class="fas fa-user-edit"></i><Link to="/collector-profile-update">o</Link>Update</div>
	</div>
    </>
);
}

export default Profile;