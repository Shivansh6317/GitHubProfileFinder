
import SearchBar from './SearchBar';
function Home(){
    const handleSearch = (username) => {
    console.log("Searching for:", username);
    };
    return(
        <div>
            <h1>GitHub Profile Finder</h1>
            <p>Search for GitHub users and view their profiles.</p>
            <SearchBar onSearch={handleSearch}/>
        </div>
    )
}
export default Home;