import {Button} from 'react-bootstrap';

const SearchForm = ({setName, handleFetchCountryData}) => {
    return (
        <div style={{margin: "2rem", display:'flex'}}>
            <input
                type="text"
                placeholder="Country Name"
                onChange={(e) => setName(e.target.value)}
                style={{backgroundColor:"rgba(0, 0, 0, 0.3)", color:"white", borderColor:"white", marginRight:"1rem"}}

            />
            <Button onClick={handleFetchCountryData} variant="outline-light">Search</Button>
        </div>
    );
};

export default SearchForm;
