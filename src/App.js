import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useFetch } from './components/collector/useFetch';
import UserList from './components/UserList';
import NftList from './components/collector/NftList';
import NftDetails from './components/collector/NftDetails';

function App() {

  const url_x = `http://localhost:8000/api/collector/demo`;
  const [userList, setUserList] = useState([]);
  useFetch(url_x, setUserList);

  const url = `http://localhost:8000/api/collector/home`;
  const [ItemList, setItemList] = useState([]);
  useFetch(url, setItemList);

/*   const url = `http://localhost:8000/api/details/${id}`;
  const [nftDetail, setnftDetail] = useState([]);
  useFetch(url, setnftDetail); */

  return (
    <Router>
      <Route exact path='/'>
          <h1>_Welcome Home!</h1>
        </Route>

      <Route path='/info'>
          <div>
            <UserList userList={userList}/>
          </div>
      </Route>
      <Route path='/collectorHome'>
          <div>
            <NftList itemList={ItemList}/>
          </div>
      </Route>

      <Route path='/nftDetails/:id'>
          <div>
            <NftDetails itemList={ItemList}/>
          </div>
      </Route>
      
      <Route path='/collector-dashboard'>
          <div>
            <h2>DashBoard</h2>
          </div>
      </Route>
      <Route path='/collector-profile'>
          <div>
            <h2>Collector Profile</h2>
          </div>
      </Route>
      <Route path='/collector-wallet'>
          <div>
            <h2>Wallet</h2>
          </div>
      </Route>
      <Route path='/logout'>
          <div>
            <h2>Logged Out (This is a login page)</h2>
          </div>
      </Route>
    </Router>
  );
}

export default App;