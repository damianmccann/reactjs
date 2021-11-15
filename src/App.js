import './App.css';
import {useContext, useState} from 'react';
import ServiceContext from './common/ServiceContext';

function App() {

  const context = useContext(ServiceContext);
  const [searchText, setSearchText] = useState('');
  const [entries, setEntries] = useState([]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  const transferToEntries = (data) => {
    setEntries(data.map(x => Object.values(x).join(' - ')));
  }

  const handleSearch = () => {
    context.apiService.getDataFromSearch(searchText, (data) => {
      transferToEntries(data);
    });
  }

  const handleList = () => {
    context.apiService.getDataFromList((data) => {
      transferToEntries(data);
    });
  }

  return (
    <div>
      <h1>Annuaire</h1>
      <input type="text" value={searchText} onChange={e => handleChange(e)} />
      <button onClick={handleSearch}>Search</button> 
      <button onClick={handleList}>All</button> 
      <div>{entries.map(e => <p>{e}</p>)}</div>
    </div>
  );

}

export default App;
