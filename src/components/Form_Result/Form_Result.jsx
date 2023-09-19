import { Link } from 'react-router-dom';
import { fetchLocation } from '../../redux/Home/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Form_Result = () => {
  const location = useSelector((state) => state.form.location);
  const city = useSelector((state) => state.home.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocation(location));
  }, [dispatch, location])

  return (
    <>
      { city.length === 0 ? null : (
        <>
          <h1> {city[0].name}, { city[0].state && city[0].state }, { city[0].country && city[0].country } </h1>
          <p> longitude: {city[0].lon}, latitude: {city[0].lat} </p>
        </>
      ) }
      <Link to="/Details"><button>See Details</button></Link>
    </>
  );
}
 
export default Form_Result;