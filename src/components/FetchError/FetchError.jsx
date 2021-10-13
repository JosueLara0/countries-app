const FetchError = ({message}) => {
    return (
        <div style={{display:'flex', justifyContent:"center", flexWrap:"wrap", alignItems:"center"}}>
            <p style={{color:"red", fontSize:"larger"}}>{message}</p>
            <p style={{color:"white", fontSize:"large", backgroundColor: "rgba(0,0,0,0.7) " }}>
                Try to write the official name of the country in english.
                For example: United Kingdom instead of England.
            </p>
        </div>
    );
};

export default FetchError;
