import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/form/formSlice";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setLocation(inputValue));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="location">Enter city and country code: </label>
        <input type="text" id="location" placeholder="london,GB" required onChange={changeHandler} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Form;
