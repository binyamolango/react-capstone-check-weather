import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetails } from "../../redux/details/detailsSlice";

const Details = () => {
  const city = useSelector((state) => state.home.location);
  const details = useSelector((state) => state.details.details);
  const lat = 0;
  const lon = 0;
  if (city.length) {
    lat = city[0].lat;
    lon = city[0].lon;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(lat, lon));
  }, [dispatch, location]);

  return (
    <>
      <h1> { city[0].name } </h1>
      <p> { details.weather.main } </p>
      <Link to="/"><button>Go Back</button></Link>
    </>
  );
}
 
export default Details;
