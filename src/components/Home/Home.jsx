import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import FormResult from '../FormResult/FormResult';

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
      <h1>Home</h1>
      <div>
        <h3>Current time and date:</h3>
        <p> { formattedDate } </p>
      </div>
      <FormResult />
      <Form />
    </>
  );
};

export default Home;
