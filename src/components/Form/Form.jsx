import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setLocation } from '../../redux/form/formSlice';

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
        <label htmlFor="location">
          Enter city and country code:
          <input
            type="text"
            id="location"
            placeholder="london,GB"
            required
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Form;
