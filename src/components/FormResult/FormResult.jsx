import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import blueBG from '../../assets/blueBackground.png';
import { fetchDetails } from '../../redux/Details/detailsSlice';
import { fetchLocation } from '../../redux/Home/homeSlice';
import style from './FormResult.module.css';

const FormResult = () => {
  const location = useSelector((state) => state.search.location);
  const city = useSelector((state) => state.home.location);
  const details = useSelector((state) => state.details.details);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    // year: 'numeric',
    // month: 'short',
    // day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZoneName: 'short',
  });

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
    <div style={{ background: 'linear-gradient(to right, #418bab, #4380cb)' }}>
      <Card className="bg-light text-white">
        <Card.Img src={blueBG} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text>{ formattedDate }</Card.Text>
          <h3>
            <Card.Text>
              {details && details.main && details.main.temp}
              {' '}
              Celsius
            </Card.Text>
          </h3>
          <Card.Title>
            <h1>
              {city && city[0] && city[0].name}
              ,
              {' '}
              {city && city[0] && city[0].state && city[0].state}
              ,
              {' '}
              {city && city[0] && city[0].country && city[0].country}
              {' '}
            </h1>
          </Card.Title>
          <Card.Text>
            lon:
            {' '}
            {city && city[0] && city[0].lon}
            , lat:
            {' '}
            {city && city[0] && city[0].lat}
          </Card.Text>
          <Card.Text>
            <div>
              <Link to="/Details">
                <Button type="button" variant="primary">See Details</Button>
              </Link>
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Container fluid="true">
        <Row>
          <Col>
            <Card className={style.card} style={{ background: '#418bab' }}>
              <Card.Header>Weather Condition</Card.Header>
              <Card.Body>
                <Card.Title>
                  {
                    details && details.weather
                    && details.weather[0]
                    && details.weather[0].description
                  }
                </Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card className={style.card} style={{ background: '#4380cb' }}>
              <Card.Header>
                Temp
                (Celsius)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.main && details.main.temp}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className={style.card} style={{ background: '#4380cb4d' }}>
              <Card.Header>
                Pressure
                (hPa)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.main && details.main.pressure}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card className={style.card} style={{ background: '#418bab4d' }}>
              <Card.Header>
                Humidity
                (%)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.main && details.main.humidity}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className={style.card} style={{ background: '#418bab' }}>
              <Card.Header>
                Wind Speed
                (m/s)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.wind && details.wind.speed}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card className={style.card} style={{ background: '#4380cb' }}>
              <Card.Header>
                Cloudiness
                (%)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.clouds && details.clouds.all}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className={style.card} style={{ background: '#4380cb' }}>
              <Card.Header>
                Rain Volume
                (mm)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.rain ? details.rain['1h'] : <>-</> }</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card className={style.card} style={{ background: '#418bab4d' }}>
              <Card.Header>
                Wind Direction
                (deg)
              </Card.Header>
              <Card.Body>
                <Card.Title>{details && details.wind && details.wind.deg}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default FormResult;
