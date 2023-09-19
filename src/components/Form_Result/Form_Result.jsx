import { Link } from 'react-router-dom';
import { fetchLocation } from '../../redux/Home/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Form_Result = () => {
  const location = useSelector((state) => state.form.location);
  const city = useSelector((state) => state.home.location[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocation(location));
  }, [dispatch])

  return (
    <>
      <h1>{ city.name }</h1>
      {/* <p> longitude: { city.lon }, latitude: { city.lat } </p> */}
      <Link to="/Details"><button>See Details</button></Link>
    </>
  );
}
 
export default Form_Result;