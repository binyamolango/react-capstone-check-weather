import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchLocation } from '../../redux/Home/homeSlice';
import { fetchDetails } from '../../redux/Details/detailsSlice';
import blueBG from '../../assets/blueBackground.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
  }, [])

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
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={blueBG} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text>{ formattedDate }</Card.Text>
          <Card.Text>
            <h3>
              {details && details.main && details.main.temp}{' '}Celsius
            </h3>
          </Card.Text>
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
            <p>
              lon:{' '}
              {city && city[0] && city[0].lon}
              , lat:{' '}
              {city && city[0] && city[0].lat}
            </p>
          </Card.Text>
          <Card.Text>
            <div style={{textAlign: 'center'}}>
              <Link to="/Details">
                <Button type="button" variant="secondary">See Details</Button>{' '}
              </Link>
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      {
        <Container>
          <Row>
            <Col>
              <Card border="dark">
                <Card.Header>Weather Condition</Card.Header>
                <Card.Body>
                  <Card.Title>{details && details.weather && details.weather[0] && details.weather[0].description}</Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card border="dark">
                <Card.Header>Temp{'(Celsius)'}</Card.Header>
                <Card.Body>
                  <Card.Title>{details && details.main && details.main.temp}</Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card border="dark">
                <Card.Header>Pressure{'(hPa)'}</Card.Header>
                <Card.Body>
                  <Card.Title>{details && details.main && details.main.pressure}</Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card border="dark">
                <Card.Header>Humidity{'(%)'}</Card.Header>
                <Card.Body>
                  <Card.Title>{details && details.main && details.main.humidity}</Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
};

export default FormResult;
