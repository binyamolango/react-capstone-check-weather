/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchDetails } from '../../redux/Details/detailsSlice';
import style from './Details.module.css';
import Search from '../Search/Search';

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
    <div className={style.detailsPage}>
      <Search
        brandName={(
          <>
            <Link to="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: 'black', marginRight: '0.5em' }}
              />
            </Link>
            { city && city[0] && city[0].name }
            {', '}
            { city && city[0] && city[0].country }
          </>
)}
      />
      <p>
        {' '}
        { details && details.main && details.main.temp }
        {' '}
        deg,
        {' '}
        { details && details.weather && details.weather[0] && details.weather[0].description }
      </p>
    </div>
  );
};

export default Details;
