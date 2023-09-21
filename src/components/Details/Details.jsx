/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { fetchDetails } from '../../redux/Details/detailsSlice';
import style from './Details.module.css';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

const Details = () => {
  const details = useSelector((state) => state.details.details);
  const city = useSelector((state) => state.home.location);
  const dispatch = useDispatch();
  const cityName = city && city[0] && city[0].name;
  const country = city && city[0] && city[0].country;
  // const description = details && details.weather && details.weather.details;
  // const temp = details && details.main && details.temp;
  // const feelsLike = details && details.main && details.feels_like;
  // const pressure = details && details.main && details.pressure;

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
    <div>
      <Search
        brandName={(
          <>
            <Link to="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: 'black', marginRight: '0.5em' }}
              />
            </Link>
            { cityName }
            {', '}
            { country }
          </>
)}
      />
      <div className={style.detailsPage}>
        { details.weather && details.weather.main }
        <Card style={{ width: '100%' }}>
          <Card.Header style={{ textAlign: 'center' }}>
            Detailed Current Weather Condition
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className={style.row}>
              {/* <p>Main</p> */}
            </ListGroup.Item>
            {/* <ListGroup.Item className={style.row}>
              <p>Description</p>
              <p>{ description }</p>
            </ListGroup.Item>
            <ListGroup.Item className={style.row}>
              <p>Temp</p>
              <p>{ temp }</p>
            </ListGroup.Item>
            <ListGroup.Item className={style.row}>
              <p>Feels Like</p>
              <p>{ feelsLike }</p>
            </ListGroup.Item>
            <ListGroup.Item className={style.row}>
              <p>Pressure</p>
              <p>{ pressure }</p>
            </ListGroup.Item> */}
          </ListGroup>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
