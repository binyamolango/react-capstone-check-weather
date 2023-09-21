import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchLocation } from '../../redux/Home/homeSlice';
import { fetchDetails } from '../../redux/Details/detailsSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

const FormResult = () => {
  const location = useSelector((state) => state.form.location);
  const city = useSelector((state) => state.home.location);
  const details = useSelector((state) => state.details.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocation(location));
  }, [dispatch, location]);

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
      { city.length === 0 ? null : (
        <div>
          <h1>
            {' '}
            {city[0].name}
            ,
            {' '}
            { city[0].state && city[0].state }
            ,
            {' '}
            { city[0].country && city[0].country }
            {' '}
          </h1>
          <p>
            lon:{' '}
            {city[0].lon}
            , lat:{' '}
            {city[0].lat}
          </p>
          <div>
            <p>
              { details && details.weather && details.weather[0] && details.weather[0].description }
            </p>
            <p>
              Weather Condition
            </p>
          </div>
          <div>
            <p>
              { details && details.main && details.main.temp }
              {' '}
            </p>
            <p>
              Temp{'(deg)'}
            </p>
          </div>
          <div>
            <p>
              { details && details.main && details.main.pressure }
              {' '}
            </p>
            <p>
              Pressure{'(hPa)'}
            </p>
          </div>
          <div>
            <p>
              { details && details.main && details.main.humidity }
              {' '}
            </p>
            <p>
              Temp{'(%)'}
            </p>
          </div>
        </div>
      ) }
      <Link to="/Details"><button type="button">See Details</button></Link>
    </>
  );
};

export default FormResult;
