const SetCurrencyForm = (props) => {
    return (
      <div className="setCurrencyForm">
        <form>
          <label htmlFor="setCurrencyForm">Waluta: </label>
          <input
            type="text"
            id="setCurrencyForm"
            onChange={(e) => props.setCurrencyForm(e.target.value)}
          />
        </form>
      </div>
    );
  };
  
  export default SetCurrencyForm;
  