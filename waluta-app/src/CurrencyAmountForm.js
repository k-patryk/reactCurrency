const CurrencyAmountForm = (props) => {
    return (
      <div className="currencyAmountForm">
        <form>
          <label htmlFor="currencyAmountForm">Liczba: </label>
          <input
            type="text"
            id="currencyAmountForm"
            onChange={(e) => props.setCurrentAmount(e.target.value)}
          />
        </form>
      </div>
    );
  };
  
  export default CurrencyAmountForm;
  