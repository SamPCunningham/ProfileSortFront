import './App.css';
import axios from 'axios';
import ProfileList from './Components/Profile/ProfileList';
import { useState, useEffect } from 'react';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [sortType, setSortType] = useState('Unsorted');
  
  const url = 'http://localhost:4000/profiles';

  const getProfiles = async () => {
    axios.get(url)
      .then(response => setProfiles(response.data))
      .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getProfiles();
  }, []);

  const alphaSort = () => {
    if (sortType === "Unsorted") {
      getProfiles();
    }
    if (sortType === "A - Z") {
      profiles.sort(function(a,b) {
        if (a.name < b.name
        ) return 1;
        if (a.name > b.name
        ) return -1;
        return 0
      });
    }
    if (sortType === "Z - A") {
      profiles.sort(function(a,b) {
        if (a.name < b.name
        ) return -1;
        if (a.name > b.name
        ) return 1;
        return 0
      });
      
    } 
  }

  useEffect(() => {
    alphaSort();
  }, [sortType]);
  

  return (
    <div className="App">
      <ProfileList profiles={profiles}/>
      <select onChange={(e) => setSortType(e.target.value)}>
            <option>Unsorted</option>
            <option>A - Z</option>
            <option>Z - A</option>
      </select>
    </div>
  );

  
}


export default App;
