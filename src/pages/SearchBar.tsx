import {useState} from 'react';
function SearchBar({ onSearch }){
    const [username, setUsername] = useState("");
      const handleSearch = () => {
      onSearch(username);
     };
    return(
        <div>
            <input type="text" placeholder="Search GitHub users..." 
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
            />
             <button onClick={handleSearch}>
               Search
             </button>
            <p>Searching for: {username}</p>
        </div>
    );
}
export default SearchBar;