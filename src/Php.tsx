function Form() {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        id="text"
        placeholder="Enter your name."
      ></input>
      <br />
      <button 
      className="btn btn-success" 
      id="submit"
      >Save
      </button>
    </div>
  );
}

export default Form;
