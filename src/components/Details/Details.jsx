import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetails } from '../../redux/Details/detailsSlice';

const Details = () => {
  const details = useSelector((state) => state.details.details);
  const city = useSelector((state) => state.home.location);
  const dispatch = useDispatch();

  let lat = 0;
  let lon = 0;
  if (city.length > 0) {
    lat = city[0].lat;
    lon = city[0].lon;
  }

  useEffect(() => {
    dispatch(fetchDetails({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <>
      <p>
        {' '}
        { details.main && details.main.temp }
        {' '}
      </p>
      <Link to="/"><button type='button'>Go Back</button></Link>
    </>
  );
};

export default Details;
