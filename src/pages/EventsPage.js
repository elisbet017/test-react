import { useEffect, useState } from 'react';
import { fetchEvents } from '../servises/eventsAPI';
import { Link, Outlet, useLocation } from 'react-router-dom';

const EventsPage = () => {
  const location = useLocation();
  console.log(location);

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents()
      .then(res => setEvents(res))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <section>
      <ul>
        {events.length !== 0 &&
          events.map(({ id, name }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`${id}`}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </section>
  );
};

export default EventsPage;
