// Libraries
import { Button } from "react-bootstrap";

// Styles
import "./SearchForm.styles.css";

const SearchForm = ({ setName, handleFetchCountryData }) => {
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Country Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleFetchCountryData} variant="outline-light">
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
