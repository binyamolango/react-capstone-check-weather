/* eslint-disable camelcase */
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
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import style from './Details.module.css';

const Details = () => {
  const details = useSelector((state) => state.details.details);
  const city = useSelector((state) => state.home.location);
  const dispatch = useDispatch();
  const cityName = city && city[0] && city[0].name;
  const country = city && city[0] && city[0].country;
  const { main, description } = details && details.weather && details.weather[0];
  const base = details && details.base;
  const {
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
  } = details && details.main;
  const sea_level = details && details.main.sea_level ? details.main.sea_level : <div>-</div>;
  const grnd_level = details && details.main.grnd_level ? details.main.grnd_level : <div>-</div>;
  const visibility = details && details.visibility;
  const { speed, deg } = details && details.wind;
  const gust = details && details.wind.gust ? details.wind.gust : <div>-</div>;
  const rain = details && details.rain ? details.rain['1h'] : <div>-</div>;
  const clouds = details && details.clouds && details.clouds.all;
  const sunrise = details && details.sys && details.sys.sunrise;
  const sunset = details && details.sys && details.sys.sunset;

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
            {' '}
            { country }
          </>
        )}
      />
      <Card className={style.detailsPage}>
        <Card.Header
          style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: '600' }}
        >
          Current Weather Condition
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Main</div>
            { main }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Description</div>
            { description }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Base</div>
            { base }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Temp(celsius)</div>
            { temp }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Temp Min(celsius)</div>
            { temp_min }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Temp Max(celsius)</div>
            { temp_max }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Pressure(hPa)</div>
            { pressure }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Humidity(%)</div>
            { humidity }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Sea Level(hPa)</div>
            { sea_level }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Ground Level(hPa)</div>
            { grnd_level }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Visibility(meter)</div>
            { visibility }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Wind Speed(meter/sec)</div>
            { speed }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Wind Direction(degrees)</div>
            { deg }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Wind Gust(meter/sec)</div>
            { gust }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Rain(mm)</div>
            { rain }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Cloudiness(%)</div>
            { clouds }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Sun Rise(unix, UTC)</div>
            { sunrise }
          </ListGroup.Item>
          <ListGroup.Item className={style.row}>
            <div className={style.desc}>Sun Set(unix, UTC)</div>
            { sunset }
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Footer />
    </div>
  );
};

export default Details;
