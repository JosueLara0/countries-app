// Styles
import "./FetchError.styles.css";

const FetchError = ({message}) => {
    return (
        <div className="fetch-error">
            <span>{message}</span>
            <p>
                Try to write the official name of the country in english.
                For example: United Kingdom instead of England.
            </p>
        </div>
    );
};

export default FetchError;
