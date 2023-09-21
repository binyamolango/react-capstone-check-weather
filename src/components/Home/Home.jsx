import { useEffect, useState } from 'react';
import FormResult from '../FormResult/FormResult';
import Search from '../Search/Search';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [])

  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZoneName: 'short',
  });

  return (
    <>
      <Search />
      <h1>Home</h1>
      <div>
        <h3>Current time and date:</h3>
        <p> { formattedDate } </p>
      </div>
      <FormResult />
    </>
  );
};

export default Home;
